import { useState, useEffect } from 'react';
import Papa from 'papaparse';

// The published Google Sheet CSV URL
export const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQcDDwjdGQ_KPZtzQ9Afh9fDmYzi_nGmWsj2JmvVqaEUpRxxvzxjQcw_OY31agF7aTjBgaJCKAHG1a-/pub?gid=0&single=true&output=csv';

export function useSheetData(caseStudyId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then(response => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.text();
      })
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (results) => {
            // results.data is an array of { id, key, value }
            const studyRows = results.data.filter(r => r.id === caseStudyId);
            
            if (studyRows.length > 0) {
              const studyData = {};
              studyRows.forEach(row => {
                if (row.key) {
                  studyData[row.key] = row.value;
                }
              });
              setData(studyData);
            } else {
              setError(new Error(`Case study ${caseStudyId} not found in sheet`));
            }
            setLoading(false);
          },
          error: (err) => {
            console.error("PapaParse error:", err);
            setError(err);
            setLoading(false);
          }
        });
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err);
        setLoading(false);
      });
  }, [caseStudyId]);

  return { data, loading, error };
}

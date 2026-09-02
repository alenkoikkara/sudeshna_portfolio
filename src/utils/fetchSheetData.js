import Papa from 'papaparse';

/**
 * Fetches and parses a public Google Sheet CSV URL into a JSON array.
 * @param {string} csvUrl - The public URL of the published Google Sheet CSV
 * @returns {Promise<Array<Object>>} A promise that resolves to the parsed JSON data
 */
export async function fetchSheetData(csvUrl) {
  return new Promise((resolve, reject) => {
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (error) => {
        console.error("Error fetching/parsing CSV:", error);
        reject(error);
      }
    });
  });
}

/**
 * Normalizes the flat CSV rows into a structured object based on the case study ID.
 * Expects the CSV to have columns like:
 * CaseStudyId, Key, Value
 * e.g.,
 * returnloop, projectName, ReturnLoop
 * returnloop, meta_role, Lead UX Designer
 * returnloop, section_01_title, About Project
 * returnloop, section_01_content, "Returning something online should take..."
 */
export function processCaseStudyData(csvData, targetId) {
  const filteredData = csvData.filter(row => row.CaseStudyId === targetId);
  
  if (filteredData.length === 0) return null;

  // Transform the key-value rows into a single nested object
  const result = {
    sections: [],
    metaStrip: []
  };

  filteredData.forEach(row => {
    const { Key, Value } = row;
    if (!Key || !Value) return;

    if (Key.startsWith('section_')) {
      // e.g. section_01_title -> id: 01, title: ...
      const parts = Key.split('_');
      const secId = parts[1];
      const field = parts[2]; // title or content

      let section = result.sections.find(s => s.id === secId);
      if (!section) {
        section = { id: secId };
        result.sections.push(section);
      }
      section[field] = Value;
    } else if (Key.startsWith('meta_')) {
      // e.g. meta_role -> label: Role, value: ...
      const label = Key.replace('meta_', '').replace(/^\w/, c => c.toUpperCase());
      result.metaStrip.push({ label, value: Value });
    } else {
      result[Key] = Value;
    }
  });

  return result;
}

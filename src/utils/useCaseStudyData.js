import caseStudies from '../data/caseStudies.json';

export function useCaseStudyData(caseStudyId) {
  return {
    data: caseStudies[caseStudyId] || {},
    loading: false,
    error: null
  };
}

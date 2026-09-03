import caseStudies from '../data/caseStudies.json';

export function useCaseStudyData(caseStudyId) {
  return caseStudies[caseStudyId] || {};
}

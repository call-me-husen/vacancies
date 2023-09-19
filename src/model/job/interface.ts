export interface IJob {
  jobVacancyCode: string;
  positionName: string;
  corporateId: string;
  corporateName: string;
  status: string;
  descriptions: string;
  corporateLogo: string;
  applied: boolean;
  workModel?: { id: string; text: string };
  salaryFrom: number;
  salaryTo: number;
  postedDate: string;
}

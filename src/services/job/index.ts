import { jobs } from "@/__mocks__/job.json";

export async function fetchJob() {
  // caching
  const tempJob = sessionStorage.getItem("temp-job");
  if (tempJob) return JSON.parse(tempJob);
  return jobs;
}

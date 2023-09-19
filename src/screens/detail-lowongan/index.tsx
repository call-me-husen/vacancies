import Layout from "@/components/common/Layout";
import JobDetail from "@/components/job/job-detail";
import { jobs } from "@/__mocks__/job.json";
import { useRouter } from "next/router";

export default function DetailLowonganScreen({
  id,
}: {
  id: string;
}): JSX.Element {
  const router = useRouter();
  const job = jobs.find((item) => item.jobVacancyCode === id);
  if (!job) return <></>;
  return (
    <Layout title="Detail Lowongan">
      <JobDetail data={job} />
    </Layout>
  );
}

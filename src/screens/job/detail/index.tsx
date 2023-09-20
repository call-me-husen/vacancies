import EmptyState from "@/components/common/EmptyState";
import Layout from "@/components/common/Layout";
import JobDetail from "@/components/job/job-detail";
import { useStoreState } from "@/redux/store";
import { useEffect } from "react";

export default function JobDetailScreen({ id }: { id: string }): JSX.Element {
  const { data } = useStoreState((state) => state.job);
  const job = data.find((item) => item.jobVacancyCode === id);

  return (
    <Layout title="Detail Lowongan">
      {job ? <JobDetail data={job} /> : <EmptyState title="Not Found" />}
    </Layout>
  );
}

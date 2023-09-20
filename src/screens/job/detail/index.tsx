import EmptyState from "@/components/common/EmptyState";
import Layout from "@/components/common/Layout";
import JobDetail from "@/components/job/job-detail";
import { submitJob, withdrawJob } from "@/redux/reducers/job";
import { useStoreDispatch, useStoreState } from "@/redux/store";

export default function JobDetailScreen({ id }: { id: string }): JSX.Element {
  const { data } = useStoreState((state) => state.job);
  const job = data.find((item) => item.jobVacancyCode === id);

  const dispatch = useStoreDispatch();
  const onProcessJob = () => {
    if (job) {
      if (job.applied) {
        dispatch(withdrawJob(id));
      } else {
        dispatch(submitJob(id));
      }
    }
  };
  return (
    <Layout title="Detail Lowongan">
      {job ? (
        <JobDetail data={job} onProcess={onProcessJob} />
      ) : (
        <EmptyState title="Not Found" />
      )}
    </Layout>
  );
}

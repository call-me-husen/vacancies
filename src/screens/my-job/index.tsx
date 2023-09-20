import EmptyState from "@/components/common/EmptyState";
import Layout from "@/components/common/Layout";
import JobCard from "@/components/job/job-card";
import { withdrawJob } from "@/redux/reducers/job";
import { useStoreDispatch, useStoreState } from "@/redux/store";
import { Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function MyJobScreen(): JSX.Element {
  const { data } = useStoreState((state) => state.job);
  const { push } = useRouter();

  const dispatch = useStoreDispatch();
  const onOpenDetail = (id: string) => {
    push(`/job/${id}`);
  };

  const onWithdraw = (id: string) => {
    dispatch(withdrawJob(id));
  };

  const myJobs = data.filter((job) => job.applied);
  return (
    <Layout title="Lamaran Terkirim">
      {myJobs.length ? (
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={4}
        >
          {myJobs.map((job) => (
            <JobCard
              data={job}
              key={job.jobVacancyCode}
              onOpenDetail={onOpenDetail}
              onWithdraw={onWithdraw}
              withdrawable
            />
          ))}
        </Grid>
      ) : (
        <EmptyState title="Belum Ada Lamaran Terkirim" />
      )}
    </Layout>
  );
}

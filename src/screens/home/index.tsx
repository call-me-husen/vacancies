import Layout from "@/components/common/Layout";
import JobCard from "@/components/job/job-card";
import { Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useStoreDispatch, useStoreState } from "@/redux/store";
import { useEffect } from "react";
import { fetchJob } from "@/services/job";
import { setData } from "@/redux/reducers/job";

export default function HomeScreen(): JSX.Element {
  const { push } = useRouter();
  const onOpenDetail = (id: string) => {
    push(`/job/${id}`);
  };

  const onSubmitJob = (id: string) => {
    alert(id);
  };

  const { data } = useStoreState((state) => state.job);

  return (
    <Layout title="Lowongan Pekerjaan">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "1fr 1fr",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={4}
      >
        {data.map((job) => (
          <JobCard
            data={job}
            key={job.jobVacancyCode}
            onOpenDetail={onOpenDetail}
            onSubmitJob={onSubmitJob}
          />
        ))}
      </Grid>
    </Layout>
  );
}

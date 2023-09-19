import Layout from "@/components/common/Layout";
import JobCard from "@/components/job/job-card";
import styles from "@/screens/home/style.module.css";
import { jobs } from "@/__mocks__/job.json";

export default function HomeScreen(): JSX.Element {
  return (
    <Layout title="Lowongan Pekerjaan">
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {jobs.map((job) => (
            <JobCard data={job} key={job.jobVacancyCode} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

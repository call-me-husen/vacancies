import Button from "@/components/common/Button";
import styles from "@/components/job/job-card/style.module.css";
import { IJob } from "@/model/job/interface";
import Image from "next/image";

interface IJobCardProps {
  data: IJob;
}
export default function JobCard({ data }: IJobCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <Image
        width={100}
        height={100}
        alt={data.corporateName}
        src={data.corporateLogo}
      />
      <div className={styles["info-wrapper"]}>
        <h3 className={styles.corporate}>{data.corporateName}</h3>
        <h2 className={styles.job}>{data.positionName}</h2>
      </div>
      <div className={styles["info-wrapper"]}>
        <p>Gaji: {data.salaryTo}</p>
        <p>Status: {data.status}</p>
      </div>
      <div className={styles["info-wrapper"]}>
        <p className={styles["posted-date"]}>{data.postedDate}</p>
      </div>
      <a href={`/detail-lowongan-pekerjaan/${data.jobVacancyCode}`}>
        Baca Detail
      </a>
      <Button onClick={() => null}>Kirim Lamaran</Button>
    </div>
  );
}

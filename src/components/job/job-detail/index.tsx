import { IJob } from "@/model/job/interface";
import styles from "@/components/job/job-detail/style.module.css";
import Image from "next/image";
import Button from "@/components/common/Button";

interface IJobDetailProps {
  data: IJob;
}

export default function JobDetail({ data }: IJobDetailProps): JSX.Element {
  return (
    <div className={styles.container}>
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
      <div
        dangerouslySetInnerHTML={{
          __html: data.descriptions,
        }}
      ></div>

      <Button onClick={() => null}>Kirim Lamaran</Button>
    </div>
  );
}

import Image from "next/image";
import styles from "@/components/common/Header/style.module.css";
import Logo from "@/assets/images/logo/logo.png";

export default function Header(): JSX.Element {
  return (
    <div className={styles.navbar}>
      <Image src={Logo} alt="logo" height={50} />
      <ul>
        <li>
          <a href="/buat-lowongan-pekerjaan">Buat Lowongan</a>
        </li>
        <li>
          <a href="/lamaran-terkirim">Terkirim</a>
        </li>
      </ul>
    </div>
  );
}

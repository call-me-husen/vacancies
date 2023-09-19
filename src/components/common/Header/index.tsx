import Image from "next/image";
import styles from "@/components/common/Header/style.module.css";
import Logo from "@/assets/images/logo/logo.png";
import {
  Hide,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
} from "@chakra-ui/react";
import { AddIcon, EmailIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function Header(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <Image src={Logo} alt="logo" height={50} />
      <Hide above="md">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />}>Buat Lowongan</MenuItem>
            <MenuItem icon={<EmailIcon />}>Lowongan Terkirim</MenuItem>
          </MenuList>
        </Menu>
      </Hide>
      <Show above="md">
        <ul>
          <li>
            <a href="/buat-lowongan-pekerjaan">Buat Lowongan</a>
          </li>
          <li>
            <a href="/lamaran-terkirim">Lowongan Terkirim</a>
          </li>
        </ul>
      </Show>
    </nav>
  );
}

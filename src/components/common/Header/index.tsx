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
import Link from "next/link";

export default function Header(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src={Logo} alt="logo" height={50} />
      </Link>
      <Hide above="md">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem as="a" href="/job/add" icon={<AddIcon />}>
              Buat Lowongan
            </MenuItem>
            <MenuItem icon={<EmailIcon />} as="a" href="/my-job">
              Lowongan Terkirim
            </MenuItem>
          </MenuList>
        </Menu>
      </Hide>
      <Show above="md">
        <ul>
          <li>
            <Link href="/job/add">Buat Lowongan</Link>
          </li>
          <li>
            <Link href="/my-job">Lowongan Terkirim</Link>
          </li>
        </ul>
      </Show>
    </nav>
  );
}

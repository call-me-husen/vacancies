import DetailLowonganScreen from "@/screens/detail-lowongan";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.query?.id;

  return {
    props: {
      id,
    },
  };
};
export default DetailLowonganScreen;

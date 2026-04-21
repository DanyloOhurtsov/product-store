import type { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/store",
      permanent: true,
    },
  };
};

export default function Home() {
  return null;
}

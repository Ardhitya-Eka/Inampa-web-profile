import MediaCertificate from "@/components/layouts/media/certificate";
import { GetStaticPropsContext } from "next";

const Certificate = () => {
  return <MediaCertificate />;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  };
}

export default Certificate;

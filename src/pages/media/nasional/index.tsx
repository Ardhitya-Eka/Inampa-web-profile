import MediaNasional from "@/components/layouts/media/nasional";
import { GetStaticPropsContext } from "next";

const Nasional = () => {
  return <MediaNasional />;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  };
}
export default Nasional;

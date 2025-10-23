import MediaInternasional from "@/components/layouts/media/internasional";
import { GetStaticPropsContext } from "next";
const Internasional = () => {
  return <MediaInternasional />;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../../../messages/${locale}`)).default,
    },
  };
}

export default Internasional;

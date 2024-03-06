import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import Divide from "@/components/Divide";

const Contact = () => {
  return (
    <>
      <Layout>
          <section className="flex flex-col">
              <Typography as={'h1'}>
                  Contact Me
              </Typography>
          </section>
          <Divide className={'mt-4'} divideLength={'start'} divideHeight={'sm'}/>
      </Layout>
    </>
  );
};
export default Contact;

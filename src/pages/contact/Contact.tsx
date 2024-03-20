import Layout from "@/components/Layout";
import Typography from "@/components/Typography";
import Divide from "@/components/Divide";
import MessageForm from "@/components/MessageForm";

const Contact = () => {
  return (
    <>
      <Layout>
          <section className="flex flex-col">
              <Typography as={'h1'}>
                  Contact Me
              </Typography>
          </section>
          <Divide className={'mt-4 mb-16'} divideLength={'start'} divideHeight={'sm'}/>
          <MessageForm />
      </Layout>
    </>
  );
};
export default Contact;

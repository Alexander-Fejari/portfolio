import SocialIcon from "@/components/SocialIcon";
import Typography from "@/components/Typography";

const Footer = () => {
    return (
        <>
            <section className={'w-full flex flex-col justify-center items-center gap-y-4'}>
                <section className="flex gap-x-4">
                    <SocialIcon size={'24'}/>
                </section>
                <section className=" flex">
                    <Typography as={'cite'}>
                        Alexander
                        <Typography as={'em'} className={'text-primary'}> © </Typography>
                        Fejari
                    </Typography>
                </section>

            </section>

        </>
    )
}

export default Footer
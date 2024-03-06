import SocialIcon from "@/components/SocialIcon";
import Typography from "@/components/Typography";


const Footer = () => {
    return (
        <>
            <section className={'pt-6 w-full flex justify-between items-center'}>
                <section className='flex items-center gap-x-4 md:gap-x-8'>
                    <Typography className={'uppercase flex flex-col text-right '} as={'p'}>
                        Alexander <br/>
                        Fejari
                    </Typography>
                    <section className="w-[.125rem] h-10 rounded bg-primary"></section>
                    <Typography className={'uppercase'} as={'p'}>
                        Portfolio <br/>
                        2024 ©
                    </Typography>
                </section>
                <SocialIcon size={'36'}/>
            </section>
        </>
    )
}

export default Footer
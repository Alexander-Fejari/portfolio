import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {SteppedEase, TextPlugin} from 'gsap/all';
import Typography from "@/components/Typography"; // Importez TextPlugin
import {Button} from "@/components/ui/button";
import {Link} from "react-router-dom";

gsap.registerPlugin(TextPlugin); // Enregistrez le plugin TextPlugin

const NotFound = () => {
    const cursorRef = useRef<HTMLSpanElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);
    const textRef1 = useRef<HTMLSpanElement | null>(null);
    const errorMsgRef = useRef<HTMLSpanElement | null>(null)
    const buttonRef = useRef<HTMLButtonElement | null>(null)


    useEffect(() => {
        /*Cursor*/
        gsap.fromTo(cursorRef.current, {autoAlpha: 0, x: -20}, {
            autoAlpha: 1,
            duration: 0.5,
            repeat: -1,
            ease: SteppedEase.config(1)
        });
        /*Text Split*/
        gsap.to(errorMsgRef.current, {
            text: {value: "404"},
            duration: 1,
            ease: "none"
        });
        gsap.to(textRef.current, {
            text: {value: "This page was "},
            duration: 2.5,
            delay: 1,
            ease: "none"
        });
        gsap.to(textRef1.current, {

            text: {value: "lost"},
            duration: 1,
            delay: 3.5,
            ease: "none"
        });
        gsap.to(buttonRef.current, {
            opacity: 1,
            delay: 4.5,
            ease: "elastic"
        });
    }, []);


    return (
        <section className={'p-6 h-dvh flex justify-center items-center'}>
            <section className={'flex flex-col items-center'}>
                <Typography as={'h1'}>
                    <span ref={errorMsgRef}></span>
                </Typography>
                <Typography as={'h3'}>
                    <span ref={textRef}></span>
                    <span ref={textRef1} className={'text-primary uppercase'}></span>
                </Typography>
                <Button ref={buttonRef} className={'mt-8 opacity-0'} variant={"outline"} asChild={true}>
                    <Link to={'/'}>Go Back</Link>
                </Button>
            </section>
            <span ref={cursorRef} style={{ color: 'red' }}>
                {/* Cursor Element */}
            </span>
        </section>
    )
}
export default NotFound

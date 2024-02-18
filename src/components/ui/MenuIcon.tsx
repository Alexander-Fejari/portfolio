import {useRef} from "react";
import {useToggle} from "@/hooks/useToggle";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

interface MenuIconProps {
    size: number;
    className?: string;
}

const MenuIcon = ({size, className}: MenuIconProps) => {
    const svgRef = useRef<SVGSVGElement>(null);

    const {isActive: isMenuOpen, toggleMenu} = useToggle();

    const animateMenuOpen = () => {
        gsap.to(svgRef.current, {y: 0, x: 4, duration: 0.3});
        gsap.to(".line1", {rotation: 45, x: 0, y: -4.5, duration: 0.3});
        gsap.to(".line2", {opacity: 0, duration: 0.3});
        gsap.to(".line3", {rotation: -45, x: 0, y: 3, duration: 0.3});
    };

    const animateMenuClose = () => {
        gsap.to(svgRef.current, {y: 0, x: 0, rotation: 0, duration: 0.3});
        gsap.to(".line1", {rotation: 0, x: 0, y: 0, duration: 0.3});
        gsap.to(".line2", {opacity: 1, duration: 0.3});
        gsap.to(".line3", {rotation: 0, x: 0, y: 0, duration: 0.3});
    };

    useGSAP(() => {
        if (isMenuOpen) {
            animateMenuOpen();
        } else {
            animateMenuClose();
        }
    }, [isMenuOpen]);

    return (
        <svg
            ref={svgRef}
            onClick={toggleMenu}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className={`${className} flex flex-col justify-between md:hidden`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <line
                className={"stroke-primary dark:stroke-white line1"}
                x1={size * 0.1}
                y1={size * 0.3}
                x2={size * 0.9}
                y2={size * 0.3}
                strokeLinecap="round"
            />
            <line
                className={"stroke-primary dark:stroke-white stroke-[2px] line2"}
                x1={size * 0.2}
                y1={size * 0.5}
                x2={size * 0.8}
                y2={size * 0.5}
                strokeLinecap="round"
            />
            <line
                className={"stroke-primary dark:stroke-white line3"}
                x1={size * 0.1}
                y1={size * 0.7}
                x2={size * 0.9}
                y2={size * 0.7}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default MenuIcon;

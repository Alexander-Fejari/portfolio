/*NavBarLinks.tsx*/
import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';
import {NavItem} from '@/types/types';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

interface Props {
    links: NavItem[];
    className?: string;
}

const NavbarLinks = ({links, className}: Props) => {
    const containerRef = useRef<HTMLUListElement | null>(null);

    // Animation fadeIn link
    useGSAP(() => {
        gsap.to('.navLink', {
            opacity: 1,
            stagger: -0.3,
            duration: 0.5,
            delay: 0.6
        });
    }, {scope: containerRef});

    // Animation hover on desktop
    

    return (
        <ul ref={containerRef}
            className={`${className} h-dvh w-full flex flex-col justify-center items-center gap-32 md:h-fit md:w-fit md:flex-row md:justify-end md:gap-4`}>
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink className={'navLink text-border uppercase opacity-0 font-bold text-muted-foreground'}
                             to={link.path}>
                        {link.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavbarLinks;

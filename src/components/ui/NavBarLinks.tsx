/*NavBarLinks.tsx*/
import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';
import {NavItem} from '@/types/types';
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

interface Props {
    links: NavItem[];
    isActive: boolean; // Ajoutez isActive ici
    toggleMenu: () => void; // Ajoutez toggleMenu ici
    className?: string;
}

const NavbarLinks = ({links, className}: Props) => {
    const containerRef = useRef<HTMLUListElement | null>(null);

    // Animation fadeIn link
    useGSAP(() => {
        gsap.to('.navLink', {
            opacity: 1,
            stagger: -0.3,
            duration: 0.6,
            delay: 0.7
        });
    }, {scope: containerRef});

    // Animation hover on desktop
/*    useGSAP(() => {
        gsap?
    },{scope:containerRef})*/

    return (
        <ul ref={containerRef}
            className={`${className} h-full w-full flex flex-col justify-center items-center gap-16 md:h-10 md:w-fit md:flex-row md:justify-end md:gap-4`}>
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

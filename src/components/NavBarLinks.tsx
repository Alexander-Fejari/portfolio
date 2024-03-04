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
    }, {scope: containerRef, revertOnUpdate: true});

    // Animation underline on hover
    const handleHover = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const underline = event.currentTarget.querySelector('.underline') as HTMLElement;
        gsap.to(underline, {
            width: '100%',
            duration: 0.2,
            ease: 'power2.inOut'
        });
    };
    const handleHoverOut = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const underline = event.currentTarget.querySelector('.underline') as HTMLElement;
        gsap.to(underline, {
            width: '0%',
            duration: 0.3,
            ease: 'power2.inOut'
        });
    };

    return (
        <ul ref={containerRef}
            className={`${className} h-full w-full flex flex-col justify-center items-center gap-16 md:h-10 md:w-fit md:flex-row md:justify-end md:gap-4`}>
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink
                        className={'navLink text-border uppercase opacity-0 font-bold text-muted-foreground relative break-words'}
                        to={link.path}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleHoverOut}>
                        {link.label}
                        <div
                            className="underline absolute left-0 top-[1.25rem] h-[2px] bg-primary rounded transition-all duration-300 dark:bg-white"></div>
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavbarLinks;

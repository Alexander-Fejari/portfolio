import React, {useEffect, useRef} from 'react';
import Logo from "@/components/Logo";
import {ModeToggle} from "@/components/mode-toggle";
import NavBarLinks from "@/components/NavBarLinks";
import {NavItem} from '@/types/types';
import MenuIcon from "@/components/MenuIcon";
import gsap from "gsap";

interface NavBarProps {
    isActive: boolean;
    toggleMenu: () => void;
}

const NavBar = ({isActive, toggleMenu}: NavBarProps) => {
    const navItems: NavItem[] = [
        {path: '/', label: 'Home'},
        {path: '/about', label: 'About me'},
        {path: '/my-works', label: 'My works'},
        {path: '/contact', label: 'Contact'},
    ];

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const tl = gsap.timeline({defaults: {ease: "power2.inOut"}});

        if (isActive) {
            tl.to(containerRef.current, {height: '100dvh', duration: 0.5, ease: 'power2.inOut'})
                .to(containerRef.current, {
                    backdropFilter: 'blur(12px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    duration: 0.5,
                    ease: 'power2.inOut'
                }, '-=0.5')
                .to(containerRef.current, {opacity: 1, duration: 0.5, ease: 'power2.inOut'}, '-=0.5');
        } else {
            tl.to(containerRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: 'power2.inOut'
            })
                .to(containerRef.current, {
                        height: 0,
                        duration: 0.5,
                        ease: 'power2.inOut'
                    }, '-=0.5'
                )
                .to(containerRef.current, {
                    backdropFilter: 'blur(0)',
                    backgroundColor: 'transparent',
                    duration: 0.5,
                    ease: 'power2.inOut'
                }, '-=0.5');
        }
    }, [isActive]);

    return (
        <>
            <nav className={'w-full flex justify-between items-center'}>
                <section className={'md:w-1/2 md:flex md:justify-start'}>
                    <Logo size={42}/>
                </section>
                <section className={'w-10 h-10 md:hidden'}>
                    <ModeToggle/>
                </section>
                {/* desktop */}
                <section className={'hidden md:w-1/2 md:flex md:justify-end md:items-center gap-16'}>
                    <section className={'h-10 md:flex md:justify-center'}>
                        <NavBarLinks isActive={isActive} toggleMenu={toggleMenu} links={navItems}/>
                    </section>
                    <section className={'w-10 h-10 md:flex md:justify-center md:items-center'}>
                        <ModeToggle/>
                    </section>
                </section>
                {/*Mobile*/}
                <section className={'relative md:hidden'}>
                    {/* Passage de toggleMenu à MenuIcon */}
                    <MenuIcon className={`${isActive ? 'relative z-20' : 'block'}`}
                              size={42}
                              toggleMenu={toggleMenu}
                              isActive={isActive}
                    />
                    {/* Affichage conditionnel des NavBarLinks basé sur isActive */}
                    <section
                        ref={containerRef}
                        className={`fixed w-full top-0 left-0 z-10 transition-all`}
                    >
                        {isActive && (
                            <NavBarLinks isActive={isActive} toggleMenu={toggleMenu} links={navItems}/>
                        )}
                    </section>
                </section>
            </nav>
        </>
    )
}

export default NavBar;

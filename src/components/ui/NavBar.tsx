// NavBar.tsx
import React, {useEffect} from 'react';
import Logo from "@/components/ui/Logo";
import {ModeToggle} from "@/components/mode-toggle";
import NavBarLinks from "@/components/ui/NavBarLinks";
import {NavItem} from '@/types/types';
import MenuIcon from "@/components/ui/MenuIcon";
import {useToggle} from '@/hooks/useToggle';

const NavBar = () => {
    const navItems: NavItem[] = [
        {path: '/', label: 'Home'},
        {path: '/about', label: 'About me'},
        {path: '/my-works', label: 'My works'},
        {path: '/contact', label: 'Contact'},
    ];

    // Utilisation de votre hook useToggle pour gérer l'état d'ouverture/fermeture du menu
    const {isActive, toggleMenu} = useToggle();

    useEffect(() => {
        // Empêcher le défilement de la page lorsque le menu est ouvert
        if (isActive) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isActive]);

    return (
        <>
            <nav className={'w-full flex justify-between items-center'}>
                <section className={'md:w-1/2 md:flex md:justify-start'}>
                    <Logo size={42}/>
                </section>
                <section className={'md:hidden'}>
                    <ModeToggle/>
                </section>
                {/* desktop */}
                <section className={'md:w-1/2 hidden md:flex md:justify-end md:items-center md:gap-8'}>
                    <section className={'w-auto md:flex md:justify-center'}>
                        <NavBarLinks links={navItems}/>
                    </section>
                    <section className={'w-auto md:flex md:justify-center'}>
                    <ModeToggle/>
                </section>
                </section>
                {/*Mobile*/}
                <section className={'relative md:hidden'}>
                    {/* Passage de toggleMenu à MenuIcon */}
                    <MenuIcon className={`${isActive ? 'relative z-20' : 'block'}`} size={42} toggleMenu={toggleMenu}
                              isActive={isActive}/>
                    {/* Affichage conditionnel des NavBarLinks basé sur isActive */}
                    <section
                        className={`fixed w-full top-0 left-0 z-10 transition-all ease-in-out delay-300 duration-500 ${isActive ? 'h-dvh bg-opacity-50 backdrop-blur-lg' : 'h-0 bg-transparent backdrop-blur-0'}`}>
                        {isActive && (
                            <NavBarLinks links={navItems}/>
                        )}
                    </section>
                </section>
            </nav>
        </>
    )
}

export default NavBar;

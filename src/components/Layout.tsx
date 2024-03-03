import {ReactNode, useEffect, useState} from "react";
import NavBar from "@/components/NavBar";
import {useToggle} from '@/hooks/useToggle';
import Footer from "@/components/Footer"; // Importez le hook useToggle

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    const {isActive: toggleIsActive, toggleMenu} = useToggle(); // Utilisez le hook useToggle

    // Utilisez un état local pour gérer l'état du menu dans le Layout
    const [isActive, setIsActive] = useState(toggleIsActive);

    // Utilisez useEffect pour synchroniser l'état local avec l'état du menu
    useEffect(() => {
        setIsActive(toggleIsActive);
    }, [toggleIsActive]);

    return (
        <>
            <section className={`w-full h-dvh`}>
                <header
                    className={
                        `min-h-20 max-h-28 p-6 w-full fixed top-0 left-0 flex flex-row items-center transition-all linear duration-75 delay-100 ${isActive ? '' : 'backdrop-blur-md'}`
                    }
                >
                    {/*Passez isActive et toggleMenu au composant NavBar*/}
                    <NavBar isActive={isActive} toggleMenu={toggleMenu}/>
                </header>
                <main className={'h-full p-6 pt-24'}>
                    {children}
                </main>
                <footer className={'min-h-20 max-h-28 p-6'}>
                    <Footer/>
                </footer>
            </section>
        </>
    );
};

export default Layout;

import { ReactNode, useState, useEffect } from "react";
import NavBar from "@/components/ui/NavBar";
import { useToggle } from '@/hooks/useToggle'; // Importez le hook useToggle

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const { isActive: toggleIsActive, toggleMenu } = useToggle(); // Utilisez le hook useToggle

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
                    <NavBar isActive={isActive} toggleMenu={toggleMenu} /> {/* Passez isActive et toggleMenu au composant NavBar */}
                </header>
                <main className={' p-6'}>
                    {children}
                </main>
                <footer></footer>
            </section>
        </>
    );
};

export default Layout;

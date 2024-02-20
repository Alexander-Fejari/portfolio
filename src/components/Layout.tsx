// Layout.tsx
import {ReactNode} from "react";
import NavBar from "@/components/ui/NavBar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <section className='w-full h-dvh'>
                <header
                    className={
                        "min-h-20 max-h-28 p-6 w-full fixed top-0 left-0 backdrop-blur-lg"
                    }
                >
                    <NavBar/>
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

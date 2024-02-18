import {ReactNode} from "react";
import NavBar from "@/components/ui/NavBar";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            <section className='w-full h-dvh p-6'>
                <header
                    className={
                        "min-h-20 max-h-28 p-6 w-full fixed top-0 left-0 backdrop-blur"
                    }
                >
                    <NavBar/>
                </header>
                <main>
                    {children}
                </main>
                <footer></footer>
            </section>
        </>
    );
};

export default Layout;

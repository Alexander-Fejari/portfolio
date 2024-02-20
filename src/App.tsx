import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import './App.css'
import {ThemeProvider} from "@/components/theme-provider"
import DesignSystem from "@/pages/design/DesignSystem";
import Home from "@/pages/home/Home";
import MyWorks from "@/pages/myWorks/MyWorks";
import NotFound from "@/pages/notFound/notFound";
import Contact from "@/pages/contact/Contact";
import AboutMe from "@/pages/aboutMe/AboutMe";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/">
                <Route path="*" element={<NotFound/>}/>
                <Route index element={<Home/>}/>
                <Route path="design" element={<DesignSystem/>}/>
                <Route path="about" element={<AboutMe/>}/>
                <Route path="my-works" element={<MyWorks/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>
        )
    );

    return (
        <>
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <RouterProvider router={router}/>
            </ThemeProvider>
        </>
    )
}

export default App

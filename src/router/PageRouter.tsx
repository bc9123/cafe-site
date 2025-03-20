import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Catalogue from "../pages/Catalogue";

const PageRouter = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route element={<Layout />} >
                <Route path={"/catalogue"} element={<Catalogue />} />
                <Route path={"/contact"} element={<Contact />} />
                <Route path={"/about"} element={<About />} />
            </Route>
        </Routes>
    );
};

export default PageRouter;

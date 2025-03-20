import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
        <div>
            <NavBar onHomePage={false}/>
        </div>
        <main>
            <Outlet />
        </main>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Layout
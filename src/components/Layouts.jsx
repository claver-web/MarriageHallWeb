import Navbar from "./ConstentPage/Navbar";
import Footer from "./ConstentPage/FooterContent";
import { Outlet } from "react-router-dom";
import WhatsAppButton from "./whatsAppLink";

export default function Layout(){
    return(
        <>
            <Navbar />
            <WhatsAppButton />

            <Outlet />
            
            <Footer />
        </>
    )
}

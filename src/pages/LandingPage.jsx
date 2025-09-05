import Hero from "../components/LandingPageComponents/HeroPicComponents";
import CTA from "../components/LandingPageComponents/FeactureCardCompo";
import Highlights from "../components/LandingPageComponents/Highligting";
import Reviews from "../components/LandingPageComponents/Reviews";
import ContactUs from "../components/LandingPageComponents/ContectUs";
import Gallery from "../components/LandingPageComponents/GalleryComponent";

export default function LandingPage(){
    return(
        <>
            <Hero />
            <Gallery />
            <CTA />
            <Reviews />
            <Highlights />
            <ContactUs />
        </>
    )
}
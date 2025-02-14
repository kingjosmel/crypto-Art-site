import Nav from "../layOutComps/Nav";
import Hero from '../components/Hero'
import SlideImg from "../components/SlideImg";
import MeetThepunks from "../components/MeetThepunks";
import Description from "../components/Description";
import Stickycard from "../components/stickCard";
import Info from "../components/Info";
import { HoverImageLinks } from "../components/HoverImageLinks";

export default function Home() {
    return (
        <>
         <Nav />
         <Hero />
         <SlideImg />
         <HoverImageLinks />
         <MeetThepunks />
         <Stickycard />
         {/* <Description /> */}
         <Info />

        </>
    )
}
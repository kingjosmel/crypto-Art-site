import Nav from "../layOutComps/Nav";
import Hero from '../components/Hero'
import SlideImg from "../components/SlideImg";
import Featured from "../components/Featured";
import MeetThepunks from "../components/MeetThepunks";
import Description from "../components/Description";
import Info from "../components/Info";

export default function Home() {
    return (
        <>
         <Nav />
         <Hero />
         <SlideImg />
         <Featured />
         <MeetThepunks />
         <Description />
         <Info />
        </>
    )
}
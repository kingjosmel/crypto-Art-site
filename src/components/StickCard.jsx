import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import image from '../assets/crypto-image/Frame.png'
import image1 from '../assets/crypto-image/image-3.png'
import image2 from '../assets/crypto-image/image-5.png'


const content = [
  {
    title: "Meet the punks",
    description:
      "Punks with a blue backgroud are not for sale and the have no current bids.",
    content: (
      <div
        className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={image}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Meet the punks",
    description:
      "Punks with a red backgroud are avaliable for sale by thier owners.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src={image1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Meet the punks",
    description:
      "Punks with a purple backgroud have an active Bid on them.",
    content: (
      <div
        className="h-full w-full flex items-center justify-center text-white">
        <img
          src={image2}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo" />
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export default function StickyCard() {
  return (
    (<div className="p-10">
      <StickyScroll content={content} />
    </div>)
  );
}

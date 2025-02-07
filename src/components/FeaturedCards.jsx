import { GoArrowUpRight } from "react-icons/go";


export default function FeaturedCards(props) {
    return (
        <div className="border border-white/30 w-[370px] rounded-3xl">
            <div className="pt-8 pl-8 pr-32 ">
                <h2 className="text-xl font-bold pb-3">
                    {props.heading}
                </h2>
                <p className={`${props.pb}`}>
                    {props.text}
                </p>
            </div>

            <div className="border-t w-full p-0 border-white/50 ">
                <div className="py-4 pl-8 flex items-center justify-between pr-3">
                    <p>
                        Read article
                    </p>
                    <GoArrowUpRight className="size-8"/>

                </div>
            </div>
        </div>
    )
}
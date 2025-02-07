export default function Cards(props) {
    return (
            <div className={`lg:w-[400px] md:w-[300px] cursor-pointer border border-white/30 py-5 pl-8 pr-14 rounded-2xl mb-4 ${props.className}`}>
                <p>
                    {props.text}
                </p>
            </div>

    )
}
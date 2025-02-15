export default function Hero () {
    return (
        <div className="h-[550px] flex flex-col justify-center items-center mx-auto w-[85%]">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-3">
                The Project that inspired the morden <span className="font-bold">CryptoArt</span> movement.
            </h1>
            <p className="text-center py-11 md:w-[540px] text-lg">10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.</p>

            <a href="/fileupload">
            <button className="bg-white text-black py-2 px-4 rounded-full">
                Mint <span className="font-semibold">now</span>
            </button>
            </a>
        </div>
    )
}
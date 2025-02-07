import FeaturedCards from "./FeaturedCards";

export default function Featured() {
    return (
        <div className="py-30 lg:w-[85%] md:w-[95%] mx-auto">
            <div className="flex justify-center mb-11">
            <h2 className="font-semibold text-2xl">Featured in</h2>
            </div>
                <div className="flex gap-4 justify-center items-center flex-wrap">
                    <FeaturedCards heading='Mashable' text='The ethereum-based projects could change how we think about digital art' link='' pb='pb-16' />
                    <FeaturedCards heading='Mashable' text='CryptoKitties, CryptoPunks and the birth of a cottage industry' link='' pb='pb-16' />
                    <FeaturedCards heading='Mashable' text='Obviously, wwe had no idea it was going to get here, say the guys who made the first NFT' link='' pb='pb-10' />
                </div>
        </div>
    )
}
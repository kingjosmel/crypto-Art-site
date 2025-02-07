export default function MeetThepunks(){
    return (
        <div className="md:grid md:grid-cols-12 w-[90%] mx-auto">
            <div className="lg:col-span-7 md:col-span-6">
                <h2 className="lg:text-4xl text-3xl font-semibold max-sm:mb-11">Meet the Punks</h2>
            </div>
            <div className="lg:col-span-5 leading-8 text-[20px] max-sm:text-lg md:col-span-6">
                <p>The CryptoPunks are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Ape, Zombies and even odd Aliens. Every punk has there own profile page that shows their attributes as well as ownership/for-sale status.</p>

                <div className="pt-10 flex items-center gap-4">
                    <button className="bg-white text-black py-2 px-4 max-sm:px-3 cursor-pointer lg:py-3 lg:px-6 rounded-full">Buy a punk</button>
                    <button className="py-3 px-5 rounded-full border border-white/30 cursor-pointer">Veiw full collection</button>
                </div>
            </div>
        </div>
    )
}
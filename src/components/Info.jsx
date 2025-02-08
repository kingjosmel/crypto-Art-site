import metamask from '../assets/crypto-image/metamask.png'
import eth from '../assets/crypto-image/eth.png'

export default function Info() {
    return (
        <div className='md:flex justify-between w-[90%] mx-auto'>
            <div className='max-sm:mb-10'>
                <h2 className='text-3xl font-semibold'>
                    How do I get a punk?
                </h2>
            </div>

            <div className='lg:w-[440px] md:w-[350px] border-l border-white/30 px-11 relative'>
                {/* first div */}
                <div className='mb-6 relative'>
                    <div className='flex items-center'>
                        <span className='absolute left-[-43px] bg-[#101111] px-3 py-2 border border-white/30 rounded-full text-white text-sm transform -translate-x-1/2'>
                            1
                        </span>
                        <img src={metamask} alt='metamask' className='size-8'/>
                    </div>
                    <h3 className='font-semibold mb-3'>
                        Download and install MetaMask
                    </h3>
                    <p className='text-sm mb-4'>
                        Download and install a Chrome browser plugin called MetaMask. This will allow websites that you authorize to access your Ethereum account.
                    </p>
                    <button className='text-sm border border-white/30 py-2 px-3 rounded-3xl cursor-pointer'>
                        Download MetaMask
                    </button>
                </div>

                {/* second div */}
                <div className='mb-6 relative'>
                    <span className='absolute left-[-43px] bg-[#101111] px-3 py-2 border border-white/30 rounded-full text-white text-sm transform -translate-x-1/2'>
                        2
                    </span>
                    <img src={eth} alt='eth' className='size-8'/>
                    <h3 className='font-semibold  mb-3'>
                        Buy some Ethereum
                    </h3>
                    <p className='text-sm'>
                        If you made a new account, buy some Ethereum. The MetaMask plugin has a button that allows you to buy either from Coinbase.
                    </p>
                </div>

                {/* third div */}
                <div className='mb-6 relative'>
                    <span className='absolute left-[-43px] bg-[#101111] px-3 py-2 border border-white/30 rounded-full text-white text-sm transform -translate-x-1/2'>
                        3
                    </span>
                    <h3 className='font-semibold mb-3'>
                        Start bidding, buying, and selling
                    </h3>
                    <p className='text-sm'>
                        Once you have the plugin installed, the website will recognize it and add buttons that allow you to bid on, buy, and sell punks directly on the interface.
                    </p>
                </div>
            </div>
        </div>
    );
}

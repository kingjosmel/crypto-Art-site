import Logo from '../assets/Frame.png';
import { SlSocialTwitter } from "react-icons/sl";
import { FaDiscord } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
    return (
        <div className='flex justify-between items-center w-[90%] mx-auto mt-4'> 
            <div>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='flex items-center gap-5 max-sm:hidden'>
                <ul className='flex items-center gap-4 cursor-pointer'>
                    <li>About</li>
                    <li>Collection</li>
                    <li>Faq</li>
                    <li className='bg-[#638596] py-1 px-2 rounded-full text-[#C4EBFF] text-center '>connect wallet</li>
                </ul>
                <div className='flex items-center gap-3'>
                    <SlSocialTwitter />
                    <FaDiscord />
                </div>

            </div>
            <RxHamburgerMenu className='max-sm:block hidden size-8' />

        </div>
    )
}
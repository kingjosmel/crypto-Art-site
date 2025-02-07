import Cards from "./Cards"
import image from '../assets/crypto-image/Image-7.png'

export default function Description() {
    return (
        <div className="md:flex md:justify-between w-[90%] mx-auto py-24 ">
            <div>
                <Cards text='Punks with a blue backgroud are not for sale and the have no current bids.' className='bg-[#638596]'/>
                <Cards text='Punks with a red backgroud are avaliable for sale by thier owners.' className=''/>
                <Cards text='Punks with a purple backgroud have an active Bid on them.' className=''/>
            </div>

            <div>
                <img src={image} alt="descimg" className="lg:size-[25rem] size-[23rem]"/>
            </div>
        </div>
    )
}
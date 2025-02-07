import { motion } from "framer-motion";
import image from '../assets/crypto-image/Image.png';
import image2 from '../assets/crypto-image/Image-2.png';
import image3 from '../assets/crypto-image/Image-3.png';
import image4 from '../assets/crypto-image/Image-4.png';
import image5 from '../assets/crypto-image/Image-5.png';
import image1 from '../assets/crypto-image/Image-1.png';
import image6 from '../assets/crypto-image/Image-6.png';
import image7 from '../assets/crypto-image/Image-7.png';

const images = [image, image1, image2, image3, image4, image5, image6, image7];
const duplicatedImages = [...images, ...images];

export default function SlideImg() {
    return (
        <div className="overflow-hidden w-full">
            <motion.div 
                className="flex gap-4"
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            >
                {duplicatedImages.map((img, index) => (
                    <img key={index} src={img} alt="slide" className="w-38 h-38" />
                ))}
            </motion.div>
        </div>
    );
}
import { SelectedPage } from '../../shared/types';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from '@/shared/HText';
import { motion } from 'framer-motion';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({setSelectedPage}: Props) => {
    return (
        <section id="ourclasses" className='w-full bg-primary-100 py-40 '>
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}>
                <motion.div 
                className='mx-auto w-5/6'
                initial= "hidden"
                whileInView= "visible"
                viewport={{once: true, amount: 0.5}}
                transition = {{duration: 0.5}}
                variants={{
                    hidden: {opacity:0, x:-50},
                    visible: {opacity:1, x:0}
                }}
                >
                    <div className='md:w-3/5'>
                        <HText>OUR CLASSES</HText>
                        <p className='py-5'>
                        Pellentesque sit amet placerat felis, non convallis velit. Integer quis cursus ex. Nam ipsum orci, pretium non metus in, ullamcorper tempus urna. Curabitur feugiat dapibus placerat. Suspendisse at orci gravida, aliquam nulla et, blandit turpis. Nulla facilisi. Vestibulum scelerisque ligula a dolor vulputate, et euismod lacus feugiat. Aliquam erat volutpat. Pellentesque molestie ex nec enim gravida tempor.
                        </p>
                    </div>
                </motion.div>
                <div></div>
            </motion.div>
        </section>
    )
}

export default OurClasses;
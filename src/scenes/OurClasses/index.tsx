import { SelectedPage, ClassType } from '../../shared/types';
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import HText from '@/shared/HText';
import { motion } from 'framer-motion';

const classes:  Array<ClassType>=[
    {
        id: "1",
        name: "Weight Training Classes",
        description: "Curabitur feugiat dapibus placerat. Suspendisse at orci gravida, aliquam nulla et, blandit turpis. Nulla facilisi. Vestibulum scelerisque ligula a dolor vulputate, et euismod lacus feugiat.",
        image: image1
    },
    {
        id: "2",
        name: "Yoga Sessions",
        image: image2
    },
    {
        id: "3",
        name: "Abs and Core Classes",
        description: "Nam imperdiet dictum nibh quis ullamcorper. Fusce venenatis faucibus velit vel dapibus. Nunc non condimentum urna. Mauris gravida diam id leo dapibus dignissim. Integer ac fermentum velit. Aliquam erat volutpat. Pellentesque a mauris elit.",
        image: image3
    },
    {
        id: "4",
        name: "Adventure Classes",
        image: image4
    },
    {
        id: "5",
        name: "Fitness Classes",
        description: "In vulputate dapibus posuere. Integer condimentum faucibus lacus, eget sollicitudin mauris scelerisque convallis. Nullam luctus felis ipsum.",
        image: image5
    },
    {
        id: "6",
        name: "Training Classes",
        image: image6
    }
]

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
                <div className='mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden'>
                    <ul className='w-[2800px] whitespace-nowrap'>
                        {classes.map((item, index) =>(
                            <Class />
                        ) )}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses;
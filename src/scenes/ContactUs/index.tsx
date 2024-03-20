import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import HText from '@/shared/HText';

type Props = {
    setSelectedPage: (vale: SelectedPage) => void
}

const index = ({setSelectedPage}: Props) => {
  return (
    <section id="contactus" className='mx-auto w-5/6 pt-24 pb-32'>
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div className='md:w-3/5' initial='hidden' whileInView='visible' viewport={{once: true, amount: 0.5}} transition={{delay: 0.2, duration: 0.5}} variants={{hidden:{opacity:0, x:-50}, visible:{opacity:1, x:0}}}> 
                <HText>
                <span className="text-primary-500">JOIN NOW {" "}</span>
                TO GET IN SHAPE
                </HText>
                <p className='my-5'>Quisque sed feugiat libero. Pellentesque vestibulum placerat pellentesque. Nam id consequat mi. Pellentesque iaculis pellentesque ornare. Sed tellus sem, commodo sit amet tellus ut, vestibulum posuere nibh. Nam rutrum libero varius, iaculis est sit amet, efficitur turpis. In et sapien in neque aliquam tristique non et massa. Nullam id maximus enim. Sed auctor tempor diam, ac pulvinar dui ornare vitae.</p>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default index
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Benefit from "./Benefit";


const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6 "/>,
    title: "State of the Art Facility",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et element null et null. Optio, nulla? Dolores nam quod, assumenda qui vel tempore nisi nihil odio! Id numquam neque animi debitis ad earum laboriosam quidem error."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 "/>,
    title: "100s of Diverse Classes",
    description: "Aut nobis eos ex laudantium necessitatibus accusantium, quidem molestiae distinctio facere deserunt autem nam quisquam, ipsam itaque asperiores recusandae, vel voluptatum dicta. Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et element null et null"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6 "/>,
    title: "Expert and Pro Trainers",
    description: "Sequi id consectetur dignissimos libero iure quibusdam dolor, laudantium voluptatum ullam non hic eum officia consequuntur odio at aliquid esse quia quas. Lorem ipsum dolor sit amet, consectetur adipiscing el aspect et element null et null"
  }
]

const container = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20 "
    >
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div>
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
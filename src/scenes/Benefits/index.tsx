import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from 'framer-motion'
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import Benefit from "./Benefit";
import HText from "@/shared/HText";


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
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{ 
              hidden: { opacity: 0, x: -50 }, 
              visible: {opacity: 1, x: 0}
          }}
        className="md:my-5 md:w-3/5 ">
          <HText>MORE THEN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to 
            get you to your ultimate fitness goals with ease. We provide true 
            care into each and every member
          </p>
        </motion.div>

        {/**indiv benefits */}
        <motion.div
        initial= "hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
         className="mt-5 items-center justify-between gap-8 md:flex"
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/**graphic images and desc */}
        <div>
          {/**graph */}
          <img src="" alt=""/>
          {/**description */}
          <div>
            {/**title*/}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <div>
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING {"  "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </div>
              </div>
            </div>
            {/**dsc*/}
            <div>
              <p className="my-5">
              Odavno je uspostavljena činjenica da čitača ometa razumljivi tekst dok gleda raspored elemenata na stranici. Smisao korištenja Lorem Ipsum-a jest u tome što umjesto 'sadržaj ovjde, sadržaj ovjde' imamo normalni raspored slova i riječi, pa čitač ima dojam da gleda tekst na razumljivom jeziku. Mnogi programi za stolno izdavaštvo i uređivanje web stranica danas koriste Lorem Ipsum kao zadani model teksta, i ako potražite 'lorem ipsum' na Internetu, kao rezultat dobit ćete mnoge stranice u izradi.
              </p>
              <p className="mb-5">Postoje mnoge varijacije odlomaka iz Lorem Ipsum-a, ali većina je pretrpjela kojekakve promjene s dodanim humorom, ili nasumičnim riječima koje nikako tu ne spadaju. Ako trebate koristiti Lorem Ipsum, morate biti sigurni da tekst ne sadrži skrivene nepodobne riječi ili fraze. Lorem Ipsum generatori na Internetu većinom ponavljaju zadane odlomke po potrebi, što ovaj naš čini prvim pravim generatorom na Internetu. Mi koristimo riječnik od 200 latinskih riječi, u kombinaciji s nekoliko modela rečeničnih struktura, da bi generirali Lorem Ipsum koji izgleda razumno.</p>
            </div>
            {/**button*/}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (vale: SelectedPage) => void;
};

const index = ({ setSelectedPage }: Props) => {
  /**Video Method */
  // const {register, trigger, formState: {errors}} = useForm()

  // async function handleSubmit(e: any){
  //     const isValid = await trigger();
  //     if(!isValid){
  //         e.preventDefault();
  //     }
  // }

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const onSubmit = (d: any) => {
    alert(JSON.stringify(d));
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW </span>
            TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Quisque sed feugiat libero. Pellentesque vestibulum placerat
            pellentesque. Nam id consequat mi. Pellentesque iaculis pellentesque
            ornare. Sed tellus sem, commodo sit amet tellus ut, vestibulum
            posuere nibh. Nam rutrum libero varius, iaculis est sit amet,
            efficitur turpis. In et sapien in neque aliquam tristique non et
            massa. Nullam id maximus enim. Sed auctor tempor diam, ac pulvinar
            dui ornare vitae.
          </p>
        </motion.div>

        {/**FORM Handler */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="basis-3/5 mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
            >
              <input
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="NAME"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" &&
                    "This field is required!!"}
                  {errors.name.type === "MaxLength" &&
                    "maximum Length is 100 characters!!"}
                </p>
              )}
              <input
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="email"
                placeholder="EMAIL"
                {...register("email", { 
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                 })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required!!"}
                  {errors.email.type === "patter" &&
                    "invalid email address!"}
                </p>
              )}
              <input
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="MESSAGE"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required!!"}
                  {errors.message.type === "MaxLength" &&
                    "maximum Length is 2000 characters!!"}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default index;

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { error } from "console";

interface Props {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyle = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const notify = () => {
    toast("Msg sent successfully");
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
    emailjs
      .sendForm(
        "service_sftjizs",
        "template_nuf9eb5",
        e.currentTarget,
        "BBtcXbqNUtu7tIijc"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-20 pb-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className=""
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>JOIN NOW TO GET IN SHAPE</HText>
          <p className="my-5">
            we make group workouts fun, daily food healthy & tasty, mental
            fitness easy with yoga & meditation, and medical & lifestyle care
            hassle-free.One place for all your well-being needs.
          </p>
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Name"
                name="from_name"
                className={inputStyle}
                required
                maxLength={50}
              />
              <input
                type="text"
                placeholder="Email"
                name="from_email"
                className={inputStyle}
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
              <textarea
                rows={4}
                placeholder="Message"
                name="message"
                className={`${inputStyle} h-56`}
              />
              <input
                type="submit"
                className="rounded-md bg-secondary-500 px-10 mt-5 mb-2 py-2 hover:bg-primary-500 hover:text-white"
              />
              <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
            </form>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 z-[-1]">
              <img className="w-full" src={ContactUsPageGraphic} alt="" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;

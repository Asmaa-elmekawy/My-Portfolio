"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // يخلي العناصر تظهر ورا بعض
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 }, // يبدأ من تحت (50px)
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }, // يطلع لفوق
};

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // يمنع التحويل لموقع Formspree

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xandvalo", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thanks for your message! I'll get back to you soon:)");
      e.target.reset();
    } else {
      setStatus("Sorry, there was an error. Please try again.");
    }
  };
  return (
    <section
      id="contact"
      className="bg-black text-white py-20 px-6 text-center"
    >
      <motion.h2 variants={item} className="text-3xl font-bold mb-6">
        Get In Touch
      </motion.h2>
      <p className="text-gray-400 mb-8">
        Feel free to get in touch with me by filling out the form below.
      </p>
      <motion.form
        onSubmit={handleSubmit}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="Name"
          name="name"
          required
          className="p-3 bg-[#0e0d0c]  rounded"
        />
        <motion.input
          variants={item}
          type="email"
          name="email"
          required
          placeholder="Email"
          className="p-3 bg-[#0e0d0c]  rounded"
        />
        <motion.textarea
          variants={item}
          name="message"
          required
          placeholder="Message"
          rows="4"
          className="bg-[#0e0d0c] p-3  rounded"
        ></motion.textarea>

        <motion.button
          variants={item}
          className="bg-[#c3995b] py-3 cursor-pointer hover:brightness-85 text-black font-bold rounded"
        >
          Send Message
        </motion.button>
        {status && <p className="text-center mt-2">{status}</p>}
      </motion.form>
    </section>
  );
}

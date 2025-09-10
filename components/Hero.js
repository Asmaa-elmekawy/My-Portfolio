"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex flex-col md:flex-row justify-center items-center gap-15 px-6"
    >
      <div className="mt-25">
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold mb-2"
        >
          Hi, I&apos;m Asmaa
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xl text-gray-400"
        >
          Front-End Developer (React / Next.js)
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-2 flex space-x-6 text-3xl"
        >
          <a href="https://github.com/Asmaa-elmekawy" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-[#c3995b] hover:brightness-65 text-3xl"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/asmaa-elmekawy-b911492aa"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[#c3995b] hover:brightness-65 text-3xl"
            />
          </a>
          <a href="mailto:asmaaelmekawy9@gmail.com" target="_blank">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#c3995b] hover:brightness-65 text-3xl"
            />
          </a>
          <a href="https://wa.me/01090406152" target="_blank">
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-[#c3995b] hover:brightness-65 text-3xl"
            />
          </a>
        </motion.div>
        <div className="mt-6 flex gap-4">
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            href="#projects"
            className=" bg-[#c3995b] text-black font-bold px-4 py-2 hover:brightness-85 rounded-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            href="#contact"
            className="px-4 py-2 border hover:brightness-75  font-bold border-gray-500 rounded-lg"
          >
            Contact Me
          </motion.a>
        </div>
        <motion.a
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          href="/AsmaaElmekawyCV.pdf"
          download="AsmaaElmekawyCV"
          className="inline-block"
        >
          <button className="mt-5 w-65 font-bold text-black hover:brightness-85 transition bg-[#c3995b] cursor-pointer px-4 py-2  text-center rounded-lg">
            <FontAwesomeIcon icon={faDownload} className="mr-2" />
            MY CV
          </button>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          style={{ borderColor: "#c3995b", boxShadow: "0 0 10px #c3995b" }}
          src="/meee.png"
          alt="Asmaa"
          width={400}
          height={270}
          className="rounded-full border-4  mb-4"
        />
      </motion.div>
    </section>
  );
}

export default Hero;

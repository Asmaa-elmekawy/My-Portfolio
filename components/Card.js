"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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

function Card(props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      style={{ background: "#0e0d0c" }}
      className="transform transition duration-300 hover:scale-105 rounded-lg p-4"
    >
      <motion.div variants={item}>
        <Image
          src={props.image}
          alt={props.alt}
          width={400}
          height={200}
          className="rounded text-center mx-auto"
        />
      </motion.div>

      <motion.h3 variants={item} className="mt-4 text-xl font-semibold">
        {props.title}
      </motion.h3>

      <motion.p variants={item} className="my-5">
        {props.desc}
      </motion.p>

      <motion.p variants={item} className="text-yellow-500">
        {props.technology}
      </motion.p>

      <motion.div variants={item} className="d-flex mt-5 text-center">
        <button
          style={{ background: "#c3995b" }}
          className="mt-4 px-4 py-2 rounded-lg"
        >
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            Live-Demo
          </a>
        </button>
        <button className="mt-4 ml-5 px-4 py-2 bg-yellow-600 rounded-lg">
          <a href={props.github} target="_blank" rel="noopener noreferrer">
            GitHub-Repository
          </a>
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Card;

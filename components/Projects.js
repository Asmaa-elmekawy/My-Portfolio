import Image from "next/image";
import Card from "./Card";

export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  sm-w[70%] w-[90%] mx-auto">
        <Card
          image="/vevea.png"
          alt="Vevea Store"
          title="Makeup Store"
          desc="An e-commerce website for makeup products, built with React and Tailwind CSS. Features include product browsing, filtering, and a responsive design."
          technology=" React.js 
                       • Vite 
                       • React Router
                       • Tailwind CSS 
                       • JSON data • Netlify"
          link="https://vevea-store.netlify.app/"
          github="https://github.com/Asmaa-elmekawy/MakeUP-Store"
        />
        <Card
          image="/to-do.png"
          alt="Todo App"
          title="To-do App"
          desc="A simple and intuitive to-do list application built with React. Users can add, edit, and delete tasks, as well as mark them as completed."
          technology="React.js • React-bootstrap • css • React-router • Netlify"
          link="https://to-doooo-app.netlify.app/"
          github="https://github.com/Asmaa-elmekawy/TO-DO-APP"
        />
        <Card
          image="/top-doctor.png"
          alt="Top-doctor App"
          title="Top-Doctor App"
          desc="A web application for booking medical appointments, built with React for the frontend and Node.js with Express for the backend. It features user authentication, doctor profiles, and appointment scheduling."
          technology=" React.js • Node.js • Express.js • MongoDB • Tailwind CSS • Git & GitHub • Axios • i18next • Figma • Vercel"
          link="https://doctor-iti.vercel.app/"
          github="https://github.com/Asmaa-elmekawy/Top-doctor_iti"
        />
      </div>
    </section>
  );
}

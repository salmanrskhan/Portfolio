import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTags";
import { motion, useInView } from "framer-motion";
import './project.css'

import image1 from '../../assets/asian.png';
import image2 from '../../assets/knocial-web.png';
import image3 from '../../assets/pink-flamingo.png';
import image4 from '../../assets/nimt.png';
import image5 from '../../assets/dashboard.png';
import image6 from '../../assets/product-list.png';
import image7 from '../../assets/tenzies.png';
import image8 from '../../assets/notes.png';
import image9 from '../../assets/gsap-task.png';
import image10 from '../../assets/tic-tac-toe.png';
import image11 from '../../assets/calci.png';

const projectsData = [
  {
    id: 1,
    title: "Asian Scales",
    description: "HTML, CSS, JavaScript",
    image: image1,
    tag: ["All", "Live", "Website"],
    gitUrl: "https://github.com/salmanrskhan/Pink-flamingo",
    previewUrl: "https://asian-scales.netlify.app/",
  },
  {
    id: 2,
    title: "Knocial",
    description: "HTML, CSS, JavaScript",
    image: image2,
    tag: ["All", "Live", "Website"],
    gitUrl: "https://github.com/salmanrskhan/knocial-website",
    previewUrl: "https://knocial-web.netlify.app/",
  },
  {
    id: 3,
    title: "Tenzie",
    description: "React, CSS",
    image: image7,
    tag: ["All", "React"],
    gitUrl: "https://github.com/salmanrskhan/tenzies-react",
    previewUrl: "https://tenzies-r-game.netlify.app/",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe",
    description: "React, CSS",
    image: image10,
    tag: ["All", "React"],
    gitUrl: "https://github.com/salmanrskhan/tic-tac-toe",
    previewUrl: "https://tic-tac-toe-six-bay-17.vercel.app/",
  },
  {
    id: 5,
    title: "Investment Calculator",
    description: "React, CSS",
    image: image11,
    tag: ["All", "React"],
    gitUrl: "https://github.com/salmanrskhan/investment-calci",
    previewUrl: "https://investment-calci-one.vercel.app/",
  },
  {
    id: 6,
    title: "Products-list",
    description: "React, CSS",
    image: image6,
    tag: ["All", "React"],
    gitUrl: "https://github.com/salmanrskhan/product-lists/tree/main/frontend",
    previewUrl: "https://product-lists-cli.vercel.app/",
  },
  {
    id: 7,
    title: "Pink-flamingo",
    description: "HTML, CSS, JavaScript",
    image: image3,
    tag: ["All", "Web", "Website"],
    gitUrl: "https://github.com/salmanrskhan/Pink-flamingo",
    previewUrl: "https://pink-flam.netlify.app/",
  },
  {
    id: 8,
    title: "NIMT",
    description: "HTML, CSS, JavaScript",
    image: image4,
    tag: ["All", "Live", "Website"],
    gitUrl: "https://github.com/salmanrskhan/Nimt-College",
    previewUrl: "https://nimt-web.netlify.app/",
  },
  {
    id: 9,
    title: "Notes",
    description: "React, CSS",
    image: image8,
    tag: ["All", "React"],
    gitUrl: "https://github.com/salmanrskhan/note-app",
    previewUrl: "https://react-notesapp-fb.netlify.app/",
  },
  {
    id: 10,
    title: "Dashboard",
    description: "React, CSS",
    image: image5,
    tag: ["All", "React"],
    gitUrl: "https://github.com/salmanrskhan/dashboard",
    previewUrl: "https://dashboard-rosy-psi.vercel.app/",
  },
  {
    id: 11,
    title: "GSAP-work",
    description: "HTML, CSS, JavaScript",
    image: image9,
    tag: ["All", ""],
    gitUrl: "https://github.com/salmanrskhan/GSAP-task",
    previewUrl: "https://gsap-task.netlify.app/",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="light" id="projects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        <div className="project_btns">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="React"
            isSelected={tag === "React"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Live"
            isSelected={tag === "Live"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Website"
            isSelected={tag === "Website"}
          />
        </div>
        <ul ref={ref}>
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}

              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Project;


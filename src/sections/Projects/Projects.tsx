import ProjectLayout from "@/components/projects/ProjectLayout";
import { motion } from "framer-motion";

//project demo images
import mClass1 from "@/assets/images/projects/m_class_1.jpg";
import mClass2 from "@/assets/images/projects/m_class_2.jpg";
import menuTree from "@/assets/images/projects/menu_tree_1.png";
import videoSearch1 from "@/assets/images/projects/video_search_1.png";
import videoSearch2 from "@/assets/images/projects/video_search_2.png";
import tradingPoc1 from "@/assets/images/projects/react_trading_poc_1.png";
import tradingPoc2 from "@/assets/images/projects/react_trading_poc_2.png";

type Project = {
  title: string;
  type: "Personal" | "Company";
  visibility: "Public" | "Case Study" | "Rebuilt";
  description: string;
  technologies: string[];
  image: string[];
  github: string | null;
  demo: string | null;
};

const projects = [
  {
    title: "Mobile Menu Tree Manager",
    type: "Company",
    visibility: "Rebuilt",
    description:
      "Rebuilt an internal tool to simplify mobile menu configuration and reduce errors from manual file editing.",
    technologies: ["React", "TypeScript", "Redux", "MUI"],
    image: [menuTree],
    github: "https://github.com/IAGREEBUT/mobile-menu-tree-manager.git",
    demo: null,
  },

  {
    title: "M-Class - Mock Investment & Financial Education",
    type: "Company",
    visibility: "Public",
    description:
      "A web-based internal platform designed to manage and visualize structured business data.",

    technologies: ["React", "TypeScript", "SpringBoot"],
    image: [mClass1, mClass2],
    github: "https://github.com/orgs/Miraeasset-MobileInternship/repositories",
    demo: null,
  },

  {
    title: "React Trading PoC",
    type: "Company",
    visibility: "Case Study",
    description:
      "Explored a React-based trading architecture by connecting existing REST APIs and WebSocket services.",
    technologies: ["React", "TypeScript", "WebSocket", "REST API"],
    image: [tradingPoc1, tradingPoc2],
    github: null,
    demo: null,
  },

  {
    title: "Video Contents Search",
    type: "Personal",
    visibility: "Public",
    description:
      "A web application that searches for people or text with timeline in YouTube videos.",

    technologies: ["React", "TypeScript", "YouTube API"],
    image: [videoSearch1],
    github: "https://github.com/CrayonTeamJ/docker",
    demo: "https://youtu.be/T5Dj8V5gOyE",
  },
] satisfies Project[];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full px-6 py-24">
      <div className="mx-auto max-w-[var(--content-width)]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <p className="text-sm font-medium tracking-[0.3em] text-[var(--accent)]">
            PROJECTS
          </p>

          <div className="mx-auto mt-5 h-px w-14 bg-[var(--accent)]" />
        </motion.div>
        <div className="flex flex-col items-center gap-30">
          {projects.map((project) => (
            <ProjectLayout key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

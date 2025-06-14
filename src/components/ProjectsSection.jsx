import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/21429.jpg";
import project3 from "../assets/project3.png";
import project2 from "../assets/project2.jpg";

const projects = [
  {
    id: 1,
    title: "Student Management Web Application",
    description: "Student management system for handling and updating student records.",
    image: project1,
    tags: ["Java", "MySQL", "HTML", "CSS",],
    demoUrl: "#",
    githubUrl: "https://github.com/AkashAkki018/Student-Management-Web-Application",
  },
  {
    id: 2,
    title: "Movie Booking System",
    description: "Movie booking platform with movie selection and booking flow.",
    image: project2,
    tags: ["Java", "MySQL", "HTML", "CSS",],
    demoUrl: "#",
    githubUrl: " https://github.com/AkashAkki018/Movie-Booking-System ",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Interactive personal portfolio showcasing projects, skills, and contact information.",
    image: project3,
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/AkashAkki018/Akash_Portfolio",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    { /*
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                   */ }
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/AkashAkki018"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
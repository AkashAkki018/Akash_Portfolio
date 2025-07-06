import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/project1.jpg";
import project3 from "../assets/project3.png";
import project2 from "../assets/project2.png";

const projects = [
	{
		id: 1,
		title: "CLIPZIP - Video Downloader Platform",
		description:
			"Full-stack video downloader with secure login, responsive UI, and multi-platform support.",
		image: project2,
		tags: ["Java", "Spring Boot", "React", "TailwindCSS", "RapidAPI"],
		demoUrl: "https://clipzip.vercel.app",
		githubUrl: "https://github.com/Kallem-Akash/ClipZip-Frontend",
	},
	{
		id: 2,
		title: "Student Management Web Application",
		description: "Student Management System for handling and updating student records.",
		image: project1,
		tags: ["Java", "MySQL", "HTML", "CSS"],
		demoUrl: "#",
		githubUrl: "https://github.com/Kallem-Akash/Student-Management-Web-Application",
	},
	{
		id: 3,
		title: "Portfolio Website",
		description:
			"Interactive Personal Portfolio showcasing projects, skills, and contact information.",
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
					Here are some of my recent projects. Each project was carefully crafted
					with attention to detail, performance, and user experience.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
						>
							<div className="h-50 overflow-hidden">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
							</div>

							<div className="p-4">
								<div className="flex flex-wrap gap-1 mb-2">
									{project.tags.map((tag) => (
										<span className="px-2 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-lg font-semibold mb-1">
									{" "}
									{project.title}
								</h3>
								<p className="text-muted-foreground text-xs mb-2">
									{project.description}
								</p>
								<div className="flex justify-between items-center">
									<div className="flex space-x-2">
										{/*
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                   */}
										<a
											href={project.githubUrl}
											target="_blank"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<Github size={18} />
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
						href="https://github.com/Kallem-Akash"
					>
						Check My Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
export default ProjectsSection;
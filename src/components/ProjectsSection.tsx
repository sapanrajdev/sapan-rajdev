import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise React + AWS Platform",
    description:
      "Scalable enterprise application built with React, TypeScript, and AWS microservices. Features real-time data processing, role-based access control, and automated deployment via EKS.",
    stack: [
      "React",
      "TypeScript",
      "AWS",
      "Kubernetes",
      "PostgreSQL",
      "GraphQL",
    ],
    github: "#",
  },
  {
    title: "High-Traffic Consumer Application",
    description:
      "Contributed to a React application serving millions of daily active users. Implemented performance optimizations achieving sub-second load times and seamless user experiences at scale.",
    stack: ["React", "Redux", "Node.js", "Redis", "Docker", "CI/CD"],
    github: "#",
  },
  {
    title: "CI/CD + K8s Infrastructure Demo",
    description:
      "Production-ready DevOps pipeline showcasing multi-stage Docker builds, GitHub Actions workflows, Nginx reverse proxy, and Kubernetes deployment on AWS EKS.",
    stack: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Nginx",
      "AWS EKS",
      "Helm",
    ],
    github: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group p-6 rounded-xl bg-card border border-border hover:glow-border transition-all flex flex-col"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5 text-sm"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

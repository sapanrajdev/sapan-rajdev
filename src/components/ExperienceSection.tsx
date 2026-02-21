import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Thoughtworks",
    role: "Senior Full Stack Engineer",
    period: "March 2024 – Present",
    location: "Bengaluru, India",
    highlights: [
      "Led junior developers, providing technical guidance, code reviews, and mentoring to ensure high-quality deliverables and adherence to best practices.",
      "Designed and developed secure, scalable enterprise applications using ReactJS, TypeScript and backend services built with Python, AWS and REST APIs.",
      "Wrote unit tests using Jest & Pytest and implemented integration testing.",
      "Deployed and managed applications in AWS cloud environments.",
      "Handled on CI/CD pipelines using github actions, Docker, Nginx & Kubernetes",
      "Worked in large cross-functional Agile teams to deliver market-leading technology products.",
      "Led root cause analysis and resolved production issues with structured analytical approaches.",
    ],
  },
  {
    company: "Lookout",
    role: "Senior Software Engineer",
    period: "October, 2023 – January, 2024",
    location: "Bengaluru, India",
    highlights: [
      "Developed high-performance React applications with TypeScript",
      "Implemented comprehensive testing strategies with Jest and Cypress",
      "Optimized frontend build pipelines and deployment workflows",
    ],
  },
  {
    company: "Swiggy (via MOURI Tech)",
    role: "Software Engineer",
    period: "December, 2021 – October, 2023",
    location: "Bengaluru, India",
    highlights: [
      "Built high-traffic React applications serving millions of users",
      "Worked with microservices architecture at massive scale",
      "Implemented performance optimizations for critical user flows",
    ],
  },
  {
    company: "Merck & John Deere (via YASH Technologies)",
    role: "Software Engineer",
    period: "July, 2017 – December, 2021",
    location: "Indore, India",
    highlights: [
      "Developed enterprise web applications with React and Java Spring Boot",
      "Built RESTful APIs and integrated with legacy enterprise systems",
      "Contributed to agile transformation and DevOps adoption",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary glow-border" />

                <div className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium flex items-center gap-2">
                        <Briefcase size={14} />
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground font-mono">
                        {exp.period}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

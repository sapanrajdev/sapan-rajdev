import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Server, TestTube, Cloud } from "lucide-react";

const categories = [
  {
    icon: Monitor,
    title: "Frontend",
    skills: ["ReactJS", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "HTML5", "CSS3", "Material UI"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Python", "Node.js", "Express.js", "Java", "Spring Boot", "REST APIs"],
  },
  {
    icon: TestTube,
    title: "Testing",
    skills: ["Jest", "React Testing Library", "Cypress", "Playwright", "Pytest"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Nginx", "GitHub Actions", "CI/CD", "EKS"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Technical Expertise</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all group"
            >
              <cat.icon size={28} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

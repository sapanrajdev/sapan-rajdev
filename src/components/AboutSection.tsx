import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Calendar, Globe, Zap } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Years Experience", value: "8+" },
  { icon: Users, label: "Team Leadership", value: "3+ Devs" },
  { icon: Globe, label: "Self Built Apps", value: "10+" },
  { icon: Zap, label: "Skills", value: "15+" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who I Am</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                I'm a Senior Full Stack Engineer at{" "}
                <span className="text-foreground font-semibold">
                  Thoughtworks
                </span>
                , building enterprise-grade applications with React, TypeScript,
                Python and AWS.
              </p>
              <p>
                With 8+ years of experience spanning frontend architectures,
                backend systems, and DevOps pipelines, I specialize in building
                scalable, cloud-native solutions following Agile methodologies,
                TDD/BDD practices, and clean architecture principles.
              </p>
              <p>
                My passion lies at the intersection of engineering excellence
                and developer experience, creating systems that are not just
                functional, but maintainable, testable, and delightful to work
                with.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-shadow"
                >
                  <stat.icon size={24} className="text-primary mb-3" />
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

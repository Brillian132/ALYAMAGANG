import { motion } from "framer-motion";

const experiences = [
  {
    role: "Secretary",
    organization: "Digital Business Student Association",
    description: "Owned organizational administration, managed cross-divisional communication, and ensured operational excellence.",
    period: "2023 - Present",
  },
  {
    role: "Person in Charge",
    organization: "Digital Business Week",
    description: "Led multi-event coordination, aligned stakeholders, and executed programs with structured planning.",
    period: "2023",
  },
  {
    role: "Practicum Assistant",
    organization: "LTIK (Laboratory)",
    description: "Supported technical learning, guided students, and strengthened analytical communication.",
    period: "2023",
  },
  {
    role: "HR Junior Staff",
    organization: "Student Organization",
    description: "Handled member data, internal coordination, and organizational support.",
    period: "2022 - 2023",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Leadership Journey
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent transform sm:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 sm:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg transform -translate-x-1/2 z-10" />

              {/* Content */}
              <div className={`ml-16 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12 sm:text-left'}`}>
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <span className="inline-block text-xs text-primary font-medium tracking-wider uppercase mb-2">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mb-3">
                    {exp.organization}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

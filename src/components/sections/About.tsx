import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "GPA 3.8",
    subtitle: "Academic Excellence",
  },
  {
    icon: GraduationCap,
    title: "Telkom University",
    subtitle: "Surabaya",
  },
  {
    icon: MapPin,
    title: "Leadership",
    subtitle: "& Project Experience",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card/50">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-8">
            Driven by Purpose
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            A highly driven Digital Business student recognized for leadership, structured thinking, 
            and collaborative execution. Experienced in managing organizational operations, 
            coordinating large-scale academic events, and supporting data-informed decision making.
          </p>
        </motion.div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative bg-background rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/20">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

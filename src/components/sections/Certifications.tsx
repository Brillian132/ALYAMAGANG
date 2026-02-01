import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { name: "Email Marketing", issuer: "HubSpot", color: "from-orange-400/20 to-orange-500/10" },
  { name: "SEO Certified", issuer: "HubSpot", color: "from-orange-400/20 to-orange-500/10" },
  { name: "Content Marketing", issuer: "HubSpot", color: "from-orange-400/20 to-orange-500/10" },
  { name: "Social Media Marketing", issuer: "HubSpot", color: "from-orange-400/20 to-orange-500/10" },
  { name: "Beginner SEO", issuer: "Semrush", color: "from-violet-400/20 to-violet-500/10" },
  { name: "AI-Powered Marketer", issuer: "Semrush", color: "from-violet-400/20 to-violet-500/10" },
  { name: "Fundamentals of Digital Marketing", issuer: "Google", color: "from-blue-400/20 to-blue-500/10" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground">
            Credentials & Learning
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-br ${cert.color} rounded-2xl p-6 border border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 overflow-hidden`}>
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background/40" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Award className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer}
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

export default Certifications;

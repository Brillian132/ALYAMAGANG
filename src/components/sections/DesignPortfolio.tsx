import { motion } from "framer-motion";
import { Figma, ExternalLink } from "lucide-react";

const designs = [
  {
    title: "Design Project 1",
    category: "UI/UX Design",
    tool: "Figma",
    description: "Description of your design project",
    image: "figmaalya.png",
    link: "https://www.figma.com/design/thH1mAdiIMhU1ojqwyCzub/kelompok-1-DS-DEX?node-id=0-1&p=f",
    color: "from-purple-400/20 to-pink-500/10"
  }
]; // ✅ WAJIB ditutup

const DesignPortfolio = () => {
  return (
    <section id="designs" className="py-24 px-6 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-3">
            Design Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Creative Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my design projects created with Figma and other design tools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={index} // ✅ lebih aman pakai index atau id unik
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <a href={design.link} target="_blank" rel="noopener noreferrer">
                <div className="relative rounded-2xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                  
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-secondary to-muted">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="flex items-center gap-2 text-primary">
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm font-medium">View Project</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${design.color} flex items-center justify-center`}
                      >
                        <Figma className="w-4 h-4 text-primary" strokeWidth={2} />
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wide">
                        {design.tool}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {design.title}
                    </h3>

                    <p className="text-sm text-primary/80 font-medium mb-2">
                      {design.category}
                    </p>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {design.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DesignPortfolio;

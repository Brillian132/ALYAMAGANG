import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  const { scrollY } = useScroll();
  
  // Hide announcement bar when scrolling down
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 100], [0, -20]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      style={{ opacity, y }}
      className="fixed top-0 left-0 right-0 z-[60] bg-primary/10 backdrop-blur-sm border-b border-primary/20 pointer-events-none"
    >
      <div className="container max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 py-2.5 text-sm text-foreground">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-muted-foreground">
            Open to <span className="text-foreground font-medium">internship</span> and{" "}
            <span className="text-foreground font-medium">collaboration</span> opportunities
          </span>
          <Sparkles className="w-3.5 h-3.5 text-primary" />
        </div>
      </div>
    </motion.div>
  );
};

export default AnnouncementBar;

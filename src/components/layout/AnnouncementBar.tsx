import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-primary/10 backdrop-blur-sm border-b border-primary/20"
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

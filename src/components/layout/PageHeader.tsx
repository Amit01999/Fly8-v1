
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backLink?: string;
  background?: "gradient" | "plain";
  centerText?: boolean;
};

const PageHeader = ({ 
  title,
  subtitle,
  backLink,
  background = "gradient", 
  centerText = false
}: PageHeaderProps) => {
  return (
    <div className={`py-12 md:py-16 ${background === "gradient" ? "bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20" : ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {backLink && (
          <Link 
            to={backLink} 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back</span>
          </Link>
        )}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${centerText ? "text-center" : ""}`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            {title}
          </h1>
          
          {subtitle && (
            <p className="mt-3 text-lg text-muted-foreground max-w-3xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;

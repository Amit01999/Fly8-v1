
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type PageContainerProps = PropsWithChildren<{
  className?: string;
}>;

const PageContainer = ({ children, className = "" }: PageContainerProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default PageContainer;

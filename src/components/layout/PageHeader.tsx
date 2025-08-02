import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  backLink?: string;
  background?: 'gradient' | 'plain' | 'glassmorphism' | 'mesh';
  centerText?: boolean;
  variant?: 'default' | 'hero' | 'minimal';
};

const PageHeader = ({
  title,
  subtitle,
  backLink,
  background = 'gradient',
  centerText = false,
  variant = 'default',
}: PageHeaderProps) => {
  const getBackgroundClasses = () => {
    switch (background) {
      case 'gradient':
        return 'bg-gradient-to-br from-indigo-200 via-white to-cyan-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900';
      case 'glassmorphism':
        return 'relative bg-white/20 dark:bg-slate-900/40 backdrop-blur-lg border-b border-white/30 dark:border-slate-800/40 shadow-inner';
      case 'mesh':
        return 'relative bg-gradient-to-br from-violet-50 via-orange-50 to-cyan-50 dark:from-slate-900 dark:via-purple-800/20 dark:to-slate-900';
      default:
        return 'bg-background';
    }
  };

  const getPaddingClasses = () => {
    switch (variant) {
      case 'hero':
        return 'py-24 md:py-32';
      case 'minimal':
        return 'py-10 md:py-14';
      default:
        return 'py-16 md:py-20';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      className={`relative overflow-hidden rounded-b-3xl ${getBackgroundClasses()} ${getPaddingClasses()}`}
    >
      {/* Animated blobs for mesh */}
      {background === 'mesh' && (
        <div className="absolute inset-0 opacity-30 z-0">
          <div className="absolute top-0 -left-10 w-80 h-80 bg-purple-300 dark:bg-purple-600/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob"></div>
          <div className="absolute top-0 -right-10 w-80 h-80 bg-yellow-300 dark:bg-yellow-600/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-24 w-80 h-80 bg-pink-300 dark:bg-pink-600/40 rounded-full mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000"></div>
        </div>
      )}

      {/* Glass overlay */}
      {background === 'glassmorphism' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-cyan-400/10 z-0" />
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {backLink && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to={backLink}
              className="group inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-all duration-300 hover:translate-x-1"
            >
              <div className="p-2 rounded-full bg-background/40 dark:bg-slate-800/40 backdrop-blur-md border border-border/30 group-hover:border-border shadow-sm">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
              </div>
              <span className="ml-3 font-medium text-sm">Back</span>
            </Link>
          </motion.div>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={`${centerText ? 'text-center' : ''}`}
        >
          <motion.div variants={itemVariants}>
            <h1
              className={`font-extrabold text-foreground tracking-tight relative
              ${
                variant === 'hero'
                  ? 'text-4xl md:text-6xl lg:text-7xl'
                  : variant === 'minimal'
                  ? 'text-2xl md:text-4xl'
                  : 'text-3xl md:text-5xl'
              }
              ${centerText ? 'mx-auto' : ''}
              bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent
            `}
            >
              {title}
              {variant === 'hero' && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                  className={`h-1 mt-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-full ${
                    centerText ? 'mx-auto' : ''
                  }`}
                  style={{ width: '60%' }}
                />
              )}
            </h1>
          </motion.div>

          {subtitle && (
            <motion.div variants={itemVariants}>
              <p
                className={`mt-6 text-muted-foreground font-light leading-relaxed ${
                  variant === 'hero'
                    ? 'text-lg md:text-2xl max-w-4xl'
                    : variant === 'minimal'
                    ? 'text-base md:text-lg max-w-2xl'
                    : 'text-lg md:text-xl max-w-3xl'
                } ${centerText ? 'mx-auto' : ''}`}
              >
                {subtitle}
              </p>
            </motion.div>
          )}

          {variant === 'hero' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 flex justify-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <div className="w-2 h-2 rounded-full bg-secondary animate-ping delay-200" />
              <div className="w-2 h-2 rounded-full bg-accent animate-ping delay-400" />
            </motion.div>
          )}
        </motion.div>
      </div>

      {variant === 'minimal' && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      )}
    </div>
  );
};

export default PageHeader;

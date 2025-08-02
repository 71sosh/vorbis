import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  LayoutTemplate, 
  Code, 
  Rocket, 
  FileCode, 
  PencilRuler, 
  CloudUpload 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const cardHoverVariants = {
  hover: { 
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: 0.3, ease: 'easeOut' }
  }
};

// MERGED VARIANTS TO FIX DUPLICATE ATTRIBUTE
const mergedCardVariants = {
  ...itemVariants,
  hover: cardHoverVariants.hover
};

const HomePage = () => {
  useEffect(() => {
    // Initialize animations
    const animateGradient = () => {
      const elements = document.querySelectorAll('.animated-gradient');
      elements.forEach(el => {
        el.classList.remove('animated-gradient');
        void el.offsetWidth;
        el.classList.add('animated-gradient');
      });
    };
    
    animateGradient();
    const interval = setInterval(animateGradient, 8000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <LayoutTemplate className="w-8 h-8 text-purple-600" />,
      title: 'Production-Ready Templates',
      description: 'Professionally designed templates with best practices built-in'
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: 'Customize & Deploy',
      description: 'Fully editable codebase with one-click deployment'
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: 'Developer Experience First',
      description: 'Clean code, TypeScript support, and comprehensive docs'
    }
  ];

  const steps = [
    {
      icon: <FileCode className="w-10 h-10 text-purple-600" />,
      title: 'Select Template',
      description: 'Choose from our library of professionally designed templates'
    },
    {
      icon: <PencilRuler className="w-10 h-10 text-purple-600" />,
      title: 'Customize Code',
      description: 'Modify components, styles, and functionality to fit your needs'
    },
    {
      icon: <CloudUpload className="w-10 h-10 text-purple-600" />,
      title: 'Deploy Instantly',
      description: 'Export and deploy your customized application with one click'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 -right-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-20 w-72 h-72 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-center">
              <div className="text-5xl font-bold font-sans">
                <span className="animated-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                  V
                </span>
                <span className="text-black dark:text-white">orbis</span>
                <span className="animated-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent"> B</span>
                <span className="text-black dark:text-white">uilder</span>
              </div>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-3xl leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <span className="block">Build production-ready</span>
            <span className="block">
              <span className="animated-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                React apps
              </span>{' '}
              in minutes
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-10 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            Vorbis is built for bringing developers and templates together. 
            Create, customize, and deploy full-stack applications with one click.
          </motion.p>

          {/* Key Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-500"
                variants={mergedCardVariants}
                whileHover="hover"
              >
                <div className="mb-4 p-3 bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold shadow-lg transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <Link to="/builder">
                Start Building Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm font-light">
              No credit card required. Get started in seconds.
            </p>
          </motion.div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            How Developers Use Vorbis
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-light">
            Accelerate your workflow with our powerful templates
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-500"
              variants={mergedCardVariants}
              whileHover="hover"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  {step.icon}
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-4 font-mono">{index + 1}</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* CTA Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to accelerate your development?
          </h2>
          <p className="text-lg text-purple-200 max-w-2xl mx-auto mb-10 font-light">
            Join thousands of developers building better applications faster with Vorbis.
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-slate-100 font-bold shadow-lg"
            >
              <Link to="/builder">
                Start Building Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Footer */}
      <div className="relative z-10 border-t border-slate-200 dark:border-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <div className="text-2xl font-bold font-sans">
              <span className="animated-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                V
              </span>
              <span className="text-black dark:text-white">orbis</span>
              <span className="animated-gradient bg-gradient-to-r from-purple-500 via-indigo-500 to-violet-500 bg-clip-text text-transparent"> B</span>
              <span className="text-black dark:text-white">uilder</span>
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
      
      {/* Animation keyframes in style tag */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animated-gradient {
          background-size: 300% 300%;
          animation: gradient 6s ease infinite;
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;

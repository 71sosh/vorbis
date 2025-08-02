import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ fullScreen = false }) => {
  return (
    <div className={`flex items-center justify-center ${fullScreen ? 'h-screen w-screen' : 'h-full w-full'}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="border-4 border-t-purple-500 border-r-purple-500 border-b-transparent border-l-transparent rounded-full w-12 h-12"
      />
    </div>
  );
};

export default LoadingSpinner;

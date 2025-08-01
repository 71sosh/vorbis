import React from 'react';
import { BarChart3 } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Analytics</h1>
            <p className="text-gray-600 dark:text-gray-400">Track and visualize your data metrics</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Analytics Content</h3>
        <p className="text-gray-600 dark:text-gray-400">
          This is a simple page for the Analytics module. 
          Add your custom content and components here.
        </p>
      </div>
    </div>
  );
};

export default Analytics;

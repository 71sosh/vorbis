import { DashboardPage, TemplatePreset } from '@/types/dashboard';

export const dashboardPages: DashboardPage[] = [
  // Essential Modules
  {
    id: 'dashboard-overview',
    name: 'Dashboard Overview',
    category: 'Essential Modules',
    icon: 'LayoutDashboard',
    description: 'Main dashboard with KPIs and charts',
  },
  {
    id: 'calendar',
    name: 'Calendar',
    category: 'Essential Modules',
    icon: 'Calendar',
    description: 'Schedule and event management',
  },
  {
    id: 'tasks',
    name: 'Tasks',
    category: 'Essential Modules',
    icon: 'CheckSquare',
    description: 'Task management with kanban boards',
  },
  {
    id: 'messages',
    name: 'Messages',
    category: 'Essential Modules',
    icon: 'MessageSquare',
    description: 'Internal communication system',
  },
  
  // Business Tools
  {
    id: 'invoices',
    name: 'Invoices',
    category: 'Business Tools',
    icon: 'FileText',
    description: 'Invoice generation and management',
  },
  {
    id: 'expense-tracking',
    name: 'Expense Tracking',
    category: 'Business Tools',
    icon: 'Receipt',
    description: 'Track and categorize business expenses',
  },
  {
    id: 'payroll',
    name: 'Payroll',
    category: 'Business Tools',
    icon: 'DollarSign',
    description: 'Employee payroll management',
  },
  {
    id: 'inventory',
    name: 'Inventory',
    category: 'Business Tools',
    icon: 'Package',
    description: 'Stock and inventory tracking',
  },
  {
    id: 'accounting',
    name: 'Accounting',
    category: 'Business Tools',
    icon: 'Calculator',
    description: 'Financial accounting and reporting',
  },

  // Project Management
  {
    id: 'project-boards',
    name: 'Project Boards',
    category: 'Project Management',
    icon: 'Trello',
    description: 'Kanban-style project management',
  },
  {
    id: 'time-tracking',
    name: 'Time Tracking',
    category: 'Project Management',
    icon: 'Clock',
    description: 'Track time spent on projects',
  },
  {
    id: 'team-collaboration',
    name: 'Team Collaboration',
    category: 'Project Management',
    icon: 'Users',
    description: 'Team workspace and file sharing',
  },
  {
    id: 'gantt-charts',
    name: 'Gantt Charts',
    category: 'Project Management',
    icon: 'BarChart3',
    description: 'Project timeline visualization',
  },
  {
    id: 'resource-management',
    name: 'Resource Management',
    category: 'Project Management',
    icon: 'Settings',
    description: 'Manage project resources and allocation',
  },

  // Sales CRM
  {
    id: 'lead-management',
    name: 'Lead Management',
    category: 'Sales CRM',
    icon: 'Target',
    description: 'Track and nurture sales leads',
  },
  {
    id: 'contact-management',
    name: 'Contact Management',
    category: 'Sales CRM',
    icon: 'ContactRound',
    description: 'Customer contact database',
  },
  {
    id: 'sales-pipeline',
    name: 'Sales Pipeline',
    category: 'Sales CRM',
    icon: 'TrendingUp',
    description: 'Visual sales pipeline tracking',
  },
  {
    id: 'deal-tracking',
    name: 'Deal Tracking',
    category: 'Sales CRM',
    icon: 'Handshake',
    description: 'Monitor deals and opportunities',
  },
  {
    id: 'customer-support',
    name: 'Customer Support',
    category: 'Sales CRM',
    icon: 'Headphones',
    description: 'Help desk and ticket management',
  },

  // E-commerce
  {
    id: 'product-catalog',
    name: 'Product Catalog',
    category: 'E-commerce',
    icon: 'ShoppingBag',
    description: 'Product inventory and catalog',
  },
  {
    id: 'order-management',
    name: 'Order Management',
    category: 'E-commerce',
    icon: 'ShoppingCart',
    description: 'Process and track orders',
  },
  {
    id: 'customer-analytics',
    name: 'Customer Analytics',
    category: 'E-commerce',
    icon: 'Users2',
    description: 'Customer behavior insights',
  },
  {
    id: 'shipping-logistics',
    name: 'Shipping & Logistics',
    category: 'E-commerce',
    icon: 'Truck',
    description: 'Shipping and delivery management',
  },
  {
    id: 'payment-processing',
    name: 'Payment Processing',
    category: 'E-commerce',
    icon: 'CreditCard',
    description: 'Payment gateway integration',
  },

  // Marketing Analytics
  {
    id: 'campaign-management',
    name: 'Campaign Management',
    category: 'Marketing Analytics',
    icon: 'Megaphone',
    description: 'Marketing campaign tracking',
  },
  {
    id: 'social-media',
    name: 'Social Media',
    category: 'Marketing Analytics',
    icon: 'Share2',
    description: 'Social media management',
  },
  {
    id: 'email-marketing',
    name: 'Email Marketing',
    category: 'Marketing Analytics',
    icon: 'Mail',
    description: 'Email campaign automation',
  },
  {
    id: 'seo-analytics',
    name: 'SEO Analytics',
    category: 'Marketing Analytics',
    icon: 'Search',
    description: 'Search engine optimization tracking',
  },
  {
    id: 'conversion-tracking',
    name: 'Conversion Tracking',
    category: 'Marketing Analytics',
    icon: 'MousePointerClick',
    description: 'Track conversion rates and funnels',
  },

  // HR Management
  {
    id: 'employee-directory',
    name: 'Employee Directory',
    category: 'HR Management',
    icon: 'UserCircle',
    description: 'Employee information database',
  },
  {
    id: 'recruitment',
    name: 'Recruitment',
    category: 'HR Management',
    icon: 'UserPlus',
    description: 'Hiring and recruitment tracking',
  },
  {
    id: 'performance-reviews',
    name: 'Performance Reviews',
    category: 'HR Management',
    icon: 'ClipboardCheck',
    description: 'Employee performance management',
  },
  {
    id: 'leave-management',
    name: 'Leave Management',
    category: 'HR Management',
    icon: 'CalendarX',
    description: 'Track employee leave and absences',
  },
  {
    id: 'training-development',
    name: 'Training & Development',
    category: 'HR Management',
    icon: 'GraduationCap',
    description: 'Employee learning management',
  },

  // AI-Powered
  {
    id: 'predictive-forecasting',
    name: 'Predictive Forecasting',
    category: 'AI-Powered',
    icon: 'Brain',
    description: 'AI-powered business forecasting',
    isNew: true,
  },
  {
    id: 'automation-workflows',
    name: 'Automation Workflows',
    category: 'AI-Powered',
    icon: 'Workflow',
    description: 'Intelligent process automation',
    isNew: true,
  },
  {
    id: 'sentiment-analysis',
    name: 'Sentiment Analysis',
    category: 'AI-Powered',
    icon: 'Heart',
    description: 'Customer sentiment tracking',
    isNew: true,
  },
  {
    id: 'recommendation-engine',
    name: 'Recommendation Engine',
    category: 'AI-Powered',
    icon: 'Lightbulb',
    description: 'AI-powered recommendations',
    isNew: true,
  },
  {
    id: 'chatbot-integration',
    name: 'Chatbot Integration',
    category: 'AI-Powered',
    icon: 'Bot',
    description: 'AI chatbot for customer service',
    isNew: true,
  },

  // Specialized
  {
    id: 'iot-monitoring',
    name: 'IoT Monitoring',
    category: 'Specialized',
    icon: 'Wifi',
    description: 'Internet of Things device monitoring',
  },
  {
    id: 'legal-case-management',
    name: 'Legal Case Management',
    category: 'Specialized',
    icon: 'Scale',
    description: 'Legal case tracking and documentation',
  },
  {
    id: 'healthcare-records',
    name: 'Healthcare Records',
    category: 'Specialized',
    icon: 'Activity',
    description: 'Patient records management',
  },
  {
    id: 'financial-trading',
    name: 'Financial Trading',
    category: 'Specialized',
    icon: 'TrendingUp',
    description: 'Trading dashboard and portfolio',
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    category: 'Specialized',
    icon: 'Home',
    description: 'Property management system',
  },
];

export const categories = [
  'Essential Modules',
  'Business Tools',
  'Project Management',
  'Sales CRM',
  'E-commerce',
  'Marketing Analytics',
  'HR Management',
  'AI-Powered',
  'Specialized',
];

export const templatePresets: TemplatePreset[] = [
  {
    id: 'startup',
    name: 'Startup',
    description: 'Essential tools for new businesses',
    pageIds: ['dashboard-overview', 'tasks', 'expense-tracking', 'team-collaboration', 'lead-management'],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Complete e-commerce management',
    pageIds: ['dashboard-overview', 'product-catalog', 'order-management', 'customer-analytics', 'inventory'],
  },
  {
    id: 'freelancer',
    name: 'Freelancer',
    description: 'Perfect for independent professionals',
    pageIds: ['dashboard-overview', 'time-tracking', 'invoices', 'project-boards', 'expense-tracking'],
  },
];

export const getCategoryIcon = (category: string): string => {
  const iconMap: Record<string, string> = {
    'Essential Modules': 'Star',
    'Business Tools': 'Briefcase',
    'Project Management': 'FolderOpen',
    'Sales CRM': 'Target',
    'E-commerce': 'ShoppingBag',
    'Marketing Analytics': 'BarChart3',
    'HR Management': 'Users',
    'AI-Powered': 'Brain',
    'Specialized': 'Settings',
  };
  return iconMap[category] || 'Folder';
};

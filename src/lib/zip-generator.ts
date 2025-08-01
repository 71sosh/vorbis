import JSZip from 'jszip';
import { DashboardProject, DashboardPage } from '@/types/dashboard';
import { getDesignsForPage } from '@/lib/design-templates';

export const generateProjectZip = async (project: DashboardProject): Promise<Blob> => {
  const zip = new JSZip();

  // Package.json
  const packageJson = {
    name: project.projectName.toLowerCase().replace(/\s+/g, '-'),
    version: '0.1.0',
    private: true,
    dependencies: {
      react: '^18.3.1',
      'react-dom': '^18.3.1',
      'react-router-dom': '^6.26.1',
      'react-scripts': '5.0.1',
      tailwindcss: '^3.4.17',
      '@headlessui/react': '^2.1.10',
      '@heroicons/react': '^2.1.5',
      'lucide-react': '^0.453.0',
      clsx: '^2.1.1',
    },
    scripts: {
      start: 'react-scripts start',
      build: 'react-scripts build',
      test: 'react-scripts test',
      eject: 'react-scripts eject',
    },
    eslintConfig: {
      extends: ['react-app', 'react-app/jest'],
    },
    browserslist: {
      production: ['>0.2%', 'not dead', 'not op_mini all'],
      development: [
        'last 1 chrome version',
        'last 1 firefox version',
        'last 1 safari version',
      ],
    },
  };

  zip.file('package.json', JSON.stringify(packageJson, null, 2));

  // README.md
  const readme = `# ${project.projectName}

Generated with Vorbis Dashboard Builder

## Getting Started

1. Install dependencies:
\`\`\`
npm install
\`\`\`

2. Start the development server:
\`\`\`
npm start
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Pages

${project.selectedPages.map(page => `- ${page.name}: ${page.description}`).join('\n')}

## Theme Configuration

- Primary Color: ${project.themeConfig.primaryColor}
- Dark Mode: ${project.themeConfig.darkMode ? 'Enabled' : 'Disabled'}
- Font Family: ${project.themeConfig.fontFamily}

## Page Designs
${project.selectedPages.map(page => {
  const design = project.pageDesigns.find(pd => pd.pageId === page.id);
  return `- ${page.name}: ${design?.designId || 'Default Design'}`;
}).join('\n')}
`;

  zip.file('README.md', readme);

  // Public folder
  const publicFolder = zip.folder('public');
  if (publicFolder) {
    publicFolder.file('index.html', generateIndexHtml(project));
  }

  // Src folder
  const srcFolder = zip.folder('src');
  if (srcFolder) {
    srcFolder.file('index.js', generateIndexJs());
    srcFolder.file('App.jsx', generateAppJsx(project));
    srcFolder.file('index.css', generateIndexCss(project));

    // Components folder
    const componentsFolder = srcFolder.folder('components');
    if (componentsFolder) {
      componentsFolder.file('Layout.jsx', generateLayoutComponent());
      componentsFolder.file('Sidebar.jsx', generateSidebarComponent(project));
    }

    // Pages folder
    const pagesFolder = srcFolder.folder('pages');
    if (pagesFolder) {
      project.selectedPages.forEach(page => {
        const componentCode = generatePageComponent(project, page);
        pagesFolder.file(`${page.id}.jsx`, componentCode);
      });
    }
  }

  // Tailwind config
  zip.file('tailwind.config.js', generateTailwindConfig(project));
  zip.file('postcss.config.js', generatePostcssConfig());

  return zip.generateAsync({ type: 'blob' });
};

const generateIndexHtml = (project: DashboardProject): string => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="${project.themeConfig.primaryColor}" />
    <meta name="description" content="${project.projectName} - Generated with Vorbis Dashboard Builder" />
    <title>${project.projectName}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=${project.themeConfig.fontFamily.replace(' ', '+')}:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>`;
};

const generateIndexJs = (): string => {
  return `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;
};

const generateAppJsx = (project: DashboardProject): string => {
  const imports = project.selectedPages
    .map(page => `import ${toPascalCase(page.id)} from './pages/${page.id}';`)
    .join('\n');

  const routes = project.selectedPages
    .map((page, index) => {
      const path = index === 0 ? '/' : `/${page.id}`;
      return `        <Route path="${path}" element={<${toPascalCase(page.id)} />} />`;
    })
    .join('\n');

  const redirect = project.selectedPages.length > 0
    ? `        <Route path="*" element={<Navigate to="/" replace />} />`
    : '';

  return `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
${imports}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
${routes}
${redirect}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;`;
};

const generateIndexCss = (project: DashboardProject): string => {
  const hexToHsl = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0;
      }
      h /= 6;
    }

    return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
  };

  const [h, s, l] = hexToHsl(project.themeConfig.primaryColor);

  return `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: hsl(0, 0%, 100%);
  --foreground: hsl(20, 14.3%, 4.1%);
  --muted: hsl(60, 4.8%, 95.9%);
  --muted-foreground: hsl(25, 5.3%, 44.7%);
  --popover: hsl(0, 0%, 100%);
  --popover-foreground: hsl(20, 14.3%, 4.1%);
  --card: hsl(0, 0%, 100%);
  --card-foreground: hsl(20, 14.3%, 4.1%);
  --border: hsl(20, 5.9%, 90%);
  --input: hsl(20, 5.9%, 90%);
  --primary: hsl(${h}, ${s}%, ${l}%);
  --primary-foreground: hsl(${h}, ${s}%, ${l > 50 ? 10 : 90}%);
  --secondary: hsl(60, 4.8%, 95.9%);
  --secondary-foreground: hsl(24, 9.8%, 10%);
  --accent: hsl(60, 4.8%, 95.9%);
  --accent-foreground: hsl(24, 9.8%, 10%);
  --destructive: hsl(0, 84.2%, 60.2%);
  --destructive-foreground: hsl(60, 9.1%, 97.8%);
  --ring: hsl(20, 14.3%, 4.1%);
  --radius: 0.5rem;
}

.dark {
  --background: hsl(240, 10%, 3.9%);
  --foreground: hsl(0, 0%, 98%);
  --muted: hsl(240, 3.7%, 15.9%);
  --muted-foreground: hsl(240, 5%, 64.9%);
  --popover: hsl(240, 10%, 3.9%);
  --popover-foreground: hsl(0, 0%, 98%);
  --card: hsl(240, 10%, 3.9%);
  --card-foreground: hsl(0, 0%, 98%);
  --border: hsl(240, 3.7%, 15.9%);
  --input: hsl(240, 3.7%, 15.9%);
  --primary: hsl(${h}, ${s}%, ${l}%);
  --primary-foreground: hsl(${h}, ${s}%, ${l > 50 ? 10 : 90}%);
  --secondary: hsl(240, 3.7%, 15.9%);
  --secondary-foreground: hsl(0, 0%, 98%);
  --accent: hsl(240, 3.7%, 15.9%);
  --accent-foreground: hsl(0, 0%, 98%);
  --destructive: hsl(0, 62.8%, 30.6%);
  --destructive-foreground: hsl(0, 0%, 98%);
  --ring: hsl(240, 4.9%, 83.9%);
  --radius: 0.5rem;
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
    font-family: '${project.themeConfig.fontFamily}', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}`;
};

const generateTailwindConfig = (project: DashboardProject): string => {
  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['${project.themeConfig.fontFamily}', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
}`;
};

const generatePostcssConfig = (): string => {
  return `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`;
};

const generateLayoutComponent = (): string => {
  return `import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;`;
};

const generateSidebarComponent = (project: DashboardProject): string => {
  const navItems = project.selectedPages
    .map((page, index) => {
      const path = index === 0 ? '/' : `/${page.id}`;
      return `    { name: '${page.name}', path: '${path}', icon: '${page.icon}' },`;
    })
    .join('\n');

  return `import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Calendar, CheckSquare, MessageSquare,
  FileText, Receipt, DollarSign, Package, Calculator,
  Trello, Clock, Users, BarChart3, Settings, Target,
  ContactRound, TrendingUp, Handshake, Headphones,
  ShoppingBag, ShoppingCart, Users2, Truck, CreditCard,
  Megaphone, Share2, Mail, Search, MousePointerClick,
  UserCircle, UserPlus, ClipboardCheck, CalendarX, GraduationCap,
  Brain, Workflow, Heart, Lightbulb, Bot, Wifi, Scale,
  Activity, Home, Star, Briefcase, FolderOpen
} from 'lucide-react';

const iconMap = {
  LayoutDashboard, Calendar, CheckSquare, MessageSquare,
  FileText, Receipt, DollarSign, Package, Calculator,
  Trello, Clock, Users, BarChart3, Settings, Target,
  ContactRound, TrendingUp, Handshake, Headphones,
  ShoppingBag, ShoppingCart, Users2, Truck, CreditCard,
  Megaphone, Share2, Mail, Search, MousePointerClick,
  UserCircle, UserPlus, ClipboardCheck, CalendarX, GraduationCap,
  Brain, Workflow, Heart, Lightbulb, Bot, Wifi, Scale,
  Activity, Home, Star, Briefcase, FolderOpen
};

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
${navItems}
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">${project.projectName}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Management System</p>
          </div>
        </div>
      </div>
      
      <nav className="px-6 py-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const IconComponent = iconMap[item.icon] || LayoutDashboard;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={\`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors \${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }\`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;`;
};

const generatePageComponent = (project: DashboardProject, page: DashboardPage): string => {
  const designId = project.pageDesigns.find(pd => pd.pageId === page.id)?.designId || 'default';
  const designs = getDesignsForPage(page.id);
  const selectedDesign = designs.find(d => d.id === designId);
  const pageContent = selectedDesign ? selectedDesign.content : getDefaultPageContent(page);
  
  const componentName = toPascalCase(page.id);
  
  return `import React from 'react';
import { ${page.icon} } from 'lucide-react';

const ${componentName} = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <div className="flex items-center space-x-3">
          <${page.icon} className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">${page.name}</h1>
            <p className="text-gray-600 dark:text-gray-400">${page.description}</p>
          </div>
        </div>
      </div>

      ${pageContent}
    </div>
  );
};

export default ${componentName};`;
};

const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
};

const getDefaultPageContent = (page: DashboardPage): string => {
  return `
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">${page.name} Feature 1</h3>
        <p className="text-gray-600 dark:text-gray-400">Specialized content for ${page.name.toLowerCase()}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">${page.name} Feature 2</h3>
        <p className="text-gray-600 dark:text-gray-400">Relevant information for this page type</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">${page.name} Metrics</h3>
        <p className="text-gray-600 dark:text-gray-400">Key performance indicators</p>
      </div>
    </div>
  `;
};

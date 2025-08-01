import { DashboardPage } from '@/types/dashboard';

export const getPageTemplate = (page: DashboardPage): string => {
  switch(page.id) {
    case 'dashboard-overview':
      return `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Total Revenue</h3>
            <p className="text-2xl font-bold text-primary">$42,567</p>
            <p className="text-green-500 text-sm">+12% from last month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Active Users</h3>
            <p className="text-2xl font-bold text-primary">1,258</p>
            <p className="text-green-500 text-sm">+8% from last month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Conversion Rate</h3>
            <p className="text-2xl font-bold text-primary">5.2%</p>
            <p className="text-red-500 text-sm">-0.3% from last month</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pending Tasks</h3>
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-slate-500 text-sm">5 completed today</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Overview</h3>
            <div className="h-72 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h3>
            <div className="h-72 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Activity List Placeholder</span>
            </div>
          </div>
        </div>
      `;
    
    case 'analytics':
    case 'customer-analytics':
    case 'seo-analytics':
    case 'conversion-tracking':
      return `
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Chart</h3>
              <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Chart Placeholder</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Engagement Metrics</h3>
              <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Chart Placeholder</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversion Funnel</h3>
            <div className="h-72 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Funnel Chart Placeholder</span>
            </div>
          </div>
        </div>
      `;
    
    case 'crm':
    case 'contact-management':
    case 'lead-management':
      return `
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contacts</h3>
                <button className="bg-primary text-white rounded-lg px-4 py-2">Add Contact</button>
              </div>
              <div className="h-96 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Contacts Table Placeholder</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
              <div className="space-y-4">
                <button className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg px-4 py-3 text-left">
                  Add New Lead
                </button>
                <button className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg px-4 py-3 text-left">
                  Schedule Follow-up
                </button>
                <button className="w-full bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg px-4 py-3 text-left">
                  Create Task
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    
    case 'ecommerce':
    case 'product-catalog':
    case 'order-management':
      return `
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Products</h3>
                <button className="bg-primary text-white rounded-lg px-4 py-2">Add Product</button>
              </div>
              <div className="h-96 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Product Catalog Table Placeholder</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Orders</h3>
              <div className="space-y-4">
                <div className="border-b border-slate-200 dark:border-slate-700 pb-3">
                  <p className="font-medium">#ORD-1289</p>
                  <p className="text-sm text-slate-500">2 items • $128.99</p>
                </div>
                <div className="border-b border-slate-200 dark:border-slate-700 pb-3">
                  <p className="font-medium">#ORD-1287</p>
                  <p className="text-sm text-slate-500">1 item • $49.99</p>
                </div>
                <div>
                  <p className="font-medium">#ORD-1285</p>
                  <p className="text-sm text-slate-500">3 items • $210.50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    
    case 'deal-tracking':
      return `
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deal Pipeline</h3>
              <button className="bg-primary text-white rounded-lg px-4 py-2">New Deal</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Prospects</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="font-medium">Acme Corp</p>
                    <p className="text-sm text-slate-500">$12,000 • 30% probability</p>
                  </div>
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="font-medium">Beta LLC</p>
                    <p className="text-sm text-slate-500">$8,500 • 20% probability</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Negotiation</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-blue-200 dark:border-blue-700">
                    <p className="font-medium">Gamma Inc</p>
                    <p className="text-sm text-slate-500">$25,000 • 65% probability</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Approval</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-purple-200 dark:border-purple-700">
                    <p className="font-medium">Delta Co</p>
                    <p className="text-sm text-slate-500">$42,000 • 85% probability</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Closed</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-green-200 dark:border-green-700">
                    <p className="font-medium">Epsilon Ltd</p>
                    <p className="text-sm text-slate-500">$36,000 • Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Deal Forecast</h3>
              <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Forecast Chart Placeholder</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance vs Target</h3>
              <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Comparison Chart Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      `;

    case 'tasks':
    case 'project-boards':
      return `
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-4">To Do</h3>
            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                <p className="font-medium">Create wireframes</p>
                <p className="text-sm text-slate-500">Design • Due tomorrow</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                <p className="font-medium">Research competitors</p>
                <p className="text-sm text-slate-500">Marketing • Due in 3 days</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-4">In Progress</h3>
            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-slate-700 rounded border border-blue-200 dark:border-blue-700">
                <p className="font-medium">Develop auth module</p>
                <p className="text-sm text-slate-500">Development • Due in 2 days</p>
              </div>
              <div className="p-4 bg-white dark:bg-slate-700 rounded border border-blue-200 dark:border-blue-700">
                <p className="font-medium">Write documentation</p>
                <p className="text-sm text-slate-500">Documentation • Due in 4 days</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200 mb-4">Completed</h3>
            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-slate-700 rounded border border-green-200 dark:border-green-700">
                <p className="font-medium">User testing</p>
                <p className="text-sm text-slate-500">Testing • Completed</p>
              </div>
            </div>
          </div>
        </div>
      `;
    
    // Add more templates as needed
    default:
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
  }
};


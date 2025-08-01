import { DashboardPage } from '@/types/dashboard';

type DesignTemplate = {
  id: string;
  name: string;
  description: string;
  content: string;
};

type PageDesigns = {
  [pageId: string]: DesignTemplate[];
};

export const pageDesigns: PageDesigns = {
  // Dashboard Overview designs
  'dashboard-overview': [
    {
      id: 'dash-1',
      name: 'Analytics Focus',
      description: 'Emphasis on data visualization',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
            <p className="text-2xl font-bold">$42,567</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+12%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Active Users</h3>
            <p className="text-2xl font-bold">1,258</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+8%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
            <p className="text-2xl font-bold">5.2%</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">-0.3%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Pending Tasks</h3>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm opacity-80 mt-1">5 completed today</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Overview</h3>
            <div className="h-72 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Feed</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <span className="text-blue-500">✓</span>
                </div>
                <div>
                  <p className="font-medium">Project completed</p>
                  <p className="text-sm text-gray-500">Just now</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full mr-3">
                  <span className="text-green-500">+</span>
                </div>
                <div>
                  <p className="font-medium">New user registered</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'dash-2',
      name: 'Task Focus',
      description: 'Prioritizes task management',
      content: `
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My Tasks</h3>
              <button className="bg-primary text-white rounded-lg px-3 py-1 text-sm">Add Task</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <input type="checkbox" className="mr-3" />
                <div>
                  <p className="font-medium">Create project proposal</p>
                  <p className="text-sm text-gray-500">Due tomorrow</p>
                </div>
              </div>
              <div className="flex items-center p-3 border border-gray-200 dark:border-gray-700 rounded-lg">
                <input type="checkbox" className="mr-3" />
                <div>
                  <p className="font-medium">Client meeting</p>
                  <p className="text-sm text-gray-500">Today at 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 h-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Progress</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">75%</div>
                  <div className="text-sm text-gray-500">Design</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">42%</div>
                  <div className="text-sm text-gray-500">Development</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">18%</div>
                  <div className="text-sm text-gray-500">Testing</div>
                </div>
              </div>
              <div className="h-48 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Progress Chart Placeholder</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Team Activity</h3>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Activity Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h3>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Calendar Placeholder</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'dash-3',
      name: 'Minimalist',
      description: 'Clean and simple layout',
      content: `
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full p-4 w-24 h-24 flex items-center justify-center mb-4">
            <span className="text-2xl font-bold">$42K</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Monthly Revenue</h2>
          <p className="text-green-500">+12.5% from last month</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm text-center">
            <div className="text-2xl font-bold text-primary mb-2">1,258</div>
            <div className="text-gray-700 dark:text-gray-300">Active Users</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm text-center">
            <div className="text-2xl font-bold text-primary mb-2">5.2%</div>
            <div className="text-gray-700 dark:text-gray-300">Conversion Rate</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm text-center">
            <div className="text-2xl font-bold text-primary mb-2">12</div>
            <div className="text-gray-700 dark:text-gray-300">Pending Tasks</div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Trends</h3>
          <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <span className="text-slate-500 dark:text-slate-400">Chart Placeholder</span>
          </div>
        </div>
      `
    },
    {
      id: 'dash-4',
      name: 'Data Intensive',
      description: 'Focus on metrics and KPIs',
      content: `
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Overview</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">Total Revenue</p>
                <p className="text-xl font-bold">$42,567</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">Avg. Order Value</p>
                <p className="text-xl font-bold">$128.50</p>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">New Customers</p>
                <p className="text-xl font-bold">42</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">Conversion Rate</p>
                <p className="text-xl font-bold">5.2%</p>
              </div>
            </div>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Revenue Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Analytics</h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3">
                <p className="text-2xl font-bold">1,258</p>
                <p className="text-sm text-gray-500">Total Users</p>
              </div>
              <div className="text-center p-3">
                <p className="text-2xl font-bold">842</p>
                <p className="text-sm text-gray-500">Active</p>
              </div>
              <div className="text-center p-3">
                <p className="text-2xl font-bold">64%</p>
                <p className="text-sm text-gray-500">Retention</p>
              </div>
            </div>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">User Chart Placeholder</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'dash-5',
      name: 'Social Integration',
      description: 'Includes social media metrics',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Followers</h3>
            <p className="text-2xl font-bold">24.8K</p>
            <p className="text-sm opacity-80 mt-1">+420 this week</p>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Engagement</h3>
            <p className="text-2xl font-bold">8.2%</p>
            <p className="text-sm opacity-80 mt-1">+1.2% from last week</p>
          </div>
          <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Impressions</h3>
            <p className="text-2xl font-bold">128K</p>
            <p className="text-sm opacity-80 mt-1">+12K this week</p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Click Rate</h3>
            <p className="text-2xl font-bold">4.8%</p>
            <p className="text-sm opacity-80 mt-1">+0.4% from last week</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Content</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium">Summer Campaign Launch</p>
                  <p className="text-sm text-gray-500">Posted 2 days ago</p>
                </div>
                <div className="text-primary font-bold">24K views</div>
              </div>
              <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p className="font-medium">Product Demo</p>
                  <p className="text-sm text-gray-500">Posted 5 days ago</p>
                </div>
                <div className="text-primary font-bold">18K views</div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Audience Demographics</h3>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Demographics Chart Placeholder</span>
            </div>
          </div>
        </div>
      `
    }
  ],
  
  // CRM designs
  'lead-management': [
    {
      id: 'crm-1',
      name: 'Pipeline View',
      description: 'Sales pipeline visualization',
      content: `
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Sales Pipeline</h3>
            <button className="bg-primary text-white rounded-lg px-4 py-2">Add Lead</button>
          </div>
          
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Prospects</div>
              <div className="text-xl font-bold text-primary">24</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Contacted</div>
              <div className="text-xl font-bold text-primary">18</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Qualified</div>
              <div className="text-xl font-bold text-primary">12</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Proposal</div>
              <div className="text-xl font-bold text-primary">8</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-500 mb-2">Closed</div>
              <div className="text-xl font-bold text-primary">5</div>
            </div>
          </div>
          
          <div className="h-96 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <span className="text-slate-500 dark:text-slate-400">Pipeline Visualization Placeholder</span>
          </div>
        </div>
      `
    },
    {
      id: 'crm-2',
      name: 'Contact Centric',
      description: 'Focus on contact management',
      content: `
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary rounded-lg px-4 py-3 font-medium">
                  Add New Contact
                </button>
                <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary rounded-lg px-4 py-3 font-medium">
                  Schedule Meeting
                </button>
                <button className="w-full bg-primary/10 hover:bg-primary/20 text-primary rounded-lg px-4 py-3 font-medium">
                  Send Email Campaign
                </button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activities</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Email sent to John Smith</p>
                  <p className="text-sm text-gray-500">Today at 10:30 AM</p>
                </div>
                <div>
                  <p className="font-medium">Call with Acme Corp</p>
                  <p className="text-sm text-gray-500">Yesterday at 2:15 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Contact List</h3>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search contacts..." 
                    className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-transparent text-sm"
                  />
                </div>
              </div>
              <div className="h-96 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Contacts Table Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'crm-3',
      name: 'Deal Tracker',
      description: 'Focus on deal progression',
      content: `
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deal Stages</h3>
              <button className="bg-primary text-white rounded-lg px-4 py-2">New Deal</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Prospect</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600">
                    <p className="font-medium">Acme Corp</p>
                    <p className="text-sm text-slate-500">$12,000 • 30%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Qualified</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-blue-200 dark:border-blue-700">
                    <p className="font-medium">Beta LLC</p>
                    <p className="text-sm text-slate-500">$8,500 • 50%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Proposal</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-purple-200 dark:border-purple-700">
                    <p className="font-medium">Gamma Inc</p>
                    <p className="text-sm text-slate-500">$25,000 • 75%</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-3">Closed Won</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-white dark:bg-slate-700 rounded border border-green-200 dark:border-green-700">
                    <p className="font-medium">Delta Co</p>
                    <p className="text-sm text-slate-500">$42,000 • Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Forecast</h3>
              <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Forecast Chart Placeholder</span>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performers</h3>
              <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Team Performance Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'crm-4',
      name: 'Analytics Focus',
      description: 'Data-driven CRM insights',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total Leads</h3>
            <p className="text-2xl font-bold">128</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+12 this week</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Conversion Rate</h3>
            <p className="text-2xl font-bold">8.5%</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+1.2%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Avg. Deal Size</h3>
            <p className="text-2xl font-bold">$12,800</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+$1,200</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Sales Cycle</h3>
            <p className="text-2xl font-bold">24 days</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">-3 days</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Lead Source Analysis</h3>
            <div className="h-80 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Source Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Deal Stage Distribution</h3>
            <div className="h-80 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Stage Chart Placeholder</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'crm-5',
      name: 'Team Collaboration',
      description: 'Focus on team activities',
      content: `
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Team Performance</h3>
                <div className="flex space-x-2">
                  <button className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm">This Week</button>
                  <button className="bg-primary text-white rounded-lg px-3 py-1 text-sm">This Month</button>
                </div>
              </div>
              <div className="h-80 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-slate-500 dark:text-slate-400">Performance Chart Placeholder</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performers</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <p className="font-medium">Sarah Johnson</p>
                  <div className="flex items-center">
                    <span className="text-primary font-bold">$42,800</span>
                    <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 ml-2">+12%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <p className="font-medium">Michael Chen</p>
                  <div className="flex items-center">
                    <span className="text-primary font-bold">$38,500</span>
                    <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 ml-2">+8%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <p className="font-medium">Emma Rodriguez</p>
                  <div className="flex items-center">
                    <span className="text-primary font-bold">$35,200</span>
                    <span className="text-xs bg-green-100 text-green-800 rounded-full px-2 py-1 ml-2">+5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ],
  
  // Project Management designs
  'project-boards': [
    {
      id: 'proj-1',
      name: 'Kanban Style',
      description: 'Drag-and-drop task management',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">To Do</h3>
              <span className="bg-slate-200 dark:bg-slate-700 rounded-full px-2 py-1 text-xs">3 tasks</span>
            </div>
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
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">In Progress</h3>
              <span className="bg-blue-200 dark:bg-blue-700 rounded-full px-2 py-1 text-xs">2 tasks</span>
            </div>
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
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-200">Completed</h3>
              <span className="bg-green-200 dark:bg-green-700 rounded-full px-2 py-1 text-xs">1 task</span>
            </div>
            <div className="space-y-3">
              <div className="p-4 bg-white dark:bg-slate-700 rounded border border-green-200 dark:border-green-700">
                <p className="font-medium">User testing</p>
                <p className="text-sm text-slate-500">Testing • Completed</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'proj-2',
      name: 'Timeline View',
      description: 'Gantt chart visualization',
      content: `
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Timeline</h3>
            <button className="bg-primary text-white rounded-lg px-4 py-2">Add Task</button>
          </div>
          <div className="h-96 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <span className="text-slate-500 dark:text-slate-400">Gantt Chart Placeholder</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <div>
                  <p className="font-medium">Design Review</p>
                  <p className="text-sm text-gray-500">Tomorrow • 2:00 PM</p>
                </div>
                <button className="text-primary text-sm">Details</button>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-3">
                <div>
                  <p className="font-medium">Sprint Planning</p>
                  <p className="text-sm text-gray-500">In 3 days • 10:00 AM</p>
                </div>
                <button className="text-primary text-sm">Details</button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Resource Allocation</h3>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Resource Chart Placeholder</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'proj-3',
      name: 'List View',
      description: 'Detailed task listing',
      content: `
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Tasks</h3>
            <div className="flex space-x-2">
              <input 
                type="text" 
                placeholder="Search tasks..." 
                className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-transparent text-sm"
              />
              <button className="bg-primary text-white rounded-lg px-4 py-2">Add Task</button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Task</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Assignee</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Due Date</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Status</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">
                    <p className="font-medium">Create wireframes</p>
                    <p className="text-sm text-gray-500">Design phase</p>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                      <span>Sarah J.</span>
                    </div>
                  </td>
                  <td className="py-3">Tomorrow</td>
                  <td className="py-3">
                    <span className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-xs">In Progress</span>
                  </td>
                  <td className="py-3">
                    <span className="text-red-500">High</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">
                    <p className="font-medium">Develop auth module</p>
                    <p className="text-sm text-gray-500">Development</p>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8 mr-2" />
                      <span>Michael C.</span>
                    </div>
                  </td>
                  <td className="py-3">In 2 days</td>
                  <td className="py-3">
                    <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs">To Do</span>
                  </td>
                  <td className="py-3">
                    <span className="text-amber-500">Medium</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'proj-4',
      name: 'Dashboard View',
      description: 'Project metrics overview',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Total Tasks</h3>
            <p className="text-2xl font-bold">24</p>
            <p className="text-sm opacity-80 mt-1">5 completed</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">On Schedule</h3>
            <p className="text-2xl font-bold">78%</p>
            <p className="text-sm opacity-80 mt-1">of tasks</p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Budget</h3>
            <p className="text-2xl font-bold">$42,800</p>
            <p className="text-sm opacity-80 mt-1">$3,200 remaining</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Team Capacity</h3>
            <p className="text-2xl font-bold">82%</p>
            <p className="text-sm opacity-80 mt-1">utilization</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Task Distribution</h3>
            <div className="h-80 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Pie Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Burn Down Chart</h3>
            <div className="h-80 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Burn Down Chart Placeholder</span>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'proj-5',
      name: 'Resource View',
      description: 'Team allocation and workload',
      content: `
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Team Workload</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Sarah Johnson</span>
                <span>78%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Michael Chen</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span>Emma Rodriguez</span>
                <span>92%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div className="bg-amber-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills Matrix</h3>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Skills Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Availability</h3>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Calendar Placeholder</span>
            </div>
          </div>
        </div>
      `
    }
  ],

  // E-commerce designs
  'product-catalog': [
    {
      id: 'ecom-1',
      name: 'Grid View',
      description: 'Product cards in grid layout',
      content: `
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Product Catalog</h3>
            <button className="bg-primary text-white rounded-lg px-4 py-2">Add Product</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 h-48 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Premium Headphones</h4>
                <p className="text-primary font-bold mt-1">$129.99</p>
                <p className="text-sm text-gray-500 mt-2">Electronics</p>
              </div>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 h-48 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-gray-900 dark:text-white">Wireless Keyboard</h4>
                <p className="text-primary font-bold mt-1">$79.99</p>
                <p className="text-sm text-gray-500 mt-2">Accessories</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 'ecom-2',
      name: 'Table View',
      description: 'Product listing in table format',
      content: `
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Products</h3>
            <button className="bg-primary text-white rounded-lg px-4 py-2">Add Product</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Product</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Category</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Price</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Stock</th>
                  <th className="text-left py-3 text-gray-500 dark:text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                      <div>
                        <p className="font-medium">Premium Headphones</p>
                        <p className="text-sm text-gray-500">SKU: PH-001</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">Electronics</td>
                  <td className="py-3">$129.99</td>
                  <td className="py-3">42</td>
                  <td className="py-3">
                    <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-xs">In Stock</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10 mr-3" />
                      <div>
                        <p className="font-medium">Wireless Keyboard</p>
                        <p className="text-sm text-gray-500">SKU: WK-202</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3">Accessories</td>
                  <td className="py-3">$79.99</td>
                  <td className="py-3">18</td>
                  <td className="py-3">
                    <span className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-xs">Low Stock</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    // 3 more e-commerce designs would be added here
  ],

  // Marketing Analytics designs
  'campaign-management': [
    {
      id: 'mkt-1',
      name: 'Campaign Overview',
      description: 'High-level campaign metrics',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Impressions</h3>
            <p className="text-2xl font-bold">128K</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+12%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Clicks</h3>
            <p className="text-2xl font-bold">8,420</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+8%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Conversions</h3>
            <p className="text-2xl font-bold">1,258</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+5.2%</span>
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">ROI</h3>
            <p className="text-2xl font-bold">4.8x</p>
            <div className="mt-2 flex items-center">
              <span className="text-sm bg-white/20 rounded-full px-2 py-1">+0.8x</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Campaign Performance</h3>
          <div className="h-96 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
            <span className="text-slate-500 dark:text-slate-400">Performance Chart Placeholder</span>
          </div>
        </div>
      `
    },
    // 4 more marketing designs would be added here
  ],

  // HR Management designs
  'employee-directory': [
    {
      id: 'hr-1',
      name: 'Directory View',
      description: 'Employee cards with details',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Sarah Johnson</h3>
                <p className="text-gray-500">Senior Designer</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-gray-500 w-24">Email:</span>
                <span>sarah@company.com</span>
              </p>
              <p className="flex items-center">
                <span className="text-gray-500 w-24">Department:</span>
                <span>Design</span>
              </p>
              <p className="flex items-center">
                <span className="text-gray-500 w-24">Status:</span>
                <span className="text-green-500">Active</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Michael Chen</h3>
                <p className="text-gray-500">Frontend Developer</p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="text-gray-500 w-24">Email:</span>
                <span>michael@company.com</span>
              </p>
              <p className="flex items-center">
                <span className="text-gray-500 w-24">Department:</span>
                <span>Engineering</span>
              </p>
              <p className="flex items-center">
                <span className="text-gray-500 w-24">Status:</span>
                <span className="text-green-500">Active</span>
              </p>
            </div>
          </div>
        </div>
      `
    },
    // 4 more HR designs would be added here
  ],

  // AI-Powered designs
  'predictive-forecasting': [
    {
      id: 'ai-1',
      name: 'Forecast Dashboard',
      description: 'Predictive analytics visualization',
      content: `
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Forecast</h3>
            <div className="h-80 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Forecast Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Prediction Accuracy</h3>
            <div className="h-80 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Accuracy Chart Placeholder</span>
            </div>
          </div>
        </div>
      `
    },
    // 4 more AI designs would be added here
  ],

  // Specialized designs
  'iot-monitoring': [
    {
      id: 'iot-1',
      name: 'Device Dashboard',
      description: 'Real-time IoT device monitoring',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Device Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Smart Thermostat</span>
                </div>
                <span className="text-sm text-gray-500">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Security Camera</span>
                </div>
                <span className="text-sm text-gray-500">Online</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <span>Smart Lock</span>
                </div>
                <span className="text-sm text-gray-500">Offline</span>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Device Map</h3>
            <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-slate-500 dark:text-slate-400">Device Map Placeholder</span>
            </div>
          </div>
        </div>
      `
    },
    // 4 more IoT designs would be added here
  ],

  // Default template for pages without specific designs
  'default': [
    {
      id: 'default',
      name: 'Standard Layout',
      description: 'Default page template',
      content: `
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Content Section</h3>
            <p className="text-gray-600 dark:text-gray-400">This is the default layout for this page type with relevant information.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Data Visualization</h3>
            <div className="h-48 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mt-2">
              <span className="text-slate-500 dark:text-slate-400">Chart Placeholder</span>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Recent Activity</h3>
            <div className="space-y-3 mt-2">
              <div>
                <p className="font-medium">System updated</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-gray-500">Today at 9:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ]
};

// Add default templates for all pages without specific designs
const allPages = [
  'calendar', 'tasks', 'messages', 'invoices', 'expense-tracking',
  'payroll', 'inventory', 'accounting', 'time-tracking', 
  'team-collaboration', 'gantt-charts', 'resource-management',
  'contact-management', 'sales-pipeline', 'deal-tracking',
  'customer-support', 'order-management', 'customer-analytics',
  'shipping-logistics', 'payment-processing', 'social-media',
  'email-marketing', 'seo-analytics', 'conversion-tracking',
  'recruitment', 'performance-reviews', 'leave-management',
  'training-development', 'automation-workflows', 'sentiment-analysis',
  'recommendation-engine', 'chatbot-integration', 'legal-case-management',
  'healthcare-records', 'financial-trading', 'real-estate'
];

allPages.forEach(pageId => {
  if (!pageDesigns[pageId]) {
    pageDesigns[pageId] = pageDesigns['default'];
  }
});

export const getDesignsForPage = (pageId: string) => {
  return pageDesigns[pageId] || pageDesigns['default'];
};

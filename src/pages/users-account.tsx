import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Trash2, Edit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { supabase } from '@/lib/supabaseClient';

interface DashboardProject {
  id: string;
  name: string;
  updated_at: string;
}

export default function UsersAccount() {
  const navigate = useNavigate();
  const [savedProjects, setSavedProjects] = useState<DashboardProject[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch saved projects for the current user
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) {
          setLoading(false);
          return;
        }

        const { data, error } = await supabase
          .from('dashboard_projects')
          .select('id, name, updated_at, created_at')
          .eq('user_id', user.id)
          .order('updated_at', { ascending: false });

        if (error) throw error;
        setSavedProjects(data || []);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleDeleteProject = async (projectId: string) => {
    try {
      // Delete associated theme config first
      await supabase
        .from('theme_configs')
        .delete()
        .eq('project_id', projectId);

      // Delete project pages
      await supabase
        .from('project_pages')
        .delete()
        .eq('project_id', projectId);

      // Finally delete the project
      const { error } = await supabase
        .from('dashboard_projects')
        .delete()
        .eq('id', projectId);

      if (error) throw error;
      setSavedProjects(prev => prev.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleEditProject = (projectId: string) => {
    navigate(`/builder?projectId=${projectId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-primary rounded-lg p-2">
              <Box className="text-primary-foreground w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Vorbis Dashboard Builder
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                My Account - Manage your dashboard projects
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/')}
            >
              Back to Builder
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Saved Dashboard Projects</CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center items-center h-40">
                  <p>Loading your projects...</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Project Name</TableHead>
                      <TableHead>Last Modified</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {savedProjects.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={3} className="text-center py-8 text-slate-500">
                          No saved projects found
                        </TableCell>
                      </TableRow>
                    ) : (
                      savedProjects.map((project) => (
                        <TableRow key={project.id}>
                          <TableCell className="font-medium">{project.name}</TableCell>
                          <TableCell>
                            {new Date(project.updated_at).toLocaleDateString()}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="mr-2"
                              onClick={() => handleEditProject(project.id)}
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleDeleteProject(project.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upload Custom Components</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400">
                  Upload your own React components to use in your dashboards.
                </p>
                
                <div className="border-2 border-dashed rounded-lg p-6 text-center">
                  <div className="mb-4">
                    <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <p className="text-sm text-slate-500 mb-2">
                    Drag and drop your component files here
                  </p>
                  <p className="text-xs text-slate-500 mb-4">
                    Supported formats: .jsx, .tsx, .js, .ts
                  </p>
                  <input 
                    type="file" 
                    className="mx-auto max-w-xs block" 
                    accept=".jsx,.tsx,.js,.ts" 
                  />
                </div>
                
                <Button className="w-full">Upload Component</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

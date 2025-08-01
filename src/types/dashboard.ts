export interface DashboardPage {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  isNew?: boolean;
  component?: string;
}

export interface ThemeConfig {
  primaryColor: string;
  darkMode: boolean;
  fontFamily: string;
}

export interface DashboardProject {
  selectedPages: DashboardPage[];
  themeConfig: ThemeConfig;
  projectName: string;
  pageDesigns: PageDesign[];
}

export type BuilderStep = 'pages' | 'design' | 'theme' | 'download';
export interface TemplatePreset {
  id: string;
  name: string;
  description: string;
  pageIds: string[];
}

export interface PageDesign {
  pageId: string;
  designId: string;
}


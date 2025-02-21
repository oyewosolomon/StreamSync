// types/index.ts

export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface Statistic {
    label: string;
    value: string;
  }
  
  export interface Feature {
    title: string;
    description: string;
    icon: React.FC<{ className?: string }>;
    color: 'blue' | 'green' | 'purple';
    stats: Statistic[];
    benefits: string[];
  }
  
  export interface Features {
    [key: string]: Feature;
  }
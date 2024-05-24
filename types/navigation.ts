export type NavigationItem = {
  title: string;
  url: string;
  icon?: string;
  children?: NavigationItem[];
};

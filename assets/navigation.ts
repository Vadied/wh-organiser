import { NavigationItem } from "@/types/navigation";

export const home: NavigationItem = {
  title: "Home",
  url: "/",
  icon: "information-circle",
};

export const rules: NavigationItem = {
  title: "Regole",
  url: "/rules",
  icon: "information-circle",
};

export const missions: NavigationItem = {
  title: "Missioni",
  url: "/missions",
  icon: "information-circle",
  children: [
    {
      title: "Missioni primarie",
      url: "/missions/primary",
    },
    {
      title: "Missioni secondarie",
      url: "/missions/secondary",
    },
    {
      title: "Gambit",
      url: "/missions/gambit",
    },
  ]
};

export const admin: NavigationItem = {
  title: "Admin",
  url: "/admin",
  icon: "information-circle",
};

export const deploy: NavigationItem = {
  title: "Schieramenti",
  url: "/deployments",
  icon: "information-circle",
};

export const menuItems = [home, rules, deploy, missions];
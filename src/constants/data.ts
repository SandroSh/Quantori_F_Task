export type NavItem = {
  title:string;
  url:string;
  isActive:boolean;
}

export const navbarData: NavItem[] = [
  {
    title: "Home",
    url: "/",
    isActive: false,
  },
  {
    title: "Contact",
    url: "/contact",
    isActive: false,
  },
  {
    title: "About",
    url: "/about",
    isActive: false,
  },
];

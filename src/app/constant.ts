export interface MenuItem {
  title: string;
  href: string;
  class?: string;
}
export const MENU_HEADER: MenuItem[] = [
  { title:'Home', href: "/", class: "Home" },
  { title:'About', href: "about-us", },
  { title:'News', href: "new" },
  { title:'Projects', href: "projects"},
  { title:'Contact', href: "contact-us"},
];


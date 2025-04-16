export interface MenuItem {
  title: string;
  href: string;
  class?: string;
}
export const LIST_MENU: MenuItem[] = [
  { title:'Home', href: "home", class: "Home" },
  { title:'About', href: "about-us", },
  { title:'News', href: "new" },
  { title:'Projects', href: "projects"},
  { title:'Contact', href: "contact-us"},
];


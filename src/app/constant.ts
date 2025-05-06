// admin
export interface ListAdmin {
  href: string;
  title: string;
}
export const LIST_ADMIN: ListAdmin[] = [
  { title: 'Employee List', href: 'employee-list'},
  { title: 'Product List', href: 'product-list'},
  { title: 'News List', href: 'new-list' },
  { title: 'Project List', href: 'project-list' },
  { title: 'Company Info List', href: 'info-list' },
  { title: 'Company Detail List', href: 'company-detail-list' },
  { title: 'Customer Contact', href: 'customer-contact-list'},
];
//Menu Item
export interface MenuItem {
  title: string;
  href: string;
}
export const MENU_HEADER: MenuItem[] = [
  { title: 'TRANG CHỦ', href: '' },
  { title: 'VỀ CHÚNG TÔI', href: 'about' },
  { title: 'TIN TỨC', href: 'news-page' },
  { title: 'DỊCH VỤ', href: 'service-page' },
  { title: 'DỰ ÁN', href: 'project-page' },
  { title: 'LIÊN HỆ', href: 'contact-page' }
];
//partners
export interface Partners {
  name: string;
  logo: string;
}
export const  PARTNERS :Partners[]=[
  {
    name :'SOFTWARE SOLUTION',
    logo:'https://dnt.group/wp-content/uploads/2024/08/980eb8c1684ecc10955f.jpg'
  },

  {
    name :'TECHVFY SOFTWARE',
    logo:'https://dnt.group/wp-content/uploads/2024/08/images-1.png'
  },
  {
    name :'SCB',
    logo:'https://dnt.group/wp-content/uploads/2024/06/Logo_ngan_hang_Scb.png'
  },
  {
    name :'Nodo Smart Solution',
    logo:'https://dnt.group/wp-content/uploads/2024/08/images.png'
  },
  {
    name :'CMC TELECOM',
    logo:'https://dnt.group/wp-content/uploads/2024/06/CMC_logo_2018.png'
  },
  {
    name :'TECOTEC',
    logo:'https://dnt.group/wp-content/uploads/2024/08/logointro.png'
  },
  {
    name :'FPT',
    logo:'https://dnt.group/wp-content/uploads/2024/06/FPT_Software_logo.png'
  },
  {
    name :'NCB',
    logo:'https://dnt.group/wp-content/uploads/2024/06/NCB-bank-logo-01-1.png'
  },
  {
    name :'ACB',
    logo:'https://dnt.group/wp-content/uploads/2024/06/Asia_Commercial_Bank_logo.svg.png'
  },
  {
    name :'MB',
    logo:'https://dnt.group/wp-content/uploads/2024/08/1200px-Logo_MB_new.png'
  },
]

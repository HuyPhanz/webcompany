export interface typeofDataCompanyHistory {
  title: string;
  year: number;
  order: number;
  description: string;
}
export interface typeOfDataCompanyInfo {
  siteName: string;
  icon: string;
  siteDescription: string;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  workingHours: string;
  mapEmbedUrl: string;
}
export interface typeOfDataCompanyMember {
  name: string;
  position: string;
  bio: string;
  email: string;
  order: number;
}
export interface typeOfDataCompanyDetail {
  title: string;
  content: string;
}
export interface typeOfDataMediaFile {
  entity_type: string;
  entity_id: string;
  url: string;
  file_name: string;
  file_path: string;
  file_type: string;
}

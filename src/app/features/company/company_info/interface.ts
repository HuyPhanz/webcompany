export interface CompanyInfoReqDTO {
  siteName: string;
  icon: string;
  siteDescription: string;
  director: string;
  contactEmail: string;
  year: number;
  contactPhone: string;
  contactAddress: string;
  workingHours: string;
  mapUrl: string;
}
export interface CompanyInfoResDTO {
  id: number;
  siteName: string;
  icon: string;
  siteDescription: string;
  director: string;
  year: number;
  contactEmail: string;
  contactPhone: string;
  contactAddress: string;
  workingHours: string;
  mapUrl: string;
}
export interface CompanyInfo extends CompanyInfoReqDTO {
  id: number;
}

export interface CompanyDetailReqDTO {
  title: string;
  description: string;
}
export interface CompanyDetailResDTO {
  id: number;
  title: string;
  description: string;
}
export interface CompanyDetail extends CompanyDetailReqDTO {
  id: number;
}

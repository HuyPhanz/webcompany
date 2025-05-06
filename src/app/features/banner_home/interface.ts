export interface BannerReqDTO {
  title:string;
  description:string;
  imageUrls: string[];
}
export interface BannerResDTO {
  id: number;
  title:string;
  description:string;
  imageUrls: string[];
}
export interface Banner extends BannerReqDTO {
  id: number;
}

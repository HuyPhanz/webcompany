export interface BannerReqDTO {
  slogan:string;
  imageUrls: string[];
}
export interface BannerResDTO {
  id: number;
  slogan:string;
  imageUrls: string[];
}
export interface Banner extends BannerReqDTO {
  id: number;
}

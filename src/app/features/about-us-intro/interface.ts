export interface AboutIntroReqDTO {
  title:string;
  description: string;
  image:string;
}
export interface AboutIntroResDTO {
  id: number;
  title:string;
  description: string;
  image:string;
}
export interface AboutIntro extends AboutIntroReqDTO {
  id: number;
}

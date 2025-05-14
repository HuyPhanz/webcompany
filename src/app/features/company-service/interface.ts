export interface ServiceReqDTO {
  title: string;
  description: string;
  image:string;
  tags: string[];
}
export interface ServiceResDTO {
  id: number;
  title: string;
  description: string;
  image:string;
  tags: string[];
}
export interface Service extends ServiceReqDTO {
  id: number;
}


export interface ProjectReqDTO{
  title: string;
  description: string;
  image:string;
  tags: string[];
}
export interface ProjectResDTO{
  id: number;
  title: string;
  description: string;
  image:string;
  tags: string[];
}
export interface Project extends ProjectReqDTO {
  id: number;
}

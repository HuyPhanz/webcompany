export interface NewsReqDTO {
  title: string;
  description: string;
  image:string;
}

export interface NewsResDTO {
  id: number;
  title: string;
  description: string;
  image:string;
  createdDate:string;
  modifiedDate:string;
}

export interface News extends NewsReqDTO {
  id: number;
}


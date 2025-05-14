export interface NewsReqDTO {
  title: string;
  description: string;
  content: string;
  orderIndex:number;
  image:string;
}

export interface NewsResDTO {
  id: number;
  title: string;
  description: string;
  content: string;
  orderIndex:number;
  image:string;
  createdDate:string;
  modifiedDate:string;
  // TODO:
  type:TYPE
}

export enum TYPE {
  Default = 0,
  FeaturedArticles = 1,
  RelatedArticles = 2
}

export interface News extends NewsReqDTO {
  id: number;
}


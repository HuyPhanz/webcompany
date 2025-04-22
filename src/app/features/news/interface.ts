export interface NewsReqDTO {
  title: string;
  content: string;
  slug: string;
}

export interface NewsResDTO {
  id: number;
  title: string;
  content: string;
  slug: string;
}

export interface News extends NewsReqDTO {
  id: number;
}

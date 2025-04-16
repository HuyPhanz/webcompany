export interface ProductReqDTO {
  title: string;
  content: string;
  slug: string;
}

export interface ProductResDTO {
  id: number;
  title: string;
  content: string;
  slug: string;
}

export interface Product extends ProductReqDTO{
  id: number;
}

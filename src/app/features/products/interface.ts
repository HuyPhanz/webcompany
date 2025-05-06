export interface ProductReqDTO{
  title: string;
  description: string;
  image:string;
  tags: string[];
}
export interface ProductResDTO{
  id: number;
  title: string;
  description: string;
  image:string;
  tags: string[];
}
export interface Product extends ProductReqDTO {
  id: number;
}

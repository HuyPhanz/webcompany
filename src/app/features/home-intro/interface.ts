export interface DataReqDTO {
  title: string;
  description: string;
  image: string;

}
export interface DataResDTO {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface Data extends DataReqDTO {
  id: number;
}

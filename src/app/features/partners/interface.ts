export interface PartnersReqDTO {
  name: string;
  logo: string;

}
export interface PartnersResDTO {
  id: number;
  name: string;
  logo: string;
}
export interface Partners extends PartnersReqDTO {
  id: number;
}


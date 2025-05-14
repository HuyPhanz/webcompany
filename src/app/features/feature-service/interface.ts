export interface FeatureServiceReqDTO {
  title: string;
  description: string;
  image: string;

}
export interface FeatureServiceResDTO {
  id: number;
  title: string;
  description: string;
  image: string;
}
export interface FeaturesService extends FeatureServiceReqDTO {
  id: number;
}


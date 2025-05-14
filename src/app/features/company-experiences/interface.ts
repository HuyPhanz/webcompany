export interface ExperienceReqDTO {
  title: string;
  description: string;
}
export interface ExperienceResDTO {
  id: number;
  title: string;
  description: string;
}
export interface Experience extends ExperienceReqDTO {
  id: number;
}


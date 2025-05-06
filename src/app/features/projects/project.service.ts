import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project, ProjectReqDTO, ProjectResDTO } from './interface';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  http = inject(HttpClient);
  apiUrl = 'http://26.54.201.159:8080/api/projects';

  // Api-Post
  createProject(data: ProjectReqDTO): Observable<ProjectResDTO> {
    return this.http.post<ProjectResDTO>(this.apiUrl, data);
  }
  // Api-Get ( Read )
  // getProjectById(id:number): Observable<ProjectResDTO> {
  //   return this.http.get<ProjectResDTO>(`${this.apiUrl}/${id}`)
  // }
  // Api Get All data
  getAllProjects(): Observable<ProjectResDTO[]> {
    return this.http.get<ProjectResDTO[]>(this.apiUrl);
  }
  //delete
  deleteProject(id: number): Observable<ProjectResDTO> {
    return this.http.delete<ProjectResDTO>(`${this.apiUrl}/${id}`);
  }
  //update
  updateProject(data: Project): Observable<ProjectResDTO> {
    return this.http.put<ProjectResDTO>(`${this.apiUrl}/${data.id}`, data);
  }
}

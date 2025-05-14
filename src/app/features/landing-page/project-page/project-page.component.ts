import { Component, inject, OnInit } from '@angular/core';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ProjectService } from '../../projects/project.service';
import { ProjectResDTO } from '../../projects/interface';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-project-page',
  imports: [NzCarouselModule, CommonModule, NzButtonModule, RouterLink],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.scss'
})
export class ProjectPageComponent implements OnInit {
  //service Project
  projectService = inject(ProjectService);
  // data project
  projectsData: ProjectResDTO[] = [];
  //Get API Project
  getAllDataProject() {
    return this.projectService.getAllProjects().subscribe((projects) => {
      this.projectsData = projects;
    });
  }
  ngOnInit(): void {
    this.getAllDataProject();
  }
}

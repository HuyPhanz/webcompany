import { Component, inject, OnInit } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../projects/project.service';
import { ProjectResDTO } from '../../projects/interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-project-detail-page',
  imports: [NzBreadCrumbModule, RouterLink, NgIf],
  standalone: true,
  templateUrl: './project-detail-page.component.html',
  styleUrl: './project-detail-page.component.scss'
})
export class ProjectDetailPageComponent implements OnInit {
  route = inject(ActivatedRoute);
  //service
  projectService = inject(ProjectService);

  projectId = 0;
  projectDetail: ProjectResDTO | null = null;

  loadNewsDetail(): void {
    this.projectService.getProjectById(this.projectId).subscribe({
      next: (data: ProjectResDTO) => {
        this.projectDetail = data;
      },
      error: (err) => {
        console.error('Error loading news detail:', err);
      }
    });
  }
  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.projectId = Number(idParam);
      this.loadNewsDetail();
    }
  }
}

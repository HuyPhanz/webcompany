import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Project, ProjectReqDTO } from '../interface';
import { ProjectService } from '../project.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-project-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './project-list.component.html',
  standalone: true,
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent implements OnInit {
  //service
  projectService = inject(ProjectService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: ProjectReqDTO }> = {};
  projectOfData: Project[] = [];

  ngOnInit() {
    this.getAllProjects();
  }
  //get APi
  getAllProjects() {
    this.projectService.getAllProjects().subscribe((res) => {
      this.projectOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteProduct(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      this.getAllProjects();
    });
  }
  //update
  updateProject(id: number): void {
    const index = this.projectOfData.findIndex((item) => item.id === id);
    const data = { ...this.editCache[id].data };


    const updateProject = {
      id: this.projectOfData[index].id,
      ...data
    };

    this.projectService.updateProject(updateProject).subscribe(() => {
      this.getAllProjects();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.projectOfData.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  //start edit
  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: number): void {
    const index = this.projectOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.projectOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}

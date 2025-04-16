import { Component } from '@angular/core';
import { NzTimelineComponent, NzTimelineItemComponent } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'app-about-us',
  imports: [NzTimelineComponent, NzTimelineItemComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {}

import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/component-home/banner/banner.component';
import { ChooseUsComponent } from '../../shared/component-home/choose-us/choose-us.component';
import { AboutUsComponent } from '../../shared/component-home/about-us/about-us.component';
import { ItFieldsComponent } from '../../shared/component-home/it-fields/it-fields.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, ChooseUsComponent, AboutUsComponent, ItFieldsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

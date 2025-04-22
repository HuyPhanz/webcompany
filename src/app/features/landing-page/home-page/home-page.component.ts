import { Component, ViewChild } from '@angular/core';
import { NzButtonComponent } from 'ng-zorro-antd/button';
import { NzCarouselComponent, NzCarouselContentDirective } from 'ng-zorro-antd/carousel';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { IT_FIELD } from '../../../constant';

@Component({
  selector: 'app-home-page',
  imports: [NzButtonComponent, NzCarouselComponent, NzCarouselContentDirective, NzIconDirective],
  templateUrl: './home-page.component.html',
  standalone: true,
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  // consttant
  itField = IT_FIELD;
  arrays = [
    'https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/482219114_122228042018179587_79561521092918076_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE8GIqSmaA0zfiXGgUDFZ3CHXHsEyhjQSwdcewTKGNBLGskAG0QCJIdCrTjPDqOyMZQ3YVmt0xphewFwUU8NZuN&_nc_ohc=sNVtg-xJr1AQ7kNvwFiXiq4&_nc_oc=AdmRkckO7yVAomZiPM2oo13YWwgfkQSZlqAOtS0SZd-i9QCX0iKeD3LJKWTYimJpE9-E3cIW0vC4guYnZJnUy6AJ&_nc_zt=23&_nc_ht=scontent-hkg4-2.xx&_nc_gid=rOC2s3Wk3-MvrtWJ02t_Fw&oh=00_AfHExs_ixDc2UU7kxpJCz35PjmXlihaQutniqQc0Zzog2A&oe=6806158A',
    'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/482058810_122228041574179587_5169321117406365570_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFM7LmCD4J8sJzHjp0_mw3m776GzZOtn3PvvobNk62fcygtUqa8ropBhOVf1BaZu0QJA8W-zY1Q598A1WQbtjDU&_nc_ohc=oCPtqDoLqOEQ7kNvwFRFDw-&_nc_oc=Adm2Rn4owsWMjgsMto0r3r8y-FjjeWXy3ghkJvD5TRsmE7QLlr0Cq2P08bsyMVchewqPNJhbQGpTzUITiNDjzZv_&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=nu0wRyrY6gPjxvuS1nMxZA&oh=00_AfGccjvm1lwbgrCJ72L3u8yhaNS2yZUG8ESoEOeccN2gPQ&oe=68061ED4',
    'https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/482217720_122228041916179587_8767811903576281840_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3S1VvMcZbRnetN_UJi6dyq2iE866v02mraITzrq_TacA40tj9m4A6lGndtfC9YcjDTrZrsCWE1nPH-tWH-ieH&_nc_ohc=98TyzXyf-bwQ7kNvwEbfiuu&_nc_oc=AdkhIvieQAjLIQxG199JXQ3woJYZRb6VNlAdQU36tw955AtA5NgNdW7fjqJ1xklNCF_LDD2grIvKPOLcYYbk4-qc&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=KSnbUNXJitCBZlPL9C04ig&oh=00_AfEku9RAFglI-_68jleKcp7Tu3ulaimal6_oXNZYh49FJw&oe=68062F34',
    'https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/482090135_122228041982179587_7704605727043711143_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEgytzA9tAxhafAMMavT_7eZoycDmOoakBmjJwOY6hqQOsmAaz-UVVRZ0VmwCI7f3B45qznw0MUjAcYOWd6M-Tt&_nc_ohc=2yj-fTazoN0Q7kNvwEGcrO1&_nc_oc=Adm90XRoXsazkC3su0HdWCNPZbfVU__IX1vpmQ5uNw_ouNZZFsoJkSRBhqV_WAMnNlNZ_B078FNDSH_NOchqO7Dh&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=1KS2oG5TCKMe-o-eoNw_8A&oh=00_AfGqGlCUzhQd_22bce0HzUTy3KmaYeREWMFtLxuxumiHRg&oe=68063372'
  ];
  effects = 'scrollx';
  @ViewChild('carousel', { static: false }) carousel?: NzCarouselComponent;

  // prev carousel
  goPrev(): void {
    this.carousel?.pre();
  }
  // next carousel
  goNext(): void {
    this.carousel?.next();
  }
}

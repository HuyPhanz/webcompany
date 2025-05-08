import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Product, ProductReqDTO } from '../interface';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './product-list.component.html',
  standalone: true,
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  //service
  productService = inject(ProductService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editCache: Record<string, { edit: boolean; data: ProductReqDTO }> = {};
  productOfData: Product[] = [];

  ngOnInit() {
    this.getAllProducts();
  }
  //get APi
  getAllProducts() {
    this.productService.getAllProducts().subscribe((res) => {
      this.productOfData = res;
      this.updateEditCache();
    });
  }
  //delete
  deleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.getAllProducts();
    });
  }
  //update
  updateProduct(id: number): void {
    const index = this.productOfData.findIndex((item) => item.id === id);
    const data = { ...this.editCache[id].data };

    // Bổ sung: ép imageUrls thành array nếu cần
    if (data.tags && typeof data.tags === 'string') {
      data.tags = [data.tags];
    }

    const updateProduct = {
      id: this.productOfData[index].id,
      ...data
    };

    this.productService.updateProduct(updateProduct).subscribe(() => {
      this.getAllProducts();
    });
    alert('updated successfully.');
  }
  //
  updateEditCache(): void {
    this.productOfData.forEach((item) => {
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
    const index = this.productOfData.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.productOfData[index] },
      edit: false
    };
  }

  goToAdd() {
    this.router.navigate(['add'], {
      relativeTo: this.route
    });
  }
}

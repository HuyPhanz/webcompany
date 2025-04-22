import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { Product, ProductReqDTO } from '../interface';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  imports: [FormsModule, NzInputModule, NzPopconfirmModule, NzTableModule, NzButtonModule, NzIconModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  //service api
  serviceProduct = inject(ProductService);
  editCache: Record<string, { edit: boolean; data: ProductReqDTO }> = {};
  productOfData: Product[] = [];
  startEdit(id: string): void {
    this.editCache[id].edit = true;
  }
  cancelEdit(id: string): void {
    const index = this.productOfData.findIndex((item) => item.slug === id);
    this.editCache[id] = {
      data: { ...this.productOfData[index] },
      edit: false
    };
  }

  //delete product
  deleteProduct(id: number): void {
    this.serviceProduct.deleteProduct(id).subscribe(() => {
      // this.productOfData = this.productOfData.filter(item => item.id !== id);
      this.getAllProducts();
    });
  }

  updateProduct(id: string): void {
    const index = this.productOfData.findIndex((item) => item.slug === id);
    const updatedProduct = {
      id: this.productOfData[index].id,
      ...this.editCache[id].data
    };

    this.serviceProduct.updateProduct(updatedProduct).subscribe(() => {
      this.getAllProducts();
    });
    alert('updated successfully.');
  }
  //update
  updateEditCache(): void {
    this.productOfData.forEach((item) => {
      this.editCache[item.slug] = {
        edit: false,
        data: { ...item }
      };
    });
  }
  //getAll
  getAllProducts() {
    this.serviceProduct.getALlProduct().subscribe({
      next: (data) => {
        this.productOfData = data;
        this.updateEditCache();
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
  ngOnInit(): void {
    this.getAllProducts();
  }
}

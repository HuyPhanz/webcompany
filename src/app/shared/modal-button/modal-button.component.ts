import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-modal-button',
  standalone: true,
  imports: [CommonModule, NzModalModule],
  templateUrl: './modal-button.component.html',
  styleUrl: './modal-button.component.scss'
})
export class ModalButtonComponent {
  @Input() isVisible = false;
  @Input() title = 'Thông báo';
  @Input() width = 600 ;
  @Input() okText = 'OK';
  @Input() cancelText = 'Hủy';

  @Output() isVisibleChange = new EventEmitter<boolean>();
  @Output() ok = new EventEmitter<void>();
  @Output() cancell = new EventEmitter<void>();

  onOk(): void {
    this.ok.emit();
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  onCancel(): void {
    this.cancell.emit();
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }
}

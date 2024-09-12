import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() name: string = ""
  @Input() amount: number = 0
  @Input() max: number = 10
  @Input() unit: string = ""

  @Output() incrementProductByName = new EventEmitter<string>()
  handleIncrement() {
    this.incrementProductByName.emit()
  }
  @Output() decrementProductByName = new EventEmitter<string>()
  handleDecrement() {
    this.decrementProductByName.emit()
  }

  increment() {
    this.amount += 1
  }

  decrement() {
    this.amount -= 1
  }
}

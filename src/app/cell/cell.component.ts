import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cell',
  imports: [CommonModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
  standalone: true
})
export class CellComponent {
  @Input() value: string = '';
  @Input() row!: number;
  @Input() col!: number;
  @Output() cellClick = new EventEmitter<{ row: number; col: number }>();

  handleClick(event: MouseEvent) {
    event.stopPropagation();
    console.log(`Cell clicked: row ${this.row}, col ${this.col}`);
    this.cellClick.emit({ row: this.row, col: this.col });
  }
}
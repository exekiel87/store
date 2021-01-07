import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item} from '../../../../interfaces/item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Output() itemSelected:EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  onClick(){
    this.itemSelected.emit(this.item.id);
  }
}

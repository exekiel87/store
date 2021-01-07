import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() query: string = "";
  @Output() queryChange: EventEmitter<string> = new EventEmitter();

  onSubmit(f: NgForm) {
    const query = f.value.query;
    if(!query) return;

    this.queryChange.emit(query);
  }

}

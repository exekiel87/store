import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { author, Item, ItemList, Items} from '../interfaces/item';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http:HttpClient) { }

  getItems(query: string): Observable<Items>{
    
    return this.http.get<Items>(`${environment.api}/items?q=${encodeURIComponent(query)}`)
    .pipe(catchError(() => {
      return of({items:[], categories:[]} as Items)
    }));

  }

  getItem(id: string): Observable<{author: author, item: Item}>{
    
    return this.http.get<{author: author, item: Item}>(`${environment.api}/items/${id}`);
    
  }
}

import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, of, merge } from 'rxjs';
import { pluck, map, catchError, switchMap } from 'rxjs/operators';
import { ItemsService } from 'src/app/services/items.service';
import { ItemList, Items} from '../../interfaces/item';

@Component({
  selector: 'app-items-page',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss']
})
export class ItemsPage implements OnInit, OnDestroy {
  
  itemsResult$: Observable<Items>;
  items$:Observable<ItemList[]>;
  total$: Observable<number>;
  categories$: Observable<string[]>;

  query:string = "";

  retry: EventEmitter<Params> = new EventEmitter();

  constructor(private itemsService: ItemsService, private router:Router, 
              private route: ActivatedRoute, private title: Title,
              private meta: Meta) { }

  ngOnInit(): void {

    this.itemsResult$ = merge( this.route.queryParamMap, this.retry).pipe(
      switchMap<Params, Observable<Items>>((params: Params) => {
        const query = params.params.search;

        this.title.setTitle(`${query} | Store`);
        this.meta.removeTag('name="description"');
        this.meta.addTag({ name: 'description', content: `Encontrá ${query}` });

        setTimeout(() => {this.query = query;}, 0);

        return this.itemsService.getItems(query);
      })
    );

    this.items$ = this.itemsResult$.pipe(
      pluck('items'));
    
    this.total$ = this.items$.pipe(map<ItemList[], number>((i) => i.length));
    
    this.categories$ = this.itemsResult$.pipe(
      pluck('categories'));
  }

  ngOnDestroy(){
    this.meta.removeTag("name='description'");
  }

  goToItems(query: string): void{
    
    const url = "/items?search=" + query;

    if(this.router.url === url){
      this.retry.emit({params:{search: query}});
    }else{
      this.router.navigateByUrl(url);
    }
    
  }

  showItem(id){
    this.router.navigateByUrl("/items/" + id);
  }
}

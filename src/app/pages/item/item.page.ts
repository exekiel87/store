import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { author, Item } from 'src/app/interfaces/item';
import { ItemsService } from 'src/app/services/items.service';
import { CurrencyPipe } from 'src/app/share/pipes/currency.pipe';

@Component({
  selector: 'app-item-page',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss']
})
export class ItemPage implements OnInit, OnDestroy {
  
  item$:Observable<Item>;
  _idItem: string;
  data$: Observable<{author: author, item: Item}>;
  categories$: Observable<string[]>;

  set idItem(val){
    this._idItem = val;
    this.data$ = this.itemsService.getItem(val);
    this.item$ = this.itemsService.getItem(val).pipe(pluck('item'));
    this.categories$ = this.itemsService.getItem(val).pipe(pluck('categories'));

    this.item$.subscribe((item) => {
      this.title.setTitle(`${item.title} | Store`);

      this.removeTags();

      const currency = new CurrencyPipe();
      const money = currency.transform(item.price.currency);
      this.meta.addTag({name: 'description', content:`Compralo desde ${money} ${item.price.amount}`});
      
      this.meta.addTag({property:'og:description', content: item.description});
      this.meta.addTag({property: 'og:image', content: item.picture});
      this.meta.addTag({property: 'og:title', content: item.title});

    });
  }

  removeTags(){
    this.meta.removeTag('name="description"');
    this.meta.removeTag('property="og:description"');
    this.meta.removeTag('property="og:image"');
    this.meta.removeTag('property="og:title"');
  }

  ngOnDestroy(){
    this.removeTags();
  }

  constructor(private router:Router, private route: ActivatedRoute, 
              private itemsService: ItemsService, private title: Title,
              private meta: Meta) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: Params) =>{
      this.idItem = params.get('id');
    });

    
  }
  goToItems(query: string): void{
    this.router.navigateByUrl("/items?search=" + query);
  }

  
}

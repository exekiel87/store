import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage implements OnInit, OnDestroy {
  
  constructor(private route:Router, private title:Title,
              private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle("Store");    

    this.meta.addTag({ name: 'description', content: 'Encontrá lo que buscás' });
    this.meta.addTag({ property: 'og:title', content: 'Store' });
    this.meta.addTag({ property: 'og:image', content: 'https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2' });
    
  }

  ngOnDestroy(){
    this.meta.removeTag("name='description'");
    this.meta.removeTag("property='og:title'");
    this.meta.removeTag("property='og:image");
  }

  goToItems(query: string): void{
    this.route.navigateByUrl("/items?search=" + query);
  }

}

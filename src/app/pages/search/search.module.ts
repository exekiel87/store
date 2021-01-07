import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPage } from './search.page';
import { ShareModule } from 'src/app/share/share.module';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [SearchPage],
  imports: [
    CommonModule, ShareModule, SearchRoutingModule
  ]
})
export class SearchModule { }

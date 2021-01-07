import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './components/item/item.component';
import { ItemPage } from './item.page';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [ItemPage, ItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    ShareModule
  ]
})
export class ItemModule { }

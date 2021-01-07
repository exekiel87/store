import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsPage } from './items.page';
import { ItemComponent } from './components/item/item.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [ItemsPage, ItemComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ShareModule
  ]
})
export class ItemsModule { }

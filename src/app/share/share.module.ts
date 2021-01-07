import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from './pipes/currency.pipe';
import { CenterComponent } from './components/center/center.component';
import { CategoriesComponent } from './components/categories/categories.component';

import {MatButtonModule} from '@angular/material/button';
import { NgxJsonLdModule } from 'ngx-json-ld';


@NgModule({
  declarations: [SearchComponent, CurrencyPipe, CenterComponent, CategoriesComponent],
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule,
    FormsModule, MatButtonModule, NgxJsonLdModule
  ],
  exports: [SearchComponent, CurrencyPipe, CenterComponent, CategoriesComponent, MatButtonModule, NgxJsonLdModule]
})
export class ShareModule { }

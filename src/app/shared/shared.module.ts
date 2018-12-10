import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { NguCarouselModule } from '@ngu/carousel';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    HttpClientModule,
    NguCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  declarations: [LoaderComponent, CarouselComponent, UserSearchComponent, SearchBoxComponent],
  exports: [LoaderComponent, CarouselComponent, UserSearchComponent, SearchBoxComponent]
})
export class SharedModule {}

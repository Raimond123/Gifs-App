import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HomePageComponentComponent } from './pages/home-page-component/home-page-component.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { searchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePageComponent,
    searchBoxComponent,
    CardListComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    searchBoxComponent,
    CardListComponent
  ]
})
export class GifsModule { }

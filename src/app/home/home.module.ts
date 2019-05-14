import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  imports: [
    CommonModule, AppRoutingModule,NgxPaginationModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {StudentComponent} from "./student/student.component";
import{ClassroomComponent} from "./classroom/classroom.component";
import{ProductComponent} from "./product/product.component";
import {ProductsComponent} from "./products/products";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {Assigment1Component} from "./assigment1/assigment1.component";
import {WaetherComponent} from "./weather/waether.component";


const appRoutes :Routes=[
  {
    path: '', component: ClassroomComponent
  },
  {
    path: 'san-pham', component: ProductsComponent
  },
  {
    path:'thoi-tiet',component:WaetherComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    ProductComponent,ProductsComponent,
    Assigment1Component,
    WaetherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

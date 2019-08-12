import {ModuleWithProviders} from '@angular/core';
import {Routes ,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { PageListComponent } from './pages/page-list/page-list.component';
const appRoutes: Routes =[
    { path: '',      component: HomeComponent },
    {path: 'home', component:HomeComponent},
  // เราจะนิยาม Route หรือเส้นทางของเราในนี้
  // เช่น
  // { path: 'pages', component: PageListComponent },
  // เพื่อบอกว่าเมื่อไหร่ที่เข้ามาจาก /pages ให้วิ่งไปใช้บริการคอมโพแนนท์ชื่อ PageListComponent 
  { path: 'pages', component: PageListComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
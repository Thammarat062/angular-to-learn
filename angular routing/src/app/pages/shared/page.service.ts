import { Injectable } from '@angular/core';
import { PAGES } from './mock-pages';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  getPages(){
    return PAGES;
    
  }

  constructor() { }
}

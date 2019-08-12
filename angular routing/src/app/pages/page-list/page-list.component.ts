import { Component, OnInit } from '@angular/core';
import { Page } from '../shared/page.model';
import { PageService } from '../shared/page.service';
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  // สร้าง property ชื่อ pages เพื่อเก็บค่าวิกิทั้งหมด
  // pages ตัวนี้เทมเพลตของเราจะเข้าถึงได้
  // เราจึงนำข้อมูลจาก pages ไปแสดงผลบนเทมเพลตของคอมโพแนนท์นี้ได้นั่นเอง
  pages: Page[];

  constructor(private pageService:PageService) { }

  ngOnInit() {
    this.getPages();
  }

  getPages(){
    this.pages = this.pageService.getPages();
  }
}

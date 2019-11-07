import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  pageScroll(ev) {
    if(ev.detail.scrollTop > 20){
      ev.target.firstChild.classList.add('fixed');
    }else {
      ev.target.firstChild.classList.remove('fixed');
    }  
  }

}

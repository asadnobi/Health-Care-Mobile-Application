import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  path: string;
  color: string;

  constructor() {
  }
  
  changeTab(ev: any) {
    this.path = ev.tab;
    this.setColor();
  }
  
  setColor() {
    this.path === 'home' ? this.color = 'primary' : this.color = 'medium';
  }


}

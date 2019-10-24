import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  page: string = 'about';
  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  goBack(){
    this.navCtrl.back();
  }
  pageChange(ev) {
    this.page = ev.detail.value;
  }
  pageScroll(ev) {
    //console.log(ev);
    if(ev.detail.scrollTop > 250){
      ev.target.previousSibling.classList.add('show');
    }else {
      ev.target.previousSibling.classList.remove('show')
    }
  }

}

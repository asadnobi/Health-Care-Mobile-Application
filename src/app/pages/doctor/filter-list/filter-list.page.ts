import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { LocationComponent } from 'src/app/components/popovers/location/location.component';
import { FilterDoctorComponent } from 'src/app/components/modals/filter-doctor/filter-doctor.component';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.page.html',
  styleUrls: ['./filter-list.page.scss'],
})
export class FilterListPage implements OnInit {

  constructor(
    public popoverCtrl: PopoverController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  pageScroll(ev) {
    if(ev.detail.scrollTop > 20){
      ev.target.firstChild.classList.add('fixed');
    }else {
      ev.target.firstChild.classList.remove('fixed');
    }  
  }
  async changeLocation(ev: any) {
    const location = await this.popoverCtrl.create({
      component: LocationComponent,
      event: ev,
      translucent: true
    });
    await location.present();
    const { data, role } = await location.onWillDismiss();
    console.log(data, role);
  }

  async doctorFilter() {
    const filter = await this.modalCtrl.create({
      component: FilterDoctorComponent
    });
    await filter.present();
  }

}

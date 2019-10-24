import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-doctor',
  templateUrl: './filter-doctor.component.html',
  styleUrls: ['./filter-doctor.component.scss'],
})
export class FilterDoctorComponent implements OnInit {

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss(undefined, 'dismiss');
  }
  expendable(event) {
    event.target.parentElement.parentElement.parentElement.classList.toggle(
      "checked"
    );
  }

}

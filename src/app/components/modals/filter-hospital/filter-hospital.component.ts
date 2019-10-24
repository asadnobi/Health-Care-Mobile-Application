import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filter-hospital',
  templateUrl: './filter-hospital.component.html',
  styleUrls: ['./filter-hospital.component.scss'],
})
export class FilterHospitalComponent implements OnInit {

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

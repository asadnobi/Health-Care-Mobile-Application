import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FilterHospitalComponent } from './filter-hospital.component';

const routes: Routes = [
  {
    path: '', component: FilterHospitalComponent
  }
]

@NgModule({
  declarations: [FilterHospitalComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FilterHospitalModule { }

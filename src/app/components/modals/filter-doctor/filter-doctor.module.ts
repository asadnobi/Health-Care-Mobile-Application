import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { FilterDoctorComponent } from './filter-doctor.component';

const routes: Routes = [
  {
    path: '', component:FilterDoctorComponent
  }
]

@NgModule({
  declarations: [FilterDoctorComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FilterDoctorModule { }

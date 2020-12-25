import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(
    public router: Router
  ) {
    
  }

  ngOnInit() {
  }

  // For view hospital full list with send filter data or without filter data. 
  showAll(filter: string|undefined) {
    this.router.navigate(['/hospital-filter-list']);
  }
  // For view a hospital details.
  selectHospital(hospitalData) {
    this.router.navigate(['/hospital-details']);
  }

}

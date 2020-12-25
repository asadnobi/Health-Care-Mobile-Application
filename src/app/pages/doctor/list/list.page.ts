import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(
    private router: Router
  ) {
    
  }

  ngOnInit() {
  }

  // For view doctor full list with send filter data or without filter data. 
  showAll(filter: string|undefined) {
    this.router.navigate(['/doctor-filter-list']);
  }
  // For view a doctor details.
  selectDoctor(doctorData) {
    this.router.navigate(['/doctor-details']);
  }

}

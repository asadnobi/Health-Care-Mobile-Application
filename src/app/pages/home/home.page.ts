import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  selectHospital(hospitalData: any) {
    this.router.navigate(['/hospital-details']);
  }
  
  selectDoctor(doctorData: any) {
    this.router.navigate(['/doctor-details']);
  }

}

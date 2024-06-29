
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  name = '';
  gender = '';
  loggedUser = '';
  currRole = '';
  patients : Observable<any[]> | undefined;
  users : Observable<any[]> | undefined;
  doctors : Observable<any[]> | undefined;
  slots : Observable<any[]> | undefined;
  averageWaitingTime: number = 0;
  isMenuOpen: boolean = true;

  constructor(private _service : UserService) { }

  ngOnInit(): void 
  {
    this.name = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}');
    this.name = this.name.replace(/"/g, '');

    this.gender = JSON.stringify(sessionStorage.getItem('gender')|| '{}');
    this.gender = this.gender.replace(/"/g, '');

    this.loggedUser = JSON.stringify(sessionStorage.getItem('loggedUser')|| '{}');
    this.loggedUser = this.loggedUser.replace(/"/g, '');

    this.currRole = JSON.stringify(sessionStorage.getItem('ROLE')|| '{}'); 
    this.currRole = this.currRole.replace(/"/g, '');

    this.patients = this._service.getTotalPatients();
    this.users = this._service.getTotalUsers();
    this.doctors = this._service.getTotalDoctors();
    this.slots = this._service.getTotalSlots();
    this.updateAverageWaitingTime();
    setInterval(() => {
      this.updateAverageWaitingTime();
    }, 15 * 60 * 1000);
  }
  updateAverageWaitingTime(): void {
    this.averageWaitingTime = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
  }
      
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  }


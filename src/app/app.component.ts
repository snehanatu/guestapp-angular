import { Response } from '@angular/http';
import { GuestService } from './services/guest.services';
import Guest from './models/guest.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { 

  constructor(

    //private guestService: GuestService
  ) { }
  
  //public newGuest: Guest = new Guest();
  //public guestsList: Guest[] = [];
  //public editGuests: Guest[] = [];
  
  ngOnInit(){

  }

  //This method will get called on Create button event
  
  /*
  create() {
    this.guestService.createGuest(this.newGuest)
      .subscribe((res) => {
        this.guestsList.push(res.data)
        this.newGuest = new Guest()
      })
  }

  editGuest(guest: Guest) {
    console.log(guest)
     if(this.guestsList.includes(guest)){
      if(!this.editGuests.includes(guest)){
        this.editGuests.push(guest)
      }else{
        this.editGuests.splice(this.editGuests.indexOf(guest), 1)
        this.guestService.editGuest(guest).subscribe(res => {
          console.log('Update Succesful')
         }, err => {
            this.editGuest(guest)
            console.error('Update Unsuccesful')
          })
        }
      }
    }

    doneGuest(guest:Guest){
      guest.status = 'Done'
      this.guestService.editGuest(guest).subscribe(res => {
        console.log('Update Succesful')
      }, err => {
        this.editGuest(guest)
        console.error('Update Unsuccesful')
      })
    }
    submitGuest(event, guest:Guest){
      if(event.keyCode ==13){
        this.editGuest(guest)
      }
    }
    deleteGuest(guest: Guest) {
      this.guestService.deleteGuest(guest._id).subscribe(res => {
        this.guestsList.splice(this.guestsList.indexOf(guest), 1);
      })
    }
    */
}
import { Component, OnInit } from '@angular/core';
import Guest from '../models/guest.models';
import { GuestService } from '../services/guest.services';


@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  constructor(

    private guestService: GuestService
  ) { }

  public newGuest: Guest = new Guest();
  guestsList: Guest[] = [];
  editGuests: Guest[] = [];

  ngOnInit(): void {

    //At component initialization the 
    this.guestService.getGuests()
      .subscribe(guests => {
        //assign the todolist property to the proper http response
        this.guestsList = guests
       // console.log(guests)
      })
  }

  create() {
    this.guestService.createGuest(this.newGuest)
      .subscribe((res) => {
        this.guestsList.push(res.data)
        this.newGuest = new Guest()
      }, err => {
        this.newGuest = new Guest()
        console.error('Create Unsuccesful')
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

}

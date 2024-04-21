import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updaterental',
  templateUrl: './updaterental.component.html',
  styleUrls: ['./updaterental.component.css']
})
export class UpdaterentalComponent implements OnInit {

  rentalForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'phone_num':new FormControl('',Validators.required),
    'car_rent':new FormControl('',Validators.required),
    'days':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

    this.service.getOnerental(this.router.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res,'res==>');
      this.rentalForm.patchValue({
        name:res.data[0].name,
          email:res.data[0].email,
          phone_num:res.data[0].phone_num,
          car_rent:res.data[0].car_rent,
          days:res.data[0].days

      });
    });
  }
  //to update a student
rentalUpdate()
{
  console.log(this.rentalForm.value);
    this.service.updaterental(this.router.snapshot.params['id'], this.rentalForm.value).subscribe((result:any)=>{

    this.rentalForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

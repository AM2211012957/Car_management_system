import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rentadd',
  templateUrl: './rentadd.component.html',
  styleUrls: ['./rentadd.component.css']
})
export class RentaddComponent implements OnInit {

  constructor(private service:ApiserviceService, private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
     //id for update
     this.getparamid = this.router.snapshot.paramMap.get('id');
     if (this.getparamid){
     this.service.getOnerental(this.getparamid).subscribe((res)=>{
 
       console.log(res,'res==>');
       this.rentalForm.patchValue({
         name:res.data[0].name,
         email:res.data[0].email,
         phone_num:res.data[0].phone_num,
         car_rent:res.data[0].car_rent,
         days:res.data[0].days,
 
       });
     });
   }
  }

  rentalForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'phone_num':new FormControl('',Validators.required),
    'car_rent':new FormControl('',Validators.required),
    'days':new FormControl('',Validators.required)


  });

   //to create a new rental
   rentalSubmit(){
    if(this.rentalForm.valid){
      console.log(this.rentalForm.value);
      this.service.createrental( this.rentalForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.rentalForm.reset();
        this.successmsg = 'Add rental Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add rental Profile Unsuccessful';
    }

  }
  //to update a rental
rentalUpdate()
{
  console.log(this.rentalForm.value,'updatedform');

  if(this.rentalForm.valid)
  {
    this.service.updaterental(this.rentalForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}

}

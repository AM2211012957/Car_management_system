import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-buyadd',
  templateUrl: './buyadd.component.html',
  styleUrls: ['./buyadd.component.css']
})
export class BuyaddComponent implements OnInit {

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
       this.buyForm.patchValue({
         name:res.data[0].name,
         email:res.data[0].email,
         phone_num:res.data[0].phone_num,
         car_buy:res.data[0].car_buy,
         payment:res.data[0].payment
 
       });
     });
   }

  }
  buyForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'phone_num':new FormControl('',Validators.required),
    'car_buy':new FormControl('',Validators.required),
    'payment':new FormControl('',Validators.required)


  });

   //to create a new buy
buySubmit() {
  if (this.buyForm.valid) {
    console.log(this.buyForm.value);
    this.service.createbuy(this.buyForm.value).subscribe(
      (res) => {
        console.log(res, 'res==>');
        this.buyForm.reset();
        this.successmsg = 'Add buy Profile Successful';
      },
      (error) => {
        console.error('Error adding buy:', error);
        this.errormsg = 'Add buy Profile Unsuccessful';
      }
    );
  } else {
    this.errormsg = 'Add buy Profile Unsuccessful';
  }
}

  //to update a buy
buyUpdate()
{
  console.log(this.buyForm.value,'updatedform');

  if(this.buyForm.valid)
  {
    this.service.updatebuy(this.buyForm.value,this.getparamid).subscribe((res)=>{
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

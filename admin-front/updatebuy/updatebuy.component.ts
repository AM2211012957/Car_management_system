import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-updatebuy',
  templateUrl: './updatebuy.component.html',
  styleUrls: ['./updatebuy.component.css']
})
export class UpdatebuyComponent implements OnInit {

  buyForm = new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'phone_num':new FormControl('',Validators.required),
    'car_buy':new FormControl('',Validators.required),
    'payment':new FormControl('',Validators.required)

  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

    this.service.getOnebuy(this.router.snapshot.params['id']).subscribe((res:any)=>{
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
   //to update a buyers
buyUpdate()
{
  console.log(this.buyForm.value);
    this.service.updatebuy(this.router.snapshot.params['id'], this.buyForm.value).subscribe((result:any)=>{

    this.buyForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

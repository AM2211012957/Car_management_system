import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.css']
})
export class Table2Component implements OnInit {

  constructor(private service:ApiserviceService,private router: Router ) { }

  listData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllbuy();
  }
  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deletebuy(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete Buy profile successful!";
      this.getAllbuy();
    });
  }
  //get rental
  getAllbuy(){

    this.service.getAllbuy().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });
  }
  //get edit
  handleEditClick(id: any) {
    console.log('Edit button clicked for id:', id);
    // Navigate to the edit page with the id parameter
    this.router.navigate(['/updatebuy', id]);
  }

}

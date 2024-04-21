import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private service:ApiserviceService,private router: Router ) { }

  listData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllrental();
  }
  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deleterental(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete rental profile successful!";
      this.getAllrental();
    });
  }
  //get rental
  getAllrental(){

    this.service.getAllrental().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });
  }
  //get edit
  handleEditClick(id: any) {
    console.log('Edit button clicked for id:', id);
    // Navigate to the edit page with the id parameter
    this.router.navigate(['/updaterental', id]);
  }
}

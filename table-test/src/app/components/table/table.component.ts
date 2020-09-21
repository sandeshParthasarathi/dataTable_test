import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(
    private commonService: CommonService
  ) { }

  limit: number = 10;
  pageCount: number = 10;
  start: number = 0;
  tableData: any;
  resultsLength = 0;

  ngOnInit() {
    this.getTableData()
  }

  getTableData(){
    this.commonService.getTableDetails(this.start, this.limit).subscribe(res => {
      this.tableData = res;
      console.log(this.tableData)
    },
    error => {
      console.log(error)
    })
  }

  deleterow(row){
    this.tableData.forEach((item, i) => {
      if(item.id == row.id){
        //since no API call, removing only from an array
        this.tableData.splice(i, 1)
      }
    })
  }

  pagination(type:string){
    if(type === 'next'){
      console.log(this.pageCount)
      if(this.start == 0){
        this.start = this.limit;
      }else{
        this.start =  this.start + this.limit
      }
      this.limit = this.pageCount;
        this.getTableData()
    }
    if(type === 'prev'){
      if(( this.start - this.limit) < 0){
        this.start = 0;
        this.getTableData()
      }
      if(this.start !== 0){
        this.start =  this.start - this.limit
        this.getTableData()
      }
    }
  }

  itemsPerPage(){
    this.limit = this.pageCount;
    this.getTableData();
  }

  edit(item, i){
    item.isEdit = true;
    console.log(i)
  }

  cancel(item, i){
    item.isEdit = false;
  }

  save(item, i){
    item.isEdit = false;
  }

}

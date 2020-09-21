import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { table_details } from '../models/table-details'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient,

  ) { }

  getTableDetails(start:number = 0, limit: number): Observable<table_details>{
    let paramObj = new HttpParams();
      paramObj = paramObj.append("_start", start.toString());
    if(limit) {
      paramObj = paramObj.append("_limit", limit.toString());
    }

    return this.http.get(`http://jsonplaceholder.typicode.com/photos`, {params: paramObj})
    .pipe(map((tableData: any) => {
      tableData = tableData.map((data) => ({
        albumId: data.number,
        id: data.id,
        title: data.title,
        url: data.id,
        thumbnailUrl:  data.thumbnailUrl,
        isEdit: false
      }));
      return tableData;
    }));
  }
}

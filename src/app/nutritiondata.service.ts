import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class NutritiondataService {

  constructor(private http:HttpClient) { }

  public getResponse(url: string){
    console.log("entering into nutrition service");
    return this.http
      .get(`${url}`)
      .pipe(map(res => {
          console.log("get menthod - ",res);
          return res;
        })
      )
  }

  public getWhatson(voiceurl: string){
    console.log("entering into nutrition service");
    return this.http
      .get(`${voiceurl}`)
      .pipe(map(res => {
          console.log("watson get menthod - ",res);
          return res;
        })
      )
  }
}

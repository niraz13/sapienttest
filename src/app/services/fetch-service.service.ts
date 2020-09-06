import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FetchServiceService {
launchSucess = "https://api.spacexdata.com/v3/launches?limit=10&amp;launch_success=true";
  launchLand = "https://api.spacexdata.com/v3/launches?limit=10&amp;launch_success=true&amp;land_success=true";
  launchAll = "https://api.spacexdata.com/v3/launches?limit=10&amp;launch_success=true&amp;land_success=true&amp;launch_year="
  constructor(private http:HttpClient) { }

  getLaunchSuccess(): Observable < any[] > {
      return this.http.get<any[]>(this.launchSucess).pipe(
        map((res) => res));
    }

  getLaunchLand(): Observable<any[]> {
    return this.http.get<any[]>(this.launchLand).pipe(
      map((res) => res));
  }

  getLaunchAll(year:any): Observable<any[]> {
    return this.http.get<any[]>(this.launchAll+year).pipe(
      map((res) => res));
  }
  
}

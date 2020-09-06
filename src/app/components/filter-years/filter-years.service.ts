import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterYearsService {  
  appliedFilters = {}
  constructor() { }
  public filters = new Subject<any>();

  applyFilterYear(year: number) {
    //this.appliedFilters['launch_year'] = year;
    this.appliedFilters = { "launch_year": year }
    this.filters.next(this.appliedFilters);
  }

  applyFilterLaunch(isLaunch: boolean) {
   // this.appliedFilters['launch_success'] = isLaunch;
    this.appliedFilters = { "launch_success": isLaunch }
    this.filters.next(this.appliedFilters);
  }

  applyFilterLand(isLand: boolean) {
    this.appliedFilters['isLand'] = isLand;
    this.filters.next(this.appliedFilters);
  }
}

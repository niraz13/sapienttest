import { Component, OnInit } from '@angular/core';
import { FilterYearsService } from './filter-years.service';

@Component({
  selector: 'app-filter-years',
  templateUrl: './filter-years.component.html',
  styleUrls: ['./filter-years.component.css']
})
export class FilterYearsComponent implements OnInit {

  constructor(private filterService:FilterYearsService) { }
 

  ngOnInit(): void {
    setTimeout(() => {
      // this.filterService.applyFilterYear(2008);
      //this.filterService.applyFilterLaunch(true);
      //this.applyFilterLaunch(true);
    },2000);

  }
  applyFilterYear(year){
    this.filterService.applyFilterYear(year);
  }
  applyFilterLaunch(val) {
    this.filterService.applyFilterLaunch(val);
  }
  

  
}

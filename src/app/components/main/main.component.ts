import { Component, OnInit } from '@angular/core';
import { FetchServiceService } from 'src/app/services/fetch-service.service';
import { Subscription } from 'rxjs';
import { FilterYearsService } from '../filter-years/filter-years.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  launchProgramsData:any
  launchPrograms: any
  launchLandData: any
  launchAllData: any
  subscription: Subscription
  constructor(private fetchService: FetchServiceService, private filterService: FilterYearsService) { }

  ngOnInit(): void {
    this.getLaunchSuccessData()
    this.subscription = this.filterService.filters.subscribe(
      (filters) => {
        let filterKeys = Object.keys(filters);

        filterKeys.forEach(key => {
          this.launchPrograms = this.launchProgramsData.filter(program => {
            return program[key] === filters[key]
          })
// console.log(this.launchPrograms)
        })
      }
    );

  }


  getLaunchSuccessData() {
    this.fetchService.getLaunchSuccess().subscribe(
      response => {
        this.launchPrograms = response
        this.launchProgramsData = response
      })
  }

  // applyFilterYear(year){
  //   this.launchPrograms = this.launchPrograms.filtter(program => program.launch_year === year)
  // }
  // applyFilterSucessLaunch(isLaunchSucess) {
  //   this.launchPrograms = this.launchPrograms.filtter(program => program.launch_year === isLaunchSucess)
  // }
  // applyFilterSucessLand(isLandSucess) {
  //   this.launchPrograms = this.launchPrograms.filtter(program => program.launch_year === isLandSucess)
  // }


}

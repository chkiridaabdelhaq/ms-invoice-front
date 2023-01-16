import {Component, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { SolarData } from '../../@core/data/solar';


@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy {


  constructor(private themeService: NbThemeService,
              private solarService: SolarData) {
  }

  ngOnDestroy() {
  }
}

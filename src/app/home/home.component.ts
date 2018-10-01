import { Component,  ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, ContentChild } from '@angular/core';
import { TdMediaService } from '@covalent/core/media';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatDialog, MatDialogConfig } from '@angular/material';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ TdMediaService ]
})
export class HomeComponent implements AfterViewInit {
  title = 'app';
  context: any;
  random: any;
  contextualTitle: any = [{
    title: 'BRK.A',
    description: 'Berkshite Hathaway',
  }
];

  datadata: any = [0,1,2];

colorScheme: any = {
  domain: ['#1565C0']
};

single: any = [
  {
    'name': 'Databases',
    'value': 5,
  }
];

  dateFrom: Date = new Date(new Date().getTime() - (2 * 60 * 60 * 24 * 1000));
  dateTo: Date = new Date(new Date().getTime() - (1 * 60 * 60 * 24 * 1000));


routes: Object[] = [{
  icon: 'swap_horiz',
  route: '/analyst',
  title: 'Switch to Analyst View',
}
];
navmenu: Object[] = [{
    icon: 'looks_one',
    route: '.',
    title: 'BRK.A',
    description: 'Berkshite Hathaway',
    articles: [0,1,2],
  }, {
    icon: 'looks_two',
    route: '.',
    title: 'SEB',
    description: 'Seaboard',
    articles: [0,1,2,3,4],
  }, {
    icon: 'looks_3',
    route: '.',
    title: 'NVR',
    description: 'NVR',
    articles: [0],
  }, {
    icon: 'looks_4',
    route: '.',
    title: 'GOOG',
    description: 'Google',
    articles: [0,1],
  }, {
    icon: 'looks_5',
    route: '.',
    title: 'PCLN',
    description: 'Priceline.com',
    articles: [0,1,2],
  },
  {
    icon: 'looks_6',
    route: '.',
    title: 'WPO',
    description: 'Washington Post Company',
    articles: [0,1],
  }
];

times: any = [
  {
    'name': 'BRK.A',
    'series': [
      {
        'value': 3.12,
        'name': '1',
      },
      {
        'value': 3.14,
        'name': '2',
      },
      {
        'value': 4.50,
        'name': '3',
      },
      {
        'value': 5.55,
        'name': '4',
      },
      {
        'value': 7.21,
        'name': '5',
      },
      {
        'value': 7.21,
        'name': '6',
      },
      {
        'value': 7.21,
        'name': '7',
      },
      {
        'value': 7.22,
        'name': '8',
      },
      {
        'value': 8.85,
        'name': '9',
      },
      {
        'value': 8.53,
        'name': '10',
      }
    ]
  }

];
  constructor(
    public media: TdMediaService,
    private _changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
    private _iconRegistry: MatIconRegistry,
    private _domSanitizer: DomSanitizer){ 
      
    }

  ngOnInit() {
      console.log("Initialized Home Page");
      //this.datadata = this.navmenu[0];
  }

  ngAfterViewInit(): void {
    this.media.broadcast();
    this._changeDetectorRef.detectChanges();
    this.contextualTitle.title = "BRK.A";
    this.contextualTitle.description = "Berkshite Hathaway";
  }

  globalId(parsedData) {
    this.contextualTitle = parsedData;
    this.datadata = parsedData.articles;
    //this.contextualTitle = [...this.contextualTitle];
    console.log(parsedData);
    this.randomizeTelem(this.times,parsedData);
  }

  randomizeTelem(newTimes, nameSelect){
    newTimes[0].name = nameSelect.title;
    for (var i = 0; i < newTimes[0].series.length; i++ ){
      newTimes[0].series[i].value = Math.floor((Math.random() * 75) + 1);
    };
    this.times = newTimes;
    this.times = [...this.times];
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.height = '600px';
     dialogConfig.width = '700px';
    this.dialog.open(FormComponent, dialogConfig);
}




}

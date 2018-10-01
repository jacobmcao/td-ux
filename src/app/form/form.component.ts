import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import { TdMediaService } from '@covalent/core/media';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [ TdMediaService ]
})
export class FormComponent implements OnInit {

  user: any;

  constructor(private dialogRef: MatDialogRef<FormComponent>,) { }

  routes: Object[] = [{
    icon: 'dashboard',
    route: '.',
    title: 'Dashboard',
  }, {
    icon: 'library_books',
    route: '.',
    title: 'Documentation',
  }, {
    icon: 'build',
    route: '.',
    title: 'Console',
  }
];

  ngOnInit() {
    this.user = {
      name: {
        first: '',
        last: '',
      },
      email: '',
      nickname: '',
      title: '',
      link: '',
      description: ''
    };
  }

  close() {
    this.dialogRef.close();
}


  }



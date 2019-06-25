import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { 

    console.log('environment production = ' + environment.production);
    console.log('animal  = ' + environment.animal);
  }

  ngOnInit() {
  }

}

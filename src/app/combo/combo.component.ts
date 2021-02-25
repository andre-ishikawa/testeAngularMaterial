import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css']
})
export class ComboComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'teste material';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  customers = [ 
    {value: 'Chihiro'},
    {value: 'Howl'}
  ]
  isUnchanged = false;

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
}

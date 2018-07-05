import { IonicPage } from 'ionic-angular';
import { Component } from '@angular/core';
import { BmiProvider } from '../../providers/bmi/bmi';
import { BMI } from '../../models/bmi.model';

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {
  heightt: number;
  weight:number;
  BMI:BMI;

  constructor(private bmiProvider: BmiProvider) {
  }

  calculate(){    
    this.BMI = this.bmiProvider.calculateBMI(this.heightt, this.weight);
  }

}

import { Injectable } from '@angular/core';
import { BMI } from '../../models/bmi.model';

@Injectable()
export class BmiProvider {

  calculateBMI(height: number, weight: number){
    const BMI =  weight / height / height;

    return <BMI>{
      BMI,
      classification: this.classifyBMI(BMI),
    };
  }

  classifyBMI(bmi: number){
    if (bmi < 18.5) {
      return "Underweight";
    }else if (bmi >= 18.5 && bmi < 24.9 ) {
      return "Normal Weight";
    }else if (bmi >= 24.9 && bmi < 29.9) {
      return "Overweight";
    }else if (bmi >= 29.9 && bmi < 34.9) {
      return "Class 1 Obesity";
    }else if(bmi >= 34.9 && bmi < 39.9){
      return "Class 2 Obesity";
    }else{
      return "Class 3 Obsetity";
    }
  }

}

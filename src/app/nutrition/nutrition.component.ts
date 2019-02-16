import { Component, OnInit } from '@angular/core';
import {NutritiondataService} from '../nutritiondata.service';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent {

  constructor(private nutritiondataservice: NutritiondataService) { }


  public url: string;
  public voiceurl:string;
  private message: any;
  private calories;
  private weight_in_grm;
  private sodium: any;
  private carbohydrates;
  private totalFat;
  private transFattyAcid;
  private vitaainD;
  private vitaminC;
  private waterPerGrms;
  private displayData;

  searchItem="";
  private str1 = new String( "https://api.nutritionix.com/v1_1/search/" );
  private str2 =new String("http://api.voicerss.org/?key=87e75ac448f945eaa5e68df029a83fb4&hl=en-us&src=");


  public getNutritionalData(): void{
    this.url= this.str1.concat(this.searchItem,'?results=0:1&fields=*','&appId=','3bc80692','&appKey=','859a746b7e1e0fb2710fbe22682bea15');
    this.nutritiondataservice.getResponse(this.url).subscribe(res => {
    console.log('response from service - ',res);
    console.log(res.hits[0].fields.nf_calories);
    this.message = JSON.stringify(res);
    this.calories=res.hits[0].fields.nf_calories;
    this.weight_in_grm=res.hits[0].fields.nf_serving_weight_grams;
    this.sodium=res.hits[0].fields.nf_sodium;
    this.carbohydrates=res.hits[0].fields.nf_total_carbohydrate;
    this.totalFat=res.hits[0].fields.nf_total_fat;
    this.transFattyAcid=res.hits[0].fields.nf_trans_fatty_acid;
    this.vitaainD=res.hits[0].fields.nf_vitamin_a_dv;
    this.vitaminC=res.hits[0].fields.nf_vitamin_c_dv;
    this.waterPerGrms=res.hits[0].fields.nf_water_grams;
    if(this.calories){
      this.displayData = true;
    }
    })

    //http://api.voicerss.org/?key=87e75ac448f945eaa5e68df029a83fb4&hl=en-us&src=
    this.voiceurl=this.str2.concat(this.searchItem);
    console.log(this.voiceurl);
    this.nutritiondataservice.getWhatson(this.voiceurl).subscribe(res => {
      console.log('response from service - ',res);
    })
  }



}

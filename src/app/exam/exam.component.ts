import {Component} from "@angular/core";
import {ICategory} from "../interface/category.interface";
import {WeatherService} from "../services/weather.service";
import {IInfo} from "../interface/info.interface";
import {IThumb} from "../interface/thumb.interface";
@Component({
  selector:'app-exam',
  templateUrl:'./exam.component.html'
})
export class ExamComponent{
  mails:IInfo[]=[];
  categories:IThumb[]=[];
  constructor(private weatherService :WeatherService) {
  }
  ngOnInit(){
    this.weatherService.maillist().subscribe(value => {
      this.categories =value.data.categories;
      this.mails = value.data.mails;
    })
  }
  changeMails(category:string , child:string){
    var new_list :IInfo[]=[];
    this.weatherService.maillist().subscribe(value =>{
      for(var i=0;i<value.data.mails.length;i++){
        if(value.data.mails[i].category == category && value.data.mails[i].child== child ){
          new_list.push(value.data.mails[i]);
        }

      }
      this.mails= new_list;
    })
}

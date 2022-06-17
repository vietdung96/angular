import {IInfo} from "./info.interface";
export interface IThumb{
  name:string;
}
export interface IExam{
  categories:IThumb[];
  mails:IInfo[];
}
export interface IDataJSON3{
  status:number;
  message:string;
  data:IExam;
}

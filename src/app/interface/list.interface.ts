import {ITodo} from "./todo.interface";
export interface IList {
  name:string;
}
export interface IData2{
  list :IList[];
  program:ITodo[];
}
export interface IData2JSON{
  status:number;
  message:string;
  data:IData2;
}

import { SubTaskModel } from './SubTaskModel';
export class Task {
  id:number
  content:string
  completed:boolean
  deleted: boolean
  subTasks: SubTaskModel[]
  startDate: string
  endDate: string
}

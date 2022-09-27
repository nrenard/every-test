export interface IChangeStatus {
  status: StatusEnum
  textIndex: number
  newStatus: StatusEnum
}

export interface IActions {
  addNew(text: string): void
  changeStatus(params: IChangeStatus): void
}

export interface IState {
  toDo: string[],
  inProgress: string[],
  done: string[],
}

export enum StatusEnum {
  TO_DO = 'toDo',
  IN_PROGRESS = 'inProgress',
  DONE = 'done',
}

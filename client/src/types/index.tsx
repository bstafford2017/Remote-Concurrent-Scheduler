export interface IUser {
  id?: number
  username: string
  password: string
  fname: string
  lname: string
  admin: boolean
}

export interface IBuilding {
  id?: number
  name: string
}

export interface IRoom {
  id?: number
  number: string
  seats: number
  projector: boolean
  building: string
}

export interface IRecur {
  id?: number
  weekdays: string
  end: string
}

export interface IEvent {
  id?: number
  title: string
  date: string
  startTime: string
  endTime: string
  recur?: IRecur
  room: IRoom
  user: IUser
}

export interface ILogin {
  username: string
  password: string
}

export interface IConfigHeaders {
  headers: {
    [index: string]: string
  }
}

export interface IAction {
  type: string
  payload?: any
}

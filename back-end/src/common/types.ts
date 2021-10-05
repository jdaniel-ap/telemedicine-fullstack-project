import { Role } from ".prisma/client";


export interface IObjUserData {
  userId: string
  fullname : string
  age: number
  sex: string
  race: string
  height: number
  weight: number
}

export interface IObjHealthData {
  comorbidity: string
  isAlergic: boolean
  alergics: string
  useCigars: boolean
  useAlcohol: boolean
  howManyCigars: string
  howMuchAlcohol: string
  useDrugs  : boolean
  howManyDrugs : string
  useMedication: boolean
  whichMedications: string
  isPregnant: boolean
}

export interface IUserData extends IObjUserData {
  data : IObjUserData
}

export interface IUserRequest {
  fullname: string,
  username: string,
  password: string,
  email: string,
  medicRole: boolean,
}

export interface IUser {
  username: string,
  password: string,
  email: string,
  role: Role,
}


export interface IUserId {
  id: string
}

export interface consultRequest {
  userId: string,
  medicId: string,
  status: string,
  motive: string
}

export interface IRequest {
  username: string,
  password: string,
}




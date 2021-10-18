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

export interface IImage {
  asset_id: string,
  public_id: string,
  version: number,
  version_id: string,
  signature: string,
  width: number,
  height: number,
  format: string,
  resource_type: string,
  created_at: string,
  tags: Array<Text>,
  bytes: number,
  type: string,
  etag: string,
  placeholder: boolean,
  url: string,
  secure_url: string,
  access_mode: string,
  original_filename: string,
  original_extension: string
}




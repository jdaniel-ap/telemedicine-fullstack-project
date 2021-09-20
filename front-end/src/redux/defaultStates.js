export const signStateDefault = {
  signIn: false,
  signUp: false,
  serverResponse: {},
}

export const signupStateDefault = {
  username: "",
  fullname: "",
  email: "",
  password: "",
  medicRole: false,
}

export const basicUserDataDefault = {
  userData: {
		fullname: "",
		age: 0,
		sex: "",
		race: "",
		height: 0,
		weight: 0,
  },
  healthData: {
    comorbidity: "",
		isAlergic: false,
		alergics: "",
		useCigars: false,
		useAlcohol: false,
		useDrugs: false,
		useMedication: false,
    howManyCigars: "",
    howManyDrugs: "",
    howMuchAlcohol: "",
    whichMedications: "",
  }
}
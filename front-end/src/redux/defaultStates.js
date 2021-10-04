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
		fullname: null,
		age: null,
		sex: null,
		race: null,
		height: null,
		weight: null,
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
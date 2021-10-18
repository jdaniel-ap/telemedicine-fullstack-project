export const signStateDefault = {
  signIn: false,
  signUp: false,
  serverResponse: {},
}

export const signupStateDefault = {
  username: "",
  email: "",
  password: "",
  medicRole: false,
}

export const basicUserDataDefault = {
  userData: {
		fullname: '',
		age: '',
		sex: '',
		race: '',
		height: '',
		weight: '',
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
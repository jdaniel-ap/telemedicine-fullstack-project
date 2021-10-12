# React Telemedicine Fullstack project

Medtools is a telemedicine application, uses relational (MySQL) and non-relational (MongoDB) databases to store data and web sockets to facilitate communication in real time.

## Built With

• React • MySQL • Javascript • Typescript • HTML • CSS • Express • Node

## Front-end views!

**Sign-in**
![alt text](https://user-images.githubusercontent.com/74429277/137030105-5e52dc35-5732-4780-b0c0-d94fb6d85897.png)

**Sign-up**
![alt text](https://user-images.githubusercontent.com/74429277/137030350-765f5be9-b6af-4c1b-b65d-b09194fe6e11.png)

**Main page**
![alt text](https://user-images.githubusercontent.com/74429277/137030384-40742363-be3d-4a17-a4d2-797540aa3b4f.png)

**User credebtials**
![alt text](https://user-images.githubusercontent.com/74429277/137030456-5e9fcbd8-4c09-4ada-991c-0967ca096579.png)

**User basic data and medic information**
![alt text](https://user-images.githubusercontent.com/74429277/137030576-b3cbbc09-7259-47ff-b0b7-ee86a267e2df.png)

**User consults**
![alt text](https://user-images.githubusercontent.com/74429277/137030622-7cb2671a-4eab-4bae-91fc-16265313ee12.png)

**Generate consult**
![alt text](https://user-images.githubusercontent.com/74429277/137030673-55ab1979-23d2-475b-9bb4-7762e83644b5.png)

**User consult room**
![alt text](https://user-images.githubusercontent.com/74429277/137030715-1fff2137-4777-43ae-a1d8-eb84371d491c.png)

**Medic consults**
![alt text](https://user-images.githubusercontent.com/74429277/137030777-be41fea6-30d4-4bb7-95c5-5e7fe2ffefe3.png)

**Medic consult room**
![alt text](https://user-images.githubusercontent.com/74429277/137030814-bc0f43a5-b6a5-4ca2-8012-0f197fde90e3.png)

## API Documentation

Obs. All the routes with admin tag needed to login with admin permissions

<br/>

### **Sign-up**

##### `POST` /api/user/sign-up

<br/>

This endpoint register a new user and return an auth token.

- Example `request body`

  ```json
    {
      "name": "Testunto Testeria",
      "email": "testerland@test.com",
      "password": "test123",
      "role": "medic" or "user" (default: "user")
    }
  ```

- Example `response body`
  ```json
  {
    "status": "success",
    "message": "You have been successfully registered"
  }
  ```
  <br/>

### **Login**

##### `POST` /api/user/login

  <br/>

This endpoint validate the login and return a token and basic user info.

- example `request body`

  ```json
  {
    "email": "testerland@test.com",
    "password": "tester123"
  }
  ```

- example `response body`
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiIsImZ1bGxuYW1lIjoiSm9zZSBEYW5pZWwgQXJyZWF6YSBQdWVydGEiLCJ1c2VybmFtZSI6ImpkYW5pZWxfYXAiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsIm1lZGljUm9sZSI6dHJ1ZSwiaWF0IjoxNjMxNDQ2MDUxLCJleHAiOjE2MzE0NDYzNTEsInN1YiI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiJ9.HgKfpimfS1ExsvkXMcgNx09GAiaO1yxzI4qfrtStS_o",
    "user": {
      "id": "477b299a-231f-40da-97c3-ac752654526f",
      "username": "testex",
      "email": "testerland@test.com",
      "medicRole": true
    }
  }
  ```
  <br/>

### **Edit user basic data**

##### `PUT` /api/user/edit

  <br/>

This endpoint allows the user to edit their credentials to login

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

  - `body`

  ```json
  {
    "username": "testex01",
    "email": "testerland@test.com"
  }
  ```

- example `response body`
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiIsImZ1bGxuYW1lIjoiSm9zZSBEYW5pZWwgQXJyZWF6YSBQdWVydGEiLCJ1c2VybmFtZSI6ImpkYW5pZWxfYXAiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsIm1lZGljUm9sZSI6dHJ1ZSwiaWF0IjoxNjMxNDQ2NDkyLCJleHAiOjE2MzE0NDY3OTIsInN1YiI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiJ9.pj-YiAD2w8J4F_J2Jzz8zuGLUj4XQhtFjn7RY4W1GuY",
    "user": {
      "id": "477b299a-231f-40da-97c3-ac752654526f",
      "username": "testex01",
      "email": "testerland@test.com",
      "medicRole": true
    }
  }
  ```
  <br/>

### **Put user data and medic history**

##### `PUT` /api/user/data

  <br/>

This endpoint allows the user to add their basic information and medical history

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

  - `body`

  ```json
  {
    "userData": {
      "fullname": "Jose Daniel Arreaza",
      "age": 28,
      "sex": "Male",
      "race": "Black",
      "height": 1.83,
      "weight": 83
    },
    "healthData": {
      "comorbidity": "No tengo nada",
      "isAlergic": true,
      "alergics": "polvo",
      "useCigars": false,
      "useAlcohol": false,
      "useDrugs": false,
      "useMedication": false,
      "isPregnant": false
    }
  }
  ```

- example `response body`
  ```json
  {
    "status": "success",
    "message": "TThe information was successfully saved"
  }
  ```
  <br/>

### **Get user info and medical history**

##### `GET` /api/user/data/health

  <br/>

This endpoint allows the user find get his data

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

- example `response body`
  ```json
  {
    "id": "cku2vqjxx0051aonctpdc4tbn",
    "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
    "fullname": "Jose Daniel Arreaza",
    "age": 28,
    "sex": "masculino",
    "race": "pardo",
    "height": 1.9,
    "weight": 99,
    "healthData": {
      "id": 1,
      "userDataId": "cku2vqjxx0051aonctpdc4tbn",
      "comorbidity": "No tengo pruebas pero tampoco dudas",
      "isAlergic": true,
      "useCigars": false,
      "useDrugs": false,
      "useMedication": false,
      "useAlcohol": false,
      "howManyCigars": "",
      "alergics": "Al polvo",
      "howMuchAlcohol": "",
      "howManyDrugs": "",
      "whichMedications": "",
      "isPregnant": false
    }
  }
  ```
  <br/>

### **Generate consult**

##### `POST` /api/consult/new

  <br/>

This endpoint allows to generate a new consult

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

  - `body`

  ```json
  {
    "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
    "medicId": "d0b4c95e-896e-4530-82e8-8613c0128056",
    "motive": "chequeo de fractura"
  }
  ```

- example `response body`
  ```json
  {
    "status": "success",
    "message": "consult created successfully"
  }
  ```
  <br/>

### **Get consult by pacient**

##### `GET` /api/consult/pacient

  <br/>

This endpoint allows get all consults generated by a pacient

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

- example `response body`
  ```json
  [
    {
      "id": 22,
      "createdAt": "2021-10-05T11:35:57.844Z",
      "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
      "medicId": "d0b4c95e-896e-4530-82e8-8613c0128056",
      "status": "open",
      "motive": "Chequeo de resultados hematologicos"
    },
    {
      "id": 23,
      "createdAt": "2021-10-06T11:30:22.936Z",
      "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
      "medicId": "d0b4c95e-896e-4530-82e8-8613c0128056",
      "status": "open",
      "motive": "chequeo de fractura"
    }
  ]
  ```
  <br/>

### **Get consult by medic**

##### `GET` /api/consult/medic

  <br/>

This endpoint allows get all consults associated a medic id

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

- example `response body`
  ```json
  [
    {
      "status": "wait",
      "id": 21,
      "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
      "motive": "test 1",
      "createdAt": "2021-10-03T21:25:35.132Z",
      "user": {
        "userData": {
          "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
          "fullname": "Jose Daniel Arreaza"
        }
      }
    },
    {
      "status": "open",
      "id": 22,
      "userId": "95757dca-5604-4dda-bb2a-2571afshgj84",
      "motive": "Chequeo de resultados hematologicos",
      "createdAt": "2021-10-05T11:35:57.844Z",
      "user": {
        "userData": {
          "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
          "fullname": "Pedro Perez"
        }
      }
    },
    {
      "status": "open",
      "id": 23,
      "userId": "95757dca-3404-4cfa-5555-2571af4e3333",
      "motive": "chequeo de examenes hematologicos",
      "createdAt": "2021-10-06T11:30:22.936Z",
      "user": {
        "userData": {
          "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
          "fullname": "Luisa Lois"
        }
      }
    }
  ]
  ```
  <br/>

### **Get pacient data by medic**

##### `GET` /api/consult/medic/pacientData/:id

  <br/>

This endpoint allows the doctor to obtain basic and medical information about the patient. Only a physician can obtain information about a patient. Only a doctor can obtain information about a patient if there is a match between their id in a generated consult.

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

- example `response body`
  ```json
  {
    "id": "cku2vqjxx0051aonctpdc4tbn",
    "userId": "95757dca-3404-4cfa-bb2a-2571af4e9f09",
    "fullname": "Jose Daniel Arreaza",
    "age": 28,
    "sex": "masculino",
    "race": "pardo",
    "height": 1.9,
    "weight": 99,
    "healthData": {
      "id": 1,
      "userDataId": "cku2vqjxx0051aonctpdc4tbn",
      "comorbidity": "No tengo pruebas pero tampoco dudas",
      "isAlergic": true,
      "useCigars": false,
      "useDrugs": false,
      "useMedication": false,
      "useAlcohol": false,
      "howManyCigars": "",
      "alergics": "Al polvo",
      "howMuchAlcohol": "",
      "howManyDrugs": "",
      "whichMedications": "",
      "isPregnant": false
    }
  }
  ```
  <br/>

### **Get chat history**

##### `GET` /chat/history/:id

  <br/>

This endpoint allows the doctor and the user to get the conversation history. Only a user with his id associated with the created room can obtain this history.

- example `request`

  - `headers`

  ```json
  {
    "Content-Type": "multipart/form-data",
    "Authorization": "(Sign or Login Token)"
  }
  ```

- example `response body`
  ```json
  {
    "_id": "6161e9e84ea3be8f20cfcb12",
    "pacient": "d02fb80f-30e3-44f7-8a4d-161c4a1c957e",
    "medic": "4341af71-1843-4f97-a107-52fe4316d020",
    "room": 5,
    "messages": [
      {
        "message": "Hoola",
        "time": "14:41",
        "user": "2d53ba90-3a30-4490-ac34-0590a2a4eceb",
        "id": "20fc6a6e-a0b5-4fad-919f-5edda7e4adc9"
      },
      {
        "message": "Hola :3 como estas?",
        "time": "15:41",
        "user": "7f30b5dd-f266-4976-a4a6-0fcd2342fb98",
        "id": "dd241ae2-4135-4e3d-9704-da8f933b7b7e"
      },
      {
        "message": "Bien :D",
        "time": "16:41",
        "user": "4341af71-1843-4f97-a107-52fe4316d020",
        "id": "53696b47-9df0-48aa-bd92-4999b55bb0e2"
      },
      {
        "message": "¿Y tú?",
        "time": "16:42",
        "user": "4341af71-1843-4f97-a107-52fe4316d020",
        "id": "875b7026-e16d-43dd-b9cd-960387314587"
      }
    ]
  }
  ```
  <br/>

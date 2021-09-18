# React Telemedicine Fullstack project

## Built With

• React • MySQL • Javascript • Typescript • HTML • CSS • Express • Node

## What's inside?

A quick look at the top-level files and directories you'll see in a React project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── package-lock.json
    ├── package.json
    └── README.md

---

## API Documentation

Obs. All the routes with admin tag needed to login with admin permissions

<br/>

### **Sign-up**

##### `POST` /api/sign-up

<br/>

This endpoint register a new user and return an auth token.

- Exemple `request body`

  ```json
    {
      "name": "Testunto Testeria",
      "email": "testerland@test.com",
      "password": "test123",
      "role": "medic" or "pacient" (default: "user")
    }
  ```

- Exemple `response body`
  ```json
  {
    "status": "success",
    "message": "You have been successfully registered"
  }
  ```
  <br/>

### **Login**

##### `POST` /api/login

  <br/>

This endpoint validate the login and return a token.

- exemple `request body`

  ```json
  {
    "email": "testerland@test.com",
    "password": "tester123"
  }
  ```

- exemple `response body`
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiIsImZ1bGxuYW1lIjoiSm9zZSBEYW5pZWwgQXJyZWF6YSBQdWVydGEiLCJ1c2VybmFtZSI6ImpkYW5pZWxfYXAiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsIm1lZGljUm9sZSI6dHJ1ZSwiaWF0IjoxNjMxNDQ2MDUxLCJleHAiOjE2MzE0NDYzNTEsInN1YiI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiJ9.HgKfpimfS1ExsvkXMcgNx09GAiaO1yxzI4qfrtStS_o",
    "user": {
      "id": "477b299a-231f-40da-97c3-ac752654526f",
      "fullname": "Tester Testundo Testeria",
      "username": "testex",
      "email": "testerland@test.com",
      "medicRole": true
    }
  }
  ```
  <br/>

### **Edit Data**

##### `PUT` /api/user/edit

  <br/>

This endpoint register a new author in aplication database.

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
    "fullname": "Tester Testeria",
    "username": "testex01",
    "email": "testerland@test.com"
  }
  ```

- exemple `response body`
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiIsImZ1bGxuYW1lIjoiSm9zZSBEYW5pZWwgQXJyZWF6YSBQdWVydGEiLCJ1c2VybmFtZSI6ImpkYW5pZWxfYXAiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsIm1lZGljUm9sZSI6dHJ1ZSwiaWF0IjoxNjMxNDQ2NDkyLCJleHAiOjE2MzE0NDY3OTIsInN1YiI6IjQ3N2IyOTlhLTIzMWYtNDBkYS05N2MzLWFjNzUyNjU0NTI2ZiJ9.pj-YiAD2w8J4F_J2Jzz8zuGLUj4XQhtFjn7RY4W1GuY",
    "user": {
      "id": "477b299a-231f-40da-97c3-ac752654526f",
      "fullname": "Tester Testeria",
      "username": "testex01",
      "email": "testerland@test.com",
      "medicRole": true
    }
  }
  ```
  <br/>

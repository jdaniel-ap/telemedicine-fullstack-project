## This repository contains a fullstack MERN project:

---

- [English](#about-the-project)
- [Español](#sobre-el-proyecto)
- [Português](#sobre-o-projeto)

### About the project

The development of this application is for the purpose of implementing the knowledge that I have acquired this last year. I want to implement a complete crud software based on a relational database (MySQL). With _Node / Express_ technology on the server side and _Javascript / React_ on the client side.

Another objective is to offer the software for free to communities where access to the public health system does not exist or is difficult.

### Sobre el proyecto

El desarrollo de esta aplicación tiene el propósito de probar e implementar todos los conocimientos que he adquirido este último año de estudio en Trybe. Quiero diseñar una aplicacion CRUD sobre una base de datos no relacional (MySQL). Con tecnología Node / Express en el lado del servidor y Javascript / React por el lado del cliente.

Otro objetivo es ofrecer el software de forma gratuita a las comunidades donde el acceso al sistema de salud pública es extremadamente dificil.

### Sobre o projeto

O desenvolvimento desta aplicação pretende testar os conhecimentos que adquiri no último ano na Trybe. Quero implementar um CRUD baseado em um banco de dados não relacional (MySQL). Desenvolvido por Node / Express no lado do servidor e Javascript / React no lado do cliente.

Outra meta é oferecer o software gratuitamente para comunidades onde o acesso ao sistema público de saúde não existe ou é difícil.

### Technologies Applied in the Project

- MySQL
- MongoDB
- Reactjs
- Javascript
- Typescript
- Express
- Node
- Git
- Prisma ORM

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

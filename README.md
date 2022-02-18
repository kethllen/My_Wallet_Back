# MyWallet

The myWallet app is here to help you control your expenses, to avoid surprises at the end of the month!

<img src="src/assets/my-wallet.gif" />

API available at https://api-my--wallet.herokuapp.com/
Try it out now at https://my-wallet-fronf.vercel.app/


## About

This web application will help you to have greater control of your expenses, as you can register your debts and your credits, and you will always have your updated balance at hand! And don't worry, you have all your extract history saved in a database!Below are the implemented features:

- Sign up
- Log in
- Log out
- List full extract
- Add new output (debt)
- Add new entry (credit)

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/styled-components%20-%2320232a.svg?&style=for-the-badge&color=b8679e&logo=styled-components&logoColor=%3a3a3a'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/axios%20-%2320232a.svg?&style=for-the-badge&color=informational'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react-app%20-%2320232a.svg?&style=for-the-badge&color=60ddf9&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/react_route%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
  <img style='margin: 5px;' src='https://img.shields.io/badge/mongobd%20-%2320232a.svg?&style=for-the-badge&color=yellowgreen&logo=mongodb&logoColor=%2361DAFB%27'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/nodejs%20-%2320232a.svg?&style=for-the-badge&color=blue&logo=javascript&logoColor=%2361DAFB%27'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/express%20-%2320232a.svg?&style=for-the-badge&color=green&logo=express&logoColor=%2361DAFB%27'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/nodejs%20-%2320232a.svg?&style=for-the-badge&color=blue&logo=javascript&logoColor=%2361DAFB%27'>
</p>

## How to run

1. Clone this repository
2. Install back-end dependencies
```bash
npm i
```
3.Create an environment variables file in the project root (.env) and configure a variable with the name 'PORT' that receives the port you want to use, and another called 'MONGO_URI' with the url of the bank, Example:
```bash
MONGO_URI = mongodb://localhost/:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=ApiMyWallet
PORT=5000
```
4. Run the back-end with
```bash
npm start or node app.js
```
5. Clone the front-end repository at https://github.com/kethllen/MyWallet_Fronf
6. Follow instructions to run back-end at https://github.com/kethllen/MyWallet_Fronf

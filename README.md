# Dogger App

## Install

### Frontend

#### Install node dependencies
```bash
cd path/Dogger/
npm install
```
- [react](https://es.reactjs.org/)
- [react-dom](https://es.reactjs.org/docs/react-dom.html)
- [react-router-dom](https://reactrouter.com/)
- [babel](https://babeljs.io/) is a JavaScript compiler
- [webpack](https://webpack.js.org/) is a module bundler
- [css-loader](https://webpack.js.org/loaders/css-loader/) The css-loader interprets @import and url() like import/require() and will resolve them.
- [file-loader](https://webpack.js.org/loaders/file-loader/) The file-loader resolves import/require() on a file into a url and emits the file into the output directory.
- [html-loader](https://webpack.js.org/loaders/html-loader/) Exports HTML as string. HTML is minimized when the compiler demands.
- [mini-css-extract-plugin]() 
- [sass-loader](https://webpack.js.org/loaders/sass-loader/) Loads a Sass/SCSS file and compiles it to CSS.
- [eslint]() linter tool for identifying and reporting on patterns in JavaScript
- [eslint-plugin-jsx-a11y]() Static AST checker for accessibility rules on JSX elements.

#### Run project
```bash
npm run start
```

#### Build ***Dogger App*** to production
```bash
npm run build
```

### Backend

Create virtualenv
```bash
virtualenv dogger
```
Install dependencies
```bash
(dogger) cd path/project/backend
(dogger) pip install -r requirements.txt
```
- [Django](https://docs.djangoproject.com/en/3.1/) Django is a high-level Python Web framework
- [Django Rest Framework](https://www.django-rest-framework.org/) is a powerful and flexible toolkit for building Web APIs
- [Django Rest Framework JWT](https://jpadilla.github.io/django-rest-framework-jwt/)  provides JSON Web Token Authentication support for Django REST framework
- [Django CORS Headers](https://github.com/adamchainz/django-cors-headers) This allows in-browser requests to your Django application from other origins
- [psycopg2](https://www.psycopg.org/docs/) Psycopg is the most popular PostgreSQL database adapter

Create file _secret.json_ into folder backend with the follow structure:

```json
{
  "SECRET_KEY": "6!-mnn8@b6)&h(+di&vfw^m%rfgbhodyftavf%c9#cwc1r%g16",
  "DEBUG": 1,
  "DB_NAME": "",
  "DB_USER": "",
  "DB_PASSWORD": "",
  "DB_HOST": "",
  "DB_PORT": ""
}
```

Run project (inside the folder backend)
```bash
(dogger) python manage.py runserver
```

## Mockups - Web

## **Login:** 
![Login](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Login.png)

## **Register:** 
![register](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Register.png)

## **Home Owner:** 
![Home owner](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Onwer%20view_1.png)

## **Modal Add Dog:** 
![add dog](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Owner%20Add%20Dog_1.png)

## **Modal Post Walk:**
![post walk](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Owner%20Post%20Walk.png)

## **Modal Reserver Walker:**
![reserver](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Owner%20Reserver%20Walker.png)

## **Home Walker:** 
![home walker](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Walker%20view.png)

## **Modal Add Schedule:** 
![add schedule](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Walker%20Add%20Schedule.png)

## **Modal Apply Post:** 
![apply post](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Web%20app/Web%20-%20Walker%20Apply.png)

## Mockups - Mobile

## **Loading:**
![loading](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Mobile%20app/Mobile%20-%20loading.png)

## **Login:**
![login](https://github.com/alexandrojp/Dogger-layout/blob/master/wireframes/Mobile%20app/Mobile%20-%20login.png)

## Layout

You can find the layout (html and css) into repo
[Dogger-layout](https://github.com/alexandrojp/Dogger-layout)
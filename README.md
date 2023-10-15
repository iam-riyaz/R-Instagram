
# R-Instagram

A personalized social media app user have to register along with profile image, user can make friends in the application, post imgae along with title and other user can like their posts.


## Features

- Light/dark mode
- Signup/login 
- JWT authentication 
- Profile Image Upload at profile creation 
- User can view other user's posts
- User can add new post with title
- User can like posts
- User can add/remove other users from their friend List
- Mobile screen compatible/ responsive app 
- live updates



## Acknowledgements

- [Firebase](https://firebase.google.com/)
 - [Material UI](https://mui.com/)
 - [ExpressJS](https://expressjs.com/)
 - [Mullter](https://www.npmjs.com/package/multer)
 - [Bcrypt](https://www.npmjs.com/package/bcrypt)
 - [Render](https://render.com/)
 - [Vercel](https://vercel.com/)
 - [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
 - [React](https://react.dev/)
 - [Redux](https://redux.js.org/)


## API Reference

#### User Registration 

```http
  POST /api/register
```


#### User Login

```http
  POST /api/users/login
```

#### Get user's data

```http
  GET /api/users/:id
```

#### Get user's friends list

```http
  GET /api/users/:id/friends
```

#### Update user's friends list

```http
  PATCH /api/users/:id/:friendId
```

#### Create Post

```http
  POST /api/posts/create
```

#### Get all posts

```http
  GET /api/posts
```

#### Get user's posts

```http
  GET /api/posts/:id
```

#### Update post's likes

```http
  PATCH /api/posts/:id/like
```

## License



[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)



## Demo

### https://r-instagram.vercel.app

![Gif demo](https://firebasestorage.googleapis.com/v0/b/r-instagram.appspot.com/o/ezgif.com-video-to-gif.gif?alt=media&token=991b4e70-808a-4b2c-8d3a-3717cd2c9a6e&_gl=1*bct9cc*_ga*MTczODI3NDgzOC4xNjk2Njc5OTg4*_ga_CW55HF8NVT*MTY5NzM3NzMzMS44LjEuMTY5NzM3NzkwNS40Ni4wLjA.)


## Tech Stack 

- ReactJS
- NodeJS
- ExpressJS
- MaterialUI
- Redux
- Firebase
- mongoDB
- Mullter
- Bcrypt
- CSS
- Json Web Token

## Installation

Install R-Instagram

### backend
```bash
  cd backend
```
```bash
  yarn install
```
```bash
  yarn start
```

### frontend
```bash
  cd frontend
```
```bash
  npm install
```
```bash
  npm run dev
```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

### backend
`PORT`

`MONGO_URI`

`JWT_SECRET`

### frontend

`VITE_APIKEY`

`VITE_AUTHDOMAIN`

`VITE_PROJECTID`

`VITE_STORAGEBUCKET`

`VITE_MESSAGINGSENDERID`

`VITE_APPID`

`VITE_MEASUREMENTID`

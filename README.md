## User Authentication - Signup/Login with OAuth 2.0

![Login](./app/src/img/LogIn.png)

Users Signup and Login React framework application with form validation. Using BCrypt and JWT encryptions, with the option to sign-in with GitHub via [OAuth](https://developer.github.com/apps/building-oauth-apps/).

<b>Please Note:</b>
- This repository contain two repositories; Express/Mongoose API code is in `/api` directory (managing data), and React code is in `/app` directory (frontend).

#### Concepts
- HTML Forms
- Form Validation
- Interacting with an API
- React Routing
- BCrypt/JWT encryptions
- OAuth setup with GitHub

#### Logging with GitHub via OAuth
![Login](./app/src/img/OAuthLogIn.png)

### Built-on:
- [Node.js](https://nodejs.org/en/) - Node Package Manager
- [Localtunnel](https://localtunnel.github.io/www/) - Share a web service on your locally
- [React](https://facebook.github.io/react/) - An npm package to get you immediate access to React
- [React Router](https://reacttraining.com/react-router/) - Declarative routing for React
- [Express](http://expressjs.com/) - Web application framework
- [Mongoose](http://mongoosejs.com/) - Elegant mongodb object modeling for node.js
- [BCrypt](https://www.npmjs.com/package/bcrypt) - BCrypt algorithms based on Key Stretching
- [JSON Web Tokens](https://jwt.io/) - JWT.IO allows you to decode, verify and generate JWT
- [OAuth2.0](https://auth0.com/) - Grant limited access to an HTTP service, either on behalf of a resource owner

#### Fire up localtunnel on port 8080
This will make your localhost:8080 available online.
```bash
# install - sudo maybe required
npm install -g localtunnel
# run
lt --port 8080 --subdomain <replace_me>
```
This would make localhost:8080 available at `https://<replace_me>.localtunnel.me`

#### [Setting up a GitHub app](https://www.membrane-soa.org/service-proxy-doc/4.4/oauth2-github.htm)
- Create an application on Github - [https://github.com/settings/applications/new](https://github.com/settings/applications/new)
- Set *application name* as **authentication-example**
- Set *homepage url* as `https://<replace_me>.localtunnel.me`
- Set *callback url* as `https://<replace_me>.localtunnel.me`
- take note of your client id and client secret - you will need them shortly

#### Initial Setup for `/api` directory:
- Create new MongoDB database called `authentication-oauth`
- Add new user with password to this account
- Create `.env` file in the root `/api` along side `package.json`
- Add newly created Mongo string `DATABASE_URL=mongodb://user:password@ds139690.mlab.com:39690/mcrcodes-authentication-bcrypt`
- Add `JWT_SECRET` to `.env` - this can be anything
- Add your client id and client secret to `.env` as `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` respectively.

#### Initial Setup for `/app` directory:
- Create a `.env` in the `/app` directory with a `GITHUB_CLIENT_ID` the same as above.

#### Running the App:
To run this project you will need to download it onto your local machine and install all dependencies.
Navigate inside both `/api` and `/app` folders and install all dependencies by entering the following command on your terminal window:
```
npm install
```
Finally to run start API code and React code enter the following command in your terminal windows:
```
npm start --prefix api
npm start --prefix app
```
This will run the server and frontend, open via localtunnel(make sure its running as well) url to view it in the browser. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.

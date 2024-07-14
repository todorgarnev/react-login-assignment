# Login Assignment

## Assignment

Create a login page containing a login form with Email and Password fields, Login button and a "Forgot Password" link that leads to a "Forgot Password" page. The login page should display a success screen upon successful login and an error message on the same page if the login fails. The "Forgot Password" page should display a success screen indicating that a reset link was sent to the email after entering a valid email (the actual sending of the email is not required). The application should support internationalization for two languages: English and Bulgarian. Validate credentials against a local JSON file. Write the code to be scalable and maintainable, utilizing state management where necessary.

### Technologies and Libraries

1. React with Typescript
2. React Hook Form
3. Tanstack Query
4. Zod
5. React i18n
6. Axios
7. Emotion

### Running The App locally

To run the app, follow these steps.

1. Ensure that latest [NodeJS](http://nodejs.org/) is installed.
2. From the project folder execute the following commands:

To install dependencies:

```shell
  npm install
```

To run the client app:

```shell
  npm run dev
```

The project also has small server for handling mocked request - api folder.

1. Ensure that latest [NodeJS](http://nodejs.org/) is installed.
2. From the project folder execute the following commands:

To install dependencies:

```shell
  npm install
```

To run the server:

```shell
  npm run dev
```

Browse to [http://localhost:5173](http://localhost:5173) and see the running app.

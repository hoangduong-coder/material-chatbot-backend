# material-chatbot-backend

## Description

### 1. Introduction

This is the back-end part. Here is the app front-end: https://github.com/hoangduong-coder/material-chatbot-frontend

The project is from [Wärtsilä](https://www.wartsila.com/), a global leader in innovative technologies and lifecycle solutions for the marine and energy markets. Each of their products contains many small elements, with a numerous data of chemical compositions, physicals parameters, standards, etc. In some cases, that might be an obstacle for any designer. For this reason, this chatbot is expected to be a solution which assists the customer and designer to get more information about the components and materials.

For the back-end, we used TypeScript as the programming language. The database is stored locally as a JSON file in a local database folder.

### 2. Main functions

- GET, POST new material data.
- GET the chatlog data.
- POST the new question. In this case, the questions, queries, and analyzed results will be passed from the front-end to the back-end via APIs. This back-end contains functions which are in charge of classifying the question type and returning the answer based on the provided request.

-***Note:** Currently, there is no cloud database for this project, which means all databases in this project are saved locally. The data will return to the default value when you refresh/reload the page or the server.*

### 3. List of available questions:

| Type | Definition | Example |
| --- | --- | --- |
| Greeting | | Hello, thank you, goodbye, etc. |
| Direct | Fetch ID, international standards, physical quantities, remarks | What are the raw material and density of MAT0001 and MAT0002? <br> What are materials with Cr, Mn in?|
| Equivalent | Fetch ID of simliar material | Which material is similar to MAT0005 and MAT0009? |
| Calculation | Further calculaton (mass, cost) | What is the cost for 8mm length bar MAT0010? |
| Range | Display ID satisfied with a given range | Find materials whose diameter from 200-300 |
| All params | Give an ID and the bot shows all information about that material | MAT0003 |

-***Note:** Unfortunately, any other questions whose content are not mentioned above and/or contain pronunciation error(s) **may not** be answerd correctly.*

### 4. List of APIs

| Method | Route | Function |
| --- | --- | --- |
| GET | /api/qna | Return chatlog data |
| GET | /api/qna/[:yourIdHere] | Return the question's answer |
| POST | /api/qna | Post a new question, see this [sample query](https://github.com/hoangduong-coder/material-chatbot-backend/blob/main/src/sample/sampleQuery.json) |
| GET | /api/material | Return all material in the database |
| POST | /api/material | Post a new material, see this [material database](https://github.com/hoangduong-coder/material-chatbot-backend/blob/main/src/data/material.json) |

## Available Scripts and setup

1. Install the dependencies using `npm` or `yarn`:

```
npm install
```

or

```
yarn install
```

2. Create `.env` file with the correct credentials to access Azure service. (Contact me via email at hoangduongphantri@gmail.com to get the environment variables file).

3. Remember to check if you have `tsconfig.json` file in your project. Otherwise, build the file by `npm` or `yarn`:
```
npm run build
```
or
```
yarn run build
```
4. Run the program by `npm` or `yarn` in the development mode.:

```
npm run dev
```

or

```
yarn run dev
```

Open [http://localhost:3001](http://localhost:3001) in any API platform to test the APIs.

5. You can test the code by `npm` or `yarn`:
```
npm run test
```
or
```
yarn run test
```

Contact me via GitHub or email in case you have any further questions. 


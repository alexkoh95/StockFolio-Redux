
# StockFolio Redux

### Project Name: StockFolio Redux

### By Alex Koh

Personal investing simulation. This is a recreation of my capstone project from GA (https://github.com/alexkoh95/StockFolio). 

The main goals of the project include:
1. Learn Redux and how it acts as a stage management tool
2. Practice creating a full stack application using a MERN stack

### Dependencies:

Frontend:
- Reduxjs/toolkit
- Axios
- React-redux
- React-router-Dom
- Redux
- TailwindCSS

Backend:
- Bcrypt
- Cookie-parser
- Cors
- dotenv
- Express
- Express-router
- Mongoose
- Nodemon

## App Functions:

#### Login and Signup
- Text inputs for email and password in Signup and Signin ✅
- Submit button ✅
- Error message for incorrect credentials ✅
- Redirect to the admin dashboard page for correct credentials ✅
- Create account ✅

#### Dashboard
- Show previous stock purchases as cards (fetched from a database). ✅
- Display basic user information (Cash in Account, Username). Calculation for cash in account performed in backend ✅
- Alternate between Card view and Table view using AG-Grid ❌
- Call API to display current stock prices  ❌ (Note: Experiencing an error with FinnHub API - error message .end() was called twice, not supported in superagent)

#### Stock Search
- Call Alpha Vantage API to get stock quote (submit stock symbol to get stock quote) ✅
- Loading Spinner ✅
- Calculate Shares to Purchase ✅
- Purchase a new stock (data stored in DB) ✅


#### Performance (WORK IN PROGRESS)
- Not started 
- Aim: Use D3 or Chart JS 

#### Log Out
- Logout button that redirects to login page ✅


## Project Screen Shot(s) (WORK IN PROGRESS)

### 1. EntryPage
![EntryPage](https://imgur.com/NeDipDR.jpg)


### 2. SignUp Page
![Signup](https://imgur.com/xcRE8Rf.jpg)

### 3. SignIn Page (with Error Message)
![SignIn](https://imgur.com/DA5O4hB.jpg)

### 4. Landing Page After Login
![LandingPageAfterLogin](https://imgur.com/gWH5Fmw.jpg)

### 6. Search Result (Coca Cola)
![SearchResult](https://imgur.com/3N1cHGo.jpg)

### 7. SignOut Page (Users will be redirect to Signin in 3 seconds after clicking on signout)
![SignIn](https://imgur.com/5WLflM4.jpg)



## Key Learnings:

1. Can't really use req.body in GET requests
If you need to filter results in your Route you should can use the header instead (e.g. line 8: req.headers.header_unique_user_id in StockFolio-Redux/backend/routes/Get-User-Stock-Information.js)

2. Comments from Hodlnaut final round interview:

2a. My Redux is not very Redux-y. 
This is because I was running into issues with CreateAsyncThunk and moved my fetch/axios calls into the frontend. 

Issue has been resolved - CreateAsyncThunk was returning errors because I was not passing data into it correctly (e.g. the second params in CreateAsyncThunk is reserved for thunkAPI, an object containing all of the parameters that are nromally passed to a Redux thunk function). Solution was to create an object containing the data I wanted to pass into the asyncThunk (searchOptions, line 13 StockFolio-Redux/frontend/src/components/Stock-Search/Stock-Search-Result.js) and pass it in (line 44, same file as in line 13) 

2b. Think about refactoring the code to use the Presentation-Container

This is the principle of dividing your components into "Presentational" and "Container" components

**Presentational Components:** Concerned with how things look, have no dependencies on the rest of the app (Flux actions, stores), don't specify how the data is loaded or mutated, rarely have their own state, usually written as functional components. Examples include _Page, Sidebar, Store, UserInfo, List_

**Container Components:** concerned with how things work, provides the data and behaviour to presentational or other container components. Call Flux actions and provides these as callbacks to the presentational components. Are often stateful. Examples include _UserPage, FollowersSideBar, StoryContainer, FollowedUserList_

While I do agree that it's good to separate it, Dan Abramov has suggested that we don't split components like this anymore (at least not as dogmatically and fervently as some might: https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).Presentation-Container components are useful because it allows you to separate complex stateful logic from other aspects of the component. Hooks now can do the same things without the arbitrary division. 

3. Things I will need to work on 
- In my Stock API calls I have two awaits to fetch stock data. This slows down the AsyncThunk. What I could do instead is use Promise.all(). (Lines 15-16 StockFolio-Redux/frontend/src/slices/Stock-Search-Slice/Stock-Search-Slice.js)


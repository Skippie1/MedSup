## How to install Locally
- ##### Install git if not installed
- ##### Create a folder named "MedSupV4"
- ##### Then right click the folder and press "Open with Code"
- ##### When the folder is open in VS Code, click Terminal then new Terminal and when the Terminal is opened make sure it's in Git Bash or bash <br> if the Terminal is not in Bash you can change it by clicking the "+v" in the upper right of the terminal and change it to Git Bash
- #### When the terminal is in bash type or copy "git clone https://github.com/Skippie1/MedSup.git", wait for it to finish, when it's finish close the terminal and open another one, then type in the terminal "cd backend" to move to the backend folder then "npm i" to install the node modules and wait for it to finish installing then after installing type "cd ../" to go back to the main folder and then type "cd frontend" to move to the frontend folder then "npm i" or "yarn" if it's not installing, then go back to the main folder by typing "cd ../" then type "cd socket" and type "npm i"

## If config is missing in the backend folder
- #### Create a folder in backend folder name it config
- #### Then after the config folder is created, create a file name it ".env"
- #### Then after creating the file copy this and paste it within the file <br>
    Port= 8000 <br>
    DB_URL= "mongodb+srv://MedSup:Pogiako1@cluster0.cfae1d9.mongodb.net/" <br>
    JWT_SECRET_KEY = "2FxXT1NTf2K1Mo4i6AOvtdI" <br>
    JWT_EXPIRES = 7d <br>
    ACTIVATION_SECRET = 123asdaw312fasea3115tacaeffaawdas <br>
    SMPT_HOST =  smtp.gmail.com <br>
    SMPT_PORT = 465 <br>
    SMPT_PASSWORD = qezcvgwohjhmkupw <br>
    SMPT_MAIL = d3fault07@gmail.com <br>
    STRIPE_API_KEY = "pk_test_51NFIDaArwvxHPFAB7gebXTNwu3vuXtNPDjsVdz7mcpVaggE1pGp3SDwZRvgIpVS0P6ul9GgkrzmcCta1ynNPtFOw00s1YRlVPY" 
    STRIPE_SECRET_KEY = "sk_test_51NFIDaArwvxHPFABT3SrLqvy0tp7FDgMut54xTcpcFINX1VTtKM4mzkeGU0sRmDbBO53zRbQOOEXfA9xX3ecyuZV00QN27L6L0"

## How to Start the System
- #### In the terminal type "cd backend" and type "npm run dev"
- #### Then open another terminal without closing the other one type "cd frontend" and type "npm start"

## File structure
#### `client` - Holds the client application
- #### `public` - This holds all of the static files
- #### `src`
    - #### `assets` - This folder holds assets such as images, docs, and fonts
    - #### `components` - This folder holds all of the different components that will make up the views
    - #### `views` - These represent a unique page on the website i.e. Home or About. These are still normal react components.
    - #### `App.js` - This is what renders all of our browser routes and different views
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `config` - This holds our configuration files, like mongoDB url
- #### `controllers` - These hold all of the callback functions that each route will call
- #### `models` - This holds all of data models
- #### `routes` - This holds all of the HTTP to URL path associations for each unique url
- #### `tests` - This holds all of the server tests that have been defined
- #### `server.js` - Defines npm behaviors and packages for the client
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore
#### `README` - This file!


## Available Scripts

In the project directory, you can run:

### `npm run-script dev`

Runs both the client app and the server app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

### `npm run-script client`

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.


### `npm run-script server`

Runs just the server in development mode.<br>


### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

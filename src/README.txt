https://github.com/angular/angular-cli/wiki/stories

##### A. How project was set up info #####
  * Creating Project:
      1) Navigate to folder for desired location of project.
      2) Open terminal
      3) Enter command below(without quotes):
        i) "ng new [project_name]"
      4)

  * Creating Component:
      1) Navigate to [project_name] directory
      2) In app folder, create directory called "components" (This is just for organization, so all our components are in one place)
      2) Enter command below(without quotes):
        i) "ng g component components/[componentName]"
      //This handles the import and declaration so you don't have to do manually

  * Including bootstrap:
      1) Follow https://github.com/angular/angular-cli/wiki/stories-include-bootstrap#include-bootstrap

  * Allowing two-way binding:
      1) Enter do following in app.module.ts:
        i) import { FormsModule } from '@angular/forms'; //Place in top
        ii) Place "FormsModule" in imports
          ex)
              @NgModule({
                  imports: [
                    BrowserModule,
                    FormsModule
                  ],
                  ...
              })

##### B. How I deployed on heroku.com #####
// Used portions of: https://www.youtube.com/watch?v=MUdFLxveBzI&t=602s

  1) Install "heroku CLI"
  2) Modify package.json
    ii)   Add node version by adding following lines:
            "engines": {
                 "node": "[6.11.1"]

               },"
          //Replace "6.11.1" with actual version. Can find version by typing "node -v" in terminal. NOTE: Do not need to include "v" in "v8.2.1"
  3) install express
    i)    Navigate to [project_name] directory
    ii)   Open terminal
    iii)  Enter following command(without quotes):
            "npm install express"
          //Note: This will create dependency in package.json for express
  4) Build project
    i)    Navigate to [project_name] directory
    ii)   Open terminal
    iii)  Enter following command(without quotes):
            "ng build --prod"
          This will create a folder called "dist"

  5) Package folder together
    i)    Create a new folder called [projectName]
    ii)   Place your built "dist" folder inside [projectName]
    iii)  Rename "dist" to "public"
    iii)  Place the project's package.json into [projectName]
    iv)   In [projectName] folder, create a file called "Procfile" //Note no extension
      a)    Add the following line and save (without quotes):
              "web: node index.js"
    v)    In [projectName], include "index.js" //This file can be found in heroku's sample app. "https://github.com/heroku/node-js-getting-started.git"

    vi)   Create a new app on heroku.com (I called it profit-calculator)
    vi)   Finally, follow heroku procedure to deploy app
      a)    Open terminal and run following lines:
        heroku login
        heroku git:clone -a profit-calculator
        cd profit-calculator
        git add .
        git commit -am "make it better"
        git push heroku master

##### Profit calculator usage notes #####
  * Profit calculator assumes that buyer pays for shipping
  * Shipping rates are based on eBay's rate as of 9/14/17


##### How to deploy on heroku.com #####
// Used portions of: https://www.youtube.com/watch?v=MUdFLxveBzI&t=602s

  1) Install "heroku CLI"
  2) Modify package.json
    ii)   Add node version by adding following lines:
            ..., "engines": {
                     "node": "6.11.1"
                   }, ...
          //Replace "6.11.1" with actual version. Can find version by typing "node -v" in terminal. NOTE: Do not need to include "v" in "v8.2.1"
  3) install express
    i)    Navigate to [project_name] directory
    ii)   Open terminal
    iii)  Enter following command:
            npm install express
          //Note: This will create dependency in package.json for express
  4) Build project
    i)    Navigate to [project_name] directory
    ii)   Open terminal
    iii)  Enter following command:
            ng build --prod
          This will create a folder called "dist"

  5) Package folder together
    i)    Create a new folder called [projectName]
    ii)   Place your built "dist" folder inside [projectName]
    iii)  Rename "dist" to "public"
    iii)  Place the project's package.json into [projectName]
    iv)   In [projectName] folder, create a file called "Procfile" //Note no extension
      a)    Add the following line and save:
              web: node index.js
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

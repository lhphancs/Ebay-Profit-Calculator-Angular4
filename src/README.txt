##### Profit calculator usage notes #####
  * Profit calculator assumes that seller pays for shipping
  * Shipping rates are based on eBay's rate as of 3/25/18


##### How to deploy on heroku.com #####
// Used portions of: https://www.youtube.com/watch?v=MUdFLxveBzI&t=602s

  1) Install "heroku CLI"
  2) Install dependencies by... 
    i)    Open terminal
    ii)   Navigate to [project_name] directory
    ii)   Enter following command:
            "npm install"
  3) Build project
    i)    Navigate to [project_name] directory
    iii)  Enter following command:
            "npm run ng build --prod"
      This will create a folder called "dist"

  4) Package folder together
    i)    Create a new folder called [projectName]
    ii)   Place your built "dist" folder inside [projectName]
    iii)  Rename "dist" to "public"
    iii)  Place the project's package.json into [projectName]
    iv)   Include following files into [projectName] (Files can also be found in /src/heroku_files):
      a)    In [projectName] folder, create a file called "Procfile" //Note no extension
        aa)    Add the following line and save:
                web: node index.js
      b)    In [projectName], include "index.js" //This file can be be found in heroku's sample app. "https://github.com/heroku/node-js-getting-started.git"
    v)   Create a new app on heroku.com (I called it profit-calculator)
    vi)   Finally, follow heroku procedure to deploy app
      a)    Open terminal and run following lines:
        heroku login
        cd [projectName]
        git init
        heroku git:remote -a profit-calculator
        git add .
        git commit -am "make it better"
        git push heroku master

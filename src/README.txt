https://github.com/angular/angular-cli/wiki/stories

##### A. How project was set up info #####
  * Creating Project:
      1) Navigate to folder for desired location of project.
      2) Open cmd.exe
      3) Enter command below(without quotation marks):
        i) "ng new [project_name]"
      4)


  * Creating Component:
      1) Navigate to [project_name] directory
      2) In app folder, create directory called "components" (This is just for organization, so all our components are in one place)
      2) Enter command below(without quotation marks):
        i) ng g component components/[componentName]
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

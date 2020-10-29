# Local Hops

   [![Github](https://img.shields.io/badge/License-MIT-brightgreen)](#License)

   ## Description
   This app will allow a user to create an account and select their favorite Texas breweries from all acrosss the state. The user will have a profile page that displays all of their selections. The seletions are made through a city search and a Google map will showcase all of the brewery locations in Texas.

   ## Table of Contents
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [License](#License)
   * [Contributions](#Contributions)
   * [Tests](#Tests)
   * [Questions](#Questions)
   
   ## Installation
   To install, please run the following code in the terminal:

   ```
   npm install
   ```

   You will also need to have MySQL installed on your computer. This readme does not walkthrough the steps to do that, so you will have to look elsewhere online for that information. I am using MySQL Workbench for the database and this readme will assume you are using the same. However, you may use the MySQL application of your choosing.

   ## Usage
   To use this app, copy the code from the schema.sql file into MySQL Workbench to create the database.
   
   Once that is done, please run the following code in the terminal:

   ```
   node server.js
   ```

   This will create the tables needed for the app. Now that the tables are created, import the beermap.texas.csv file into the breweries table by right-clicking the table and selecting "Table Data Import Wizard". Follow the steps of the wizard until you see a list of the colums with checkboxes next to them. The longitude is the first column and the lat is the second column, so change these in the drop down. The columns after that just need to be changed in the drop down to match the value. The last column after the brewery type needs to be unchecked as it contains data that is not used by this app.

   ## License
   The license associated with this project is MIT.
   To view the license information, visit the link [here](https://github.com/CalebParris/Local-Hops/blob/main/LICENSE)

   ## Contributions
   This app was made with several contribututions from the following people:

   [![Contributor Image](https://github.com/CalebParris.png?size=75)](https://github.com/CalebParris)
   [![Contributor Image](https://github.com/rubenfiv.png?size=75)](https://github.com/rubenfiv)
   [![Contributor Image](https://github.com/guillenjoshua.png?size=75)](https://github.com/guillenjoshua)
   [![Contributor Image](https://github.com/sahibamj.png?size=75)](https://github.com/sahibamj)

   ## Tests
   To test the app, follow the directions from the Installation and Usage sections first. After that, you can use the app as follows:

   ![]()

   To see the deployed finished product, you can visit this link:
   
   []()

   ## Questions
   If you have any comments, questions, or concerns about this project, please post them [here](https://github.com/CalebParris/Local-Hops/issues) and I will respond as soon as I am able.

   Otherwise, you can contact me through the following means:
   * Email: calebparris@live.com
   * Github: [CalebParris](https://github.com/CalebParris)
    

# Employee-Database

This project is a command-line application for managing a company's employee database. It's built with Node.js, Inquirer, and MySQL, and allows non-developers to easily view and interact with information stored in databases.


## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contribution](#contribution)
- [Contact](#contact)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About The Project

The Employee Tracker is a command-line application designed to streamline the management of a company's employee database. It serves as a user-friendly interface enabling business owners, especially those without deep tech expertise, to view and interact with data stored in MySQL databases. Built with Node.js, Inquirer, and MySQL, the application provides functionalities such as viewing all departments, roles, and employees, adding new departments, roles, or employees, and updating an employee's role. By offering these capabilities in a well-organized and straightforward manner, the Employee Tracker aids in the efficient planning and organization of a business.

## Built With

This project was developed using major frameworks that contribute to the functionality and robustness of the application. These main technologies include:

Node.js - An open-source, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

Inquirer.js - A comprehensive collection of command line user interfaces, which aids in enhancing the user interaction in the command-line environment.

MySQL - An open-source relational database management system, primarily used in this project to store and organize the company's employee data.

## Getting Started

To get a local copy up and running follow these simple steps:

### Installation

To install the necessary dependencies, run the following command in your terminal:

```npm i inquirer@8.2.4 mysql2```

To get a local copy up and running, follow these simple steps:]

1. **Clone the repository**

Open your terminal and use `git` to clone the repository. You'll need [Git](https://git-scm.com) installed on your system.

```git clone https://github.com/MMerzoug/Employee-Database.git```

2. **Navigate into the project directory**

Use the `cd` command to navigate into the directory where you cloned the repository.

```cd Employee-Database```


3. **Install NPM packages**

Once inside the project directory, use npm to install the necessary packages. You'll need Node.js and npm installed on your system.

```npm install```

This command installs all the dependencies listed in the package.json file.

4. **Set up the database**

Make sure you have MySQL installed on your system.
Open the MySQL shell or workbench and source the schema.sql file to set up the database structure. If there's a seeds.sql file, you can source this file as well to populate the database with some initial data.

```source /Users/moniquemerzoug/bootcamp/Employee-Database/db/schema.sql```
```source /Users/moniquemerzoug/bootcamp/Employee-Database/db/seeds.sql```

5. **Update database connection information**

Update the db/connection.js file with your MySQL user and password.

6. **Start the application**

Use Node.js to start the application.

```node server.js```

You should now have the application running on your local system! You can interact with it through your terminal.

## Usage

After installing the dependencies, you can run the application with this command:

```node index.js```

## Tests

You can run tests using the following command:

```npm test```

## Best Code Practices

This application adheres to the following code standards:

Use of asynchronous functions to handle SQL queries.
Organization of SQL query functions in a separate file for clarity and ease of use.
Utilization of a seeds.sql file for pre-populating the database to make the development of individual features much easier.

## Tech Stack

This application was made with the following technologies:

Node.js
Inquirer
MySQL

## Walkthrough Video

A walkthrough video demonstrating the functionality of the application can be found at the following link:

[Walkthrough Video](https://drive.google.com/file/d/1mAMqSBPHSaKoWWscKRQG8mmwl-YQcBL_/view)

## Contact

If you have any questions, feel free to reach out to me!

Github: MMerzoug
Email: monique.merzoug@icloud.com

## License

This project is licensed under the terms of the MIT license.

© 2023 Monique Merzoug. All Rights Reserved.


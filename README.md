SBA MongoDB Assessment: Node, Express, and MongoDB Server Application

Introduction:

Welcome to my MongoDB Server Application! This project demonstrates my understanding of Node, Express, and MongoDB, and my capability to implement their features in a practical manner. I had the creative freedom to choose the topic, material, and purpose of the web application, and with that, I chose to create an application that allows users to create their own Justice League Team.

Objectives:
- Create a server application with Node, Express, and MongoDB.
- Create a CRUD API using Express and MongoDB.
- Create MongoDB indexes for efficient queries.
- Use MongoDB validation rules to ensure data consistency.

Features:

Data Modeling:
- Structured data for easy manipulation and retrieval.

CRUD API:
- GET routes for retrieving all data.
- POST routes for adding new data.
- DELETE routes for removing data.
- Query parameters for filtering data.
- Route parameters for specific data handling.

MongoDB:
- MongoDB indexes for frequently queried fields.
- MongoDB validation rules for data consistency.

Routes Explanation:

- Home Screen:
Route: /characters

Description: This is the home screen of the application where users can view all characters.
HTTP Method: GET
Functionality: Retrieves and displays a list of all characters.

- About Page:
Route: /about

Description: This route displays placeholder data about the application.
HTTP Method: GET
Functionality: Provides static information about the application.

- Add Character:
Route: /characters/create

Description: This route allows users to add new characters to the database.
HTTP Method: POST
Functionality: Displays a form to create a new character and handles the submission to add the character to the database.

- Character Details:
Route: /characters/:id

Description: This route shows detailed information about a specific character.
HTTP Method: GET
Functionality: Retrieves and displays details of the character with the specified ID. It also provides an option to delete the character. Delete character with the specified ID from the database.

Struggles and Future Plans:

Unfortunately, I struggled to implement the PUT/PATCH routes for updating existing characters. However, since this is a project I plan on expanding, this is something I will figure out with future guidance. I am committed to improving and adding more functionality to this project.

Instructions:

I created a small server application with the topic and content of my choice. I followed the technical requirements listed below. I focused on finishing the minimum requirements first and then added more features and complexity as time permitted.

Requirements:

- Utilize reasonable data modeling practices.
- Create GET routes for all data that should be exposed to the client.
- Create POST routes for data creation.
- Create DELETE routes for data deletion.
- Include sensible indexes for frequently queried fields.
- Include MongoDB validation rules for data consistency.
- Populate collections with sample data (at least five documents per collection).
- Ensure reasonable code organization.
- Ensure the program runs without errors.

Bonus:
- Use Mongoose to implement the application.

Future Improvements:

- Implement PUT/PATCH routes for updating characters.
- Enhance the front-end with a modern JavaScript framework like React.
- Integrate user authentication and authorization.
- Implement a search functionality with advanced filtering options.

Installing/Usage:

- Clone the GitHub repository: https://github.com/saidmsajady/319..SBA.git
- Ensure Node.js and MongoDB are installed on your machine.

Languages:

- JavaScript: The primary language for its versatility and wide use in web development.
- Node.js/Express.js: Enables running JavaScript code outside the browser, facilitating testing and execution.
- MongoDB: A NoSQL database for efficient data storage and retrieval.
- HTML and CSS: Used for creating and styling the views (if applicable).
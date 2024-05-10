## Project Report

**System Components:**

* **Frontend:**
    * Located in the `Website` folder.
    * Built with HTML, CSS, and JavaScript.
    * Key files:
        * `index.html`: The main webpage containing the button that triggers page redirection.
        * `database.html`: The page displaying the retrieved team member information.
        * `script.js`: Implements the button functionality.
        * `style.css`: Styles all webpages in the project.
        * `website.dockerfile`: Defines the configuration for the website container.
          
* **Backend Server (API):**
    * Located in the Website folder alongside frontend files.
    * Developed using Node.js and Express.js.
    * Utilizes additional dependencies listed in `package.json`.
    * Key files:
        *  `server.js`: Implements the API logic, retrieves data from the database, and returns it to the frontend.
        *  `node.dockerfile`: Defines the configuration for the node container.
    
* **Database:**
    * Loated in the `Database_MySQL_Code` folder.
    * Managed through a MySQL database container.
    * Key file:
        * `group_table.sql`: Defines the database schema.
        * `database.dockerfile`: Defines the configuration for the database container.
      
* **Docker:**
    * `docker-compose.yml` file defines the service configuration for all application components (frontend, backend, database).
    * Utilizes a volume to persist the database data, ensuring information is retained even when the container restarts.
    * Enables building and running the entire system in isolated containers, ensuring consistency and simplifying deployment.

**Functionality:**

1. **User Interaction:** Clicking the button on `index.html` triggers a JavaScript function in `script.js`.
2. **Data Request:** The JavaScript function in `database.js` sends a request to the backend API endpoint defined in `server.js`.
3. **Data Retrieval:** The backend server in `server.js` receives the request and executes a query on the MySQL database (managed by the database container) to fetch team member information.
4. **Data Response:** The retrieved data is formatted (converted to JSON) and sent back to the frontend as a response.
5. **Data Display:** The frontend `database.js` receives the JSON response, parses it, and displays the retrieved team member information on `database.html`.

**Key Technologies:**

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js and Express.js
* **Database:** MySQL
* **Containerization:** Docker


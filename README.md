📘 Classroom Finder – Full Project Documentation
1️⃣ Prerequisites
•	Install Node.js (v18+ recommended)
•	Install npm (comes with Node.js)
•	Create a free MongoDB Atlas account
•	Install Postman (for testing API)
________________________________________
2️⃣ Backend Setup
a. Create Project & Initialize npm
mkdir classroom-app
cd classroom-app
mkdir backend
cd backend
npm init -y
•	Initializes a new Node.js project in the backend folder.
b. Install Dependencies
npm install express mongoose cors dotenv
•	express → Web framework for API
•	mongoose → MongoDB object modeling
•	cors → Cross-origin requests
•	dotenv → Environment variables
c. MongoDB Atlas Setup
1.	Go to MongoDB Atlas → create a free cluster.
2.	Create a database user with username + password.
3.	Copy the connection string (URI), e.g.:
mongodb+srv://<username>:<password>@classroomdb.ur8sqfb.mongodb.net/
4.	URL encode your password if it has special characters (@ → %40):
node -e "console.log(encodeURIComponent('YourPasswordHere'))"
5.	Create a .env file in backend/:
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@classroomdb.ur8sqfb.mongodb.net/
d. Backend Folder Structure
backend/
 ├─ models/
 │   └─ Classroom.js          # Classroom schema
 ├─ routes/
 │   └─ classroomRoutes.js    # API routes
 ├─ server.js                 # Main server
 ├─ .env                      # Environment variables
e. MongoDB Connection & Test
•	Use Mongoose in server.js to connect to MongoDB.
•	You should see “MongoDB connected” in the terminal.
•	If error occurs, check URI, username, password, and encoding.
________________________________________
3️⃣ API Endpoints
Add Classroom (POST)
•	URL: http://localhost:5000/classrooms
•	Headers: Content-Type: application/json
•	Body → raw JSON:
{
  "roomNo": "SMV-62",
  "building": "SMV",
  "floor": 6
}
•	Response: Confirmation + saved classroom details.
Search Classroom (GET)
•	URL: http://localhost:5000/classrooms/search?name=SMV-62
•	Response: Classroom details if found; otherwise an error message.
________________________________________
4️⃣ Testing with Postman
1.	Open Postman → Create POST request to add classroom.
2.	Use raw JSON body with roomNo, building, floor.
3.	Send request → database saves classroom.
4.	Create GET request with query parameter name to search and verify classroom exists.
________________________________________
5️⃣ Frontend Setup (React)
a. Create React App
npx create-react-app frontend
cd frontend
npm install axios
b. Folder Structure
frontend/
 ├─ public/
 │   ├─ nmamit-logo.png      # Logo
 │   └─ buildings/           # Optional: building icons
 ├─ src/
 │   └─ App.js               # Main React component
 │   └─ App.css              # Styles
c. Frontend Features
•	Search form → enter room number, click search.
•	Results section → shows room number, building, floor.
•	Logo → NMAMIT logo in header.
•	Optional building icons → stored in public/buildings/.
________________________________________
6️⃣ Running the Project
Backend
cd backend
node server.js
•	Backend runs on port 5000
•	Terminal should show: MongoDB connected and Server running on port 5000
Frontend
cd frontend
npm start
•	Frontend runs on port 3000
•	Opens React app in browser
________________________________________
7️⃣ Workflow Summary
•	Use Postman to add classrooms to MongoDB.
•	Use React UI to search classrooms by room number.
•	Backend connects MongoDB Atlas with frontend.
•	Frontend fetches data via GET request and displays results.


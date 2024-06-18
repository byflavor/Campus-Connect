# Campus Connect README

## Introduction
Campus Connect is a platform designed to unify and enhance the experience of finding and participating in campus events. It provides a centralized platform for students to discover ongoing events, sign up, and connect with others sharing similar interests. By leveraging smart AI tools and modern web technologies, Campus Connect addresses the absence of a unified campus event platform and implements essential features such as event posting, authentication via Illinois email, and a category-based filtering system.

## Technical Architecture

### Backend
- **Framework & Language**: Initially started with Node.js, later switched to Django for robust backend operations.
- **Database Migration**: Transitioned from MySQL to Aurora, ensuring compatibility of data types and enhanced performance.
- **API Development**: Developed APIs for seamless integration with the frontend, handling data fetching, event updates, and user authentication.

### Frontend
- **Technologies Used**: HTML, CSS, JavaScript with React.js for managing UI state and interactions.
- **Libraries**: Material-UI for modern and responsive components.
- **Key Components**:
  - **Dashboard**: Acts as the central interface for navigation and content management, dynamically interacting with the backend.
  - **Navbar**: Provides consistent navigation options across the website.
  - **Events Component**: Fetches and displays event data, allowing users to explore both upcoming and past events.

### AI and Data Handling
- **Smart AI Tool**: Utilizes a combination of web scraping (Beautiful Soup) and AI (Retrieval Augmented Generation model) to populate the platform with relevant event data.
- **Data Structure**: Organized data structure ensures each club and event is properly cataloged with descriptions ready for website integration.

The way this is integrated is by taking info about the school via url it can intelligently parse what info corresponds to a certain club thus tabularizing info to the corresponding club in a json, that could be used by a chatbot to find out more about club specific events. While the AI web tool was finished, the chatbot was not; yet, it provides a great direction for future development. To talk more about the architecture for the AI webtool, it is a pipeline between webscraping raw text and feeding it into RAG powered LLM's to output a final json. There is a lot of prrocessing and heuristics involved in converting raw text into relevant text aswell.

Instrunctions on using the AI web tool is in the backend folder's readme.

## Installation Instructions
To set up Campus Connect locally, follow these steps:
1. Clone the repository: `git clone [repository-url]`
2. Install dependencies:
   - Backend: `cd backend && pip install -r requirements.txt`
   - Frontend: `cd frontend && npm install`
3. Start the Django backend server: `python manage.py runserver`
4. Run the React frontend: `npm start`
5. Access the application via `localhost:3000` in your browser.

## Future Steps
- Collaborate with other universities (UMICH, Purdue) to expand the platform's reach.
- Increase marketing efforts at UIUC to boost user engagement.
- Enhance platform features like user event preferences and notifications.

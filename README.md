# Task Tracker

A simple and intuitive task management web application built with React. Keep track of your daily tasks, mark them as completed, and manage your to-do list efficiently.

🔗 **Live Demo:** https://task-tracker-react-kappa.vercel.app/

## Features

- ✅ **Add Tasks** - Easily add new tasks using the input field
- 📋 **View All Tasks** - See all your tasks in a clean, organized list
- ✔️ **Mark as Completed** - Mark tasks as completed with a single click
- 📊 **Task Status** - Each task displays whether it's "Pending" or "Completed"
- 💾 **Local Storage** - Tasks are automatically saved to your browser's local storage
- 🎨 **Modern UI** - Beautiful and responsive design with a gradient background
- 🗑️ **Clear All** - Option to clear all tasks at once

## Technologies Used

- **React** - Frontend framework
- **CSS3** - Styling with modern design patterns
- **LocalStorage API** - Data persistence

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system:
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd task-tracker-react
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

To start the development server:
```bash
npm start
```

The application will open in your browser at [http://localhost:3000](http://localhost:3000).

### Building for Production

To create a production build:
```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## How to Use

1. **Adding a Task**: Type your task in the input field and click the "Add Task" button
2. **Viewing Tasks**: All tasks are displayed in a list below the input field
3. **Completing a Task**: Click the "Complete" button next to any pending task to mark it as completed
4. **Task Status**: Each task shows its status - "(Pending)" for incomplete tasks and "(Completed)" for completed ones
5. **Clearing Tasks**: Use the "Clear All" button to remove all tasks at once

## Project Structure

```
task-tracker-react/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js          # Main application component
│   ├── App.css         # Application styles
│   └── index.js        # Entry point
├── package.json
└── README.md
```

## Features Overview

- **Add Task Functionality**: Users can input tasks and add them to the list
- **Task Display**: All tasks are shown with their current status
- **Complete Task**: Tasks can be marked as completed
- **Persistent Storage**: Tasks are saved in browser's localStorage and persist across sessions
- **Clean UI**: Modern, responsive design that works on all screen sizes

## Assignment Requirements

This project fulfills all the requirements for the Full-Stack Internship Assignment:

✅ Input box to type a task  
✅ Button to add the task  
✅ List that displays all added tasks  
✅ Each task shows whether it is 'Pending' or 'Completed'  
✅ Ability to mark a task as completed  

## License

This project is open source and available for educational purposes.

## Author

Created as part of a Full-Stack Internship Assignment
# task-tracker-react

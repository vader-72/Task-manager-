



const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-08-04",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve alignment issues in the navigation bar.",
        taskDate: "2026-08-05",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Git Repository",
        taskDescription: "Initialize Git and push the first commit.",
        taskDate: "2026-08-01",
        category: "Git"
      }
    ]
  },
  {
    id: 2,
    name: "Rohan Verma",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Build the employee dashboard layout.",
        taskDate: "2026-08-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Install Tailwind",
        taskDescription: "Configure Tailwind CSS with Vite.",
        taskDate: "2026-08-02",
        category: "Setup"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Deploy Project",
        taskDescription: "Deploy the application to Vercel.",
        taskDate: "2026-08-03",
        category: "Deployment"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement dark mode toggle.",
        taskDate: "2026-08-06",
        category: "UI"
      }
    ]
  },
  {
    id: 3,
    name: "Aditya Singh",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create Footer",
        taskDescription: "Build the footer component.",
        taskDate: "2026-08-01",
        category: "Frontend"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Connect frontend with backend API.",
        taskDate: "2026-08-05",
        category: "Backend"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Form Validation",
        taskDescription: "Improve login form validation.",
        taskDate: "2026-08-06",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Optimize Images",
        taskDescription: "Compress images for faster loading.",
        taskDate: "2026-08-03",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Write README",
        taskDescription: "Document project setup and usage.",
        taskDate: "2026-08-02",
        category: "Documentation"
      }
    ]
  },
  {
    id: 4,
    name: "Vikram Patel",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Build Profile Page",
        taskDescription: "Create the employee profile screen.",
        taskDate: "2026-08-04",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix CSS Bugs",
        taskDescription: "Correct spacing and responsive issues.",
        taskDate: "2026-08-02",
        category: "CSS"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Task Card",
        taskDescription: "Build reusable task card component.",
        taskDate: "2026-08-07",
        category: "React"
      }
    ]
  },
  {
    id: 5,
    name: "Karan Mehta",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1,
    },
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Routing",
        taskDescription: "Configure React Router.",
        taskDate: "2026-08-01",
        category: "React"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Authentication",
        taskDescription: "Implement login authentication.",
        taskDate: "2026-08-05",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix API Error",
        taskDescription: "Resolve 401 unauthorized issue.",
        taskDate: "2026-08-03",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Settings Page",
        taskDescription: "Develop employee settings page.",
        taskDate: "2026-08-08",
        category: "Frontend"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Components",
        taskDescription: "Write and run component tests.",
        taskDate: "2026-08-02",
        category: "Testing"
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "admin@example.com",
    password: "123"
  }
];
 
export  const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
}
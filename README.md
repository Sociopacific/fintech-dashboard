# Soar.inc Fintech Dashboard 🚀

Welcome to the **Soar.inc Fintech Dashboard** project! This application is built as part of a Front-End Developer Assessment Task, showcasing a comprehensive financial dashboard with multiple interactive views. Dive into a seamless user experience designed to display financial activities, card details, transactions, statistics, and user settings with a sleek and responsive design.

## Live Demo 🌐

The application is deployed on [Vercel](https://vercel.com/) for seamless hosting and continuous deployment. Access the live demo [here](https://best-soar-task.vercel.app).

![Dashboard Screenshot](https://best-soar-task.vercel.app/application-screenshot.png)

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
  - [Dashboard Page (Overview)](#dashboard-page-overview)
  - [Settings Page](#settings-page)
  - [Additional Functionalities](#additional-functionalities)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Linting & Formatting](#linting--formatting)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features ✨

### Dashboard Page (Overview)

- **My Cards Section**
  - Displays multiple card details including balance, cardholder name, and partially masked card number.
  - "See All" button to navigate to the full list of cards.
- **Recent Transactions**
  - Lists recent transactions with icons, descriptions, dates, and amounts (green & red).
- **Weekly Activity Chart**
  - Interactive bar chart showing daily deposits and withdrawals for the week.
- **Expense Statistics**
  - Pie chart breaking down expenses by categories such as Entertainment, Bills, Investments, and Others.
- **Quick Transfer**
  - Frequent transfer contacts with profile pictures, names, and roles.
  - Input field for transfer amount and a "Send" button (UI Only).
- **Balance History Chart**
  - Line chart representing balance trends over the past few months.

### Settings Page

- **Tabs**
  - "Edit Profile," "Preference," and "Security" tabs for organized navigation.
- **Edit Profile Section**
  - Edit fields: Name, Username, Email, Password, Date of Birth, Addresses, City, Postal Code, and Country.
  - Profile picture upload/edit feature.
  - "Save" button to apply changes.

### Additional Functionalities

- **Responsive Design**: Adapts seamlessly across mobile, tablet, and desktop devices.
- **Interactive Elements**: Buttons with hover effects and feedback, scrollable lists for cards and transactions.
- **Form Validations**: Ensures proper input formats for email, password, and other fields.
- **Smooth User Experience**: Transitions between sections and consistent use of icons.

## Tech Stack 🛠️

- **Frameworks & Libraries**

  - [React.js](https://reactjs.org/) - Front-end library
  - [TypeScript](https://www.typescriptlang.org/) - Type safety
  - [Vite](https://vitejs.dev/) - Build tool
  - [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [Apache ECharts](https://echarts.apache.org/) - Data visualization
  - [React Router](https://reactrouter.com/) - Routing
  - [Zustand](https://zustand-demo.pmnd.rs/) - State management
  - [Framer Motion](https://motion.dev/) - Animations

- **Tools**
  - [ESLint](https://eslint.org/) - Linting
  - [Prettier](https://prettier.io/) - Code formatting
  - [Git](https://git-scm.com/) - Version control
  - [Vercel](https://vercel.com/) - Deployment

## Getting Started 🚀

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sociopacific/fintech-dashboard.git
   cd fintech-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Application

- **Development Mode**

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  Open [http://localhost:4000](http://localhost:4000) to view it in the browser. The page will reload if you make edits.

- **Build for Production**

  ```bash
  npm run build
  # or
  yarn build
  ```

  The build artifacts will be stored in the `dist/` directory.

- **Preview the Production Build**
  ```bash
  npm run preview
  # or
  yarn preview
  ```

## Project Structure 📂

```
soar-task/
├── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── hooks/
│   ├── store/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── styles/
├── tests/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Linting & Formatting 🧹

- **Lint the codebase**

  ```bash
  npm run lint
  # or
  yarn lint
  ```

- **ESLint Configuration**
  - Uses `@vitejs/plugin-react-swc` for Fast Refresh.
  - Type-aware lint rules for enhanced code quality.
  - React plugin for consistent React code standards.

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a new branch**
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request**

## License 📄

This project is licensed under the [MIT License](LICENSE).

## Contact 📬

**Aleksandr Iakimov**  
Email: [iakimov.aleks@gmail.com](mailto:iakimov.aleks@gmail.com)  
LinkedIn: [Aleksandr Iakimov](https://linkedin.com/in/iakimov-aleksandr)  
GitHub: [@sociopacific](https://github.com/sociopacific)

---

Made with ❤️ by [Aleksandr](https://github.com/sociopacific)

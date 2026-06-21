# Finix Bank — UI (Frontend)

**आपका बैंक, आपके साथ.**

This repository contains the frontend application for **Finix Bank**, an e-banking system that allows customers to easily access banking services online and enables staff to manage customer accounts efficiently.

## Overview

The Finix Bank UI is a React-based web application that provides:

- Customer-facing online banking interface
- Staff/admin dashboard for account management
- Secure login and authentication
- Real-time transaction views and account management

## Tech Stack

- **Framework:** React
- **State Management:** (e.g. Redux / Context API — update as applicable)
- **Styling:** (e.g. CSS Modules / Tailwind / Bootstrap — update as applicable)
- **API Communication:** Axios / Fetch (connects to Finix Bank API backend)

## Project Structure

```
finix-bank-ui/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/            # Page-level views
│   ├── services/         # API service calls
│   ├── assets/           # Images, icons, logos
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```





## Prerequisites

- Node.js (v22+ recommended)
- npm or yarn
- Finix Bank API backend running (see [API repo](#))

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-org/finix-bank-ui.git
   cd finix-bank-ui
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   Create a `.env` file in the root directory:
   ```
   REACT_APP_API_BASE_URL=https://localhost:5000/api
   ```

4. Run the application
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`

## Available Scripts

| Command         | Description                          |
|-----------------|---------------------------------------|
| `npm start`     | Runs the app in development mode      |
| `npm run build` | Builds the app for production         |
| `npm test`      | Runs tests                            |

## Features

- Customer account dashboard
- Online fund transfer interface
- Transaction history view
- Admin panel for account creation/update/deletion
- Responsive design for mobile and desktop

## Related Repositories

- **API (Backend):** [finix-bank-api](#)
- **Database scripts:** [finix-bank-db](#)

## Contributing

Contributions are welcome. Please open an issue or submit a pull request for any improvements.

## License

This project is licensed under the MIT License.

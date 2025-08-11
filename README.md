# Course Explorer(Nizaam-Academy)

A React-based course catalog application with search, filtering, favorites and course comparison features.  
Built to demonstrate modern React patterns, state management and responsive UI design.

## Features

- Browse courses in a card-based layout
- Search by title, instructor or tags
- Filter by category and difficulty level
- View detailed information for each course
- Save courses to a favorites list
- Compare two courses side-by-side
- Dark/light theme toggle with persistence
- Fully responsive design for mobile, tablet and desktop

## Tech Stack

**Frontend**
- React 18 + TypeScript
- Vite
- Tailwind CSS
- ShadCN/UI

**State Management**
- Context API + useReducer (client state: favorites, comparison)
- TanStack Query (server state: API data, caching)
- localStorage (theme, favorites persistence)

**Other Tools**
- JSONBin (mock API data)
- Lucide React (icons)
- React Router (routing)

## Project Structure

```
src/
├── components/   # Reusable UI components
├── pages/        # Application pages/routes
├── context/      # Global state logic
├── hooks/        # Custom hooks
├── types/        # TypeScript types
└── lib/          # Utilities and theme configuration
```

## Live Demo

[https://nizaam-academy.vercel.app/]

## Getting Started

```bash
git clone https://github.com/JefthaNizaam01/nizaam-academy
cd nizaam-academy
npm install
npm run dev
```
Open [http://localhost:8080]in your browser.

## State Management

- **Client State:** Context API with useReducer for managing favorites and course comparisons.
- **Server State:** TanStack Query for data fetching, caching and background updates.
- **Persistence:** localStorage for favorites and theme preference.

## Possible Future Improvements

- User authentication and profiles
- Course enrollment and progress tracking
- Additional search filters (e.g., price range)
- UI animations and transitions

## License

MIT License
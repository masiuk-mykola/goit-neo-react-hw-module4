# Image Search Gallery

A React application that searches the [Unsplash](https://unsplash.com/developers) photo library and displays results in a responsive gallery with infinite "load more" pagination and a full-size image modal.

This is homework module 4 of the GoIT Neo React course.

## Features

- 🔍 Search photos by keyword via the Unsplash REST API
- 🖼️ Responsive image gallery built from reusable components
- ➕ "Load more" pagination with smooth scroll to newly loaded images
- 🔎 Click an image to view a larger version with details in a modal
- ⏳ Loading spinner while requests are in flight
- ⚠️ Inline error handling for failed requests

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and build
- [Axios](https://axios-http.com/) for HTTP requests
- [react-modal](https://github.com/reactjs/react-modal) for the image modal
- [react-spinners](https://www.davidhu.io/react-spinners/) for the loading indicator
- [react-hot-toast](https://react-hot-toast.com/) for notifications
- [react-icons](https://react-icons.github.io/react-icons/) for icons
- CSS Modules for component styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- An Unsplash API access key ([create one here](https://unsplash.com/oauth/applications))

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your Unsplash access key:

```bash
cp .env.example .env
```

```env
VITE_API_URL=https://api.unsplash.com
VITE_UNSPLASH_API_KEY=your_unsplash_access_key
```

### Run the dev server

```bash
npm run dev
```

The app will be available at the URL printed in the terminal (default `http://localhost:5173`).

## Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the Vite development server        |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint across the project            |

## Project Structure

```
src/
├── api/
│   └── unsplash.ts          # Axios client and searchImages request
├── components/
│   ├── SearchBar/           # Search form
│   ├── ImageGallery/        # Grid of image cards
│   ├── ImageCard/           # Single gallery item
│   ├── ImageModal/          # Full-size image modal
│   └── LoadMoreBtn/         # Pagination button
├── types/
│   └── image.ts             # Unsplash API type definitions
├── App.tsx                  # App state and data flow
└── main.tsx                 # Entry point
```

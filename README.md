# TCSS 460 - React State Management Demo

**University of Washington Tacoma**
**School of Engineering and Technology**
**Fall 2025**

This repository contains in-class demonstration code for learning React state management patterns using Next.js 16, React 19, and Material-UI v7.

## 📚 Learning Objectives

Students will learn:

- React state management fundamentals (`useState`)
- Next.js 16 App Router patterns and route groups
- Component composition and reusability
- Material-UI theming and customization
- TypeScript type safety in React applications
- Modern React patterns and best practices

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18+ or 20.9+ or 21.1+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/UWT-SET-TCSS460-LECTURE-MATERIALS/TCSS460-fe-inclass-state-lecture.git

# Navigate to project directory
cd TCSS460-fe-inclass-state-lecture

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📁 Project Structure

```
src/
├── app/                          # Next.js 16 App Router
│   ├── (demo)/                   # Route group for demo pages
│   │   ├── layout.tsx            # Shared AppBar layout
│   │   ├── state/page.tsx        # State management demo
│   │   └── messages/             # Message demos
│   ├── layout.tsx                # Root layout with theme
│   ├── page.tsx                  # Homepage
│   ├── not-found.tsx             # 404 page
│   └── icon.tsx                  # Dynamic favicon
├── components/                   # Reusable components
│   ├── logo.tsx                  # Custom SVG logo (4 variants)
│   ├── message-list-item.tsx    # Message list component
│   ├── priority-avatar.tsx       # Priority-based avatar
│   └── priority-selector.tsx     # Priority selection component
├── views/                        # Page-level view components
│   ├── home/                     # Homepage view
│   ├── state/                    # State demo views
│   ├── messages/                 # Message demo views
│   └── maintenance/              # Error pages (404, etc.)
├── theme/                        # MUI theme configuration
├── types/                        # TypeScript type definitions
├── config/                       # App configuration
└── utils/                        # Utility functions and mock data
```

## 🎓 Demos

### 1. State Management Demo (`/state`)

Demonstrates:

- Basic state with `useState`
- Common state management mistakes (educational purpose)
- Component re-rendering behavior
- Event handling in React

**Educational Note**: This demo intentionally shows incorrect patterns to teach students what NOT to do.

### 2. Messages Demo (`/messages/view` and `/messages/send`)

Demonstrates:

- List rendering and keys
- Form handling and controlled components
- Priority-based filtering
- Component composition
- State lifting patterns

## 🎨 Features

### Technology Stack

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React with improved hooks
- **Material-UI 7.3.4** - Component library
- **TypeScript 5.9** - Type safety

### Key Implementations

- Custom logo component with multiple variants (full, small, icon, monochrome)
- Dynamic favicon generation using Next.js ImageResponse API
- Centralized theming with MUI's `createTheme`
- Route groups pattern for shared layouts
- Accessibility (ARIA labels, semantic HTML)
- Responsive design with MUI breakpoints

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

### Code Organization

- **Route Groups**: The `(demo)` folder groups routes that share the AppBar layout
- **Component Structure**: Separation between presentational components and page views
- **Type Safety**: TypeScript interfaces for messages, priorities, and component props
- **Configuration**: Centralized app config in `/src/config`

## 📖 Educational Notes

### Important Patterns Demonstrated

1. **Route Groups**: Using `(demo)` to share layouts without affecting URL structure
2. **Client Components**: Marking components with `"use client"` when using hooks
3. **Type Definitions**: Proper TypeScript types in `/types` directory
4. **Theme Integration**: Global theming with MUI's ThemeProvider
5. **Component Variants**: Logo component showing multiple rendering modes

### Common Mistakes to Avoid

The State demo (`/state/page.tsx`) intentionally demonstrates common mistakes:

- ❌ Using regular variables instead of state
- ❌ Expecting state to update immediately
- ❌ Not understanding when components re-render

Students should review `.state.original.tsx` to see the incorrect patterns and learn from them.

## 🔧 Next.js Features Used

- **App Router**: Modern Next.js routing with nested layouts
- **Server Components**: Default server-side rendering
- **Font Optimization**: Automatic Google Fonts optimization with `next/font`
- **Image Response**: Dynamic favicon/icon generation

## 📚 Learn More

### Course Resources

- **Course**: TCSS 460 - Server-Side Web Development
- **Institution**: University of Washington Tacoma
- **Instructor**: Charles Bryan

### Next.js Documentation

- [Next.js Documentation](https://nextjs.org/docs) - Features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial
- [Next.js GitHub](https://github.com/vercel/next.js/)

### Material-UI Documentation

- [MUI Documentation](https://mui.com/material-ui/getting-started/)
- [MUI Theming](https://mui.com/material-ui/customization/theming/)

### React Documentation

- [React Documentation](https://react.dev/)
- [React Hooks](https://react.dev/reference/react)

## 📝 License

This project is for educational purposes as part of TCSS 460 coursework.

---

**Note**: This is a teaching repository. Some patterns are intentionally incorrect to demonstrate common mistakes. Always refer to official documentation and course materials for best practices.

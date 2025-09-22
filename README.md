# KenyaFlix - Netflix-like Streaming Platform

A modern streaming platform showcasing Kenyan cinema with Netflix-inspired UX/UI design, featuring the colors of the Kenyan flag and local movie content.

## Features

### 🎬 Core Functionality
- **Homepage with Hero Section** - Featured movie showcase with cinematic presentation
- **Movie Browsing** - Grid and row layouts with advanced filtering
- **Movie Details** - Comprehensive movie information with cast, crew, and reviews
- **Video Player** - Full-featured player with controls, quality settings, and fullscreen
- **Search** - Advanced search across movies, actors, directors, and genres
- **Responsive Design** - Optimized for all screen sizes

### 🇰🇪 Kenyan Content
- **Local Movies** - Features authentic Kenyan films like "Click Click Bang" and "Kampuni"
- **Cultural Theming** - Uses Kenyan flag colors (black, red, green, white)
- **Local Talent** - Showcases Kenyan actors, directors, and filmmakers

### 🎨 Design Features
- **Netflix-inspired UI** - Modern streaming platform aesthetics
- **Dark Theme** - Optimized for viewing experience
- **Smooth Animations** - Hover effects and transitions
- **Accessibility** - Screen reader support and keyboard navigation

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: shadcn/ui with Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **TypeScript**: Full type safety

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Download the project**
   \`\`\`bash
   # Download ZIP from v0 or clone from GitHub
   # Extract to your desired directory
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in browser**
   \`\`\`
   http://localhost:3000
   \`\`\`

### VS Code Setup

1. **Open project in VS Code**
   \`\`\`bash
   code .
   \`\`\`

2. **Recommended Extensions**
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - TypeScript Importer
   - Prettier - Code formatter
   - Auto Rename Tag

3. **VS Code Settings** (`.vscode/settings.json`)
   \`\`\`json
   {
     "editor.formatOnSave": true,
     "editor.defaultFormatter": "esbenp.prettier-vscode",
     "tailwindCSS.experimental.classRegex": [
       ["cn\$$([^)]*)\$$", "'([^']*)'"]
     ]
   }
   \`\`\`

## Project Structure

\`\`\`
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Kenyan theme
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   ├── movies/           # Movie catalog
│   ├── movie/[id]/       # Individual movie pages
│   ├── search/           # Search functionality
│   └── watch/[id]/       # Video player pages
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   ├── hero-section.tsx  # Homepage hero
│   ├── movie-row.tsx     # Horizontal movie lists
│   ├── movie-grid.tsx    # Movie grid layout
│   ├── movie-details.tsx # Detailed movie info
│   ├── filter-bar.tsx    # Movie filtering
│   └── video-player.tsx  # Custom video player
├── lib/                  # Utilities
└── hooks/               # Custom React hooks
\`\`\`

## Key Components

### Navigation
- Responsive navigation with search
- Mobile-friendly hamburger menu
- Kenyan flag-inspired logo

### Video Player
- Custom HTML5 video player
- Full controls (play, pause, seek, volume)
- Quality selection and playback speed
- Fullscreen support
- Auto-hiding controls

### Movie Components
- **MovieRow**: Horizontal scrolling movie lists
- **MovieGrid**: Responsive grid layout
- **MovieDetails**: Comprehensive movie information
- **FilterBar**: Advanced filtering options

## Customization

### Colors (Kenyan Flag Theme)
The design uses Kenyan flag colors defined in `globals.css`:
- **Primary Green**: `oklch(0.45 0.15 142)` - Kenyan flag green
- **Accent Red**: `oklch(0.55 0.2 25)` - Kenyan flag red  
- **Background Black**: `oklch(0.08 0 0)` - Deep black
- **Foreground White**: `oklch(0.98 0 0)` - Clean white

### Adding Movies
Update the movie data in:
- `app/page.tsx` - Homepage featured movies
- `app/movies/page.tsx` - Full movie catalog
- `app/movie/[id]/page.tsx` - Individual movie details

### Styling
- Modify `app/globals.css` for global styles
- Update design tokens for consistent theming
- Use Tailwind classes for component styling

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop build folder
- **Railway**: Connect GitHub repository
- **DigitalOcean**: Use App Platform

## Development Commands

\`\`\`bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npm run type-check   # Check TypeScript types
\`\`\`

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Kenyan film industry for inspiration
- Netflix for UX/UI patterns
- shadcn/ui for component library
- Vercel for hosting platform

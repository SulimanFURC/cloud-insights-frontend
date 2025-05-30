# CloudIdeaGeneration

CloudIdeaGeneration is a web application built with Angular that helps users generate project ideas based on selected cloud providers, experience levels, and cloud services. The app provides tailored project suggestions, high-level steps, cost insights, and alternative service recommendations for Azure, AWS, and GCP.

## Features

- **Cloud Provider Selection:** Choose between Azure, AWS, or GCP.
- **Experience Level:** Select Beginner, Intermediate, or Advanced.
- **Service Selection:** Pick from a wide range of cloud services for each provider.
- **Project Idea Generation:** Get detailed project ideas, including:
  - Title and description
  - Difficulty rating
  - Estimated time to complete
  - High-level implementation steps
  - Cost insights and official pricing links
  - Alternative service suggestions
  - Stretch goals
- **Modern UI:** Responsive design with Bootstrap and FontAwesome icons.
- **Theme Switcher:** Toggle between light and dark modes.
- **Loading Skeletons:** Visual feedback while fetching project ideas.

## Project Structure

```
cloudIdeaGeneration/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cloud-selector/         # Main UI for selecting provider, services, and generating ideas
│   │   │   └── loading-skeleton/       # Loading skeleton component
│   │   ├── core/
│   │   │   ├── Services/               # Business logic and API calls
│   │   │   └── models/                 # TypeScript interfaces and models
│   │   ├── app.component.*             # Root component and template
│   │   ├── app.config.ts               # Angular providers and configuration
│   │   └── app.routes.ts               # Routing configuration
│   ├── index.html                      # Main HTML file
│   └── styles.css                      # Global and theme styles
├── angular.json                        # Angular CLI configuration
├── package.json                        # Project dependencies and scripts
└── README.md                           # Project documentation
```

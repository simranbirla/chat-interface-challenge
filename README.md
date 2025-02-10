# AI Chat Interface Challenge 🚀

Welcome to our Senior React Developer technical challenge! This challenge invites you to build a modern, intelligent chat interface that showcases your expertise in React development, browser APIs, and modern frontend architecture.

## 🎯 Challenge Overview

Create a sophisticated AI chat interface that processes text and speech input, manages complex state, and provides a polished user experience. Your solution will demonstrate your ability to:

-   Implement modern React patterns
-   Integrate browser APIs
-   Design responsive interfaces
-   Manage complex application state
-   Handle real-time interactions

## 🏗️ System Components

The application consists of three main components:

-   **Chat Interface**: Modern React implementation with message threading
-   **Speech Recognition**: Browser API integration for voice input
-   **Mock Backend**: Simple API for message processing

## 💡 Core Features

### Chat Interface
-   Speech-to-text input support
-   Theme switching (dark/light mode)
-   Quick reply suggestions
-   Settings panel
-   Loading states and error handling

## ⏱️ Time Expectations

While you have 24 hours to submit, the challenge is designed for 2 hours of focused development time. The window allows for:

-   Core implementation
-   Documentation
-   Testing and refinement
-   Docker configuration

## 📋 Repository Structure

```
app/
├──cypress/
│   ├── e2e
│   ├── fixtures/
│   ├── screenshots/
├── src/
│   ├── components/
│   ├── pages/
│   ├── context/
│   ├── utils/
│   └── types/
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Open Project

1. Clone this repository
2. Install Node
3. run npm i 
4. run npm run dev

## Architechture:
The architecture of the project follows a structured and modular approach to ensure scalability and maintainability. The application starts with the Home Page, which serves as the main interface for users to interact with the chat system. At its core, the application consists of a Message Window, where conversations take place. The UI is broken down into distinct components:

Header – Contains the Settings button, allowing users to configure preferences such as language, speech enablement, and theme switching.
Main Message Window – Displays user and AI-generated messages in a scrollable chat interface, ensuring smooth UX with animations.
Suggestion Panel – Provides quick reply suggestions, enhancing user interaction.
Input Form – Includes a text input field for typing messages and a microphone button for voice-based input.
For speech functionality, the app integrates the Web Speech API, enabling speech-to-text conversion for voice messages. The microphone button allows users to speak instead of typing, making the app more accessible.
Settings Panel: All the settings are stores in local storage so that they persists.

## Tailwind: 
Used for styling and then using tailwind and context API we toggle between dark and light mode

## Vite:
Bundler used for creating react app

## Cypress:
Used for end to end testing 


# I have also used mock data to show how the chat looks.









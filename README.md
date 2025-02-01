# FeedPage

A social network feed application that displays posts using [JSONPlaceholder](https://jsonplaceholder.typicode.com/) APIs. This project demonstrates a dynamic posts feed with social features similar to popular social networks.

## Features

- View posts from different users
- Like/unlike posts
- View comments on posts
- Add new comments
- Responsive design for mobile and desktop

## Data Source

This project uses the following JSONPlaceholder endpoints:
- Posts: https://jsonplaceholder.typicode.com/posts
- Comments: https://jsonplaceholder.typicode.com/comments
- Users: https://jsonplaceholder.typicode.com/users

## Prerequisites

Before running this application, make sure you have the following installed on your system:
- Node.js (v14 or higher)
- Yarn (preferred) or npm

## Getting Started

1. Clone this repository
2. Navigate to the project directory:
   ```bash
   cd feed
   ```
3. Install dependencies:
   ```bash
   yarn
   ```
   or if using npm:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   yarn start
   ```
   or with npm:
   ```bash
   npm start
   ```
5. Open your browser and visit `http://localhost:3000`

## Note

This is a demo application using JSONPlaceholder's fake REST API. Actions like liking posts and adding comments will be simulated but not persisted on the server.

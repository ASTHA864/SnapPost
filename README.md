# SnapPost

SnapPost is a full-stack image-sharing app where users can create posts with captions and browse a shared feed.

## Features

- Create image posts with captions
- Browse posts in a shared feed
- Store post data in MongoDB
- Upload images with ImageKit

## Tech Stack

- **Frontend:** React, Vite, React Router, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Image storage:** ImageKit

## Run Locally

### Prerequisites

- Node.js and npm
- MongoDB connection string
- ImageKit private key

### Backend

Create a `.env` file in the `Backend` directory:

```env
MONGO_URI=your_mongodb_connection_string
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Install dependencies and start the backend:

```bash
cd Backend
npm install
npm start
```

The API runs at `http://localhost:3000`.

### Frontend

In a separate terminal:

```bash
cd Frontend/vite-project
npm install
npm run dev
```

Open the local URL printed by Vite.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/create-post` | Creates a post with an image and caption |
| `GET` | `/posts` | Retrieves posts for the feed |

## Roadmap

- Add user registration and login
- Hash passwords using bcrypt
- Add JWT-based authentication

Authentication is planned and is not included in the current implementation.

---

## Portfolio Project Entry

**SnapPost — Image-Sharing Web App**

Built a full-stack image-sharing application that lets users create image posts with captions and browse a shared feed. Developed the frontend with React and the backend API with Express, stored post data in MongoDB, and integrated ImageKit for image uploads.

**Tech:** React, Vite, React Router, Axios, Node.js, Express, MongoDB, Mongoose, ImageKit

**Planned:** User registration and login with bcrypt password hashing and JWT authentication.

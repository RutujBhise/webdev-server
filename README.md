# webdev-server

Node.js / Express HTTP server for the Kambaz learning platform (CS 5610, Northeastern).

- `npm run dev` starts the server with nodemon on http://localhost:4000
- `npm start` runs `tsx index.ts` (used on Render)
- Lab 5 routes live under `/lab5/...`
- Kambaz REST APIs live under `/api/...` (users, courses, modules, assignments, enrollments)

Environment variables (`.env`, not committed): `SERVER_ENV`, `CLIENT_URL`, `SERVER_URL`, `SESSION_SECRET`.

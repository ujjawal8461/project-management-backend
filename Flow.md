# Project Management Backend — Complete Roadmap

---

## Phase 0 — Project Setup (DONE)

- Node project initialization
- Dependency installation
- Folder structure setup
- Git initialization & first commit

---

## Phase 1 — Server Bootstrap (DONE)

- Express app setup
- Application entry file
- Health check route
- Nodemon configuration

---

## Phase 2 — Configuration (DONE)

- `.env` file
- dotenv setup
- `config/env.js`
- Environment config validation

---

## Phase 3 — Authentication (DONE)

### 3.1 Auth Routes
- Register
- Login

### 3.2 Password Security
- Password hashing
- Password comparison

### 3.3 JWT
- Token generation
- Token expiration
- Secret management

### 3.4 Auth Middleware
- Token extraction
- Token verification
- `req.user` attachment
- Protected routes

---

## Phase 4 — Database & ORM (Prisma + PostgreSQL)

### 4.1 Database Setup
- PostgreSQL connection
- Prisma initialization
- Prisma client setup

### 4.2 Schema Design
- User model
- Organization model
- OrganizationMember model
- Project model
- Task model

### 4.3 Migrations
- Initial migration
- Schema updates
- Prisma client generation

---

## Phase 5 — Replace In-Memory Logic with Database

### 5.1 User Persistence
- Create user in database
- Fetch user from database

### 5.2 Auth Refactor
- Login using database
- Register using database

---

## Phase 6 — Authorization (RBAC)

### 6.1 Roles
- Owner
- Admin
- Member

### 6.2 Role Middleware
- Role guard middleware
- Route-level access control

---

## Phase 7 — Organization Module

### 7.1 Organization CRUD
- Create organization
- Get organizations
- Update organization
- Delete organization

### 7.2 Organization Membership
- Add member
- Remove member
- Change member role

---

## Phase 8 — Project Module

### 8.1 Project CRUD
- Create project
- Get projects
- Update project
- Delete project

### 8.2 Project Access Control
- Organization-based project access
- Role-based checks

---

## Phase 9 — Task Module

### 9.1 Task CRUD
- Create task
- Get tasks
- Update task
- Delete task

### 9.2 Task Features
- Assign task
- Status updates
- ETA
- Priority


## Phase 9.5 — Soft Delete (Planned)

- Soft delete support for core entities
- Use `deletedAt` instead of hard deletes
- Default queries exclude deleted records
- Restore (undo delete) capability
- Authorization rules for delete & restore
---

## Phase 10 — Comments & Activity

### 10.1 Comments
- Add comment
- Edit comment
- Delete comment

### 10.2 Activity Logs
- Task activity tracking
- Project activity tracking

---

## Phase 11 — Validation & Error Handling

### 11.1 Validation
- Request body validation
- Route parameter validation

### 11.2 Error Handling
- Global error handler
- Custom error classes

---

## Phase 12 — Utilities & Quality

### 12.1 Logging
- Request logging
- Error logging

### 12.2 Enums & Constants
- Status enums
- Role enums

---

## Phase 13 — Testing

### 13.1 Unit Tests
- Authentication tests
- Middleware tests

### 13.2 Integration Tests
- API flow tests

---

## Phase 14 — Documentation

### 14.1 Swagger
- Swagger setup
- API documentation

### 14.2 README
- Setup instructions
- API usage examples

---

## Phase 15 — Production Readiness

### 15.1 Security
- Helmet
- Rate limiting
- CORS configuration

### 15.2 Deployment
- Environment configuration
- Database hosting
- Application hosting

---

## Phase 16 — Architecture & Design Overview

### 16.1 Architecture Review
- Folder structure rationale
- Request/response lifecycle

### 16.2 System Design
- Authentication flow
- RBAC flow
- Multi-tenant architecture
# Project Context & Features

## 1. Project Goals
- Build a **Project Management SaaS** application
- Features: Teams, Projects, Tasks, Comments, Authentication, Role-based access
- Goal: Build a strong portfolio project to aim for high salary jump

## 2. Tech Stack
- Backend: Node.js, Express.js
- Database: PostgreSQL (Prisma ORM)
- Authentication: JWT + bcrypt
- Other: Nodemon, dotenv
- Frontend (planned for later): Next.js / React

## 3. Installed Packages / Versions
- express
- dotenv
- jsonwebtoken
- bcrypt
- prisma
- @prisma/client
- nodemon (dev dependency)

## 4. Features

### 1. Authentication & User
- User registration
- User login
- JWT-based authentication
- Authentication middleware
- User identity handling via `req.user`

---

### 2. Organization (Multi-Tenant Base)
- Create organization
- User can belong to multiple organizations
- `OrganizationMember` mapping table
- Role per organization:
  - Owner
  - Admin
  - Member

---

### 3. Project
- Create project under an organization
- Get all projects of an organization
- Update project
- Delete project

---

### 4. Task
- Create task under a project
- Assign task to a user
- Task status management:
  - TODO
  - IN_PROGRESS
  - DONE
- Update task
- Delete task

---

### 5. Authorization (RBAC)
- Only organization members can access organization data
- Role-based permissions
- Owner / Admin access restrictions

---

### 6. Core Backend Quality
- Proper folder structure
- PostgreSQL database with Prisma ORM
- Centralized error handling
- Basic request validation
- Clean and consistent API responses

---

## Thinking Of Adding this Also

- Task comments
- Task priority
- Task due date (ETA)
- Pagination for list APIs
- Simple activity log (created / updated events)

---


- Swagger API documentation
- Basic rate limiting
- Logging (Winston / Morgan)
- Basic unit tests (Auth + one core module)
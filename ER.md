# Entity Relationship Diagram

# Tables:

User: id uuid pk, fname, lname, email unique, hashedpassword, created at , updated at

Organization: id uuid pk, organizationName, created at , udated at

OrganizationMember: id uuid pk, userId fk, organizationId fk, role, created at , updated at

Projects: id uuid pk, projectName, OrganizationId fk, created at , updated at

Task: id uuid pk, title, desc, status, projectId fk , assigne to (userid) ,created at, updated at

    USER {
        uuid id PK
        string first_name
        string last_name
        string email UNIQUE
        string hashed_password
        datetime created_at
        datetime updated_at
    }

    ORGANIZATION {
        uuid id PK
        string name
        datetime created_at
        datetime updated_at
    }

    ORGANIZATION_MEMBER {
        uuid id PK
        uuid user_id FK
        uuid organization_id FK
        string role
        datetime created_at
        datetime updated_at
    }

    PROJECT {
        uuid id PK
        string name
        uuid organization_id FK
        datetime created_at
        datetime updated_at
    }

    TASK {
        uuid id PK
        string title
        string description
        string status
        uuid project_id FK
        uuid assignee_id FK
        datetime created_at
        datetime updated_at
    }

    USER ||--o{ ORGANIZATION_MEMBER : has
    ORGANIZATION ||--o{ ORGANIZATION_MEMBER : includes

    ORGANIZATION ||--o{ PROJECT : owns
    PROJECT ||--o{ TASK : contains



User
  |
  | 1
  |-----*
        OrganizationMember
        *-----1
              |
              Organization
                    |
                    | 1
                    |-----*
                          Project
                                |
                                | 1
                                |-----*
                                      Task

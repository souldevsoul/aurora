# Aurora - Complete Product Specification

## 🎯 Brand Concept & Vision

### What is Aurora?

**Aurora** is an AI-powered MVP (Minimum Viable Product) development platform that empowers entrepreneurs and product teams to generate full-featured applications with AI and assign specific implementation tasks to expert developers.

**The Core Innovation:**
We combine the speed of AI code generation with the expertise of professional developers through a seamless task assignment workflow and unified credit system.

### Value Proposition

**For Startups & Product Builders:**
- Generate complete MVP applications in minutes, not months
- Start with AI-generated foundation code
- Assign specific tasks to experts for custom features
- Pay only for what you need via credits
- Full GitHub integration for seamless collaboration

**For Expert Developers:**
- Earn credits by completing assigned tasks
- Work on diverse projects
- Flexible task-based income
- Build portfolio of real applications

### Unique Selling Points

1. **AI + Expert Hybrid** - Start with AI-generated MVP, enhance with expert developers
2. **Unified Credit System** - One credit system for both AI generation and expert task assignments
3. **GitHub Integration** - Direct PR workflow, automatic code tracking
4. **Flexible Task Assignment** - Assign specific features to any available expert
5. **Full Project Context** - Experts can see complete project scope and generate meaningful features
6. **Complete MVPs** - Not just code snippets, fully functional applications with databases and APIs

---

## 🎨 Visual Brand Identity

### Brand Colors (CRITICAL - DO NOT DEVIATE!)

**Primary Palette (Purple/Violet):**
```
Purple/Violet Family (Aurora Brand):
- #a855f7 (purple-500) - Primary gradient start
- #9333ea (purple-600) - Primary action color
- #7e22ce (purple-700) - Primary gradient end

Accent Colors:
- #f3f4f6 (gray-100) - Backgrounds
- #ffffff (white) - Primary background
- #1f2937 (gray-900) - Text/dark elements
```

**Usage Rules:**
- Primary CTAs: Purple/Violet gradients (#a855f7 → #9333ea → #7e22ce)
- All buttons and interactive elements: Purple theme
- Backgrounds: White/Gray-100
- Text: Gray-900 (headings), Gray-700 (body)
- Hover states: Deepen purple shade

**NEVER Use:**
- ❌ Emerald (#10B981)
- ❌ Teal (#14B8A6)
- ❌ Blue (#3B82F6)
- ❌ Yellow/Orange
- ❌ Harsh black borders

### Visual Style

**Typography:**
- Headings: Bold, modern (text-5xl, font-bold)
- Body: Readable, relaxed (text-lg, leading-relaxed)
- Accents: Semibold for emphasis

**Shadows (Soft & Professional):**
```css
shadow-soft-sm    - Subtle elevation
shadow-soft-md    - Card elevation
shadow-soft-lg    - Modal/popup elevation
shadow-soft-xl    - Hero element elevation
shadow-glow-emerald - Interactive glow effect
shadow-glow-teal    - Accent glow effect
```

**Corners (Smooth & Modern):**
```css
rounded-xl    - Buttons, cards
rounded-2xl   - Large cards, sections
rounded-3xl   - Hero elements
rounded-full  - Badges, avatars
```

**Spacing (Generous & Breathable):**
- Section padding: py-24 (desktop), py-16 (mobile)
- Card padding: p-8, p-10, p-12
- Element gaps: gap-6, gap-8
- Vertical rhythm: space-y-6, space-y-8

---

## 🔄 Core User Flows

### Flow 1: New User → First Project (AI MVP Generation)

```
1. User lands on homepage
   ↓
2. Clicks "Get Started Free" CTA
   ↓
3. [If not logged in] → Sign up/login (Email/Password)
   ↓
4. Arrives at /dashboard
   - Receives 100 free welcome credits
   ↓
5. Clicks "Create Your First Project"
   ↓
6. Fills out project form:
   - Project name (required)
   - Description (textarea - app purpose, features)
   - Tech stack preferences (optional)
   ↓
7. Project saved to database
   ↓
8. Arrives at project detail page (/dashboard/projects/[id])
   ↓
9. Clicks "Generate MVP" button
   ↓
10. Modal confirms: "This will use 100 credits"
    ↓
11. System checks credit balance
    ↓
12. Credits reserved, UI shows "Generating..."
    ↓
13. AI Processing (Claude/OpenAI):
    - Analyzes project description
    - Generates project structure
    - Creates React/Next.js components
    - Generates API routes
    - Creates database schema
    - Sets up styling
    ↓
14. Code sandbox created (Vercel/E2B)
    - Dependencies installed
    - Build verified
    ↓
15. GitHub Integration:
    - Creates branch: mvp/[project-id]
    - Commits generated code
    - Creates Pull Request
    ↓
16. Credits deducted from wallet
    ↓
17. Success! MVP generated
    - PR link displayed
    - Live preview available
    - User can review and merge
```

**Happy Path Checkpoints:**
- ✅ Project created successfully
- ✅ Credit balance verified
- ✅ AI generation completes
- ✅ Code generated without errors
- ✅ GitHub PR created
- ✅ Preview environment loads
- ✅ Credits deducted correctly

---

### Flow 2: User → Assign Task to Expert (Hybrid Path)

```
1. User has generated MVP via AI
   ↓
2. Identifies feature that needs expert implementation
   ↓
3. Clicks "Add Task" button on project
   ↓
4. Task creation modal opens:
   - Task title (required)
   - Description (what needs to be built)
   - Priority (Low/Medium/High/Critical)
   - Estimated complexity
   ↓
5. Task saved to database
   ↓
6. Task appears in project with "Pending" status
   ↓
7. System calculates credit cost based on complexity:
   - Simple: 10-30 credits
   - Medium: 30-60 credits
   - Complex: 60-100 credits
   ↓
8. User clicks "Assign to Expert"
   ↓
9. System shows available experts:
   - Lists experts with profiles
   - Shows completion rate
   - Allows selecting specific expert or "Any Available"
   ↓
10. User confirms assignment
    ↓
11. [If insufficient credits] → Redirect to /dashboard/wallet
    ↓
12. Credit purchase flow:
    - Select credit package
    - Stripe checkout
    - Credits added to account
    ↓
13. Credits reserved from wallet
    ↓
14. Task notification sent to expert
    ↓
15. Expert Dashboard shows new task
    - Task details
    - Project context
    - Payment amount
    - "Accept Task" button
    ↓
16. Expert accepts task
    ↓
17. Expert implements feature:
    - Creates branch: feature/task-[id]
    - Writes code
    - Commits changes
    - Creates Pull Request
    ↓
18. User receives notification
    ↓
19. User reviews PR on GitHub
    ↓
20. User approves OR requests changes
    ↓
21. On approval:
    - Credits transferred to expert
    - Task marked "Completed"
    - PR can be merged
```

**Happy Path Checkpoints:**
- ✅ Task created with clear description
- ✅ Credit cost calculated correctly
- ✅ Expert assignment works
- ✅ Credit reservation succeeds
- ✅ Expert receives notification
- ✅ Expert can submit work via PR
- ✅ User can review and approve
- ✅ Credits transferred correctly

---

### Flow 3: Returning User → Manage Projects and Tasks

```
1. User logs in
   ↓
2. Lands on /dashboard
   ↓
3. Sees:
   - All projects (gallery/list view)
   - Active tasks (status cards)
   - Credit balance (top-right)
   - "Create New Project" button
   ↓
4. Clicks on past project
   ↓
5. Project detail page opens:
   - Project info
   - Generated MVP status
   - GitHub PR link
   - List of all tasks
   - Task creation button
   ↓
6. Views tasks and can:
   - Create new task
   - Assign existing task to expert
   - Review task status
   - Check PR for completed work
   - Merge approved work
```

**Happy Path Checkpoints:**
- ✅ All past projects visible
- ✅ Projects load with correct metadata
- ✅ Tasks display with current status
- ✅ GitHub PR links functional
- ✅ Can create new tasks on existing project

---

## 💳 Credit System (Unified)

### Credit Economics

**What Credits Buy:**
- 100 credits = AI MVP generation (complete application)
- 10-30 credits = Simple task assignment to expert
- 30-60 credits = Medium task assignment to expert
- 60-100 credits = Complex task assignment to expert
- Credits are reserved when task assigned, transferred when approved

### Welcome Credits & Pricing

| Tier | Welcome Credits | Purchase Options | Features |
|------|-----------------|------------------|----------|
| **Free** | 100 credits | Buy via Stripe | Generate 1 MVP + multiple small tasks |
| **Pay-as-You-Go** | 100 credits | 100 credits - $9.99<br>1,000 credits - $79.99<br>10,000 credits - $599.99 | Unlimited MVPs and task assignments |

### Credit Purchase (À la carte)

| Package | Price | Credits |
|---------|-------|---------|
| Starter | $9.99 | 100 |
| Pro | $79.99 | 1,000 |
| Studio | $599.99 | 10,000 |

**Rules:**
- New users receive 100 welcome credits
- Credits never expire
- Credits reserved when task assigned to expert
- Credits deducted when expert work approved
- Failed AI generations refund credits automatically
- Users can view full credit transaction history

### Credit Flow Technical Implementation

**Database Schema:**
```prisma
model User {
  id             String @id @default(cuid())
  credits        Int @default(0)
  plan           String @default("free") // "free", "designer", "agency"
  planRenewsAt   DateTime?
}

model CreditTransaction {
  id          String @id @default(cuid())
  userId      String
  type        String // "purchase", "earn", "spend", "refund"
  amount      Int    // positive for add, negative for spend
  balance     Int    // balance after transaction
  description String
  relatedId   String? // logoId, designRequestId, etc.
  createdAt   DateTime @default(now())
}
```

**API Endpoints:**
```typescript
// Check balance
GET /api/credits/balance
Response: { credits: 25, plan: "designer" }

// Spend credits
POST /api/credits/spend
Body: { amount: 1, reason: "logo_generation", relatedId: "logo_123" }
Response: { success: true, newBalance: 24 }

// Purchase credits
POST /api/credits/purchase
Body: { package: "pro" } // 30 credits for $25
Response: { checkoutUrl: "stripe.com/checkout/..." }

// Stripe webhook handles credit addition after payment
```

---

## 🤖 AI Code Generation

### AI Models Used

**Primary: Anthropic Claude (Claude 3+)**
- **Purpose:** Full MVP code generation
- **Output:** Complete application structure with React/Next.js, API routes, database schema
- **Speed:** ~2-5 minutes per MVP
- **Best for:** Full-featured web applications, complex logic

**Secondary: OpenAI GPT-4**
- **Purpose:** Alternative code generation fallback
- **Output:** Full application code
- **Speed:** ~2-5 minutes per MVP
- **Best for:** Backup when Claude unavailable

### Generation Flow

```typescript
// /app/api/projects/[id]/mvp/route.ts

export async function POST(req: Request) {
  // 1. Parse request
  const { projectId, userId } = await req.json()

  // 2. Check user credits
  const user = await db.user.findUnique({ where: { id: userId }})
  if (user.credits < 100) {
    return Response.json({ error: "Insufficient credits" }, { status: 402 })
  }

  // 3. Reserve 100 credits
  await reserveCredits(userId, 100, "mvp_generation_reserved", projectId)

  // 4. Fetch project details
  const project = await db.project.findUnique({ where: { id: projectId }})

  // 5. Build AI prompt
  const prompt = buildProjectPrompt(project)
  // Example: "Create a Next.js MVP for a project management app.
  // Features: user auth, project creation, task management, real-time updates"

  // 6. Call Claude API with streaming
  try {
    const stream = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 4096,
      stream: true,
      messages: [{
        role: "user",
        content: prompt
      }]
    })

    // 7. Generate project structure and files
    const generatedCode = await processAIStream(stream)

    // 8. Create code sandbox
    const sandbox = await createSandbox(generatedCode)

    // 9. Push to GitHub
    const prUrl = await createGitHubPR(projectId, generatedCode)

    // 10. Save generation record
    const generation = await db.aiRun.create({
      data: {
        projectId,
        userId,
        prompt,
        status: "completed",
        githubPrUrl: prUrl,
        sandboxUrl: sandbox.url,
      }
    })

    // 11. Deduct credits on success
    await deductCredits(userId, 100, "mvp_generation_completed", projectId)

    // 12. Update project status
    await db.project.update({
      where: { id: projectId },
      data: {
        status: "mvp_generated",
        githubPrUrl: prUrl,
      }
    })

    return Response.json({
      generationId: generation.id,
      githubPrUrl: prUrl,
      sandboxUrl: sandbox.url
    })

  } catch (error) {
    // 13. Refund credits on failure
    await refundCredits(userId, 100, "mvp_generation_failed", projectId)
    return Response.json({ error: "Generation failed" }, { status: 500 })
  }
}
```

### Prompt Engineering

**Template Structure:**
```
Generate a complete Next.js MVP for:

Project Name: {projectName}
Description: {projectDescription}
Key Features: {featureList}

Requirements:
- Use React + Next.js
- Include user authentication
- Set up PostgreSQL database schema
- Create necessary API routes
- Implement responsive UI with Tailwind CSS
- Make it production-ready

Structure:
- /app directory (App Router)
- /components for React components
- /lib for utilities
- /public for static files
- .env.example for configuration

Return:
1. Complete file structure
2. All necessary code files
3. Database schema (SQL)
4. Environment variables needed
5. Setup and deployment instructions
```

---

## 📄 Marketing Pages (Required)

### Homepage (/)

**Sections (in order):**

1. **Hero Section**
   - H1: "Illuminate Your Ideas"
   - Subheading: "Generate complete MVPs with AI. Enhance with expert developers. Launch faster."
   - Primary CTA: "Start Building Free" → /login
   - Secondary CTA: "See How It Works" → #how-it-works
   - Project showcase: Bento grid of 6 example apps (hover effects)

2. **AI + Expert Hybrid Section**
   - Split comparison cards
   - Left: AI Path (instant MVP, fast, affordable)
   - Right: Expert Path (custom features, professional implementation)
   - Center: Hybrid option (best of both - AI foundation + expert tasks)

3. **How It Works (3 Steps)**
   - Step 1: Describe Your Idea (create project)
   - Step 2: Generate MVP with AI (instant foundation)
   - Step 3: Assign Tasks to Experts (build custom features)

4. **Project Gallery Showcase**
   - Real AI-generated MVP examples
   - Shows tech stack used
   - Hover reveals project type and features

5. **Key Features Grid (6 items)**
   - AI MVP Generation in Minutes
   - Complete Code + Database Schema
   - GitHub Integration
   - Expert Task Assignment
   - Flexible Credit System
   - Production-Ready Applications

6. **Testimonials (3 cards)**
   - Founder/Startup photo (if available) or avatar
   - Quote about app generation speed
   - Name, role, company
   - 5-star rating

7. **Pricing Table (2 tiers)**
   - Free (100 welcome credits)
   - Pay-as-You-Go (100, 1000, 10000 credit packages)
   - Feature comparison
   - CTAs for each tier

8. **Final CTA Section**
   - H2: "Ready to Build Your Next App?"
   - Primary CTA: "Generate Your MVP Now"
   - Secondary CTA: "View Pricing"
   - Trust badges: "No credit card required", "100 free welcome credits", "GitHub-integrated"

**SEO Requirements:**
- Meta title: "Aurora - AI MVP Generation Platform"
- Meta description: "Generate complete MVPs with AI, assign tasks to expert developers, build your product faster. Get started free with 100 credits."
- Structured data: Organization, WebSite, Product
- Open Graph images
- Twitter Card meta tags

---

### Pricing Page (/pricing)

**Layout:**

1. **Header**
   - H1: "Simple, Transparent Pricing"
   - Subheading: "Start free with 100 credits, buy more when you need them"

2. **Credit Packages Comparison**

   **Free Tier:**
   - Welcome: 100 free credits
   - Generate: 1 complete MVP
   - Plus: Multiple simple tasks
   - No credit card required
   - CTA: "Start Free"

   **Pay-as-You-Go (MOST POPULAR):**
   - Starter: 100 credits - $9.99
   - Pro: 1,000 credits - $79.99 (8% savings)
   - Studio: 10,000 credits - $599.99 (40% savings)
   - No expiration on credits
   - Cancel anytime
   - CTA: "Buy Credits"

3. **What Credits Buy Table**
   - AI MVP Generation: 100 credits
   - Simple Task Assignment: 10-30 credits
   - Medium Task Assignment: 30-60 credits
   - Complex Task Assignment: 60-100 credits

4. **Expert Services Pricing**
   - Simple feature: 10-30 credits ($1-3 per credit)
   - Medium feature: 30-60 credits ($1-3 per credit)
   - Complex feature: 60-100 credits ($1-3 per credit)
   - Expert pay: 70-80% of credits for completed work

5. **FAQ Section**
   - "How many MVPs can I generate?" (As many as you have credits for)
   - "Do credits expire?" (No, they never expire)
   - "Can I refund credits?" (Yes, within 30 days)
   - "What if my MVP generation fails?" (Full refund of credits)
   - "Do I own the generated code?" (Yes, 100% ownership)

---

### Dashboard Pages (Authenticated)

#### /dashboard (Main Dashboard)

**Layout:**

1. **Top Bar**
   - Aurora logo (left)
   - Credit balance badge (right) - clickable to buy more
   - User avatar dropdown (right)

2. **Hero Section**
   - Welcome message: "Welcome back, [Name]!"
   - Primary CTA: "Create New Project" → /dashboard/projects/new
   - Credit balance display with "Buy More" button
   - Quick stats: Projects created, Tasks assigned, Credits spent

3. **Recent Projects (Gallery)**
   - Grid of project cards
   - Shows: project name, MVP status, number of tasks, last updated
   - Hover shows: Quick actions (view, edit, delete)
   - Click opens project detail page
   - Empty state: "No projects yet. Create your first!"

4. **Active Tasks**
   - Table/list of tasks across all projects
   - Shows: task title, status, assigned expert (if any), project
   - Filter by status: Pending, In Progress, Completed
   - Empty state: "No active tasks"

5. **Quick Actions**
   - "View All Projects"
   - "Purchase Credits"
   - "View Pricing"

---

#### /dashboard/projects/new (Create Project Form)

**Form Fields:**

1. **Project Name** (required)
   - Text input
   - Placeholder: "My Awesome SaaS App"
   - Character limit: 100

2. **Project Description** (required)
   - Textarea
   - Placeholder: "A project management tool for remote teams. Features include: task creation, real-time collaboration, deadline tracking, team notifications, and reporting dashboard."
   - Character limit: 2000

3. **Project Type** (required)
   - Dropdown select
   - Options: Web App, Mobile App, E-commerce, SaaS, Dashboard, Social Network, Marketplace, Booking System, CMS, Other

4. **Key Features** (required)
   - Tag input (multi-select)
   - Suggestions: Authentication, Database, Real-time updates, Payment integration, File upload, API, Admin panel, Mobile responsive, Dark mode, Analytics
   - Limit: 10 tags

5. **Tech Stack Preferences** (optional)
   - Checkboxes
   - Options: React, Next.js, Node.js, PostgreSQL, MongoDB, Tailwind CSS, GraphQL
   - Default: All selected

6. **Submit Button**
   - "Create Project & Generate MVP (100 credits)"
   - Disabled if insufficient credits
   - Loading state during generation

**Validation:**
- All required fields must be filled
- At least 3 features required
- Project name must be unique per user

**After Submit:**
- Project saved to database
- MVP generation starts automatically
- Redirect to /dashboard/projects/[id]
- Show real-time generation progress

---

#### /dashboard/projects/[id] (Project Detail)

**Layout:**

1. **Project Header**
   - Project name
   - Project type badge
   - Last updated date
   - Status: MVP generation status (Pending, In Progress, Complete, Failed)

2. **MVP Generation Status**
   - Status indicator
   - GitHub PR link (if completed)
   - Live preview link (if available)
   - "Regenerate MVP" button (100 credits)
   - Copy GitHub link button

3. **Generated Code Preview**
   - Tree view of generated file structure
   - Expandable folders showing:
     - App structure
     - Components
     - API routes
     - Database schema
   - Syntax-highlighted file preview on click

4. **Original Project Brief**
   - Shows: project name, type, description
   - Key features list
   - Tech stack used
   - "Edit Project" link

5. **Tasks Section**
   - List of all project tasks
   - Filter buttons: All, Pending, In Progress, Completed
   - Add task button: "Add New Task"
   - Each task card shows:
     - Task title
     - Status badge
     - Priority indicator
     - Assigned expert (if any)
     - Credit cost
     - Action buttons (assign, edit, delete)

6. **Action Buttons**
   - "Download Code" (exports project as ZIP)
   - "View on GitHub" (opens PR)
   - "Delete Project"
   - "Add Task"

---

#### /dashboard/tasks/[id] (Task Detail & Assignment)

**Sections:**

1. **Task Header**
   - Task title
   - Project name (link to project)
   - Status badge: Pending, Assigned, In Progress, Under Review, Completed
   - Priority indicator: Low, Medium, High, Critical
   - Credit cost

2. **Task Description**
   - Full task description
   - Requirements list
   - Acceptance criteria
   - Any attachments or references

3. **Project Context**
   - Link to project
   - Generated MVP status
   - Related tasks (if any)

4. **Assignment Section**
   - If not assigned: "Assign to Expert" button
   - If assigned:
     - Expert name and avatar
     - Expert profile link
     - Assignment date
     - "Change Expert" button (admin only)
     - "Unassign Expert" button

5. **Expert Work (if assigned)**
   - PR link (once created)
   - Branch name
   - Code preview (syntax highlighted)
   - Comments from expert
   - User review status

6. **Action Buttons**
   - "Assign to Expert" (if not assigned)
   - "Approve Work" (if submitted)
   - "Request Changes" (if submitted)
   - "Cancel Task" (refunds credits)

---

#### /dashboard/wallet (Credits & Purchase)

**Layout:**

1. **Credit Balance Card**
   - Large display: "Your Balance: XXX credits"
   - Value in dollars equivalent
   - "Buy More Credits" button
   - Recent transactions link

2. **Credit Package Options**
   - Grid of 3 packages:
     - Starter: 100 credits - $9.99
     - Pro: 1,000 credits - $79.99 (8% savings)
     - Studio: 10,000 credits - $599.99 (40% savings)
   - Each card shows: Credits, Price, $/credit rate
   - "Buy Now" button for each
   - Stripe checkout integration

3. **Transaction History**
   - Table showing all credit transactions
   - Columns: Date, Type, Amount, Balance, Description
   - Filters: All, Income, Spending, Refunds
   - Pagination or infinite scroll
   - Export to CSV button

4. **Usage Summary**
   - Total credits earned (welcome + purchases)
   - Total credits spent
   - Monthly spending breakdown chart
   - Breakdown by action type (MVP generation, tasks, etc.)

---

#### /dashboard/settings (User Settings)

**Layout:**

1. **Profile Settings**
   - Name field
   - Email field
   - Avatar upload
   - GitHub profile link (optional)
   - Bio/description

2. **Security**
   - Change password
   - Active sessions list
   - "Logout all devices" button

3. **Notifications**
   - Email preferences
   - Task updates
   - Credit alerts
   - Marketing emails

4. **Danger Zone**
   - Export account data
   - Delete account (requires confirmation)

---

## 🔧 Technical Implementation Checklist

### Database (Prisma + PostgreSQL)

**Models Required:**

```prisma
// User & Auth
model User {
  id            String @id @default(cuid())
  email         String @unique
  name          String?
  credits       Int @default(0)
  role          String @default("USER") // USER, EXPERT, ADMIN
  projects      Project[]
  tasks         Task[]
  transactions  CreditTransaction[]
  createdAt     DateTime @default(now())
}

// Project (MVP Container)
model Project {
  id              String @id @default(cuid())
  userId          String
  user            User @relation(fields: [userId], references: [id])
  name            String
  description     String @db.Text
  type            String // "web-app", "saas", "ecommerce", etc.
  features        String[] // Array of feature tags
  techStack       String[] // React, Next.js, PostgreSQL, etc.
  status          String @default("draft") // draft, mvp_generated, in_progress, completed
  githubPrUrl     String?
  previewUrl      String?
  tasks           Task[]
  aiRuns          AIRun[]
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}

// AI Generation Run
model AIRun {
  id              String @id @default(cuid())
  projectId       String
  project         Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  userId          String
  prompt          String @db.Text
  status          String @default("processing") // processing, completed, failed
  generatedCode   String? @db.Text
  githubPrUrl     String?
  sandboxUrl      String?
  costCredits     Int @default(100)
  createdAt       DateTime @default(now())
  completedAt     DateTime?
}

// Task (Feature to implement)
model Task {
  id            String @id @default(cuid())
  projectId     String
  project       Project @relation(fields: [projectId], references: [id], onDelete: Cascade)
  createdById   String
  createdBy     User @relation(fields: [createdById], references: [id])
  title         String
  description   String @db.Text
  priority      String // "low", "medium", "high", "critical"
  complexity    String // "simple", "medium", "complex"
  status        String @default("pending") // pending, assigned, in_progress, review, completed, cancelled
  assignedTo    String? // Expert user ID
  costCredits   Int
  githubBranch  String?
  githubPrUrl   String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  completedAt   DateTime?
}

// Credit Transactions
model CreditTransaction {
  id          String @id @default(cuid())
  userId      String
  user        User @relation(fields: [userId], references: [id])
  delta       Int // Positive = added, Negative = spent
  reason      String // "welcome_bonus", "purchase", "mvp_generation", "task_completion", etc.
  projectId   String?
  taskId      String?
  balance     Int // Balance after transaction
  createdAt   DateTime @default(now())
}
```

---

### API Routes Required

**Auth:**
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh auth token

**Projects:**
- `GET /api/projects` - List user's projects
- `POST /api/projects` - Create new project
- `GET /api/projects/[id]` - Get project details
- `PATCH /api/projects/[id]` - Update project
- `DELETE /api/projects/[id]` - Delete project
- `POST /api/projects/[id]/mvp` - Generate MVP with AI

**Tasks:**
- `GET /api/tasks` - List tasks (filtered by role)
- `POST /api/tasks` - Create new task
- `GET /api/tasks/[id]` - Get task details
- `POST /api/tasks/[id]/assign` - Assign task to expert
- `PATCH /api/tasks/[id]` - Update task status
- `POST /api/tasks/[id]/cancel` - Cancel task and refund

**Credits:**
- `GET /api/credits/balance` - Get current balance
- `POST /api/credits/spend` - Deduct credits
- `POST /api/credits/refund` - Refund credits
- `POST /api/credits/purchase` - Stripe checkout

**AI Generation:**
- `POST /api/generate-ai-code-stream` - Stream AI code generation
- `POST /api/create-ai-sandbox-v2` - Create code execution sandbox
- `GET /api/sandbox-status` - Check sandbox status

**Payments:**
- `POST /api/stripe/checkout` - Create Stripe checkout session
- `POST /api/stripe/webhook` - Handle Stripe webhooks

**User:**
- `GET /api/user/profile` - Get user profile
- `PATCH /api/user/profile` - Update profile
- `DELETE /api/user/delete` - Delete account

**Admin:**
- `GET /api/admin/users` - List all users (admin only)
- `GET /api/admin/transactions` - All transactions (admin only)
- `PATCH /api/admin/users/[id]` - Update user (admin only)

---

### Environment Variables Needed

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
AUTH_SECRET="your-secret-key"

# Anthropic Claude
ANTHROPIC_API_KEY="sk-ant-..."

# OpenAI (Fallback)
OPENAI_API_KEY="sk-..."

# GitHub
GITHUB_TOKEN="ghp_..."
GITHUB_APP_ID="..."

# Stripe
STRIPE_SECRET_KEY="sk_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Vercel Blob (for file storage)
BLOB_READ_WRITE_TOKEN="vercel_blob_..."

# App Config
NEXT_PUBLIC_APP_URL="https://aurora.dev"
NEXT_PUBLIC_API_URL="https://aurora.dev/api"

# Email (for notifications)
RESEND_API_KEY="re_..."
SENDER_EMAIL="noreply@aurora.dev"
```

---

## ✅ End Goal Verification Checklist

### Marketing Pages Complete?
- [ ] Homepage has all 8 sections
- [ ] Pricing page shows free tier + pay-as-you-go packages
- [ ] All CTAs lead to correct destinations (/login, /pricing)
- [ ] SEO meta tags present
- [ ] Mobile responsive
- [ ] Design system consistent (purple/violet colors, soft shadows)

### User Flows Working?
- [ ] New user can sign up and receives 100 free credits
- [ ] User can create project
- [ ] AI MVP generation works (Claude integration)
- [ ] Generated code displays correctly
- [ ] GitHub PR created automatically
- [ ] User can create tasks on project
- [ ] User can assign tasks to experts
- [ ] Expert receives task notification
- [ ] Credit system deducts properly on all actions

### Credit System Complete?
- [ ] New users get 100 welcome credits
- [ ] MVP generation costs 100 credits
- [ ] Task assignment reserves credits
- [ ] Task completion transfers credits to expert
- [ ] À la carte purchase works (Stripe)
- [ ] Credits deduct on generation
- [ ] Credits refund on failure
- [ ] Credit balance displays correctly
- [ ] Credit transaction history visible

### AI Generation Working?
- [ ] Claude API connection established
- [ ] Prompt engineering generates valid code
- [ ] Generation request succeeds
- [ ] Generated code outputs to files
- [ ] GitHub integration creates PR
- [ ] Code sandbox creates and tests
- [ ] Failed generations refund credits

### Database Schema Complete?
- [ ] All models defined in Prisma
- [ ] Migrations run successfully
- [ ] Relationships configured correctly
- [ ] Indexes added for performance

### Authentication Working?
- [ ] Sign up flow works
- [ ] Login flow works
- [ ] Protected routes secure
- [ ] User profile accessible
- [ ] Role-based access (USER, EXPERT, ADMIN)

### Expert Workflow Complete?
- [ ] Experts can view available tasks
- [ ] Experts can accept tasks
- [ ] Experts can submit work via GitHub PR
- [ ] Users can review and approve
- [ ] Credits transfer to expert on approval
- [ ] Task completion marked properly

---

## 🎨 Design System Confirmation

**Colors Used Everywhere:**
- ✅ Purple (#a855f7) - Primary gradient start
- ✅ Purple (#9333ea) - Primary action color
- ✅ Purple (#7e22ce) - Primary gradient end
- ✅ Gray (#1f2937) - Text/dark elements
- ❌ NO Emerald (#10B981)
- ❌ NO Teal (#14B8A6)
- ❌ NO Blue (#3B82F6)
- ❌ NO Yellow/Orange
- ❌ NO Harsh black borders

**Visual Style:**
- ✅ Soft shadows (shadow-soft-*)
- ✅ Smooth corners (rounded-xl/2xl/3xl)
- ✅ Generous spacing (py-24, gap-8)
- ✅ Professional, modern feel
- ✅ Purple gradients on CTAs

---

This is the complete, comprehensive specification for Aurora MVP Development Platform. Every flow, every page, every technical detail is documented here.

**Version**: 2.0
**Last Updated**: 2025-11-13
**Platform**: Aurora - AI MVP Development Platform

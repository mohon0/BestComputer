# Oylkka Training Center Website

This repository contains the source code for the official website of oylkka Training Center, an educational institute located in Jhenaidah, Bangladesh. The website serves as a comprehensive informational portal, showcasing the various professional courses and services offered, attracting prospective students, and facilitating easy communication and enrollment.

## 🚀 Live Site

Explore the live website: [https://www.training.oylkka.com](https://www.training.oylkka.com)

## ✨ Features

*   **Course Catalog:** Detailed listings of professional courses, including Office Application, Database Programming, Digital Marketing, Graphics Design, Web Design, Video Editing, AutoCAD, and Ethical Hacking.
*   **Services Offered:** Information on additional services such as computer sales and servicing, digital content creation, graphic design, web design, video editing, and digital marketing.
*   **Student Attraction:** Highlights benefits like affordable fees, modern facilities, experienced instructors, flexible scheduling, post-training support, and government certification.
*   **Notice Board:** Displays important announcements and updates.
*   **Team/Members Section:** Introduces the institute's members.
*   **Payment Information:** Details regarding payment methods.
*   **Contact Information:** Easy access to phone numbers, email, and physical address.
*   **Student Feedback/Testimonials:** Showcasing positive experiences from former students.
*   **Application & Results:** Information related to enrollment procedures and results.

## 🛠️ Technologies Used

The project is built using modern web technologies:

*   **Next.js:** A React framework for building fast, scalable, and SEO-friendly applications.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapidly styling components.
*   **Framer Motion:** A production-ready motion library for React.
*   **Biome:** A fast formatter and linter for web projects.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

*   [Node.js](https://nodejs.org/) (LTS version recommended)
*   [Bun](https://bun.sh/) (preferred package manager) or [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd oylkka-training
    ```
    *(Replace `<repository_url>` with the actual URL of this GitHub repository)*
2.  Install dependencies:
    ```bash
    bun install
    # or
    npm install
    ```

### Running Locally

To start the development server:

```bash
bun run dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

A high-level overview of the project directory structure:

```
.
├── app/                  # Next.js page routes, layout, and global styles
├── assets/               # Static assets like images
├── components/           # Reusable UI components, organized by section (home, layout)
├── public/               # Static files served directly by Next.js
├── next.config.ts        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── biome.json            # Biome linter/formatter configuration
```

## ⚙️ Available Scripts

In the project directory, you can run:

*   `bun run dev` or `npm run dev`:
    Starts the development server.
*   `bun run build` or `npm run build`:
    Builds the application for production.
*   `bun run start` or `npm run start`:
    Starts the production server after building.
*   `bun run lint` or `npm run lint`:
    Runs Biome linter to check for code quality issues.
*   `bun run format` or `npm run format`:
    Runs Biome formatter to automatically fix code style issues.
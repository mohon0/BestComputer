# Best Computer Website - Gatsby Project

![Gatsby Logo](https://www.bestcomputerjhe.online/og-image.jpg)

This is the official website for **Best Computer**, an institute that provides IT training. The project is built using **Gatsby**, a React-based static site generator, and is deployed on **Netlify**.

You can visit the live website here: [Best Computer Website](https://www.bestcomputerjhe.online)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [CMS Setup](#cms-setup)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Static site generation with **Gatsby**
- CMS for managing notices, blog posts, and course details
- PDF notice management
- Mobile-friendly and responsive design
- SEO-friendly structure with fast performance
- Animation using **Framer Motion**

## Technologies

- **Gatsby** - Static Site Generator
- **React** - UI Framework
- **TypeScript** - For static typing and reusable components
- **Netlify** - Deployment and hosting
- **Static CMS** - For content management
- **Markdown** - For blog and notice content
- **Tailwind CSS** - Styling framework
- **Framer Motion** - Animations

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sejarparvez/BestComputer
   ```

2. Navigate to the project directory:

   ```bash
   cd BestComputer
   ```

3. Install dependencies using Yarn:

```bash
yarn install
```

4. Start the development server:

```bash
yarn install
```

5. Open http://localhost:8000 in your browser to view the site.

## Configuration

- **CMS Configuration**: The CMS is set up in the `static/admin/config.yml` file. The backend uses a Git-based configuration with `git-gateway`.
- **Media Configuration**: Images and PDFs are uploaded to the `images/uploads` folder. Modify the paths as needed in the CMS configuration.
- **Unique Identifiers**: Ensure that each notice's folder name is unique by using a slug system.

## Usage

### Adding Notices

1. Navigate to `/admin` on the deployed website.
2. Log in using your GitHub or Netlify account.
3. Use the 'Notice' collection to create or edit notices.
4. Upload PDF files directly through the CMS interface.

### Adding Blog Posts

1. Similar to adding notices, blog posts can be created using the 'Blog' collection in the CMS.
2. The blog content is written in Markdown format and stored in the `content/blog` folder.

## CMS Setup

This project uses **Static CMS** with a Git-based backend:

- **Branch**: `master`
- **Media Folder**: `"images/uploads"`
- **Public Folder**: `"/images/uploads"`
- **Notice Collection**:
  - Fields: Title, Publish Date, PDF File
  - Path: `content/notice/{{slug}}/index.md`

## Deployment

This site is deployed using **Netlify**. To deploy:

1. Push your changes to the `master` branch.
2. Netlify will automatically build and deploy the latest changes.

If you're using Netlify for the first time, follow the [Netlify docs](https://docs.netlify.com) for more setup instructions.

## Contributing

We welcome contributions! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new feature branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a pull request.

Please open issues and pull requests on [GitHub](https://github.com/username/repository-name).

## License

This project is licensed under the [MIT License](LICENSE).

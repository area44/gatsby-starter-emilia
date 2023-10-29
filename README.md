# Gatsby Starter Emilia

Gatsby Starter Emilia is a minimalistic portfolio/photography site that features a masonry grid, page transitions, and large images. It uses the Gatsby Theme [`@lekoarts/gatsby-theme-emilia`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia).

## Installation

To install and run the starter, follow these steps:

```bash
npm install
npm run develop
```

The site will now be running at `http://localhost:8000`!

## Quick Start

Gatsby Starter Emilia creates a new Gatsby site and configures the `@lekoarts/gatsby-theme-emilia` theme for you.

### Adding a New Project

New projects are displayed on the index page of the theme and can be added by creating MDX files inside the `content/projects` folder. Here's a general setup guide:

1. Create a new folder inside `content/projects`.
2. Create a new `index.mdx` file and add the frontmatter.
3. Add images to the folder created in step 1.
4. Reference your desired images as your `cover` in the frontmatter.
5. Write your content below the frontmatter (optional).
6. Use `defer` to opt-in to Deferred Static Generation (DSG) (optional).
7. Add a `slug` to the frontmatter to use a custom slug, e.g., `slug: "/my-slug"` (optional).

Here's an example of the frontmatter:

```md
---
cover: './sean-foley-0JD7kvxAq0Y-unsplash.jpg'
date: '2019-09-10'
title: 'Emilia'
defer: false
slug: '/my-slug'
areas:
  - Neon
  - Lights
---
```

You can add additional content below the frontmatter using MDX. It will be displayed in the header of the project below the date and areas.

### Changing the "About Me" Text

To change the "About Me" text, create a file at `src/@lekoarts/gatsby-theme-emilia/texts/about-me.mdx` and edit the text.

### Changing the Avatar

To change the avatar, place an image named `avatar` inside the `content/assets` folder (or your custom `assetsPath` if you defined one for the theme).

### Changing the Static Folder

The static folder contains icons, social media images, and robots.txt. Make sure to change these files as well!

## Credits

This project was inspired by [Gatsby Starter Portfolio: Emilia](https://github.com/LekoArts/gatsby-starter-portfolio-emilia) by Lennart. Please consider starring his project, sharing it on social media, or supporting him.

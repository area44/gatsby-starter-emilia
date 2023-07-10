# Gatsby Starter Emilia

[![Netlify Status](https://api.netlify.com/api/v1/badges/8cc4d4fc-1307-4cf5-a21e-df91984cf067/deploy-status)](https://app.netlify.com/sites/gatsby-starte-emilia/deploys)

Minimalistic portfolio/photography site with masonry grid, page transitions and big images. Using the Gatsby Theme [`@lekoarts/gatsby-theme-emilia`](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia).

## Installation

```sh
npm install
npm run develop
```

The site is now running at `http://localhost:8000`!

## Quick Start

This starter creates a new Gatsby site that installs and configures the theme [@lekoarts/gatsby-theme-emilia](https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emilia).

### Add a new project

New projects will be shown on the index page of this theme and can be added by creating MDX files inside `content/projects`. General setup:

1. Create a new folder inside `content/projects`
1. Create a new `index.mdx` file, and add the frontmatter
1. Add images to the created folder (from step 1)
1. Reference your desired images as your `cover` in the frontmatter
1. Write your content below the frontmatter (optional)
1. Use `defer` to opt-in into Deferred Static Generation (DSG) (optional)
1. Add a `slug` to the frontmatter to use a custom slug, e.g. `slug: "/my-slug"` (Optional)

**Frontmatter reference:**

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

The frontmatter alone is enough, if you'd like to add additional content you can do so by writing your content (as usual with MDX) below the frontmatter. It'll be displayed in the header of the project below the date and areas.

### Change the "About Me" text

Create a file at `src/@lekoarts/gatsby-theme-emilia/texts/about-me.mdx` to edit the text.

### Change the avatar

Place an image with the name `avatar` inside the folder `content/assets` (or your custom `assetsPath` which you defined for the theme).

### Change your static folder

The static folder contains the icons, social media images and robots.txt. Don't forget to change these files, too!

## Credits

This project inspired from [Gatsby Starter Portfolio: Emilia](https://github.com/LekoArts/gatsby-starter-portfolio-emilia) by Lennart. Please star his project, share it on Social Media or consider supporting him.

# Engineering Portfolio

A static-first personal engineering portfolio built with Next.js, TypeScript, React, Tailwind CSS, ESLint, and npm.

The codebase is intentionally minimal so the visual design can be refined later without rewriting the content architecture.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Create a production build:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
app/                  Next.js app router pages, layout, sitemap, robots
components/           Reusable presentation components
content/              Typed portfolio content and data
public/               Static assets such as resume.pdf and images
```

Main routes:

- `/`
- `/about`
- `/projects`
- `/skills`
- `/contact`

## Editing Site Content

Update personal details and links in:

```text
content/site.ts
```

Replace placeholders for your name, email, GitHub, LinkedIn, and site URL.

For production SEO, set:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

on Vercel once you know the final domain.

## Adding Projects

Projects are stored in:

```text
content/projects.ts
```

Each project supports title, descriptions, technologies, category, URLs, images, dates, accomplishments, and featured status.

Add or edit objects in the exported `projects` array. Mark `featured: true` to show a project on the homepage.

Work experience is available in the linked resume.

## Editing Skills

Skill categories are stored in:

```text
content/skills.ts
```

Use the existing categories as a starting point:

- Programming Languages
- Web Development
- Embedded / Hardware
- Engineering Tools
- Development Tools

## Resume

Place your resume PDF at:

```text
public/resume.pdf
```

The homepage resume button links to `/resume.pdf` and opens it in a new tab.

## Contact

The contact page currently uses static links only:

- email
- LinkedIn
- GitHub

No database or backend is required. A form service such as Formspree, Basin, or a Vercel-compatible server action can be added later if needed.

## Deploying To Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js framework settings.
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL.
5. Deploy.

## Connecting A Custom Domain

1. Open the project in Vercel.
2. Go to Settings, then Domains.
3. Add your custom domain.
4. Follow Vercel's DNS instructions for your domain registrar.
5. Update `NEXT_PUBLIC_SITE_URL` to the custom domain.

## Notes

- The site is static-first and uses local TypeScript data.
- There is no database or backend server.
- The current UI is intentionally simple and ready for future redesign.

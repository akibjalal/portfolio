# Akib Jalal — Portfolio (static site)

A single-page, fully static portfolio. No backend, no build step, no dependencies.
Open `index.html` in a browser and it works.

## Files

```
index.html                 All page content and sections
style.css                  Design system (colours, layout, responsive rules, animations)
script.js                  Theme toggle, mobile menu, scroll reveal, contact form
assets/images/             Profile photo and project screenshots
assets/icons/favicon.svg   Favicon placeholder
assets/resume/resume.pdf   Your CV (add this file)
```

## Deploying to GitHub Pages

1. Create a repository (e.g. `portfolio`) and upload the contents of this folder
   so that `index.html` sits at the repository root.
2. Repository → **Settings** → **Pages** → Source: *Deploy from a branch*,
   Branch: `main`, Folder: `/ (root)` → **Save**.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

All asset paths are relative, so the site works from a repository subpath.

## How to update things later

| What | Where |
|---|---|
| Profile photo | `index.html` → replace `.portrait__placeholder` with `<img src="assets/images/profile.jpg" alt="Portrait of Akib Jalal">` |
| Phone number | `index.html` → Contact section, "To be added" |
| Resume PDF | Save it as `assets/resume/resume.pdf` — the button already points there |
| Social links | `index.html` → put the URL in `href` and delete `data-placeholder` |
| Skills | `index.html` → add `<li class="tag">Name</li>` inside a skill card's `<ul class="tags">` |
| Projects | `index.html` → copy an `<article class="card project">` block and fill it in |
| Certifications | `index.html` → replace the `.empty-state` block with cards |
| Colours | `style.css` → the `:root` / `[data-theme="light"]` variables at the top |

## Notes

- Dark mode is the default; the toggle remembers the visitor's choice.
- The contact form opens the visitor's own email client (`mailto:`) — nothing is
  sent to a server, which is what keeps the site GitHub Pages compatible.
- Placeholder links are deliberately inert so no button is ever broken.

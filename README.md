# Data portfolio website

Open `index.html` for the About page or `projects.html` for the project list. Keep all files and the `descriptions` folder together. No local server or build step is required.

## Direct links

Each project has one detail page URL. The part after `#` selects its tab:

| Destination | Relative URL |
| --- | --- |
| Projects list | `projects.html` |
| Marketing final product | `project.html?project=marketing-analytics#final-product` |
| Marketing description | `project.html?project=marketing-analytics#description` |
| Project 02 description | `project.html?project=project-02#description` |
| Project 03 description | `project.html?project=project-03#description` |

On your own computer, these open as local `file://` URLs. After hosting the files, prepend your website address to share a public link. For example:

`https://your-domain.com/project.html?project=marketing-analytics#description`

Clicking a tab updates the URL, so you can copy it from the address bar. Browser back and forward also switch tabs.

## Edit a project description

Each project's Description tab gets its text from a separate file:

| Project | File |
| --- | --- |
| Marketing Data Pipeline & Dashboard | `descriptions/marketing-analytics.js` |
| Project 02 | `descriptions/project-02.js` |
| Project 03 | `descriptions/project-03.js` |

Edit the HTML between the two backticks in the corresponding file. Use paragraphs and lists like this:

~~~html
<p>One paragraph of the project description.</p>
<p>Another paragraph with more detail.</p>
<ul>
  <li>First bullet point</li>
  <li>Second bullet point</li>
</ul>
~~~

Keep the surrounding `window.portfolioDescriptions[...] =` line and the closing backtick and semicolon. These `.js` files load directly from disk; browser security rules often block fetching separate `.html` or `.md` files from a `file://` page.

## Edit project names and embed links

The short titles and summaries on the project list are in `projects.html`. The detail-page titles, subtitles, tools, and report URLs are in the `projects` object near the top of `script.js`. Keep the project slug in the list links and `script.js` in sync.

// Directory data for blog posts: every .md in blog/posts/ gets the post
// layout, the `post` collection tag (drives /blog/ and /feed.xml), and a
// /blog/<slug>/ permalink — a new post only needs title/description/date.
// (A function, not a template string, so it works with markdownTemplateEngine
// disabled.)
module.exports = {
	layout: "layouts/post.njk",
	tags: "post",
	schema: "post", // BlogPosting + BreadcrumbList JSON-LD (see layouts/base.njk)
	permalink: (data) => `/blog/${data.page.fileSlug}/`,
};

const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
	// The homepage is hand-crafted HTML and must ship byte-for-byte as-is.
	// Passthrough copy guarantees Eleventy never template-processes it.
	eleventyConfig.addPassthroughCopy("index.html");
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("styles.css");
	eleventyConfig.addPassthroughCopy("robots.txt");
	eleventyConfig.addPassthroughCopy("llms.txt");

	// Human-readable dates for blog templates (UTC so YAML dates don't drift)
	eleventyConfig.addFilter("readableDate", (dateObj) =>
		new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC",
		}).format(dateObj)
	);
	eleventyConfig.addFilter("isoDate", (dateObj) =>
		dateObj.toISOString().slice(0, 10)
	);

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/feed.xml",
		inputPath: "feed.njk", // virtual template (no physical file needed)
		collection: {
			name: "post",
			limit: 0,
		},
		metadata: {
			language: "en",
			title: "BuilderFox — Dev Blog",
			subtitle: "Major updates from BuilderFox — games that think back.",
			base: "https://builderfox.com/",
			author: {
				name: "BuilderFox",
				email: "aaron@builderfox.com",
			},
		},
	});

	eleventyConfig.ignores.add(".design-explorations");
	eleventyConfig.ignores.add("README.md");

	return {
		templateFormats: ["njk", "md"],
		// Pure markdown — no Liquid/Nunjucks preprocessing of posts, so prose
		// and code snippets containing {{ }} / {% %} never break the build.
		markdownTemplateEngine: false,
		dir: {
			input: ".",
			output: "_site",
		},
	};
};

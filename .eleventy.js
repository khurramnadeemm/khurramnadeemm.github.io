const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add a date filter for Nunjucks
  eleventyConfig.addFilter("date", (value, format = "dd LLL yyyy") => {
    return DateTime.fromJSDate(value, { zone: 'utc' }).toFormat(format);
  });

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");

  // Blog post collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};

module.exports = function(eleventyConfig) {
  // ✅ Copy entire folders — not specific files unless necessary
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};

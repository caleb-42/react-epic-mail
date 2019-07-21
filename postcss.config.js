const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    'client/**/*.html',
    'client/**/*.css',
    'client/**/*.js'
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}

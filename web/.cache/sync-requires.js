const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-event-temp-js": hot(preferDefault(require("C:\\Users\\eflat\\Documents\\scad-flux-site\\web\\src\\templates\\eventTemp.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\eflat\\Documents\\scad-flux-site\\web\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\eflat\\Documents\\scad-flux-site\\web\\src\\pages\\about.js"))),
  "component---src-pages-community-js": hot(preferDefault(require("C:\\Users\\eflat\\Documents\\scad-flux-site\\web\\src\\pages\\community.js"))),
  "component---src-pages-events-js": hot(preferDefault(require("C:\\Users\\eflat\\Documents\\scad-flux-site\\web\\src\\pages\\events.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\eflat\\Documents\\scad-flux-site\\web\\src\\pages\\index.js")))
}


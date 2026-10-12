// Apply the saved or system color mode before the first paint.
;(function () {
  var theme
  try {
    theme = localStorage.getItem('theme')
  } catch {
    // Storage can be blocked; fall back to the system setting.
  }
  if (theme !== 'light' && theme !== 'dark') {
    theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  document.documentElement.dataset.theme = theme
  // Keep in sync with --background in src/index.css.
  var meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'dark' ? '#101113' : '#f3f4f2')
})()

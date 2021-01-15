window.onload = function () {
  // Check if dark mode already enabled
  let darkMode = localStorage.getItem('theme') === 'dark';

  if (darkMode) {
    $('body').toggleClass('dark-mode');
  }

  // Add listener for theme toggle button
  const themeToggle = $('#theme-toggle');
  themeToggle.click(function () {
    $('body').toggleClass('dark-mode');
    $(this).text(`Turn ${darkMode ? 'on' : 'off'} the lights`);
    localStorage.setItem("theme", darkMode ? "light" : "dark");
  });
}

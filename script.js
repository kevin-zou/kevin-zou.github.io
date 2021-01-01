window.onload = function () {
  // Dark mode toggle
  let darkMode = false;
  const darkModeButton = $('#dark-mode-toggle');
  darkModeButton.click(function () {
    darkMode = !darkMode;
    $('body').toggleClass('dark-mode');
    $(this).text(`Turn ${darkMode ? 'on' : 'off'} the lights`);
  });
}

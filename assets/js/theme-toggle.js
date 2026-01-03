(function() {
  'use strict';

  const STORAGE_KEY = 'theme-preference';

  // Get system preference
  const getSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  };

  // Get saved theme or default to system preference
  const getTheme = () => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (savedTheme) {
      return savedTheme;
    }
    return getSystemTheme();
  };

  // Get current theme from DOM
  const getCurrentTheme = () => {
    return document.documentElement.getAttribute('data-theme') || getTheme();
  };

  // Save theme preference
  const setTheme = (theme) => {
    localStorage.setItem(STORAGE_KEY, theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Initialize theme on page load
  const initTheme = () => {
    const theme = getTheme();
    document.documentElement.setAttribute('data-theme', theme);
  };

  // Initialize immediately (before page renders)
  initTheme();

  // Add event listener when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle');

    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
    }
  });

  // Listen for system theme changes (optional)
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      // Only auto-update if user hasn't manually set a preference
      if (!localStorage.getItem(STORAGE_KEY)) {
        const newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    });
  }
})();

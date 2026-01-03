(function() {
  'use strict';

  const STORAGE_KEY = 'lang-preference';

  // Get browser language
  const getBrowserLang = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('ja') ? 'ja' : 'en';
  };

  // Get saved language or default to browser language
  const getLang = () => {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    if (savedLang) {
      return savedLang;
    }
    return getBrowserLang();
  };

  // Save language preference
  const setLang = (lang) => {
    localStorage.setItem(STORAGE_KEY, lang);
  };

  // Get current page path
  const getCurrentPath = () => {
    return window.location.pathname;
  };

  // Toggle language and redirect
  const toggleLang = () => {
    const currentPath = getCurrentPath();
    const currentLang = currentPath.startsWith('/en/') ? 'en' : 'ja';
    const newLang = currentLang === 'ja' ? 'en' : 'ja';

    setLang(newLang);

    // Redirect to the same page in different language
    let newPath;
    if (newLang === 'en') {
      // Switch to English
      if (currentPath === '/' || currentPath === '/index.html') {
        newPath = '/en/';
      } else {
        newPath = '/en' + currentPath;
      }
    } else {
      // Switch to Japanese
      newPath = currentPath.replace(/^\/en\//, '/').replace(/^\/en$/, '/');
    }

    window.location.href = newPath;
  };

  // Initialize language on first visit
  const initLang = () => {
    const savedLang = localStorage.getItem(STORAGE_KEY);
    if (!savedLang) {
      const browserLang = getBrowserLang();
      const currentPath = getCurrentPath();
      const isEnglishPage = currentPath.startsWith('/en/');

      // If browser is English but on Japanese page, redirect
      if (browserLang === 'en' && !isEnglishPage && currentPath === '/') {
        window.location.href = '/en/';
      }
    }
  };

  // Initialize on page load
  initLang();

  // Add event listener when DOM is ready
  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.lang-toggle');

    if (toggleButton) {
      toggleButton.addEventListener('click', toggleLang);
    }

    // Update button text based on current language
    const currentPath = getCurrentPath();
    const currentLang = currentPath.startsWith('/en/') ? 'en' : 'ja';
    if (toggleButton) {
      toggleButton.textContent = currentLang === 'ja' ? 'EN' : 'JA';
    }
  });
})();

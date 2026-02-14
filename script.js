// script for message/letter interactions
// Safe, minimal behavior to show/hide the #letter when the "Open" button is pressed.

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openMessageBtn');
  const letter = document.getElementById('letter');
  const backBtn = document.getElementById('backFromMessageBtn');
  const letterNext = document.getElementById('letterNextBtn');

  function showLetter() {
    if (!letter) return console.warn('script.js: #letter not found');
    // Make it visible for screen readers and CSS
    letter.style.display = 'block';
    letter.setAttribute('aria-hidden', 'false');
    // Optional class for animations if you have CSS for it
    letter.classList.add('visible');
    // Bring it into view
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
    // Move focus into the letter for accessibility
    const firstFocusable = letter.querySelector('button, a, input, textarea');
    if (firstFocusable) firstFocusable.focus();
  }

  function hideLetter() {
    if (!letter) return;
    letter.setAttribute('aria-hidden', 'true');
    letter.classList.remove('visible');
    // Wait for a possible CSS hide animation, then remove from flow
    setTimeout(() => {
      if (letter.getAttribute('aria-hidden') === 'true') letter.style.display = 'none';
    }, 250);
  }

  if (openBtn) openBtn.addEventListener('click', (e) => { e.preventDefault(); showLetter(); });
  if (backBtn) backBtn.addEventListener('click', (e) => { e.preventDefault(); hideLetter(); });
  if (letterNext) letterNext.addEventListener('click', (e) => { e.preventDefault(); hideLetter(); });

  // If the letter starts hidden via aria-hidden, make sure its display matches
  if (letter) {
    if (letter.getAttribute('aria-hidden') === 'true') letter.style.display = 'none';
    else letter.style.display = 'block';
  }
});


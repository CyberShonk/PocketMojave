
document.querySelectorAll('pre').forEach((pre) => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.type = 'button';
  btn.textContent = 'Copy';
  btn.addEventListener('click', async () => {
    const code = pre.querySelector('code');
    const text = code ? code.innerText : pre.innerText.replace(/^Copy\n/, '');
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied';
      setTimeout(() => btn.textContent = 'Copy', 1200);
    } catch (e) {
      btn.textContent = 'Select';
    }
  });
  pre.appendChild(btn);
});

(() => {
  const toc = document.getElementById('toc-list');
  if (!toc) return;
  const headings = Array.from(document.querySelectorAll('#article-body h2'));
  if (!headings.length) { toc.parentElement.hidden = true; return; }
  headings.forEach((heading, i) => {
    if (!heading.id) heading.id = `section-${i + 1}`;
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent;
    toc.appendChild(link);
  });
})();

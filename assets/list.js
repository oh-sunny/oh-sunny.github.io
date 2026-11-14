(() => {
  const buttons = Array.from(document.querySelectorAll('[data-category]')).filter(el => el.tagName === 'BUTTON');
  const rows = Array.from(document.querySelectorAll('.post-row'));
  const search = document.getElementById('search');
  if (!search) return;
  let category = new URLSearchParams(location.search).get('category') || '';
  if (!buttons.some(button => button.dataset.category === category)) category = '';
  function render() {
    let count = 0;
    rows.forEach(row => {
      const match = BlogFilter.matchesPost({category:row.dataset.category,text:row.dataset.search}, category, search.value);
      row.hidden = !match;
      if (match) count++;
    });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === category)));
    document.getElementById('empty').hidden = count !== 0;
    document.getElementById('result-count').textContent = `${count}개의 글`;
    document.getElementById('list-title').textContent = category || '모든 기록';
  }
  buttons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.category;
    const url = new URL(location.href);
    if (category) url.searchParams.set('category', category); else url.searchParams.delete('category');
    history.replaceState(null, '', url);
    render();
  }));
  search.addEventListener('input', render);
  render();
})();

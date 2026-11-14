(function (root) {
  function matchesPost(post, category, query) {
    return (!category || post.category === category) && post.text.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase());
  }
  if (typeof module !== 'undefined') module.exports = {matchesPost};
  else root.BlogFilter = {matchesPost};
})(typeof window !== 'undefined' ? window : globalThis);

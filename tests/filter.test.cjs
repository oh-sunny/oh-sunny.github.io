const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const modulePath = path.join(__dirname, '../assets/filter.js');
test('category filter includes only the selected category', () => {
  assert.ok(fs.existsSync(modulePath), 'blog filter must exist');
  const {matchesPost} = require(modulePath);
  assert.equal(matchesPost({category:'AI 공부',text:'배운 것'}, 'AI 공부', ''), true);
  assert.equal(matchesPost({category:'생각',text:'기록'}, 'AI 공부', ''), false);
  assert.equal(matchesPost({category:'생각',text:'기록'}, '', ''), true);
});
test('search combines with category and ignores letter case', () => {
  const {matchesPost} = require(modulePath);
  assert.equal(matchesPost({category:'AI 공부',text:'Learning LLM 기록'}, 'AI 공부', 'llm'), true);
  assert.equal(matchesPost({category:'AI 공부',text:'Learning LLM 기록'}, '', '영화'), false);
  assert.equal(matchesPost({category:'AI 공부',text:'Learning LLM 기록'}, '생각', 'llm'), false);
});

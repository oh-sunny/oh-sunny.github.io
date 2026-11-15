const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const read = name => fs.readFileSync(path.join(__dirname, '..', name), 'utf8');
test('shared layout omits unsolicited taglines and optional navigation', () => {
  const layout = read('_layouts/default.html');
  for (const phrase of ['조금씩, 내 속도로.', '배운 것과', '오래 남은 생각들.', '이 공간에 대해', 'RSS 구독']) {
    assert.equal(layout.includes(phrase), false, `remove: ${phrase}`);
  }
});
test('homepage and metadata use no invented personal manifesto', () => {
  assert.equal(read('index.html').includes('아직 결론이 나지 않은 이야기도 여기에.'), false);
  assert.equal(read('_config.yml').includes('배운 것과 오래 남은 생각을 기록합니다.'), false);
});

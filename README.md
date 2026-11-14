# oh-sunny의 기록

광고 없는 GitHub Pages / Jekyll 개인 블로그입니다.

- 사이트: https://oh-sunny.github.io
- 글 작성: `_posts/YYYY-MM-DD-english-title.md`
- 사진 업로드: `assets/images/`
- 제목과 설명: `_config.yml`
- 소개: `about.md`
- 디자인: `assets/style.css`

## 새 글

GitHub에서 `_posts` 폴더 → Add file → Create new file을 선택합니다. `post-template.md.txt`의 내용을 복사하고 파일명·날짜·제목·주제를 바꾼 뒤 저장합니다. 사용자 경험이나 감상으로 가장한 가짜 글은 포함하지 않았으며, 처음 글은 삭제 가능한 사용 안내입니다.

주제는 `생각`, `AI 공부`, `커리어`, `책·영화` 중 하나를 `topic`에 입력합니다. 날짜는 미래가 아닌 실제 공개일을 쓰세요.

사진은 assets/images 폴더에 업로드한 뒤 `![사진 설명](/assets/images/file.jpg)`로 삽입합니다. 개인 정보와 사진 EXIF 위치 정보는 게시 전에 확인하세요.

## 공개 범위 주의

저장소의 글·사진·초안·설정·변경 기록은 공개됩니다. API 키, 비밀번호, 비공개 메모는 올리지 마세요. `_drafts`나 `published: false`는 비밀 보관 기능이 아닙니다. 기본적으로 저작권을 포기하거나 자유 재사용을 허락하는 라이선스는 부여하지 않았습니다.

## 방문 통계 — 아직 미연결

현재 방문자/조회수를 수집하는 분석 서비스는 없습니다. GA4를 쓰려면 본인 Google 계정에서 속성과 웹 데이터 스트림을 만든 뒤, 측정 ID (`G-...`)를 `_config.yml`의 `google_analytics`에 입력합니다. **측정 ID는 비밀키가 아니지만 서비스 계정 키나 로그인 정보는 절대 올리지 마세요.**

연결 전에 해당 서비스의 개인정보 처리·동의 요구사항을 확인하고 `privacy.md`를 업데이트해야 합니다. 기본 GA 스크립트 연결만으로 모든 링크 클릭이나 상세 이벤트가 수집되는 것은 아니며 필요하면 별도 이벤트를 설정합니다. 연결 전 방문 통계는 소급 복구되지 않습니다.

## AI 수집 거부

`robots.txt`는 일부 알려진 학습 수집 봇에 거부 의사를 표시합니다. 이는 자발적 준수에 의존하며 수집/학습을 보장해서 차단하지 않습니다. GitHub Pages에서는 서버 차원의 완전한 봇 차단을 설정할 수 없습니다.

## 확인

`node --test tests/filter.test.cjs` — 주제 필터/검색 테스트.

로컬 Jekyll 실행: Ruby와 Bundler 설치 후 `bundle install`, `bundle exec jekyll serve`. 실제 공개는 GitHub Pages가 main 브랜치 루트에서 빌드합니다. 배포 오류는 저장소 Actions 탭에서 확인합니다.

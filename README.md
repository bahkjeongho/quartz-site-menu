# quartz-site-menu

Quartz v5 컴포넌트. 카테고리 메뉴(예: Wiki / Thoughts / About)를 그리고 현재 구역만 강조한다.

- 링크는 현재 페이지 기준 상대 경로로 만들어서 로컬(`localhost:8080`)과 GitHub Pages 하위 경로(`/hide-park/`) 모두에서 맞다.
- 홈(`index`)에서는 어떤 항목도 선택되지 않는다.
- 항목 경로가 `폴더/`로 끝나면 그 폴더 아래 전체가, 노트 경로(`4-about/About`)면 그 노트가 든 폴더가 같은 구역이다.

## 사용 (quartz.config.yaml)

```yaml
- source: github:bahkjeongho/quartz-site-menu
  enabled: true
  options:
    items:
      - label: Wiki
        path: 2-wiki/
      - label: Thoughts
        path: 1-thoughts/
      - label: About
        path: 4-about/About
  layout:
    position: left
    priority: 15
```

색은 Quartz 변수를 쓴다(현재 구역 `--darkgray`, 나머지 `--gray`). 크기와 배치는 사이트의 `custom.scss`에서 `.site-menu` 로 덮어쓴다.

## 개발

```
npm install
npm test
npm run build   # dist/ 를 갱신한다. dist/ 는 커밋한다 (Quartz 가 git 에서 바로 설치하므로).
```

`DTS Build error` 는 `@quartz-community/types` 가 빌드 결과 없이 설치돼서 나는 기존 오류이고, JS 출력에는 영향이 없다.

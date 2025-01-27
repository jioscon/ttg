# 티스토리 목차 생성기(TTG) 스타일 안내

크롬 익스텐션 **"티스토리 목차 생성기(TTG)"**(이하 **TTG**)를 사용하여 생성된 목차에 적용할 수 있는 스타일을 소개합니다.

TTG는 간단한 기본 스타일과 함께, 목차를 **닫기/펼치기**할 수 있는 토글 스타일도 지원합니다.

![티스토리 목차 생성기(TTG)](images/ts-toc.webp)

## 제공 스타일

1. **기본 스타일** (`ts-toc-basic.css`): 단순한 목차 디자인 (닫기/펼치기 기능 미포함).
2. **토글 스타일** (`ts-toc-toggle.css`): 닫기/펼치기 기능을 포함한 목차 디자인.

## 스타일 적용 방법

1. **티스토리 스킨 편집** > **HTML 편집**으로 이동합니다.
2. `head` 태그 내부에 아래 코드를 추가합니다.

### 1. 기본 스타일 적용

아래 코드를 복사하여 붙여 넣습니다:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/jioscon/ttg@main/styles/ts-toc-basic.min.css"
/>
```

### 2. 토글 스타일 적용

토글 스타일을 사용하려면, 자바스크립트 파일도 함께 추가해야 합니다:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/jioscon/ttg@main/styles/ts-toc-toggle.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/gh/jioscon/ttg@main/scripts/ts-toc-toggle.min.js"
  defer
></script>
```

## 다른 적용 방법

필요한 코드 파일을 복사하여 티스토리에 저장하거나, HTML 또는 CSS에 직접 추가하여 사용할 수 있습니다.

## 목차 구조

TTG에서 설정 할 수 있는 값

1. 목차 제목 : 입력 값
2. 제목 태그 : h2, h3, h4 까지만 목차 생성
2. 리스트 : ol, ul
3. data-toc 값 : "open", "close", "close-mobile"

```html
<div class="ts-toc-wrapper" data-ts-toc="open">
  <div class="ts-toc-header">
  <h2 class="ts-toc-title">목차</h2>
  </div>
  <nav>
    <ol>
      <li>
        <a href="#"></a>
      </li>
      <li>
        <a href="#"></a>
        <ol>...</ol>
      </li>
      </ol>
  </nav>
</div>
```

## 더 많은 정보

[티스토리 목차 생성기(TTG) 소개](https://jioscon.com/ttg/)
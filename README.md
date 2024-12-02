
# ACE 애니메이션 라이브러리

**ACE 애니메이션 라이브러리**는 **React**와 **styled-components**를 기반으로 제작된 애니메이션 관리 라이브러리입니다. 이 라이브러리는 애니메이션을 중앙에서 관리하고, 직관적인 UI를 통해 쉽게 애니메이션을 테스트하고 사용자 정의할 수 있도록 설계되었습니다.

## 주요 기능

1. **애니메이션 중앙 관리**:
    - 모든 애니메이션은 `animationLibrary` 파일에서 중앙 집중식으로 관리됩니다.
    - 코드 재사용성과 유지보수성을 향상시킵니다.

2. **실시간 스타일 편집**:
    - **ACE Editor**를 통해 CSS 스타일을 실시간으로 수정할 수 있습니다.
    - 사용자 정의 애니메이션을 즉각적으로 반영합니다.

3. **인터랙티브 프리뷰**:
    - 애니메이션 박스를 실시간으로 테스트하고, UI에서 직접 결과를 확인할 수 있습니다.

4. **다이나믹 스타일 적용**:
    - 애니메이션마다 고유한 테두리 색상 및 효과를 동적으로 설정할 수 있습니다.

## 컴포넌트 개요

### 1. **AnimatedBox**

- 개별 애니메이션 요소를 나타냅니다.
- 애니메이션 타입과 호버 상태에 따라 CSS 스타일이 동적으로 적용됩니다.

#### 주요 기능:
- `cssStyled` 속성을 통해 애니메이션 정의.
- 동적인 테두리와 그림자 효과를 지원.

### 예제:
```tsx
<Box
    cssStyled={animationItem.cssStyled}
    borderColor={borderColor}
    isHovered={isHovered || isContainerHovered}
/>
```

---

### 2. **AnimationContainer**

- `AnimatedBox`를 포함하는 컨테이너 역할.
- 애니메이션 이름과 호버 상태를 표시.

#### 주요 기능:
- 애니메이션 이름을 표시하는 헤더 포함.
- 컨테이너 전체에 호버 상태를 관리.

---

### 3. **AnimationDisplay**

- 실시간 애니메이션 프리뷰와 ACE Editor를 통한 코드 편집을 지원.

#### 주요 기능:
- 사용자 입력에 따라 애니메이션 스타일 실시간 업데이트.
- 테두리 및 그림자 효과와 사용자 정의 스타일을 결합.

### 예제:
```tsx
<AceEditor
    mode="css"
    theme="monokai"
    value={styleCode}
    onChange={resetCode}
/>
```

---

## 라이브러리 구조

### 애니메이션 라이브러리
모든 애니메이션은 `animationLibrary.ts` 파일에서 관리됩니다. 각 애니메이션은 다음의 정보를 포함합니다:
- **ID**: 애니메이션의 고유 식별자.
- **Name**: 애니메이션 이름.
- **CSS Styled**: CSS로 작성된 애니메이션 스타일.
- **Content**: 애니메이션 박스 내부에 표시할 텍스트.

### 예제 애니메이션:
```tsx
{
    id: 1,
    name: 'Bounce',
    cssStyled: `
        &:hover {
            transform: scale(1.1);
            transition: transform 0.2s ease-in-out;
        }
    `,
    content: 'Bounce Animation',
}
```

### 네온 색상
동적 스타일링을 위해 네온 색상 배열이 제공됩니다.

---

## 사용 가이드

### 1단계: 설정
- 저장소를 클론하고 의존성을 설치합니다.
```bash
git clone <repository_url>
npm install
```

### 2단계: 애니메이션 추가
- `animationLibrary.ts` 파일에서 애니메이션을 추가하거나 수정합니다.

### 3단계: 프로젝트 실행
```bash
npm run dev
```

---

## 향후 개선 사항
- **애니메이션 내보내기**: 사용자 정의 애니메이션을 CSS 파일로 내보내는 기능 추가.
- **테마 지원**: 라이트 및 다크 테마를 추가하여 접근성 향상.
- **애니메이션 그룹화**: 애니메이션을 카테고리로 분류하여 탐색 용이성 제공.

---

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.

## 🧡 TheJulge 🧡

<br>
<img src = "public\readMe\readmeTitle.png">
<br><br>
프로젝트 개발 기간: 2024.04.13 - 2024.04.27

## 📚목차

- 배포주소
- 프로젝트에 대한 소개
- 사용한 기술 스택
- 주요 기능
- 서비스 구성
- 팀 소개

## 💾 배포 주소

https://thejulge-17.vercel.app <br><br>

## 🎀프로젝트에 대한 소개

알바생과 사장님을 이어주는 플랫폼인 '더줄게'이라는 웹앱 서비스입니다. 알바생은 사장님이 등록한 공고를 보고 지원할 수 있으며, 사장님은 가게와 공고를 등록하고 공고 신청자를 승인, 거절할 수 있습니다.

코드잇 프론트 엔드 4기에서 진행이 된 두 번째 프로젝트로, 주어진 피그마 디자인과 api에 맞추어서 웹 개발을 진행 하였습니다. 요구사항 뿐만아니라 사용자 입장에서 필요하다고 생각되는 추가적인 커스텀 기능을 자체적으로 개발하였습니다.

<br><br>

## 🏝 사용한 기술 스택

| tools | FlatForms & Language |
| :-: | :-: |
| <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"><br /><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> | <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> [![Next.js](https://img.shields.io/badge/next-000000?style=for-the-badge&logo=Next.js&logoColor=white)](https://nextjs.org/)<br /> [![SCSS Modules](https://img.shields.io/badge/SCSS_Modules-CC6699?style=for-the-badge&logo=Sass&logoColor=white)](https://sass-lang.com/)<br />[![Axios](https://img.shields.io/badge/Axios-56A9EE?style=for-the-badge&logo=axios&logoColor=white)](https://github.com/axios/axios) [![React Hook Form](https://img.shields.io/badge/React_Hook_Form-339933?style=for-the-badge&logo=React&logoColor=white)](https://react-hook-form.com/) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white)](https://reactjs.org/) |
|  |

<br>

## 📲 주요 기능

- 로그인 기능
- 회원 가입 기능: 회원가입 시, 사용자는 알바생인지, 사장님인지 여부를 선택해야합니다.
- 모달 : 경고나 에러처리, 알림은 커스텀 모달로 대체했습니다. <img src = "public\readMe\modal1.png" width="200"><img src = "public\readMe\modal2.png" width="200">

### 알바생

- 공고 리스트 조회: 알바생은 사장님들이 올려놓은 공고 리스트를 조회할 수 있습니다.

- 공고 상세 조회: 알바생은 공고 상세 페이지를 통해 해당 공고에 지원할 수 있습니다.

- 내 프로필 등록: 알바생은 공고에 지원하기 전에 필수적으로 프로필을 등록해야합니다.

- 내 프로필 상세: 알바생은 해당 페이지에서 자신이 지원한 공고 목록과 승인, 거절, 대기 상태를 확인할 수 있습니다.

- 알림 기능: 사장님이 자신의 지원을 승인, 거절 했을 경우 알림을 받아 확인할 수 있습니다.

### 사장님

- 공고 리스트 조회: 사장님은 다른 사장님이 올린 공고들을 확인할 수 있습니다.

- 공고 상세 조회: 사장님은 자신이 올린 공고에 지원한 알바생 리스트를 확인할 수 있습니다.

- 가게 등록: 사장님은 공고를 올리기 전에 자신의 가게를 먼저 등록해야합니다.

- 공고 등록: 해당 가게 상세 페이지에 들어가 가게에 대한 공고를 등록할 수 있습니다.

- 가게 상세 페이지: 가게의 소개와 내가 등록한 공고를 최신순으로 무한 스크롤로 볼 수 있습니다.

## 📲 추가 기능

- 지도 기능

- 공유 기능

<img src = "public\readMe\share.png" width="200">

- 시급 계산기 기능

<img src = "public\readMe\calculator.png" width="200">

- 깃헙 소셜 로그인

<img src = "public\readMe\gitlogin.png" width="200">
<img src = "public\readMe\gitsignup.png" width="200">
<br><br>

## 전반적인 서비스 구성

### List Page (주소: /)

- 페이지에 접속하게 되면 처음 보이는 공고 리스트 페이지입니다. 비회원일 경우 공고 리스트들을 확인할 수 있지만 서비스를 이용하기 위해 회원가입과 로그인을 진행해야합니다.
- 검색기능과 필터 기능으로 사용자가 원하는 정보를 쉽게 찾을 수 있습니다.

  <img src = "public\readMe\listPage.png" width="500">

### 로그인, 회원가입 (주소: /signin, /signup)

- 로그인, 회원가입 폼은 react-hook-form을 사용해 비제어 컴포넌트로 구현하였습니다.
- 로그인에 성공하면 로그인에 대한 토큰, 사용자가 알바생인지, 사장님인지에 대한 여부를 쿠키에 저장합니다. <br><br> <img src = "public\readMe\signin.png" width="500"> <br><br>
- 회원이 아닐 경우 회원가입을 진행해야하고 이때 사장님, 알바생 여부를 선택해야합니다. <br><br> <img src = "public\readMe\signup.png" width="500"> <br><br>

### 내 프로필 등록 (주소: /profile)

- 등록 모드: 알바생은 해당 페이지에서 자신의 정보를 등록할 수 있습니다. <br><br> <img src = "public\readMe\profilePage.png"  width="500"> <br><br>
- 편집 모드: 내 프로필 상세 페이지의 편집 버튼을 통해 등록한 프로필 정보를 불러와 편집할 수 있습니다. <br><br> <img src = "public\readMe\putProfilePage.png"  width="500"> <br><br>

### 내 가게 등록 (주소: /shops)

- 등록 모드: 사장님은 해당 페이지에서 자신의 가게를 등록할 수 있습니다. <br><br> <img src = "public\readMe\postShop.png"  width="500"> <br><br>
- 편집 모드: 가게 상세 페이지의 편집 버튼을 통해 등록한 가게 정보를 불러와 편집할 수 있습니다. <br><br> <img src = "public\readMe\putShop.png"  width="500"> <br><br>

### 내 공고 등록 (주소: /profile)

- 등록 모드: 사장님은 해당 페이지에서 가게의 공고를 등록할 수 있습니다. react-date picker를 사용해서 캘린더를 구현했습니다.
- 편집 모드: 공고 상세 페이지의 편집 버튼을 통해 등록한 공고 정보를 불러와 편집할 수 있습니다. <br><br> <img src = "public\readMe\putNotice.png"  width="500"> <br><br> <img src = "public\readMe\calendar.png"  width="500">

### 내 프로필 상세 (주소: /users/{userId})

- 해당 페이지를 통해 내 프로필을 편집할 수 있고 내가 지원한 공고 목록, 공고의 승인 여부를 확인할 수 있습니다.
- 공고 목록은 페이지네이션으로 구현하였습니다. <br><br> <img src = "public\readMe\profileDetailPage.png" width="500">

### 내 가게 상세 (주소: /shops/{shopId})

- 해당 페이지를 통해 내 가게를 편집할 수 있고 내가 등록한 공고를 편집할 수 있는 버튼이 있습니다.
- 또한 내가 등록한 공고를 최신순으로 무한 스크롤 됩니다. <br><br> <img src = "public\readMe\myShopPage.png" width="500">

### 공고 상세 (주소: 사장님 - /shops/[id]/notices/[noticeId]/boss, 알바생 - /shops/[id]/notices/[noticeId]/alba)

- 사용자가 알바생일 경우 공고 상세 페이지를 통해 공고에 지원할 수 있습니다. 또한 최근에 본 공고를 최대 6개 나열해 보여줍니다. <br/> <img src = "public\readMe\albaNoticeDetail.png" width="500">
- 사용자가 사장님일 경우 공고 상세 페이지를 통해 공고를 수정할 수 있고 해당 공고에 지원한 알바생 리스트를 페이지네이션을 통해 확인할 수 있습니다. <br/> <img src = "public\readMe\bossNoticeDetail.png" width="500">

### 에러 페이지 (주소: /404)

### 반응형 (Mobile)

| ![listPage](public\readMe\mlist.png) | ![listPage](public\readMe\search.png) | ![listPage](public\readMe\filter.png) |
| --- | --- | --- |

| ![postShop](public\readMe\mNoticeDetailAlba.png) | ![postNotice](public\readMe\mlist2.png) | ![postProfile](public\readMe\mlist3.png) |
| --- | --- | --- |

| ![signin](public\readMe\msignin.png) | ![signup](public\readMe\msignup.png) |  |
| --- | --- | --- |

<br>

## 🌍 INSTALLING

Instaling

- NextJs
- Axios, React-Hook-Form, React-DatePicker
- SCSS, classnames

<br><br>

## 🌍 팀 소개

| FE | FE | FE |
| :-: | :-: | :-: |
| [문지혜(팀장)](https://github.com/mun-jihye) | [김재영](https://github.com/jae6269) | [류지영](https://github.com/janyongs) |
| <img src="https://avatars.githubusercontent.com/u/87179769?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/79738890?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/151440365?v=4" width="200"> |

| FE | FE |
| :-: | :-: |
| [임동현](https://github.com/DHyeon98) | [최수민](https://github.com/Jin-Chanyong) |
| <img src="https://avatars.githubusercontent.com/u/121273403?v=4" width="200"> | <img src="https://avatars.githubusercontent.com/u/155162841?v=4" width="200"> |

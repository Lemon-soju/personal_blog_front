
# Lemonsoju 블로그 소개

안녕하세요 **Lemonsoju 블로그**는 제가 다른 곳에서 배워온 기술들을 실험하는 장소입니다.  

구현한 기능
- 로그인, 로그아웃, 회원가입, 게시글 CRUD

자세한 내용은 [블로그 개발 일지]([https://hijihyo.notion.site/KLUB-4487202b090d422998ee182f477076cd](https://lemon-soju.tistory.com/category/%EC%9B%B9%20%EA%B0%9C%EB%B0%9C/%EB%B8%94%EB%A1%9C%EA%B7%B8%20%EB%A7%8C%EB%93%A4%EA%B8%B0%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8))에서 확인해주세요.

# Project Setup

## Environment

- `.env` 파일 필요(관리자 문의)
- `REACT_APP_BASE_URL` 변경 필요(`.env`파일 수정)
    - REACT_APP_BASE_URL=https://127.0.0.1:8080
- `npm start` 시 인증서 없는 `HTTPS` 사용 중
    - **실행 시 보안 경고가 뜨는데, 인증서가 없어서 발생한 것이므로 무시**

## Execution

1. **Install Packages**

```bash
npm i
```

2. **실행방법**

```bash
npm start
```
    
# 배포

- main : `AWS ec2` 사용하여 배포 중(https://lemonsoju.blog)
- nohup으로 백그라운드에서 서버 실행

# 가이드라인

## 브랜치 전략

### 작업 순서

- 평소
    1. `test`에서 개발 작업
    2. 로컬 테스트 후 이상 없을 시 `main`으로 PR
    3. 자체적인 QA 진행 후 `main`으로 merge 및 배포

### Git 사용하기

- Commit Message
    - Commit with the smallest change unit
    - Use category in commit messages
        - `int`: only for initial commit
        - `doc`: changes document or comment
        - `ftr`: add new feature
        - `mod`: modify existing feature
        - `fix`: fix an error or issue
        - `rfc`: refactor code
        - `add`: add new file or directory
        - `rmv`: remove existing file or directory
    - Example
        - `int: initial commit`

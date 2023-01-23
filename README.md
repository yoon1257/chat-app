# chat-app

- 마음연구소 코딩테스트를 위한 채팅앱 구현하기 입니다

### 사용기술

- TypeScript,react, nextron.js,
- firebase
- git

### 구현일정

- 2023.01.14-2023.01.23(총10일)

### Install Dependencies

```
npm install
```

### Use it

```
# development mode
$ npm run dev

# production build
$ npm run build
```

### Resources

<https://github.com/saltyshiomix/nextron>

## 세부내용

1. 구현할 기능 목록

- [x] 회원가입
- [x] 로그인
- [x] 유저목록
- [ ] 1:1채팅
- [ ] 그룹채팅

2. 상세 기능 구현 설명

- 회원가입 : react-hook-form의 라이브러리를 사용하여 라이브러리에서 자체적으로 지원해주는 유효성 검사를 하여 회원가입을 합니다. 회원가입 후 알림이 뜨게 됩니다. 회원가입에 성공하게 되면 자동으로 로그인페이지로 이동하게 됩니다.

![회원가입](https://user-images.githubusercontent.com/108171986/214070347-e107689f-a173-4c86-b270-af5a394aaeb5.gif)

- 로그인 :회원가입과 동일한 라이브러리를 사용하여 유효성검사를 실시하고 로그인 성공시 알림이 뜨게 됩니다. 그리고 채팅방으로 이동하게 됩니다.
  ![로그인](https://user-images.githubusercontent.com/108171986/214069954-96695ee3-3e62-4f66-a1ec-17ece1c7997c.gif)

- 채팅방 : 데이터베이스에 저장된 유저 목록을 볼 수 있습니다. 그리고 로그아웃 기능을 구현하였습니다.

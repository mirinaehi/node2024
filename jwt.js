const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

// JWT 발급을 위한 비밀 키
const secret = process.env.SECRET_KEY;
console.log(secret);

// 커스텀 클레임을 포함한 페이로드 객체
const payload = {
  "id": "1",
  "username": "john",
  "roles": "admin",
};

// 커스텀 페이로드를 포함한 JWT 발급 (알고리즘 HS256 지정)
const token = jwt.sign(payload, secret, { expiresIn: '1h', algorithm: 'HS256' });

// 토큰 검증 및 페이로드 확인
jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.error(err);
    return;
  }

  // 디코딩된 페이로드 출력
  console.log(decoded);
});

console.log(token);
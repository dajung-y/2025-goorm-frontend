//  Express 서버 설정 파일

// 서버 기능 가져오기 위해 사용
const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');
const app = express(); // 서버 만들기 (앱 인스턴스 생성)
const port = 5000;


// 모든 요청 허용하는 명령문, 되도록이면 사용 x
app.use(cors());

// GET 요청시 응답
// url, 동작(request, response)
// req : 클라이언트가 서버로 요청한 내용
// res : 서버가 클라이언트한테 보내는 응답
app.get('/api/hello',(req,res)=>{
  res.json({message: '안녕하세요 Express 서버 입니다.'})
});


// 서버에서 네이버에 접속할 수 있도록 코드 작성
app.get('/api/naver',async function(request, response){
  try{
    console.log('실행됨?')
    // url만 작성하면 네이버는 봇 차단할 수 있음
    const res = await axios.get('https://www.naver.com/',{
      headers: {
        'User-Agent': 'Mozilla/5.0'
      }
    });
    console.log(res);
    response.json(res);
  }catch(e){
    console.error(`에러발생 : ${e}`);
  }
})




// 서버 실행 있도록 코드 작성
app.listen(port,()=>{
  console.log('서버 동작 http://localhost:',port);
}); // port 번호가 들어오면 응답


/**
이슈 발생
ReferenceError: require is not defined in ES module scope, you can use import instead

- vite 프로젝트는 모든 파일을 모듈로 인식
- require() 사용 불가

require() 노드에서 외부라이브러리를 불러오는 문법
package.json - type: module 부분 삭제
 */
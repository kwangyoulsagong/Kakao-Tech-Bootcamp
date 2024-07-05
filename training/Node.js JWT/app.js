//라이브러리 가져오기
const express=require("express")
const app=express()

// 포트번호
app.set('port', process.env.PORT || 3000);
// get 메소드
app.get('/', (req, res) => {
    res.send('Hello, Express')
})

// 서버 실행
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})
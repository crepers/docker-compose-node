const express = require("express");
const app = express();
const path = require("path");
const PORT = 80;

// res.status(code) : HTTP 응답 코드를 설정한다. 응답 코드가 redirect(30x)라면 res.redirect를 쓰는게 낫다.
// res.set(name, value) : 응답 헤더를 설정. 일반적으로 직접 쓸 일은 없다.
// res.cookie(name, value, [options]) : 클라이언트에 저장될 쿠키를 설정하거나 제거한다. cookie-parser 패키지가 필요하다.
// res.redirect([status], url) : redirect. 기본 응답 값은 302다.
// res.send(body), res.send(status, body) : 클라이언트에 응답을 보냄. 상태 코드는 옵션. 기본 콘텐츠 타입은 text/html이므로 text/plain을 보내려면 res.set(‘Content-Type’, ‘text/plain’)을 먼저 호출 해야한다. JSON을 보낼거면 res.json을 쓰자.
// res.json(json), res.json(status, json) : 클라이언트로 JSON 값을 보냄.
// res.jsonp(json), res.jsonp(status, json) : 클라이언트로 JSONP 값을 보냄.
// res.type(type) : Contents-Type 헤더를 설정할 수 있는 간단한 메서드.
// res.format(object) : Accept 요청에 따라 다른 콘텐츠를 전송할 수 있는 메서드. 잘 안 쓸듯.
// res.attachment([filename]), res.download(path, [filename], [callback]) : 클라이언트에게 파일을 표시하지 말고 다운로드 받으라고 전송함. filename을 주면 파일 이름이 명시되며, res.attachment는 헤더만 설정하므로 다운로드를 위한 node 코드가 따로 필요핟.
// res.sendFile(path, [options], [callback]) : path의 파일을 읽고 해당 내용을 클라이언트로 전송한다.
// res.links(links) : Links 응답 헤더를 설정한다. 별로 필요 없을 듯.
// res.locals, res.render(view, [locals], callback) : res.locals는 뷰를 렌더링하는 기본 콘텍스트를 포함하는 객체다. res.render는 jade와 같은 템플릿 엔진을 사용하여 뷰를 렌더링한다. 뷰 렌더링 세계는 심오하므로 여기서는 자세히 쓰지 않는다.

app.get("/", (req, res) => {
	console.log("request is " + req.url);
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => {
	console.log("Web Server is RUNNING...");
});
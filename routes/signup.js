// ---------- 모듈 ---------- //

var express = require('express');
var router = express.Router();

// 유저 체크 모듈

const check_user = require('../modules/check_user');

// ---------- 메인 코드(회원가입 페이지 연결) ---------- //

router.get('/', function(req, res) {

	var APIusername = check_user(req.session);

	if(APIusername != 401) res.redirect("/dashboard"); // 로그인 여부 확인
	else res.render("signup.html");

});
router.get('/success', function(req, res) {

	var APIusername = check_user(req.session);

	if(APIusername != 401) res.redirect("/dashboard"); // 로그인 여부 확인
	else res.render("signup-success.html");

});

module.exports = router;
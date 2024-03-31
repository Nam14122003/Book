

const URLPROXY = "https://jsonp.dllca.cn/?url=";


const encode = function(url){
	return encodeURIComponent(url)
}


$('#show-allMenu').mouseover(function(){
	$('.menu-list').css('display','block');
})
$('.menu-list').mouseout(function(){
	$(this).css('display','none');
})
$('.menu-list').mouseover(function(){
	$(this).css('display','block');
})


function login(event){
	this.id = $(event).attr('id')
	if(this.id === 'login'){
		$('.login').css('display','block')
		$('.login-box input[type="submit"]').attr('value','Đăng nhập')
		$('.tips p')[0].childNodes[0].nodeValue = 'Bằng việc nhấn “Đăng nhập”, bạn đã đọc và đồng ý với';
	}else{

		$('.login').css('display','block')
		$('.login-box input[type="submit"]').attr('value','Đăng ký');
		$('.tips p')[0].childNodes[0].nodeValue = 'Bằng việc nhấn “Đăng ký”, bạn đã đọc và đồng ý với';

	}
}


$(document).on("keypress", ".search-wrap form", function(event) {
    return event.keyCode != 13;
});

function search() {
  if(event.keyCode==13) {
    $('#search-btn').click()
  }
}


$('.close').click(function(){
	$('.login').css('display','none');
})


$('#login_btn').click(function(event){
	event.preventDefault();
	var username = $('#username').val();
	var password = $('#userpwd').val();
	var btn = event.currentTarget.value;
	if (username!= "" && password !="") {
		var reg = /^[A-z]\w{5,8}/g
		if(!reg.test(password)){
			alert("Mật khẩu phải bắt đầu bằng một chữ cái và dài 6-8 ký tự!")
			return;
		}
		alert(btn+" thành công!");
		$('.login').css('display','none');
		$('.user-message,.user-avatar').css('display','block');
		$('.user-wrap p').css('display','none');
	}else{
		alert("Tên người dùng hoặc mật khẩu không được để trống！")
	}
})

$.get(`${URLPROXY}http://admin.iqingtun.com/web/bookroom/bookcategory`,(data)=>{
		$.each(data.data,(i,value)=>{
			if (i >= 8 ) {return false;}
			$('.header-nav .menu-list ul').append(`
					<li><a href="./bookAll.html?class_id=${value.id}">${value.title}</a></li>
				`)
		})
		if($('.books-classify').length != 0){
			$.each(data.data,(i,value)=>{
				$('.books-classify .tags').eq(0).append(`
						<span id=${value.id} class=${i==0 ? "active":''}>${value.title}</span>
					`)
			})
		}
})

function getUrlParam(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
	var r = window.location.search.substr(1).match(reg);  
	if (r!=null) return decodeURI(r[2]); return null; 
}

function setMask(state="block"){
	$('.mask').css('display',state);
}

$('#search-btn').click(function(){
	window.open("./bookAll.html?search="+$('#search-input').val(),"_self")
})


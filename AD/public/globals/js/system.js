// JavaScript Document
var System = function () {
	var i =1;
}

System.prototype.init = function () {
	this.validateImage = $('.validateImage');
}



System.prototype.validateImageFn = function () {
	var _fater_this = this;
	_fater_this.validateImage.click(function () {
		var _this = $(this);
		_this.attr('src',_this.data('image_url')+'&'+Math.random());
	});
}

/**
 * 同步模式AJAX提交
 */
System.prototype.ajax_post_setup = function ($url,$data,$type) {
	$type = $type || 'JSON';
    $.ajaxSetup({
		async: false//async:false 同步请求  true为异步请求
	});
	var result = false;
	//提交的地址，post传入的参数
	$.post($url,$data,function(content){
		result = content;
	},$type);
	
	return result;
}


/**
 * @desc 判断数组内是否包含字符串
 * @param str
 * @param arr
 * @returns {boolean}
 */
System.prototype.in_array = function (str, arr) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === str) {
            return true;
        }
    }
    return false;
}


/**
 * 格式化日期，成时间戳
 * @param {Object} $date_string 2013-10-10 12:13
 * return 111111111111
 */
System.prototype.fomat_date_bak = function ($date_string) {
	if ($date_string == '') {
		return 0;
	} else {
		return Date.parse($date_string.replace(/-/ig,'/'));
	}
}

/**
 * 格式化日期，成时间戳
 * @param {Object} $date_string 2013-10-10 12:13
 * return 111111111111
 */
System.prototype.fomat_date = function ($date_string) {
	//var string_date = $date_string.replace(/-/ig,'/');
	var string_date = $date_string;
	
	var arr_date =  string_date.split(' ');
	//年月日
	var arr_Year_Month_Date = arr_date[0].split('-');
	//时分秒
	var arr_Hours_Minutes_Seconds = arr_date[1].split(':');
	
	var Year,Month,DateNum,Hours,Minutes,Seconds;
	Year = arr_Year_Month_Date[0];
	Month = arr_Year_Month_Date[1];
	DateNum = arr_Year_Month_Date[2];
	Hours = arr_Hours_Minutes_Seconds[0];
	Minutes = arr_Hours_Minutes_Seconds[1];
	Seconds = arr_Hours_Minutes_Seconds[2];
	
	var obj_date = new Date();
	
	//日月年
	obj_date.setFullYear(Year);
	obj_date.setMonth(Month);
	obj_date.setDate(DateNum);
	
	//时分秒
	obj_date.setHours(Hours);
	obj_date.setMinutes(Minutes);
	obj_date.setSeconds(Seconds);
	obj_date.setMilliseconds(0);//毫秒
	
	//var now_date = obj_date.getFullYear()+'-'+(obj_date.getMonth())+'-'+obj_date.getDate()+' '+obj_date.getHours()+':'+obj_date.getMinutes()+':'+obj_date.getSeconds();
	return obj_date.getTime();
}


System.prototype.create_num_for_length = function ($number,$length) {
	
	var temp = '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
	var resutl = $number+''+temp.substr(0,$length);
	
	return resutl;
}


/**
 * 根据微博名称，获取微博URL
 */
System.prototype.getUrlInfo = function () {
	var _fater_this = this; 
	var weibo_account_name_Obj = $('.weibo_account_name_Obj');
	
	weibo_account_name_Obj.click(function () {
		var _this = $(this);
		var account_name =  _this.data('account_name');
		var type = _this.data('type');
		
		if(type == 1)
		{
			var result = _fater_this.ajax_post_setup('/Advert/Weibo/getWeiboUrl',{'account':account_name, 'type': type});
			if (result.status == 0) {
				window.open(result.data);
			}
		} else {
			window.open('http://t.qq.com/'+ account_name);	 
		}
		
	});
}

System.prototype.goToUrl = function () {
	var _fater_this = this; 
	
	var go_to_url = $('.go_to_url');
	
	go_to_url.click(function () {
		var _this = $(this);
		var is_new_window = _this.data('is_new_window');
		var url = _this.data('url');
		if (is_new_window == 1) {
			window.open(url);	
		} else {
			window.location.href = url;
		}
	});
}


/**
根据时间错获取日期
*/
System.prototype.get_date_by_timestamp = function  (timestamp) {
  var date;
  if (timestamp != undefined) {
    date = new Date(timestamp);		//返回当前时间。如果传入毫秒数，则返回毫秒数格式化的日期
  } else {
    date = new Date();
  }

  date.getFullYear();			//取得日期年份
  date.getMonth()+1;			//取得日期月份
  date.getDate();				//获取日期天

  date.getHours();			//时
  date.getMinutes();			//分
  date.getSeconds();  		//秒

  date.toLocaleDateString();     //获取当前日期
  date.toLocaleTimeString();     //获取当前时间
  date.toLocaleString();        //获取日期与时间
  
  var now_date = date.getFullYear()+'-'+(date.getMonth())+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  return now_date;
}

System.prototype.run = function () {
	var _fater_this = this;
	_fater_this.validateImageFn();
	
	_fater_this.getUrlInfo();
	
	_fater_this.goToUrl();
}


var System = new System();

window.onload = function () {

	System.init();
	System.run();
}
function wpa_qq(custype){
	if(custype==2){//苏倩晴
    //     window.open('http://wpa.qq.com/msgrd?v=3&uin=3001391422&site=qq&menu=yes');
    //}else if(custype==2){//陈琛
        window.open('http://wpa.qq.com/msgrd?v=3&uin=2850411010&site=qq&menu=yes');
    }else if(custype==3){//方海强
        window.open('http://wpa.qq.com/msgrd?v=3&uin=2853899534&site=qq&menu=yes');
    }else if(custype==4){//符总
        window.open('http://wpa.qq.com/msgrd?v=3&uin=2850387068&site=qq&menu=yes');
    }else if(custype==5){//李永盛
        window.open('http://wpa.qq.com/msgrd?v=3&uin=2853150228&site=qq&menu=yes');
    // }else if(custype==6){//陈琛
    //     window.open('http://wpa.qq.com/msgrd?v=3&uin=3001391422&site=qq&menu=yes');
    }else if(custype==7){//姚青松
        window.open('http://wpa.qq.com/msgrd?v=3&uin=2850387061&site=qq&menu=yes');
    }else if(custype>10){//自定义
        window.open('http://wpa.qq.com/msgrd?v=3&uin='+custype+'&site=qq&menu=yes');
    }else{//营销qq
        window.open('http://wpa.b.qq.com/cgi/wpa.php?ln=1&key=XzkzODA1MjA0OV8zODExODJfNDAwNjg3NjMwOF8yXw', '_blank', 'height=292,width=463,location=no,toolbar=no,scrollbars=no,menubar=no,status=no');
	}
}

function loginstatus(refer) {
    $.ajax({
        url:"/Owner/Account/loginStatus/",
        type:"get",
        dataType: 'json',
        success:function(data){
            var html = '';
            var rightHtml = '';
            var rightOwnerHtml = '';
            var rightMediaHtml = '';
            var owneravatar='';
            var mediaavatar='';
            var ownerurl="/Owner/Weixin/weixin";
            var mediaurl="/Media/Account/userInfo/";
            // var ownerlogin="/Owner/Account/login?"+refer;
            var ownerlogin="/Owner/Account/login";
            var ownerreg="/Owner/Account/register/";
            var ownerlogout="/Owner/Account/logout/";
            var medialogout="/Media/Account/logout/";
            var ownerfrom="/Owner/Account/check_login";
            var mediafrom="/Media/Account/check_login";
            var pass="/Index/Pass/index/";
            var userurl = "/Owner/Weixin/weixin";
            if (data.status==1) {
                html +='<a href="'+ userurl +'" class="fr">会员中心<span class="caret"></span></a>\
                    <div class="menu_user_accout bor" data-type="nav_con_sun">';
                rightHtml = '会员中心';
            }else {
                html +=
                    '<a href="'+ownerlogin+'" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])" title="亲，请登录" class="cwq-login-nav" target="_blank">登录</a>\
                    <a href="'+ownerreg+'" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])" title="免费注册"  class="cwq-reg-nav" target="_blank">注册</a>';
                rightHtml = '会员登录';
            }
            if (data.owner) {//广告主
                if (data.owner.logo) {
                    owneravatar=data.owner.logo;
                }else{
                    owneravatar="/public/globals/images/icon_head.png";
                }
                html +='<div class="vipinfo">\
                                <div class="vippic fl"><a href="'+ ownerurl +'"><img src="'+owneravatar+'"><div class="vippic_account">广告主</div></a></div>\
                                <div class="viptext fl">\
                                    <div class="viptext_title">\
                                        <a href="'+ownerurl+'" class="fl" title="'+data.owner.account+'">'+data.owner.account+'</a>\
                                        <a href="'+ownerlogout+'" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])" class="fr">安全退出</a>\
                                    </div>\
                                    <div class="viptext_title">\
                                         <span class="color-red"><a href="https://user.cwq.com/bill/">查看新版</a></span> \
                                    </div>\
                                </div></div>';
                rightOwnerHtml += '<div class="iuser">\
                                    <div class="text-center"><a href="'+ownerurl+'"><img width="88" height="88" class="img-circle" src="'+owneravatar+'" /></a></div>\
                                    <div class="p10 mr10 ml10 ubb text-center">\
                                    您好，<a href="'+ownerurl+'">'+data.owner.account+'</a>\
                                    <a class="ml10" href="'+ownerlogout+'" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])">退出登录</a>\
                        <div class="clear"></div></div></div>';
            }
            else{
                rightOwnerHtml = '<form method="post" action="'+ownerfrom+'" class="AjaxSubmitForm" data-callfunc="OwnerLoginCheck" data-callback="OwnerLoginback">\
                    <div class="col-sm-12"><input class="form-control login-input" id="ad_account" name="account" placeholder="手机号/用户名" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="输手机号/用户名" type="text" maxlength="50" value=""/></div>\
                    <div class="blank20"></div>\
                    <div class="col-sm-12"><input class="form-control login-input" id="ad_password" name="password" placeholder="登录密码" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="输入登录密码" type="password"/></div>\
                    <div class="blank20"></div>\
                    <div class="col-sm-12" id="OwnerVerify" style="display:none">\
                    <div class="loginFormIpt loginmin showPlaceholder">\
                    <input id="ad_verify" name="verify" class="form-control login-input" placeholder="验证码" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="输入右侧图片验证码，不区分大小写" type="text" />\
                    <div class="reset_Code_new"><img class="resetVerifyCode" width="80" height="30" id="OwnerVerifyCode" src="" title="换一张" /></div>\
                    </div>\
                    <div class="blank20"></div>\
                    </div>\
                    <div class="clear"></div>\
                    <div class="loginFormBtn">\
                    <input type="hidden" name="referer" />\
                    <button id="loginBtn" class="btn btn-danger mr20 login-input" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])" type="submit">登&nbsp;&nbsp;录</button>\
                <a id="owBtnReg" class="btn btn-info login-input"  onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])"  style="*width:45px;">注&nbsp;&nbsp;册</a>\
                </div>\
                </div>\
                <div class="blank5"></div>\
                    <div class="fr mr10 mt5" id="ad_forget_psd">\
                    <input type="checkbox" class="remember-user" value="0">\
                    <label>记住用户名丨</label>\
                    <a href="'+pass+'" target="_blank" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])">忘记密码？</a>\
                </div>\
                <div class="clear"></div></form>';
            }
            if (data.media) {//媒体主
                if (data.media.logo) {
                    mediaavatar=data.media.logo;
                }else{
                    mediaavatar="/public/globals/images/icon_head.png";
                }
                html +='<div class="vipinfo">\
                                <div class="vippic fl"><a href="'+ mediaurl +'"><img src="'+mediaavatar+'"><div class="vippic_account">媒体主</div> </a></div>\
                                <div class="viptext fl">\
                                    <div class="viptext_title">\
                                        <a href="'+mediaurl+'" class="fl" title="'+data.media.account+'">'+data.media.account+'</a>\
                                        <a href="'+medialogout+'" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])" class="fr">安全退出</a>\
                                    </div>\
                                    <div class="viptext_title">\
                                        可用余额：<span class="color-red">'+data.media.money+'</span> \
                                    </div>\
                                </div></div>'
                rightMediaHtml += '<div class="iuser">\
                                    <div class="text-center"><a href="'+mediaurl+'"><img width="88" height="88" class="img-circle" src="'+mediaavatar+'" /></a></div>\
                                    <div class="p10 mr10 ml10 ubb text-center">\
                                    您好，<a href="'+mediaurl+'">'+data.media.account+'</a>\
                                    <a class="ml10" href="'+medialogout+'" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])">退出登录</a>\
                                    </div><div class="p10 mr10 ml10 ubb">\
                                    <p>可用余额：<b>'+data.media.money+'</b></p>\
                                    <p>冻结余额：<b>'+data.media.freeze_funds+'</b></p>\
                        <div class="clear"></div></div></div>';
            }
            else{
                rightMediaHtml = '<form method="post" action="'+mediafrom+'" class="AjaxSubmitForm" data-callfunc="MediaLoginCheck" data-callback="MediaLoginback">\
                <div class="col-sm-12"><input id="me_account" name="account" class="form-control login-input" placeholder="手机号/用户名" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="输入手机号/用户名" type="text" maxlength="50" value="" /></div>\
                    <div class="blank20"></div>\
                    <div class="col-sm-12"><input id="me_password" name="password" class="form-control login-input" placeholder="登录密码" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="输入登录密码" type="password" /></div>\
                    <div class="blank20"></div>\
                    <div class="col-sm-12" id="MediaVerify" style="display:none">\
                    <div class="loginFormIpt loginmin showPlaceholder">\
                    <input class="form-control login-input" placeholder="验证码" data-toggle="popover" data-placement="top" data-trigger="focus" data-content="输入右侧图片验证码，不区分大小写" id="me_verify" name="verify" type="text" />\
                    <div class="reset_Code_new"><img class="resetVerifyCode" width="80" height="30" id="MediaVerifyCode" src="" title="换一张" /></div>\
                    </div><div class="blank20"></div>\
                    </div>\
                    <div class="clear"></div>\
                    <div class="loginFormBtn">\
                    <button id="" class="btn btn-danger mr20 login-input" type="submit" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\']);">登&nbsp;&nbsp;录</button>\
                <a id="mdBtnReg" class="btn btn-info login-input fuck">注&nbsp;&nbsp;册</a>\
                </div>\
                <div class="blank5"></div>\
                    <div class="fr mr10 mt5" id="me_forget_psd">\
                    <input type="checkbox" class="remember-user" value="0">\
                    <label>记住用户名丨</label>\
                    <a href="'+pass+'" target="_blank" onclick="_hmt.push([\'_trackEvent\', \'nav\', \'click\', \'literature\'])">忘记密码？</a>\
                </div>\
                <div class="clear"></div>\
                    </form>';
            }
            if (data.status==1) {
                html += '</div></div>';
            }

            $('[data-type="nav_menu_sun"]').html(html);
            // $("#useraccout").html(rightHtml);
            // $("#OwnerLogin").html(rightOwnerHtml);
            // $("#MediaLogin").html(rightMediaHtml);
            // $("#counts").prepend('<script type="text/javascript" language="javascript" src="/App/Public/Owner/js/register.js"></script>');
            // console.log(document.forms);
//    获取当前HTML页面所有表单元素
        }
    });
}

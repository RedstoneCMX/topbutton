//作者：陈明新
//学校：北京理工大学
//本插件用于页面返回顶部功能，由于使用了jquery，所以在使用时请在页面头部引用jquery的js文件

//参数设定
//Showbuttondistance:滚动条距离顶部多少px显示返回按钮，默认100px
//FadeIntime:返回按钮渐变显示的时间，默认500ms
//FadeOuttime:返回按钮渐变消失的时间，默认500ms
//Totoptime:滚动返回顶部所用时间，默认300ms

(function ($) {
	//这里放入插件代码
	$.fn.topbutton = function(setting){
		_self = this;

		if(setting == null)
			setting = "";

		//一开始将返回页面顶部按钮隐藏		
		_self.hide();

		//判断为空函数
		_self.IsNull = function(value) {
		    //if (typeof (value) == "function") { return false; }
		    if (value == undefined || value == null || value == "" || value.length == 0) {
		        return true;
		    }
		    return false;
		}
		//默认配置
		_self.DefaultSetting = {
		    Showbuttondistance:100,
		    FadeIntime: 500,
		   	FadeOuttime:500,
		   	Totoptime:300
		};

		//设置配置
		_self.Setting = {
		    Showbuttondistance: (_self.IsNull(setting.Showbuttondistance) ? _self.DefaultSetting.Showbuttondistance : setting.Showbuttondistance),
		    FadeIntime: _self.IsNull(setting.FadeIntime) ? _self.DefaultSetting.FadeIntime : setting.FadeIntime,
		    FadeOuttime: _self.IsNull(setting.FadeOuttime) ? _self.DefaultSetting.FadeOuttime : setting.FadeOuttime,
		    Totoptime: _self.IsNull(setting.Totoptime) ? _self.DefaultSetting.Totoptime : setting.Totoptime
		};


		//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
		$(window).scroll(function(){
		 	if($(window).scrollTop() > _self.Setting.Showbuttondistance){
		    	$(_self).fadeIn(_self.Setting.FadeIntime);
		    }
		    else{
		    	$(_self).fadeOut(_self.Setting.FadeOuttime);
		    }
		});

		//设置返回按钮定位，定位到右下角
		$(_self).css({"position":"fixed","bottom":"10px","right":"10px"});

		//当点击跳转链接后，回到页面顶部位置
		$(_self).click(function(){
		    $('body,html').animate({scrollTop:0},_self.Setting.Totoptime);
		    return false;
		});
	}

})(jQuery);


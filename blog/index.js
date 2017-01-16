

$(function () {
    //个人中心的效果
	$('#header .member').hover(function () {
		$(this).css('background', 'url(images/arrow2.png) no-repeat 55px center');
		$('#header .member_ul').show();
	}, function () {
		$(this).css('background', 'url(images/arrow.png) no-repeat 55px center');
		$('#header .member_ul').hide();
	});
	
	//点击弹出登录框
	var login = $('#login');
	var screen = $('#screen');
	login.center(350, 250).resize(function () {
		if (login.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .login').click(function () {
		login.center(350, 250);
		login.css('display', 'block');
		screen.lock().animate({
			attr:'o',
			target:30,
			t:50,
			step:10
		});;
	})
	$('#login .close').click(function () {
		login.css('display', 'none');
		screen.animate({
			attr:'o',
			target:0,
			t:50,
			step:10,
			fn:function () {
				screen.unlock();
			}
		});
	});
	
    //设置登录框的拖动
	login.drag($('#login h2').last());
//点击弹出注册框
	var reg = $('#reg');
	reg.center(600, 550).resize(function () {
		if (reg.css('display') == 'block') {
			screen.lock();
		}
	});
	$('#header .reg').click(function () {
		reg.center(600, 550);
		reg.css('display', 'block');
		screen.lock().animate({
			attr:'o',
			target:30,
			t:50,
			step:10
		});;
	})
	$('#reg .close').click(function () {
		reg.css('display', 'none');
		screen.animate({
			attr:'o',
			target:0,
			t:50,
			step:10,
			fn:function () {
				screen.unlock();
			}
		});
	});

	//设置注册框的拖动
	reg.drag($('#reg h2').last());


	//设置百度分享
	$('#share').css('top', (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2+getScrollTop().top + 'px');
    //设置百度分享
	$('#share').hover(function () {
		$(this).animate({
			attr : 'x',
			target : 0
		});
	}, function () {
		$(this).animate({
			attr : 'x',
			target : -211
		});
	});
   //将百度云分享这个侧栏一直位于屏幕中间
	$(window).bind('scroll',function () {
		$('#share').css('top', (getInner().height - parseInt(getStyle($('#share').first(), 'height'))) / 2+getScrollTop().top + 'px');
	})
   $("#nav .about li").hover(function () {
	       var target=$(this).first().offsetLeft;
	   $("#nav .nav_bg").animate({
		   attr:'left',
		   target:target+20,
		   t:30,
		   step:10,
		   fn:function () {
			   $("#nav .white").animate({
				   attr:'left',
				   target:-target,
				   t:30,
				   step:10,
			   })
		   }
	   })
   },function () {
	   $("#nav .nav_bg").animate({
		   attr:'left',
		   target:20,
		   t:30,
		   step:10,
		   fn:function () {
			   $("#nav .white").animate({
				   attr:'left',
				   target:0,
				   t:30,
				   step:10,
			   })
		   }
	   })
   })

    $("#sidebar h2").toggle(function () {
	    $(this).next().animate({
			mul:{
				o:0,
				h:0
			},t:30,step:10
		})
	},function () {
		$(this).next().animate({
			mul:{
				o:100,
				h:150
			},t:30,step:10
		})
	})
	//设置表单验证
	//用户名验证 实现的是用户名由2-20位，由字母、数字、和下划线组成
	$('form').form('user').bind('focus',function () {
		$("#reg .info_user").css("display","block")
		$("#reg .error_user").css("display","none")
		$("#reg .success_user").css("display","none")
	}).bind('blur',function () {
		var value=$(this).value()
		if(trim(value)==''){
			$("#reg .info_user").css("display","none")
			$("#reg .error_user").css("display","none")
			$("#reg .success_user").css("display","none")
		}
		else if(!check_user()){
			$("#reg .error_user").css("display","block")
			$("#reg .info_user").css("display","none")
			$("#reg .success_user").css("display","none")
		}else{
			$("#reg .success_user").css("display","block")
			$("#reg .error_user").css("display","none")
			$("#reg .info_user").css("display","none")
		}
	})
	//封装输入的用户名的合法性
	function check_user() {
		return /[a-zA-Z0-9_]{2,20}/.test($('form').form('user').value())

	}
	//密码验证
	$('form').form('pass').bind('focus',function () {
		$("#reg .info_pass").css("display","block")
		$("#reg .error_pass").css("display","none")
		$("#reg .success_pass").css("display","none")
	}).bind('blur',function () {
		var value=$(this).value()
		if(trim(value)==''){
			$("#reg .info_pass").css("display","none")
			$("#reg .error_pass").css("display","none")
			$("#reg .success_pass").css("display","none")
		}
		else {if(!checkpass()){
			console.log(checkpass());
			$("#reg .info_pass").css("display","none")
			$("#reg .error_pass").css("display","block")
			$("#reg .success_pass").css("display","none")
		}else{
			$("#reg .info_pass").css("display","none")
			$("#reg .error_pass").css("display","none")
			$("#reg .success_pass").css("display","block")
		}

		}
	})
	//密码强度验证
	$('form').form('pass').bind('keyup',function () {
	   checkpass();
	})
     //检测密码的合法性
	function checkpass() {
		var value=trim($('form').form('pass').value());
		var value_length=value.length;
		var code_length=0;
		//第一个必须条件的判断   判断输入的字符必须是6-20个
		if(value_length>=6&&value_length<=20){
			$("#reg .info_pass .q1").html("●").css('color',"green");
		}
		else{
			$("#reg .info_pass .q1").html("○").css('color',"#666");
		}
		//第二个必须条件的判断   (/\s/).test(value)判断中间是否有空格
		if(value_length>0&&!(/\s/).test(value)){
			$("#reg .info_pass .q2").html("●").css('color',"green");
		}else{
			$("#reg .info_pass .q2").html("○").css('color',"#666");
		}
		//第三个必须条件的判断  两种以上
		if(/[a-z]/.test(value)){
			code_length++;
		}
		if(/[A-Z]/.test(value)){
			code_length++;
		}
		if(/[0-9]/.test(value)){
			code_length++;
		}
		if(/[^a-zA-Z0-9]/.test(value)){
			code_length++;
		}

		if(code_length>=2){
			$("#reg .info_pass .q3").html("●").css('color',"green");
		}else{
			$("#reg .info_pass .q3").html("○").css('color',"#666");
		}
		/*	安全级别   高级别：大于等于10个字符并且三种不同界级别的字符混拼
		 高级别：大于等于8个字符并且两种不同界级别的字符混拼
		 低级别：大于等于1个字符
		 无：没有字符
		 判断的时候务必从高往低，防止高级别无法执行*/
		//判断安全级别
		//高级别
		if(value_length>10&&code_length>=3){
			$("#reg .info_pass .s1").css("color","green");
			$("#reg .info_pass .s2").css("color","green");
			$("#reg .info_pass .s3").css("color","green");
			$("#reg .info_pass .s4").html("高").css("color","green");
			console.log(code_length)

		}else if(value_length>=8&&code_length>=2){
			$("#reg .info_pass .s1").css("color","#f60");
			$("#reg .info_pass .s2").css("color","#f60");
			$("#reg .info_pass .s3").css("color","#666");
			$("#reg .info_pass .s4").html("中").css("color","#f60");
		}
		else if(value_length>=1){
			$("#reg .info_pass .s1").css("color","maroon");
			$("#reg .info_pass .s2").css("color","#666");
			$("#reg .info_pass .s3").css("color","#666");
			$("#reg .info_pass .s4").html("低").css("color","maroon");
		}else{
			$("#reg .info_pass .s1").css("color","#666");
			$("#reg .info_pass .s2").css("color","#666");
			$("#reg .info_pass .s3").css("color","#666");
			$("#reg .info_pass .s4").html("")
		}
		if(value_length>=6&&value_length<=20&&code_length>=2&&!(/\s/.test(value))){
			return true;
		}
		else{
			return false;
		}
	}
	   //检测重新输入密码和第一次输入密码是否一致
	$("form").form("notepass").bind('focus',function () {
		$("#reg .info_notepass").css("display","block");
		$("#reg .error_notepass").css("display","none");
		$("#reg .success_notepass").css("display","none");
	}).bind('blur',function () {
		if(trim($(this).value())==""){
			$("#reg .info_notepass").css("display","none");
			$("#reg .error_notepass").css("display","none");
			$("#reg .success_notepass").css("display","none");
		}else if(check_notpass()){
			$("#reg .info_notepass").css("display","none");
			$("#reg .error_notepass").css("display","none");
			$("#reg .success_notepass").css("display","block");
		}else{
			$("#reg .info_notepass").css("display","none");
			$("#reg .error_notepass").css("display","block");
			$("#reg .success_notepass").css("display","none");
		}
	})
	//封装检测两次输入密码是否一致
	function check_notpass() {
		return trim($("form").form("notepass").value())==trim($("form").form("pass").value())
	}
	//检测提问输入框
	$("form").form("ques").bind('change',function () {
		if(check_ques()){
			$("#reg .error_qus").css("display","none");
		}
	})
	function check_ques() {
		return $("form").form("ques").value()!=0
	}
	//检测回答的输入框是否合法
	$("form").form("ans").bind('focus',function () {
		$("#reg .info_ans").css("display","block");
		$("#reg .error_ans").css("display","none");
		$("#reg .success_ans").css("display","none");
	}).bind('blur',function () {
		if(trim($(this).value())==""){
			$("#reg .info_ans").css("display","none");
			$("#reg .error_ans").css("display","none");
			$("#reg .success_ans").css("display","none");
		}else if(check_ans()){
			$("#reg .info_ans").css("display","none");
			$("#reg .error_ans").css("display","none");
			$("#reg .success_ans").css("display","block");
		}else{
			$("#reg .info_ans").css("display","none");
			$("#reg .error_ans").css("display","block");
			$("#reg .success_ans").css("display","none");
		}
	})
	function check_ans() {
		return trim($("form").form("ans").value()).length>=2&&trim($("form").form("ans").value()).length<=32;
	}
	//检测电子邮件的合法性  使用的是正则表达式来实现验证邮箱
	$("form").form("email").bind('focus',function () {
		$("#reg .info_email").css("display","block");
		$("#reg .error_email").css("display","none");
		$("#reg .success_email").css("display","none");
	}).bind('blur',function () {
		if(trim($(this).value())==""){
			$("#reg .info_email").css("display","none");
			$("#reg .error_email").css("display","none");
			$("#reg .success_email").css("display","none");
			//匹配的时候都是从头开始匹配的  特殊字符的转义
		}else if(check_email()){
			$("#reg .info_email").css("display","none");
			$("#reg .error_email").css("display","none");
			$("#reg .success_email").css("display","block");
		}else{
			$("#reg .info_email").css("display","none");
			$("#reg .error_email").css("display","block");
			$("#reg .success_email").css("display","none");
		}
	})
	function check_email() {
		return /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9_\-]+(\.[a-zA-Z]{2,4}){1,2}$/.test(trim($("form").form("email").value()))
	}
	//电子邮件的自动补全的功能
	//鼠标移入移出输入框的效果
     $("#reg ul.all_email li").hover(function () {
		  $(this).css("color","#e5edf2");
		  $(this).css("color","#369");
	 },function () {
		 $(this).css("color","none");
		 $(this).css("color","#666");
	 })
	//鼠标移入email的输入框以后  补全邮箱
	$("form").form("email").bind('focus',function () {
		if($(this).value().indexOf("@")==-1)$("#reg .all_email").css("display","block")
	}).bind('blur',function () {
		$("#reg .all_email").css("display","none")
	})
	$("form").form("email").bind("keyup",function (event) {
		if($(this).value().indexOf("@")==-1){
			$("#reg .all_email").css("display","block")
			$("#reg .all_email li span").html($(this).value());
		}else{
			$("#reg .all_email").css("display","none")
		}
		//通过键盘的上下光标键和回车键实现选择某一个邮箱
		$("#reg .all_email li").css("background","none");
		$("#reg .all_email li").css("color","#666");
		if(event.keyCode==40){
			if(this.index==undefined||this.index>=$("#reg .all_email li").length()-1){
				this.index=0;
			}else{
				this.index++;
			}
			$("#reg .all_email li").eq(this.index).css("background","#e5edf2");
			$("#reg .all_email li").eq(this.index).css("color","#369");
		}
		if(event.keyCode==38){
			if(this.index==undefined||this.index<=0){
				this.index=$("#reg .all_email li").length()-1;
			}else{
				this.index--;
			}
			$("#reg .all_email li").eq(this.index).css("background","#e5edf2");
			$("#reg .all_email li").eq(this.index).css("color","#369");
		}
		if(event.keyCode==13){
              $(this).value($("#reg .all_email li").eq(this.index).text());
			$("#reg .all_email").css("display","none")
			this.index=undefined;
		}
	})
	//email的输入框的键入时候触发的事件   上边写什么下边的邮箱就会显示什么
	//遇到了@符号的时候就要停止补全  下边的提示框就需要隐藏掉   整个邮箱输入好以后  再得到光标的时候不提示
	//电子邮件补全   点击下边的提示 输入的内容就会发生该变
	$("#reg ul.all_email li").bind('mousedown',function () {
		 $("form").form("email").value($(this).text())
	})
	
	
	//实现对生日的封装
	var year=$("form").form("year");
	var month=$("form").form("month");
	var day=$("form").form("day");
      var day30=[4,6,9,11];
	  var day31=[1,3,5,7,8,10,12];
	var cur_day;
    for(var i=1950;i<=2017;i++){
		year.first().add(new Option(i,i),undefined);
	}
	for(var i=1;i<13;i++){
		month.first().add(new Option(i,i),undefined);
	}
	//change事件在改变下拉列表的时候会触发
	year.bind('change',selecte_day)
	month.bind('change',selecte_day)
	day.bind('change',function () {
		if(check_birthday()){
			$("#reg .error_birthday").css("display","none")
		}
	})
	//检测生日这个选项是否驶入完整
	function check_birthday() {
		if($("form").form("year").value()!=0&&$("form").form("month").value()!=0&&$("form").form("day").value()!=0){
			return true;
		}
		else{
			return false;
		}
	}
	//根据年和月来判断天
function selecte_day() {
	if (month.value() != 0 && year.value() != 0) {
		$(this).first().options = 1;
		if (inArray(day31, parseInt(month.value()))) {
			cur_day = 31;
		}
		else if (inArray(day30, parseInt(month.value()))) {
			cur_day = 30;
		}
		else if ((year.value() % 4 == 0 && (year.value() % 100 != 0)) || (year.value() % 400 == 0)) {
			cur_day = 29;
		}
		else {
			cur_day = 28;
		}
	} else {
		$(this).first().options = 1;
	}
	for (var i = 0; i <= cur_day; i++) {
		day.first().add(new Option(i, i), undefined);
	}
}

	//备注的js效果
	//每一次刷新的时候所有的表单重置reset
	$("form").first().reset();
	//检测粘贴和键盘弹起两个事件
	$("form").form("ps").bind('keyup',check_ps).bind('paste',function () {
		//但是粘贴事件会在内容粘贴到文本框之前触发  获取不到粘贴后的内容  解决的方法将这个事件延迟1ms
		setTimeout(check_ps,50)
	})
    function check_ps() {
		var num=200-$("form").form("ps").value().length;
		if(num>=0){
			$("#reg .ps").eq(0).css("display","block");
			$("#reg .ps .number").eq(0).html(num);
			$("#reg .ps").eq(1).css("display","none");
			return true;
		}
		else{
			$("#reg .ps").eq(0).css("display","none");
			$("#reg .ps").eq(1).css("display","block");
			$("#reg .ps .number").eq(1).html(Math.abs(num)).css("color","red");
			return false;
		}
	}
	//点击清尾的时候触发的事件
	$("#reg .ps .clear").click(function () {
		$("form").form("ps").value($("form").form("ps").value().substring(0,200));
		check_ps();
	})
    //实现提交表单之前的验证
	$("form").form("sub").click(function () {
		var flag=true;
        if(!check_user()){
			flag=false;
			$("#reg .error_user").css("display","block")
		}
		if(!checkpass()){
			flag=false;
			$("#reg .error_pass").css("display","block")
		}
		if(!check_notpass()){
			flag=false;
			$("#reg .error_notepass").css("display","block")
		}
		if(!check_ques()){
			flag=false;
			$("#reg .error_qus").css("display","block")

		}
		if(!check_ans()){
			flag=false;
			$("#reg .error_ans").css("display","block")
		}
		if(!check_email()){
			flag=false;
			$("#reg .error_email").css("display","block")
		}
		if(!check_birthday()){
			flag=false;
			$("#reg .error_birthday").css("display","block")
		}
		if(!check_ps()){
			flag=false;
		}
		if(flag){
			$("form").first().submit();
		}
	})
   /* ------------------------封装轮播器开始-----------------------*/
	//轮播器初始化
	$("#banner img").opacity(0)
	$("#banner img").eq(0).opacity(100);
	$("#banner strong").html($("#banner img").eq(0).attr("alt"))
	$("#banner ul li").eq(0).css("color","#333");
	//轮播器计数器
	var banner_index=1;
	//轮播器类型
	var banner_type=2;
	//自动轮播器
	var banner_timer=setInterval(banner_fn,1000)
	//手动轮播器   鼠标放上去的时候应该存储banner_index
	$("#banner ul li").hover(function () {
		clearInterval(banner_timer)
		if($(this).css('color')!='rgb(51,51,51)')
		banner(this,banner_index==0?$("#banner ul li").length()-1:banner_index-1);
	},function () {
		banner_index=$(this).index()+1;
		banner_timer=setInterval(banner_fn,1000)
	})
	function banner(obj,prev) {
         if(banner_type==1){
			 $("#banner ul li").css("color","#999");
			 $(obj).css("color","#333");
			 $("#banner strong").html($("#banner img").eq($(obj).index()).attr("alt"))
			 //$("#banner img").css('zIndex',1).opacity(0);
			 //通过透明度做的轮播器
			 $("#banner img").eq(prev).animate({
				 attr:'o',target:0,t:30,step:10
			 }).css('zIndex',1);
			 $("#banner img").eq($(obj).index()).animate({
				 attr:'o',target:100,t:30,step:10
			 }).css('zIndex',2);
		 }
		else if(banner_type==2){
			 $("#banner img").eq(prev).animate({
				 attr:'y',target:150,t:30,step:10
			 }).opacity(100);
			 $("#banner img").eq($(obj).index()).animate({
				 attr:'y',target:0,t:30,step:10
			 }).css('top','-150px').opacity(100);
		 }
	}
	function banner_fn() {
		if(banner_index>=$("#banner ul li").length()){
			banner_index=0;
		}
		banner($("#banner ul li").eq(banner_index).first(),banner_index==0?$("#banner ul li").length()-1:banner_index-1);
		banner_index++;
	}


	/* ------------------------封装轮播器结束-----------------------*/
	/*----------------实现懒加载开始------------------*/
	var wait_load=$(".wait_load");
	//当图片进入到可见区域的时候，将xsrc的地址替换到src
      $(window).bind('scroll',_wait_load)
      $(window).bind('resize',_wait_load)
	function _wait_load() {
		//setTimeout的使用，目的是要防止抖动
		setTimeout(function () {
			for(var i=0;i<wait_load.length();i++){
				var _this=wait_load.ge(i);
				if((getInner().height+getScrollTop().top)>=offsetTop(_this)){
					$(_this).attr('src',$(_this).attr('xsrc'))
				}

			}
		},100)
	}
	/*----------------实现懒加载结束------------------*/
	/*实现预加载的功能*/

   //图片弹窗
	var photo_big = $('#photo_big');
	photo_big.drag($('#photo_big h2').last());
	photo_big.center(600, 550).resize(function () {
		if (photo_big.css('display') == 'block') {
			screen.lock();
		}

	});
	$('#photo dl dt img').click(function () {
		photo_big.center(620, 511).css('display', 'block');
		screen.lock().animate({
			attr:'o',
			target:30,
			t:50,
			step:10
		});
		/*实现预加载的功能*/
		//临时的一个图片对象
		var temp=new Image();
		//当这个对象加载完成的时候  直接显示这个图片而不是从上至下一点点显示这个图片
		temp.src=$(this).attr("big_src")
		$(temp).bind("load",function () {
			$("#photo_big .big img").attr('src',temp.src).animate({
				attr:'o',target:100,t:30,step:10
			}).css("width","600px").css("height","450px").css('top',0).opacity(0)
		})
		var parent=this.parentNode.parentNode;
		var prev=prevIndex($(parent).index(),parent.parentNode);
		var next=nextIndex($(parent).index(),parent.parentNode);
		//新建两个image的缓存
		var prev_img=new Image();
		var next_img=new Image();
		prev_img.src=$("#photo dl dt img").eq(prev).attr("big_src")
		next_img.src=$("#photo dl dt img").eq(next).attr("big_src")
		$("#photo_big .big .left").attr('src',prev_img.src)
		$("#photo_big .big .right").attr('src',prev_img.src)
		$("#photo_big .big img").attr('index',$(parent).index())
	})
	$('#photo_big .close').click(function () {
		photo_big.css('display', 'none');
		screen.animate({
			attr:'o',
			target:0,
			t:50,
			step:10,
			fn:function () {
				screen.unlock();
			}
		});
		$("#photo_big .big img").attr('src','images/loading.gif').css("width","32px").css("height","32px").css("top","190px")
	});
  //鼠标滑过弹出来的大图的js效果
  $("#photo_big .big .left").hover(function () {
	  $("#photo_big .big .sl").animate({
		  attr:'o',target:50,t:30,step:10
	  })
  },function () {
	  $("#photo_big .big .sl").animate({
		  attr:'o',target:0,t:30,step:10
	  })
  })
	$("#photo_big .big .right").hover(function () {
		$("#photo_big .big .sr").animate({
			attr:'o',target:50,t:30,step:10
		})
	},function () {
		$("#photo_big .big .sr").animate({
			attr:'o',target:0,t:30,step:10
		})
	})
	//图片上一张
	$("#photo_big .big .left").click(function () {
		$("#photo_big .big img").attr('src',$(this).attr('src'))
		var parent=$("#photo dl dt img").ge(prevIndex($("#photo_big .big img").attr('index'),$("#photo").first())).parentNode.parentNode;
	prev_index_img(parent);

	})
	//图片下一张
	$("#photo_big .big .right").click(function () {
		$("#photo_big .big img").attr('src',$(this).attr('src'))
		var parent=$("#photo dl dt img").ge(nextIndex($("#photo_big .big img").attr('index'),$("#photo").first())).parentNode.parentNode;
		prev_index_img(parent);
	})
	function prev_index_img(parent) {
		var prev=prevIndex($(parent).index(),parent.parentNode);
		var next=nextIndex($(parent).index(),parent.parentNode);
		//新建两个image的缓存
		var prev_img=new Image();
		var next_img=new Image();
		prev_img.src=$("#photo dl dt img").eq(prev).attr("big_src")
		next_img.src=$("#photo dl dt img").eq(next).attr("big_src")
		$("#photo_big .big .left").attr('src',prev_img.src)
		$("#photo_big .big .right").attr('src',prev_img.src)
		$("#photo_big .big img").attr('index',$(parent).index())
	}
	//调用ajax
	$(document).click(function () {
		ajax({
			method:'post',
			url:"demo1.php",
			data:{
				'name':'Lee',
				'age':100
			},
			success:function (text) {
				console.log(text)
			},
			async:true
		})
	})
});
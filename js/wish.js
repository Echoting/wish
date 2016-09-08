
$(function(){
	//page的拖拽
	//(function(){
		// drag();
		var papers= $('.paper');
		for(var i=0;i<papers.length;i++){
			drag(papers.eq(i));
		}

		function drag(aPaper){
			aPaper.css({top:Math.floor(Math.random()*300)+'px',left: Math.floor(Math.random()*800)+'px'});
			aPaper.mousedown(function(ev){
				var ev=ev||window.event;
				var disX = ev.pageX - $(this).position().left;
				var disY = ev.pageY - $(this).position().top;
				$(this).css('opacity','0.5');
				$(window).mousemove(function(ev){
					// console.log(index);
					var ev=ev||window.event;
					aPaper.css({left: ev.pageX-disX, top: ev.pageY-disY});

				});
				$(window).mouseup(function(){
					// console.log(index);
					aPaper.css('opacity','1');
					$(window).unbind('mousemove');
					$(window).unbind('up');

				});
			});
		}
//	})();

	//点击显示
	(function(){
		$('#wish_btn').click(function(){
			var iTop= $(window).height()-$('#box').height();
			var iLeft= $(window).width()-$('#box').width();
			$('#box').animate({opacity: 1},500);
			$('#box').css('display','block');
			$('#box').css('top',Math.floor(iTop/2)-100);
			$('#box').css('left',Math.floor(iLeft/2));
			// $('#box').css('top','200px');

		});
		$('#box .close').click(function(){
			$('#box').animate({opacity: 0},300);
		});	
	})();
	
	//点击发布
	(function(){
		var img = $('.box').find('.face img');
		var arr_img=['baobao','haixiu','huaxin','jiyan','ku','qian','taikaixin','touxiao','xixi','zhuakuang'];
		var name = '';
		var wish = $('#box').find('#box_content').val();
		var str = '';
		var insertImg = ''
		img.each(function(){
			$(this).click(function(){
				
				str = arr_img[$(this).index()];
				// $('#box').find('#box_content').val($('#box').find('#box_content').val()+'['+str+']');
				insertImg = insertImg + '<img src="img/phiz/'+str+'.gif" alt="" />';
				console.log(insertImg);
			});
		});

		$('.submit').click(function(){
			var arr=['a1','a2','a3','a4','a5'];
			
			name = $('#box').find('.name').val();
			wish = $('#box').find('#box_content').val();

			if(name==''||wish==''){
				alert('昵称或者内容不能为空');
				return;
			}
			var wish_con = $('.wish_content');
			var new_wish = ($('<dl class="paper"><dt class="top"><span class="title">'+name+'</span><span class="no">N0.0001</span></dt><dd class="content">'+wish+insertImg+'</dd><dd class="bottom"><span class="time">今天 15:45</span><a href="#" class="close"></a></dd></dl>'));
			$('#box').find('.name').val('');
			$('#box').find('#box_content').val('');
			new_wish.addClass(arr[Math.floor(Math.random()*arr.length)]);
			wish_con.append(new_wish);
			drag(new_wish);
		});
		
	})();
	
	

});
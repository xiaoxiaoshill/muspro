window.onload=function(){
				//定义一个储存歌曲图片的数组
				var imgs=['img/BINGBIAN病变 (女声版) - 鞠文娴.jpg','img/出山（Cover：花粥） - 你的叽叽&黄诗扶HBY.jpg','img/东西 - 很美味.jpg'];
				//定义一个储存歌曲的数组
				var musis=['music/BINGBIAN病变 (女声版) - 鞠文娴.mp3','music/出山（Cover：花粥） - 你的叽叽&黄诗扶HBY.mp3','music/东西 - 很美味.mp3'];
				imgs.push('img/去年夏天 - 王大毛.jpg');
				musis.push('music/去年夏天 - 王大毛.mp3');
				//获取图片
				var img=document.getElementById('img');
				//获取下一首按钮
				var btn=document.getElementById('btn');
				//获取上一首按钮
				var btn1=document.getElementById('btn1');
				//获取歌曲
				var aud=document.getElementById('aud');
				//获取播放按钮
				var btnbf=document.getElementById('bfbtn');
				var i=0;//控制切换图片的变量
				var j=0;//控制切换音乐的变量
				var fla=true;//定义变量，用于控制歌曲播放
				function kz(flag){//切换图片
					if(i==imgs.length-1&&flag==true){
						i=0;
						img.src=imgs[i];
//						console.log(i);
					}else if(i!=imgs.length-1&&flag==true){
						i++;
						img.src=imgs[i];
//						console.log(i);
					}
					function kz2(){
					if(i==0){
						i=imgs.length-1;
						img.src=imgs[i];
//						console.log(i);
					}else{
						i--;
						img.src=imgs[i]
//						console.log(i);
					}
					}
					return{
					kz2:kz2
				}
				}
				function mus(flag){//切换歌曲
					if(j==musis.length-1&&flag==true){
						j=0;
						aud.src=musis[j];
						aud.play();
						btnbf.value='正在播放';
//						console.log(j);
					}else if(j!=musis.length-1&&flag==true){
						j++;
						aud.src=musis[j];
						aud.play();	
						btnbf.value='正在播放';
//						console.log(j);
					}
					function muslast(){
					if(j==0){
						j=musis.length-1;
						aud.src=musis[j];
						aud.play();	
						btnbf.value='正在播放';
//						console.log(j);
					}else{
						j--;
						aud.src=musis[j]
						aud.play();	
						btnbf.value='正在播放';
//						console.log(j);
					}
					}
					return{
					muslast:muslast
				}
				}
				function start(){
					aud.play();
				}
				function stop(){
						aud.pause();
				}
				function bf(){//切换播放按钮
				if(fla){
					start();
					fla=false;
					btnbf.value='正在播放';
				}else{
					stop();
					btnbf.value="暂停播放";
					fla=true;
				}
//				console.log(flag);//测试开关是否有效
			}
				btn.onclick=function(){
					fla=false;
					kz(true);
					mus(true);
				}
				btn1.onclick=function(){
					fla=false;
					var hs=kz(false);
					hs.kz2();
					var mu=mus(false);
					mu.muslast();
				}
				btnbf.onclick=function(){
					bf();
				}
			}
window.onload=function(){
				var url="http://localhost:8080/musicXM/registerServlet";
				document.getElementById('btn').onclick=function(){
				var musroute=$("#musroute").val();
				var singer=$('#singer').val();
				var da=new Date();
				var time=da.toLocaleString();
				$.ajax({
					url:url,
					type:'post',
					data:{musroute:musroute,singer:singer,time:time}
				});
				$("#musroute").val("");
				$('#singer').val("");
				window.location.href="queryAll.html";
			}
			}
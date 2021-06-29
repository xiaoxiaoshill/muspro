function uploadPic() { 
			  var form = document.getElementById('upload');
			    formData = new FormData(form); 
			  $.ajax({ 
			   url:"http://localhost:8080/musicXM/uploadimgServlet", 
			   type:"post", 
			   data:formData, 
			   processData:false, 
			   contentType:false, 
			   success:function(res){ 
			    
			   }, 
			   error:function(err){ 
			    alert("网络连接失败,稍后重试",err); 
			   } 
			  }) 
			  
			 }
$(function (){
	console.log(browser.versions);
	$("#windows_downloadButton1,#windows_downloadButton2,#mac_downloadButton1,#mac_downloadButton2").click(function(){
		layer.open({
			content: '敬请期待',
			btn: '我知道了'
		});	
	});
	
	$("#android_downloadButton1,#android_downloadButton2").click(function(){
		console.log(browser.query);
		window.location.href = "./android.html" + browser.query;
	});
	
	$("#ios_downloadButton1,#ios_downloadButton2").click(function(){
		console.log(browser.query);
		window.location.href = "./ios.html" + browser.query;
	});
});
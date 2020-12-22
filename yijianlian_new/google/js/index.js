$(function () {
	
	$("#mobile_Android_downloadButton").click(function(){
		console.log(browser.query);
		gtag_report_conversion_android("./android.html" + browser.query);
	});
	
	$("#mobile_iOS_downloadButton").click(function(){
		console.log(browser.query);
		gtag_report_conversion_ios("./ios.html" + browser.query);
	});
	
    if (browser.versions.mobile) {
        $(".mobile_div").show();
        $(".pc_div").hide();
    } else {
        $(".pc_div").show();
        $(".mobile_div").hide();

		var mobile_url = window.location.href;
        buildQrcode("a-codeapp", mobile_url);
        buildQrcode("i-codeapp", mobile_url);

        if(browser.versions.windows){
            install("pc_android_download");
        } else {
            install("pc_android_download");
            $("#pc_android_download").hide();
        }

        var swifch = function (inEle, showEle) {
            var timer = null;
            var $showEle = $("#" + showEle);
            $("#" + inEle).mouseover(function () {
                clearTimeout(timer);
                $showEle.show();
            }).mouseout(function () {
                timer = setTimeout(function () {
                    $showEle.hide();
                }, 100)
            });
        };

        swifch("a-code-con", "a-codeapp");
        swifch("i-code-con", "i-codeapp");
    }


    $(".planb").click(function () {
        layer.open({
            type: 1,
            btn: ['我知道了'],
            content: '<p>亲爱的 PC 端用户：</p>'
            + '<p style="text-indent: 20px">我们的 Windows 版本和 mac 版本正在开发中。为了缓解您的燃眉之急，我们提供了“共享网络”解决方案，实现电脑使用 VPN 的相应功能。</p>'
            + '<p style="text-indent: 20px">您只需准备 一台手机 和一台电脑（可以设置网络代理的终端，win10 系统暂不支持）。这样，不仅在电脑上可以使用 VPN，带有投屏功能的设备上也可以使用 VPN 了哦～</p>'
            + '<p style="text-indent: 20px">详细操作教程请下载一键连加速器 app，公告内有图文教程操作；也可以加入客服 QQ 群，有专业的客服指导您使用哦～</p>'
            + '<p>感谢您的理解与支持，一键连祝您翻墙愉快！</p>'
        });
    });
});
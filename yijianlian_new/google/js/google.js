// 全局码
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-624411937');

// android事件码
function gtag_report_conversion_android(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-624411937/u2weCLyoz9QBEKGK36kC',
      'transaction_id': '',
      'event_callback': callback
  });
  return false;
}

// ios事件码
function gtag_report_conversion_ios(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-624411937/9fW1CL6h3dQBEKGK36kC',
      'event_callback': callback
  });
  return false;
}
<template>
    <div></div>
</template>

<script>
  export default {
    mounted() {
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        var gg = document.createElement("script");
        var jq = document.createElement("script");

        gg.src = "https://www.googletagmanager.com/gtag/js?id=UA-153805664-1";
        gg.async = true

        hm.src = "https://hm.baidu.com/hm.js?15e48509fae4150e5b806119cea2aab1";
        jq.src ="https://code.jquery.com/jquery-2.2.4.min.js";

        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
        s.parentNode.insertBefore(gg, s);
        s.parentNode.insertBefore(jq, s);
      })();


      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-153805664-1');

      setTimeout(() => {
        ;(function($){
          $.ajax({
            type:'get',
            url:"http://shenzhiyong.com.cn:3030/getJsSdk",
            data: {
              url: '' + window.location.href.split('#')[0]
            },
            contentType: "application/json",
            success:function(data){
              console.log(data)
              wx.config({
                debug: false,
                appId: data.appId,
                timestamp: data.timestamp,
                nonceStr: data.noncestr,
                signature: data.signature,
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'updateAppMessageShareData', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
              });
              wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                console.log('ssssssss')
                wx.updateAppMessageShareData({
                  // title: '', // 分享标题
                  desc: '沈志勇的小站', // 分享描述
                  // link: '', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: 'https://shenzhiyong.com.cn/logo.jpeg', // 分享图标
                  success: function () {
                    // 设置成功
                    console.log('success')

                  }
                })
              });
            },
            error:function(err){
              console.log(err);
            }
          })
        })(jQuery);

      }, 1000)


    }
  }
</script>

<template>
    <div class="connect">
        <div class="item">
            <div class="title">关注公众号</div>
            <span>组队学习，一同成长</span>
            <img src="./mp.png" alt="">
        </div>
        <div class="item">
            <div class="title">扫码添加好友</div>
            <span>备注 <span style="color: red">加群</span>学习 </span>
            <img src="./aa2.jpg" alt="">
        </div>
    </div>
</template>


<style scoped>
    .connect{
        position: fixed;
        right: 100px;
        top: 100px;
        width: 150px;
        text-align: center;
    }
    .item{
        margin-bottom: 30px;
    }
    .title{
        color: #3eaf7c;
        font-size: 14px;
    }
    @media (max-width: 1588px){
        .connect {
            display: none;
        }
    }
</style>

<script>
    export default {

        mounted() {

          // <script src='https://code.jquery.com/jquery-3.4.1.slim.min.js'>

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

          ;(function($){
            $.ajax({
              type:'get',
              url:"http://shenzhiyong.com.cn:3030/getJsSdk",
              data: {
                url: '' + window.location.href.split('#')[0]
              },
              contentType: "application/json",
              success:function(data){
                wx.config({
                  debug: false,
                  appId: data.appId,
                  timestamp: data.timestamp,
                  nonceStr: data.noncestr,
                  signature: data.signature,
                  jsApiList: ['showMenuItems','onMenuShareTimeline', 'onMenuShareAppMessage','onMenuShareQQ'] //功能列表，我们要使用JS-SDK的什么功能
                });
                wx.ready(function() {
                  wx.showMenuItems({
                    menuList: ['menuItem:share:appMessage' , 'menuItem:share:timeline' ,'menuItem:share:qq'] // 要显示的菜单项，所有menu项见附录3
                  });
                })
              },
              error:function(err){
                console.log(err);
              }
            })
          })(jQuery);

        }
    }
</script>


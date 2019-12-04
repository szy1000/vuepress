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

        gg.src = "https://www.googletagmanager.com/gtag/js?id=UA-153805664-1";
        gg.async = true

        hm.src = "https://hm.baidu.com/hm.js?15e48509fae4150e5b806119cea2aab1";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
        s.parentNode.insertBefore(gg, s);
      })();


      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-153805664-1');

    }
  }
</script>

module.exports = {
  title: '沈志勇的小站',
  description: '沈志勇,沈志勇说,前端面试题,一个专注帮助同学们自学的网站，一同学习进步！',
  head: [
    ['link', { rel: 'icon', href: 'https://shenzhiyong.com.cn/logo.jpeg' }],
  ],
  base: "/",
  themeConfig: {
    nav: [
      {text: '引导页', link: '/'},
      {text: '进阶', link: '/home/'},
      {text: '招聘*内推', link: '/job/'},
      {
        text: '博客',
        ariaLabel: 'blog Menu',
        items: [
          {
            text: 'csdn',
            link: 'https://blog.csdn.net/u011456552',
          },
          {
            text: 'zhihu',
            link: 'https://www.zhihu.com/people/chen-zhi-yong-65-38/activities',
          }
        ]
      },
      {text: 'github', link: 'https://github.com/szy1000'},
    ],
    sidebar: [
      ['/home2/', '主页'],
      {
        title: 'html面试题',   // 必要的
        // sidebarDepth: 3,    // 可选的, 默认值是 1
        children: [
          ['/html/tag', '标签语义化'],
          ['/html/two', 'b和strong区别']
        ]
      },
      {
        title: 'css面试题',   // 必要的
        sidebarDepth: 3,    // 可选的, 默认值是
        children: [
          ['/css/one', '盒子模型'],
          ['/css/02.css居中/css居中显示', 'css居中'],
          ['/css/03.sticky_footer/', '固定底部'],
          ['/css/06.inline-block/间隔', 'inline-block'],
        ]
      },
      {
        title: 'javascript面试题',   // 必要的
        children: [
          ['/js/01.createObj/', '对象的创建'],
          ['/js/one', '对象的拷贝'],
          ['/js/delay/300ms', '如何解决移动端300ms延迟的问题'],
          ['/js/this/', 'this指向'],
          ['/js/04.unique/', '数组去重']
        ]
      },
      {
        title: 'javascript设计模式',   // 必要的
        children: [
          ['/design-patterns/01.strategies/策略模式', '策略模式'],
          ['/design-patterns/02.Singleton/单例模式', '单例模式'],
          ['/design-patterns/03.Observe/观察者模式', '观察者模式'],
          ['/design-patterns/04.Proxy/代理模式', '代理模式'],
        ]
      },
    ]
  }
}

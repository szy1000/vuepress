module.exports = {
  title: '沈志勇的小站',
  description: '沈志勇,沈志勇说,前端面试题,一个专注帮助同学们自学的网站，一同学习进步！',
  head: [
    ['link', { rel: 'icon', href: 'https://shenzhiyong.com.cn/logo.jpeg' }]
  ],
  base: "/",
  themeConfig: {
    nav: [
      {text: '引导页', link: '/'},
      {text: '进阶', link: '/home/'},
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
      ['/home/', '主页'],
      {
        title: 'html面试题',   // 必要的
        path: '/html/',      // 可选的, 应该是一个绝对路径
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          ['/html/tag', '标签语义化'],
          ['/html/two', 'b和strong区别']
        ]
      },
      {
        title: 'css面试题',   // 必要的
        path: '/css/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是
        children: [
          ['/css/one', '盒子模型'],
          ['/css/02.css居中/css居中显示', 'css居中'],
          ['/css/06.inline-block/间隔', 'inline-block'],
        ]
      },
      {
        title: 'javascript面试题',   // 必要的
        path: '/js/',      // 可选的, 应该是一个绝对路径
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是
        children: [
          ['/js/one', '对象的拷贝'],
          ['/js/delay/300ms', '如何解决移动端300ms延迟的问题']
        ]
      },
    ]
  }
}

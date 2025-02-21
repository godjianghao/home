# 个人主页

## ✨ 特色功能

- 🚀 使用 [Cloudflare Pages](https://dash.cloudflare.com) 一键部署
- 🌐 支持自定义域名和 SSL 证书
- 🌓 自动/手动切换明暗主题
- 🌍 中英文双语支持
- ⏰ 实时时钟显示
- 📊 访问统计功能
- 💪 原生技术栈，零依赖

## 💻 快速开始

### Cloudflare Pages 部署

1. Fork 此项目到你的 GitHub 账号
2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
3. 进入 Pages 页面，点击「创建项目」
4. 选择「从 Git 连接」，授权并选择你 fork 的仓库
5. 部署配置：
   - 构建命令：留空
   - 输出目录：留空
6. 点击「保存并部署」

### 自定义域名设置

1. 在项目部署完成后，进入「自定义域」标签
2. 点击「设置自定义域」
3. 输入你的域名，按提示完成 DNS 解析设置

## 📁 项目结构

```
/
├── index.html              # 主页面
├── css/                    # 样式文件夹
│   └── style.css           # 主样式文件
├── js/                     # 脚本文件夹
│   ├── theme.js            # 主题切换
│   ├── lang.js             # 语言切换
│   └── clock.js            # 时钟功能
└── assets/                 # 资源文件夹
    ├── images/             # 图片资源
    └── favicon.svg         # 网站图标
```

## 🔧 自定义配置

1. 修改个人信息
   - 编辑 `index.html` 更新个人信息
   - 替换 `assets/images` 中的图片资源

2. 添加新功能
   - 在 `js` 文件夹创建新的脚本文件
   - 在 `index.html` 底部引入新脚本

## 🧠 技术栈

- HTML5
- CSS3
- JavaScript ES6+

## 📝 更新日志

- 2025.02.21
  - 添加实时时钟显示
  - 优化移动端适配
  - 添加访问统计功能

## 🙏 鸣谢

- [Remix Icon](https://remixicon.com/) - 图标库
- [不蒜子](https://busuanzi.ibruce.info/) - 访问统计
- [Cloudflare Pages](https://pages.cloudflare.com/) - 部署平台

## 📄 许可证

MIT License © 2025 Deer
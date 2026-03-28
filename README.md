# Douban to Netflix Searcher 

一个专为 Netflix 用户设计的轻量级豆瓣辅助脚本，旨在无缝连接豆瓣“想看”清单与 Netflix 片库。

## 🌟 核心亮点 (Key Features)

- **一键触达：** 在豆瓣“想看”列表页（Wish List）为每个条目自动添加 **Netflix** 搜索按钮。
- **动态标题识别 (Dynamic Title Detection)：** 采用智能提取逻辑，优先抓取豆瓣条目的主标题（Index [0]）。
  - *设计理念：* 脚本会根据用户在豆瓣的个人语言设置，自动匹配最符合用户直觉的语言进行搜索，确保搜索结果的高度相关性。
- **自动清理：** 智能识别并剔除标题末尾的年份（如 `(2024)`），避免冗余字符干扰流媒体搜索算法。
- **极致轻量：** 原生 JavaScript 编写，无第三方库依赖，秒速加载，不占用系统资源。

## 🛠️ 安装指南 (Installation)

[![Install](https://img.shields.io/badge/Install-Tampermonkey-red?style=for-the-badge&logo=tampermonkey)](https://raw.githubusercontent.com/pingyuanwywh/douban-netflix-helper/main/douban_netflix_search.user.js)

1. 确保浏览器已安装 [Tampermonkey](https://www.tampermonkey.net/) 插件。
2. 点击上方的 **Install** 按钮即可自动跳转安装。
3. **开始使用：** 打开你的 [豆瓣想看列表](https://movie.douban.com/mine?status=wish)，红色按钮即刻呈现。

## 📖 技术背景 (Technical Context)

本项目诞生于新加坡 NTU 校园生活场景。由于 Netflix 在不同地区（Region）的片库差异，该脚本通过优化搜索关键字构造逻辑，大幅提升了在新加坡区（SG Region）的影片匹配成功率。

---
**Author:** [pingyuanwywh]  
**Category:** Productivity / Media Tools

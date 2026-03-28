// ==UserScript==
// @name         Douban to Netflix Searcher
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Add a Netflix search button to Douban "Wish" list
// @author       pingyuanwywh, Gemini
// @match        *://movie.douban.com/people/*/wish*
// @match        *://movie.douban.com/mine?status=wish*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addNetflixButtons() {
        // 1. 找到所有的电影条目
        const items = document.querySelectorAll('.item');
        
        items.forEach(item => {
            // 2. 找到标题链接
            const titleLink = item.querySelector('.title a') || item.querySelector('.info .title a');
            
            if (titleLink && !item.querySelector('.nf-search-btn')) {
                // 3. 提取电影名（去掉空格和多余的斜杠后缀）
                let rawTitle = titleLink.innerText;
                let cleanTitle = rawTitle.split('/')[0].trim();
                
                // 4. 构造 Netflix 搜索链接 (针对新加坡区)
                let nfUrl = `https://www.netflix.com/search?q=${encodeURIComponent(cleanTitle)}`;
                
                // 5. 创建按钮
                let btn = document.createElement('a');
                btn.className = 'nf-search-btn';
                btn.href = nfUrl;
                btn.target = '_blank';
                btn.innerText = 'Netflix';
                
                // 6. 设置样式（Netflix 标志性的红底白字）
                btn.style.cssText = `
                    margin-left: 10px;
                    padding: 2px 8px;
                    background-color: #E50914;
                    color: white !important;
                    border-radius: 4px;
                    font-size: 12px;
                    text-decoration: none;
                    display: inline-block;
                    vertical-align: middle;
                    font-weight: bold;
                `;
                
                // 7. 插入到标题后面
                titleLink.parentNode.appendChild(btn);
            }
        });
    }

    // 考虑到页面可能是异步加载，每隔 1 秒检查一次
    setInterval(addNetflixButtons, 1000);
    console.log("Netflix Search Script is running...");
})();

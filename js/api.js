const API_CONFIG = {
    hitokoto: 'https://v1.hitokoto.cn',
};

// 获取一言
const fetchHitokoto = () => {
    fetch(API_CONFIG.hitokoto)
        .then(response => response.json())
        .then(data => {
            const hitokotoEl = document.getElementById('hitokoto')
            hitokotoEl.textContent = data.hitokoto
        })
        .catch(console.error)
};

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', () => {
    fetchHitokoto();
});
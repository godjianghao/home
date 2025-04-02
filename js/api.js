const API_CONFIG = {
    hitokoto: 'https://v1.hitokoto.cn',
    ipInfo: 'https://myip.ipip.net/json'
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

// 获取IP信息
const fetchIpInfo = () => {
    fetch(API_CONFIG.ipInfo)
        .then(response => response.json())
        .then(data => {
            const ipInfoEl = document.getElementById('ipInfo')
            if(data.data) {
                const info = data.data
                ipInfoEl.textContent = `IP: ${info.ip} | 位置: ${info.location.join(' ')}`
            }
        })
        .catch(error => {
            console.error('获取IP信息失败:', error)
            document.getElementById('ipInfo').textContent = '获取IP信息失败'
        })
};

// 页面加载时初始化
window.addEventListener('DOMContentLoaded', () => {
    fetchHitokoto();
    fetchIpInfo();
});
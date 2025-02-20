document.addEventListener('DOMContentLoaded', async () => {
    const visitsElement = document.getElementById('totalVisits');
    const visitorsElement = document.getElementById('totalVisitors');
    
    // 使用 CountAPI 的免费服务
    const namespace = 'mrdeer.us.kg';  // 使用你的域名作为命名空间
    const key = 'homepage';  // 为你的网站创建一个唯一的key

    try {
        // 获取访问量
        const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
        const data = await response.json();
        
        if (data.value) {
            visitsElement.textContent = data.value.toLocaleString();
            visitorsElement.textContent = Math.ceil(data.value / 2).toLocaleString(); // 估算访客数
        }
    } catch (error) {
        console.error('访问统计获取失败:', error);
        visitsElement.textContent = '--';
        visitorsElement.textContent = '--';
    }
});
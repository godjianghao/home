/* filepath: /C:/项目/homepage_dev-main/homepage_dev-main/js/lang.js */
document.addEventListener('DOMContentLoaded', async () => {
    const langToggle = document.getElementById('langToggle');
    const html = document.documentElement;

    // 从 API 获取用户的地理位置信息
    try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        const countryCode = data.country_code.toLowerCase();
        
        // 根据国家代码设置初始语言
        const initLang = countryCode === 'cn' ? 'zh' : 'en';
        html.setAttribute('lang', initLang);
    } catch (error) {
        console.error('无法获取地理位置信息，默认使用中文');
        html.setAttribute('lang', 'zh');
    }

    // 语言切换事件
    langToggle.addEventListener('click', () => {
        const currentLang = html.getAttribute('lang');
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        html.setAttribute('lang', newLang);
    });
});
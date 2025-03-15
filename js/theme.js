// 主题切换功能
// 设置主题函数
function toggleTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
}

// 获取东八区（北京时间）的当前小时
function getBeijingHour() {
    return (new Date().getUTCHours() + 8) % 24;
}

// 检查并设置主题
function checkAndSetTheme() {
    const hour = getBeijingHour();
    const isDayTime = hour >= 6 && hour < 18;
    toggleTheme(!isDayTime);
}

// 初始化主题
checkAndSetTheme();

// 每小时检查一次时间并更新主题
setInterval(checkAndSetTheme, 3600000); // 每小时检查一次


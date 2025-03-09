// 更新主题切换函数
function toggleTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    // 保存主题偏好到本地存储
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 获取东八区（北京时间）的当前小时
function getBeijingHour() {
    // 创建当前UTC时间的Date对象
    const now = new Date();
    // 获取UTC时间的小时
    const utcHour = now.getUTCHours();
    // 东八区比UTC快8小时
    const beijingHour = (utcHour + 8) % 24;
    return beijingHour;
}

// 获取东八区当前小时
const currentHour = getBeijingHour();
// 判断是否是白天（6:00-18:00）
const isDayTime = currentHour >= 6 && currentHour < 18;

// 初始化主题（白天使用亮色主题，晚上使用暗色主题）
const initialDark = !isDayTime;
toggleTheme(initialDark);

// 每小时检查一次时间并更新主题
setInterval(() => {
    const hour = getBeijingHour();
    const isDayTime = hour >= 6 && hour < 18;
    toggleTheme(!isDayTime);
}, 3600000); // 每小时检查一次（3600000毫秒 = 1小时）


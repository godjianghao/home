// 主题切换功能
// 设置主题函数
function toggleTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    // 保存用户的主题偏好
    localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
}

// 获取东八区（北京时间）的当前小时
function getBeijingHour() {
    return (new Date().getUTCHours() + 8) % 24;
}

// 检查并设置主题
function checkAndSetTheme() {
    // 检查用户是否有保存的主题偏好
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
        // 如果有保存的偏好，使用保存的偏好
        toggleTheme(savedTheme === 'dark');
    } else {
        // 否则根据时间自动设置
        const hour = getBeijingHour();
        const isDayTime = hour >= 6 && hour < 18;
        toggleTheme(!isDayTime);
    }
}

// 手动切换主题
function manualToggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    toggleTheme(currentTheme === 'light');
    
    // 更新主题图标
    updateThemeIcon();
}

// 更新主题图标
function updateThemeIcon() {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        themeIcon.className = currentTheme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
    }
}

// 初始化主题
checkAndSetTheme();

// 初始化主题图标
document.addEventListener('DOMContentLoaded', updateThemeIcon);

// 每小时检查一次时间并更新主题（仅当用户没有手动设置主题时）
setInterval(() => {
    if (!localStorage.getItem('theme-preference')) {
        checkAndSetTheme();
    }
}, 3600000); // 每小时检查一次


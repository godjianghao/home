// 更新主题切换函数
function toggleTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    const icon = document.querySelector('#themeToggle i');
    // 添加过渡动画
    icon.style.opacity = '0';
    icon.style.transform = 'rotate(-180deg) scale(0.5)';
    
    setTimeout(() => {
        icon.className = isDark ? 'ri-moon-line' : 'ri-sun-line';
        icon.style.opacity = '1';
        icon.style.transform = 'rotate(0) scale(1)';
    }, 150);

    // 保存主题偏好到本地存储
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 获取保存的主题偏好
const savedTheme = localStorage.getItem('theme');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentHour = new Date().getHours();
const isDayTime = currentHour >= 6 && currentHour < 18;

// 初始化主题
const initialDark = savedTheme 
    ? savedTheme === 'dark'
    : !isDayTime || prefersDarkScheme.matches;
toggleTheme(initialDark);

// 主题切换按钮点击事件
document.getElementById('themeToggle').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    toggleTheme(currentTheme === 'light');
});

// 监听系统主题变化
prefersDarkScheme.addEventListener('change', (e) => {
    toggleTheme(e.matches);
});


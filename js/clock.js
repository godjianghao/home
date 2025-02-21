
function updateClock() {
    const now = new Date();
    
    // 更新时钟，使用24小时制
    const clock = document.getElementById('clock');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    
    // 更新日期，使用简洁格式
    const date = document.getElementById('date');
    const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    const weekday = weekdays[now.getDay()];
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    date.textContent = `${month}月${day}日 ${weekday}`;
}

// 每秒更新一次
setInterval(updateClock, 1000);
// 立即执行一次，避免延迟
updateClock();
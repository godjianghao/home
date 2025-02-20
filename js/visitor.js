
document.addEventListener('DOMContentLoaded', async () => {
    const visitsElement = document.getElementById('totalVisits');
    const visitorsElement = document.getElementById('totalVisitors');
    
    const namespace = 'mrdeer.us.kg';
    const visitsKey = 'visits';
    const visitorsKey = 'visitors';

    let isNewVisitor = !localStorage.getItem('visited');
    if (isNewVisitor) {
        localStorage.setItem('visited', 'true');
    }

    try {
        const visitsResponse = await fetch(`https://api.countapi.xyz/hit/${namespace}/${visitsKey}`);
        const visitsData = await visitsResponse.json();
        visitsElement.textContent = visitsData.value.toLocaleString();

        if (isNewVisitor) {
            const visitorsResponse = await fetch(`https://api.countapi.xyz/hit/${namespace}/${visitorsKey}`);
            const visitorsData = await visitorsResponse.json();
            visitorsElement.textContent = visitorsData.value.toLocaleString();
        } else {
            const visitorsResponse = await fetch(`https://api.countapi.xyz/get/${namespace}/${visitorsKey}`);
            const visitorsData = await visitorsResponse.json();
            visitorsElement.textContent = visitorsData.value.toLocaleString();
        }
    } catch (error) {
        console.error('获取访问统计失败:', error);
        visitsElement.textContent = '--';
        visitorsElement.textContent = '--';
    }
});
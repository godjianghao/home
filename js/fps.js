class FPSMeter {
    constructor() {
        this.fps = 0;
        this.frames = 0;
        this.lastTime = performance.now();
        this.fpsDisplay = document.getElementById('fps');
    }

    update() {
        this.frames++;
        const now = performance.now();
        
        if (now > this.lastTime + 1000) {
            this.fps = Math.round((this.frames * 1000) / (now - this.lastTime));
            this.fpsDisplay.textContent = `FPS: ${this.fps}`;
            this.lastTime = now;
            this.frames = 0;
        }

        requestAnimationFrame(() => this.update());
    }

    start() {
        requestAnimationFrame(() => this.update());
    }
}

// 当 DOM 加载完成后初始化 FPS 计数器
document.addEventListener('DOMContentLoaded', () => {
    const fpsMeter = new FPSMeter();
    fpsMeter.start();
});
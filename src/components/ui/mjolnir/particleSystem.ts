/* particleSystem.ts */

interface ParticleState {
    scrollIntensity: number;
}

export interface ParticleSystemControls {
    cleanup: () => void;
    explode: (x: number, y: number) => void;
}

class Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    color: string;
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.x = 0;
        this.y = 0;
        this.size = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.opacity = 0;
        this.color = "";
        this.init();
    }

    init() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 2 + 0.5; // Matches ref size
        this.speedX = (Math.random() - 0.5) * 0.5; // Matches ref speed
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = (Math.random() > 0.8) ? "190, 248, 255" : "255, 255, 255"; // Cyan or White
    }

    update(scrollIntensity: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Parallax shift on scroll (matches ref)
        this.y -= scrollIntensity * 2;

        // Friction for explosion (matches ref)
        if (Math.abs(this.speedX) > 0.5) this.speedX *= 0.95;
        if (Math.abs(this.speedY) > 0.5) this.speedY *= 0.95;

        // Wrap around (matches ref)
        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }

    explode() {
        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;
        const angle = Math.atan2(this.y - centerY, this.x - centerX);
        const force = Math.random() * 15 + 5; // force: 5 - 20 (matches ref)
        this.speedX = Math.cos(angle) * force;
        this.speedY = Math.sin(angle) * force;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.fill();
    }
}

export const initParticles = (
    canvas: HTMLCanvasElement,
    getState: () => ParticleState,
    _getCenter: () => { x: number, y: number }
): ParticleSystemControls => {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        return { cleanup: () => { }, explode: () => { } };
    }

    let particles: Particle[] = [];
    let animationFrameId: number;
    let isActive = true;

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Initial population (matches ref)
    for (let i = 0; i < 150; i++) {
        particles.push(new Particle(canvas));
    }

    const animate = () => {
        if (!isActive) return;

        const { scrollIntensity } = getState();
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update(scrollIntensity);
            p.draw(ctx);
        });

        animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const explode = (_x: number, _y: number) => {
        particles.forEach(p => p.explode());
    }

    const cleanup = () => {
        isActive = false;
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    };

    return { cleanup, explode };
};

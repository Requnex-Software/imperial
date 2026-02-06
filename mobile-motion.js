// --- mobile-motion.js ---

const scrollContainer = document.querySelector('.mob-scroll-container');
const dimmer = document.getElementById('mob-dimmer');
const hero = document.getElementById('first-screen-text'); // Исправил ID на тот, что в HTML
const map = document.getElementById('map-content');        // Исправил ID на тот, что в HTML

// 1. Логика для 1 и 2 экрана (Скролл и прозрачность)
if (scrollContainer) {
    scrollContainer.addEventListener('scroll', () => {
        const vh = window.innerHeight;
        const scrollPos = scrollContainer.scrollTop;
        
        // Прогресс скролла (от 0 до 1)
        const progress = Math.min(scrollPos / vh, 1);
    
        // А. Мягкое затемнение фона
        if (dimmer) {
            dimmer.style.opacity = Math.min(progress * 1.1, 1);
        }
    
        // Б. Уход первого текста (вверх)
        if (hero) {
            hero.style.opacity = 1 - (progress * 2.5);
            hero.style.transform = `translateY(-${progress * 60}px)`;
        }
    
        // В. Появление карты (снизу)
        if (map) {
            if (progress > 0.3) {
                const mapProgress = (progress - 0.3) / 0.7;
                map.style.opacity = mapProgress;
                map.style.pointerEvents = "auto"; // Включаем клики
                map.style.transform = `translateY(${(1 - mapProgress) * 40}px)`;
            } else {
                map.style.opacity = 0;
                map.style.pointerEvents = "none"; // Выключаем клики, чтобы не мешали 1 экрану
            }
        }
    });
}

// 2. Логика для 3 экрана (Появление текста "Ваш путь")
// Вставляем этот новый кусок в конец файла:

const handsSection = document.querySelector('.mob-section-hands');
const handsTextComposite = document.querySelector('.mob-hands-text-composite');

if (handsSection && handsTextComposite) {
    // Наблюдатель: когда секция появляется на экране на 30%
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Добавляем класс, который запускает CSS-анимацию
                handsTextComposite.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(handsSection);
}
// ... (твой старый код)

// Логика скрытия Хедера после 2-го экрана
const mobileHeader = document.getElementById('mobile-header');

if (scrollContainer && mobileHeader) {
    scrollContainer.addEventListener('scroll', () => {
        const vh = window.innerHeight;
        const scrollPos = scrollContainer.scrollTop;
        
        // 2 экрана это 2 * vh. 
        // Скрываем хедер, когда прокрутили 1.8 экрана (почти дошли до Рук)
        if (scrollPos > vh * 1.8) {
            mobileHeader.classList.add('hidden');
        } else {
            mobileHeader.classList.remove('hidden');
        }
    });
}
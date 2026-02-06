import './style.css';
import { createIcons, icons } from 'lucide';

// Initialize Lucide icons
createIcons({
    icons,
});

// Dropdown Logic with Country Search
const prefixBtn = document.getElementById('phone-prefix-btn');
const dropdown = document.getElementById('prefix-dropdown');
const prefixVal = document.querySelector('.prefix-val');
const countryList = document.getElementById('country-list');
const searchInput = document.getElementById('country-search');

// Full list of countries
const countries = [
    { name: 'Afghanistan', code: '+93' },
    { name: 'Albania', code: '+355' },
    { name: 'Algeria', code: '+213' },
    { name: 'Andorra', code: '+376' },
    { name: 'Angola', code: '+244' },
    { name: 'Antigua and Barbuda', code: '+1-268' },
    { name: 'Argentina', code: '+54' },
    { name: 'Armenia', code: '+374' },
    { name: 'Australia', code: '+61' },
    { name: 'Austria', code: '+43' },
    { name: 'Azerbaijan', code: '+994' },
    { name: 'Bahamas', code: '+1-242' },
    { name: 'Bahrain', code: '+973' },
    { name: 'Bangladesh', code: '+880' },
    { name: 'Barbados', code: '+1-246' },
    { name: 'Belarus', code: '+375' },
    { name: 'Belgium', code: '+32' },
    { name: 'Belize', code: '+501' },
    { name: 'Benin', code: '+229' },
    { name: 'Bhutan', code: '+975' },
    { name: 'Bolivia', code: '+591' },
    { name: 'Bosnia and Herzegovina', code: '+387' },
    { name: 'Botswana', code: '+267' },
    { name: 'Brazil', code: '+55' },
    { name: 'Brunei', code: '+673' },
    { name: 'Bulgaria', code: '+359' },
    { name: 'Burkina Faso', code: '+226' },
    { name: 'Burundi', code: '+257' },
    { name: 'Cabo Verde', code: '+238' },
    { name: 'Cambodia', code: '+855' },
    { name: 'Cameroon', code: '+237' },
    { name: 'Canada', code: '+1' },
    { name: 'Central African Republic', code: '+236' },
    { name: 'Chad', code: '+235' },
    { name: 'Chile', code: '+56' },
    { name: 'China', code: '+86' },
    { name: 'Colombia', code: '+57' },
    { name: 'Comoros', code: '+269' },
    { name: 'Congo (Democratic Republic)', code: '+243' },
    { name: 'Congo (Republic)', code: '+242' },
    { name: 'Costa Rica', code: '+506' },
    { name: 'Croatia', code: '+385' },
    { name: 'Cuba', code: '+53' },
    { name: 'Cyprus', code: '+357' },
    { name: 'Czech Republic', code: '+420' },
    { name: 'Denmark', code: '+45' },
    { name: 'Djibouti', code: '+253' },
    { name: 'Dominica', code: '+1-767' },
    { name: 'Dominican Republic', code: '+1-809' },
    { name: 'East Timor', code: '+670' },
    { name: 'Ecuador', code: '+593' },
    { name: 'Egypt', code: '+20' },
    { name: 'El Salvador', code: '+503' },
    { name: 'Equatorial Guinea', code: '+240' },
    { name: 'Eritrea', code: '+291' },
    { name: 'Estonia', code: '+372' },
    { name: 'Eswatini', code: '+268' },
    { name: 'Ethiopia', code: '+251' },
    { name: 'Fiji', code: '+679' },
    { name: 'Finland', code: '+358' },
    { name: 'France', code: '+33' },
    { name: 'Gabon', code: '+241' },
    { name: 'Gambia', code: '+220' },
    { name: 'Georgia', code: '+995' },
    { name: 'Germany', code: '+49' },
    { name: 'Ghana', code: '+233' },
    { name: 'Greece', code: '+30' },
    { name: 'Grenada', code: '+1-473' },
    { name: 'Guatemala', code: '+502' },
    { name: 'Guinea', code: '+224' },
    { name: 'Guinea-Bissau', code: '+245' },
    { name: 'Guyana', code: '+592' },
    { name: 'Haiti', code: '+509' },
    { name: 'Honduras', code: '+504' },
    { name: 'Hungary', code: '+36' },
    { name: 'Iceland', code: '+354' },
    { name: 'India', code: '+91' },
    { name: 'Indonesia', code: '+62' },
    { name: 'Iran', code: '+98' },
    { name: 'Iraq', code: '+964' },
    { name: 'Ireland', code: '+353' },
    { name: 'Israel', code: '+972' },
    { name: 'Italy', code: '+39' },
    { name: 'Jamaica', code: '+1-876' },
    { name: 'Japan', code: '+81' },
    { name: 'Jordan', code: '+962' },
    { name: 'Kazakhstan', code: '+7' },
    { name: 'Kenya', code: '+254' },
    { name: 'Kiribati', code: '+686' },
    { name: 'Korea, North', code: '+850' },
    { name: 'Korea, South', code: '+82' },
    { name: 'Kosovo', code: '+383' },
    { name: 'Kuwait', code: '+965' },
    { name: 'Kyrgyzstan', code: '+996' },
    { name: 'Laos', code: '+856' },
    { name: 'Latvia', code: '+371' },
    { name: 'Lebanon', code: '+961' },
    { name: 'Lesotho', code: '+266' },
    { name: 'Liberia', code: '+231' },
    { name: 'Libya', code: '+218' },
    { name: 'Liechtenstein', code: '+423' },
    { name: 'Lithuania', code: '+370' },
    { name: 'Luxembourg', code: '+352' },
    { name: 'Madagascar', code: '+261' },
    { name: 'Malawi', code: '+265' },
    { name: 'Malaysia', code: '+60' },
    { name: 'Maldives', code: '+960' },
    { name: 'Mali', code: '+223' },
    { name: 'Malta', code: '+356' },
    { name: 'Marshall Islands', code: '+692' },
    { name: 'Mauritania', code: '+222' },
    { name: 'Mauritius', code: '+230' },
    { name: 'Mexico', code: '+52' },
    { name: 'Micronesia', code: '+691' },
    { name: 'Moldova', code: '+373' },
    { name: 'Monaco', code: '+377' },
    { name: 'Mongolia', code: '+976' },
    { name: 'Montenegro', code: '+382' },
    { name: 'Morocco', code: '+212' },
    { name: 'Mozambique', code: '+258' },
    { name: 'Myanmar', code: '+95' },
    { name: 'Namibia', code: '+264' },
    { name: 'Nauru', code: '+674' },
    { name: 'Nepal', code: '+977' },
    { name: 'Netherlands', code: '+31' },
    { name: 'New Zealand', code: '+64' },
    { name: 'Nicaragua', code: '+505' },
    { name: 'Niger', code: '+227' },
    { name: 'Nigeria', code: '+234' },
    { name: 'North Macedonia', code: '+389' },
    { name: 'Norway', code: '+47' },
    { name: 'Oman', code: '+968' },
    { name: 'Pakistan', code: '+92' },
    { name: 'Palau', code: '+680' },
    { name: 'Palestine', code: '+970' },
    { name: 'Panama', code: '+507' },
    { name: 'Papua New Guinea', code: '+675' },
    { name: 'Paraguay', code: '+595' },
    { name: 'Peru', code: '+51' },
    { name: 'Philippines', code: '+63' },
    { name: 'Poland', code: '+48' },
    { name: 'Portugal', code: '+351' },
    { name: 'Qatar', code: '+974' },
    { name: 'Romania', code: '+40' },
    { name: 'Russia', code: '+7' },
    { name: 'Rwanda', code: '+250' },
    { name: 'Saint Kitts and Nevis', code: '+1-869' },
    { name: 'Saint Lucia', code: '+1-758' },
    { name: 'Saint Vincent', code: '+1-784' },
    { name: 'Samoa', code: '+685' },
    { name: 'San Marino', code: '+378' },
    { name: 'Sao Tome and Principe', code: '+239' },
    { name: 'Saudi Arabia', code: '+966' },
    { name: 'Senegal', code: '+221' },
    { name: 'Serbia', code: '+381' },
    { name: 'Seychelles', code: '+248' },
    { name: 'Sierra Leone', code: '+232' },
    { name: 'Singapore', code: '+65' },
    { name: 'Slovakia', code: '+421' },
    { name: 'Slovenia', code: '+386' },
    { name: 'Solomon Islands', code: '+677' },
    { name: 'Somalia', code: '+252' },
    { name: 'South Africa', code: '+27' },
    { name: 'South Sudan', code: '+211' },
    { name: 'Spain', code: '+34' },
    { name: 'Sri Lanka', code: '+94' },
    { name: 'Sudan', code: '+249' },
    { name: 'Suriname', code: '+597' },
    { name: 'Sweden', code: '+46' },
    { name: 'Switzerland', code: '+41' },
    { name: 'Syria', code: '+963' },
    { name: 'Taiwan', code: '+886' },
    { name: 'Tajikistan', code: '+992' },
    { name: 'Tanzania', code: '+255' },
    { name: 'Thailand', code: '+66' },
    { name: 'Togo', code: '+228' },
    { name: 'Tonga', code: '+676' },
    { name: 'Trinidad and Tobago', code: '+1-868' },
    { name: 'Tunisia', code: '+216' },
    { name: 'Turkey', code: '+90' },
    { name: 'Turkmenistan', code: '+993' },
    { name: 'Tuvalu', code: '+688' },
    { name: 'Uganda', code: '+256' },
    { name: 'Ukraine', code: '+380' },
    { name: 'United Arab Emirates', code: '+971' },
    { name: 'United Kingdom', code: '+44' },
    { name: 'United States', code: '+1' },
    { name: 'Uruguay', code: '+598' },
    { name: 'Uzbekistan', code: '+998' },
    { name: 'Vanuatu', code: '+678' },
    { name: 'Vatican City', code: '+379' },
    { name: 'Venezuela', code: '+58' },
    { name: 'Vietnam', code: '+84' },
    { name: 'Yemen', code: '+967' },
    { name: 'Zambia', code: '+260' },
    { name: 'Zimbabwe', code: '+263' },
].sort((a, b) => a.name.localeCompare(b.name));

function renderCountries(filter = '') {
    if (!countryList) return;
    countryList.innerHTML = '';

    const filtered = countries.filter(
        c =>
            c.name.toLowerCase().includes(filter.toLowerCase()) ||
            c.code.includes(filter),
    );

    if (filtered.length === 0) {
        countryList.innerHTML =
            '<div class="prefix-item" style="pointer-events: none; color: #666;">No results</div>';
        return;
    }

    filtered.forEach(country => {
        const item = document.createElement('div');
        item.className = 'prefix-item';
        if (
            country.code === prefixVal.textContent &&
            country.name === 'United States'
        ) {
            // Simple active check
            // item.classList.add('selected'); // Logic needs improvement for +1 shared codes
        }
        item.textContent = `${country.name} (${country.code})`;
        item.setAttribute('data-code', country.code);

        item.addEventListener('click', e => {
            e.stopPropagation();
            prefixVal.textContent = country.code;
            prefixBtn.classList.remove('active');
        });

        countryList.appendChild(item);
    });
}

if (prefixBtn && dropdown) {
    // Initial render
    renderCountries();

    // Toggle dropdown
    prefixBtn.addEventListener('click', e => {
        e.stopPropagation();

        prefixBtn.classList.toggle('active');
        if (prefixBtn.classList.contains('active')) {
            renderCountries();
        }
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
        prefixBtn.classList.remove('active');
    });
}

// Language Switcher Logic (New implementation)
const langBtn = document.getElementById('lang-btn');
const langDropdown = document.getElementById('lang-dropdown');
const langContainer = document.querySelector('.lang-switch-container');
const langItems = document.querySelectorAll('.lang-item');

if (langBtn && langContainer) {
    // Toggle dropdown
    langBtn.addEventListener('click', e => {
        e.stopPropagation();
        langContainer.classList.toggle('active');
        langBtn.classList.toggle('active');
    });

    // Handle item selection
    langItems.forEach(item => {
        item.addEventListener('click', e => {
            e.stopPropagation();
            const lang = item.getAttribute('data-lang');
            langBtn.textContent = lang.toUpperCase();

            // Update selected state
            langItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Close dropdown
            langContainer.classList.remove('active');
            langBtn.classList.remove('active');
        });
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
        langContainer.classList.remove('active');
        langBtn.classList.remove('active');
    });
}

// Carousel Logic
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.nav-btn.prev');
const nextBtn = document.querySelector('.nav-btn.next');
const cards = document.querySelectorAll('.story-card');

let currentIndex = 0;
const cardWidth = 280 + 24; // width + gap

if (track && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > cards.length - 3) {
            // Show 3 at a time roughly
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = cards.length - 3;
        }
        updateCarousel();
    });
}

function updateCarousel() {
    const offset = -(currentIndex * cardWidth);
    track.style.transform = `translateX(${offset}px)`;

    // Update active state
    cards.forEach((card, index) => {
        card.classList.remove('active-card');
        if (index === currentIndex + 1) {
            // Center card active logic simplified
            card.classList.add('active-card');
        }
    });
}

// Accordion Logic for Couples List
const coupleItems = document.querySelectorAll('.couple-item');

coupleItems.forEach(item => {
    item.addEventListener('click', () => {
        // For now just console log as layout changes are static in this demo
        console.log('Couple clicked:', item.querySelector('h3').innerText);
    });
});

// --- Cookies Modal Logic ---
const cookiesModal = document.getElementById('cookies-modal');
const acceptCookiesBtn = document.getElementById('accept-cookies');

if (cookiesModal && acceptCookiesBtn) {
    // Check if already accepted (simulated)
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');

    if (!cookiesAccepted) {
        // Show after a short delay
        setTimeout(() => {
            cookiesModal.classList.add('active');
        }, 1000);
    }

    acceptCookiesBtn.addEventListener('click', () => {
        cookiesModal.classList.remove('active');
        localStorage.setItem('cookiesAccepted', 'true');
    });
}

// --- Success Popup Logic ---
const form = document.querySelector('.application-form');
const successPopup = document.getElementById('success-popup');
const closeSuccessBtn = document.getElementById('close-success');

if (form && successPopup && closeSuccessBtn) {
    form.addEventListener('submit', e => {
        e.preventDefault(); // Prevent actual submission

        // Simulate API call/loading
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Отправка...';

        setTimeout(() => {
            // Reset button
            submitBtn.textContent = originalText;
            form.reset();

            // Show popup
            successPopup.classList.add('active');
        }, 1500);
    });

    closeSuccessBtn.addEventListener('click', () => {
        successPopup.classList.remove('active');
    });

    // Close when clicking overlay
    successPopup.addEventListener('click', e => {
        if (e.target === successPopup) {
            successPopup.classList.remove('active');
        }
    });
}

// Image Injection (Simulated for now, usually fetched)
// In a real app, these would be set in HTML or fetched from API.
// We are setting them here to ensure the generated images (which we will add next) are used.
// The placeholders in HTML have IDs, we can update them if needed, or just rely on the src attributes we set in HTML once we have URLs.
// Since we are about to generate images, I will update the HTML file with the generated URLs.
// Мобильный моушн для плавного перехода Лиса -> Карта

// ================================
// 💖 VALENTINE SCRIPT (DYNAMIC) 💖
// ================================

const config = window.VALENTINE_CONFIG;
const questions = Object.values(config.questions);
let currentIndex = 0;

// DOM Elements
const questionSections = document.querySelectorAll('.question-section');
const questionText = document.getElementById('questionText');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const secretBtn = document.getElementById('secretAnswerBtn');

const loveMeterSection = document.getElementById('loveMeterSection');
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');
const nextBtn = document.getElementById('nextBtn');

// ================================
// Init
// ================================
document.title = config.pageTitle;

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('valentineTitle').textContent =
        `${config.valentineName}, my love...`;

    createFloatingElements();
    setupMusicPlayer();
    renderQuestion();
    initLoveMeter();
});

// ================================
// Render Question
// ================================
function renderQuestion() {
    hideAllSections();

    const q = questions[currentIndex];

    // Love Meter Question
    if (q.startText && q.nextBtn) {
        loveMeterSection.classList.remove('hidden');
        questionText.textContent = q.text;
        document.getElementById('startText').textContent = q.startText;
        nextBtn.textContent = q.nextBtn;
        return;
    }

    // Yes / No Question
    document.getElementById('questionBox').classList.remove('hidden');
    questionText.textContent = q.text;
    yesBtn.textContent = q.yesBtn;
    noBtn.textContent = q.noBtn || "No";

    if (q.secretAnswer) {
        secretBtn.textContent = q.secretAnswer;
        secretBtn.classList.remove('hidden');
    } else {
        secretBtn.classList.add('hidden');
    }
}

// ================================
// Button Actions
// ================================
yesBtn.addEventListener('click', nextStep);
noBtn.addEventListener('click', () => moveButton(noBtn));
nextBtn.addEventListener('click', nextStep);

function nextStep() {
    currentIndex++;

    if (currentIndex >= questions.length) {
        celebrate();
    } else {
        renderQuestion();
    }
}

// ================================
// Helpers
// ================================
function hideAllSections() {
    questionSections.forEach(q => q.classList.add('hidden'));
}

// Move No button
function moveButton(btn) {
    btn.style.position = 'fixed';
    btn.style.left = Math.random() * (window.innerWidth - 100) + 'px';
    btn.style.top = Math.random() * (window.innerHeight - 50) + 'px';
}

// ================================
// Love Meter Logic
// ================================
function initLoveMeter() {
    loveMeter.value = 100;
    loveValue.textContent = 100;

    loveMeter.addEventListener('input', () => {
        const value = parseInt(loveMeter.value);
        loveValue.textContent = value;

        if (value > 100) {
            extraLove.classList.remove('hidden');

            if (value >= 5000) {
                extraLove.textContent = config.loveMessages.extreme;
            } else if (value > 1000) {
                extraLove.textContent = config.loveMessages.high;
            } else {
                extraLove.textContent = config.loveMessages.normal;
            }
        } else {
            extraLove.classList.add('hidden');
        }
    });
}

// ================================
// Celebration
// ================================
function celebrate() {
    hideAllSections();
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    document.getElementById('celebrationTitle').textContent =
        config.celebration.title;
    document.getElementById('celebrationMessage').textContent =
        config.celebration.message;
    document.getElementById('celebrationEmojis').textContent =
        config.celebration.emojis;

    createHeartExplosion();
}

// ================================
// Floating Emojis
// ================================
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');

    [...config.floatingEmojis.hearts, ...config.floatingEmojis.bears]
        .forEach(emoji => {
            const div = document.createElement('div');
            div.innerHTML = emoji;
            div.className = 'floating';
            div.style.left = Math.random() * 100 + 'vw';
            div.style.animationDuration =
                10 + Math.random() * 10 + 's';
            container.appendChild(div);
        });
}

function createHeartExplosion() {
    for (let i = 0; i < 40; i++) {
        const heart = document.createElement('div');
        heart.innerHTML =
            config.floatingEmojis.hearts[
                Math.floor(Math.random() *
                config.floatingEmojis.hearts.length)
            ];
        heart.className = 'floating';
        document.querySelector('.floating-elements').appendChild(heart);
    }
}

// ================================
// Music Player
// ================================
function setupMusicPlayer() {
    if (!config.music.enabled) return;

    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const source = document.getElementById('musicSource');

    source.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    if (config.music.autoplay) {
        bgMusic.play().catch(() => {});
    }

    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
                       }

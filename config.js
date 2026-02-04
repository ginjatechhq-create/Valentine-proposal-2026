// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Achalugo",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
// Designed to feel like a gentle love journey 💞
questions: {
    first: {
        text: "Hey… can I ask you something? 🥹",
        yesBtn: "Of course ❤️",
        noBtn: "Hmm… okay 😌",
        secretAnswer: "I don’t just like you… I care about you more than words can say 💕"
    },

    second: {
        text: "Do you feel happy when you see my message? 😊",
        yesBtn: "Always ❤️",
        noBtn: "Sometimes 😌"
    },

    third: {
        text: "If I wasn’t around for a day… would you miss me? 🥺",
        yesBtn: "Of course I would 💕",
        noBtn: "Maybe a little 😅"
    },

    fourth: {
        text: "Do I make you smile without even trying? 😄",
        yesBtn: "Yes, every time 😍",
        noBtn: "You do sometimes 😉"
    },

    fifth: {
        text: "Would you feel safe telling me anything? 💭❤️",
        yesBtn: "Yes, I trust you 🫶",
        noBtn: "I think so 🤍"
    },

    sixth: {
        text: "Okay… be honest 🥹 how special am I to you? 💖",
        startText: "You mean this much…",
        nextBtn: "Tell me more ❤️"
    },

    seventh: {
        text: "One last thing… will you be my Valentine this February 14th? 🌹✨",
        yesBtn: "Yes, always ❤️",
        noBtn: "Let me think 😅"
    }
},
    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "WOOOOW You love me that much Achalugo?? 🥰🚀💝",  // Shows when they go past 5000%
        high: "To infinity and beyond! 🚀💝",              // Shows when they go past 1000%
        normal: "And beyond! 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "Now come get your gift, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 

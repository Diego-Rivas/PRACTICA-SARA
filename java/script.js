document.addEventListener('DOMContentLoaded', () => {
    const envelopeScreen = document.getElementById('envelopeScreen');
    const letterScreen = document.getElementById('letterScreen');
    const openBtn = document.getElementById('openBtn');
    const backBtn = document.getElementById('backBtn');
    const envelope = document.querySelector('.envelope');

    openBtn.onclick = () => {
        envelope.classList.add('open');
        setTimeout(() => {
            envelopeScreen.classList.remove('active');
            letterScreen.classList.add('active');
        }, 500);
    };

    backBtn.onclick = () => {
        letterScreen.classList.remove('active');
        setTimeout(() => {
            envelopeScreen.classList.add('active');
            envelope.classList.remove('open');
        }, 300);
    };
});
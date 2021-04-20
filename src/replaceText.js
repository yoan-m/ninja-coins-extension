const language = document.querySelector('html').lang;
const santeDollar = {
    fr: 'Santédollars',
    en: 'Healthdollars'
};

export default function replaceText(element) {
    if (element && element.textContent) {
        element.textContent = element.textContent.replace(santeDollar[language], 'Ninja Coins');
    }
}
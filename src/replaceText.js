export default function replaceText(element) {
    if (element && element.textContent) {
        element.textContent = element.textContent.replace('Santédollars', 'Ninja Coins');
    }
}
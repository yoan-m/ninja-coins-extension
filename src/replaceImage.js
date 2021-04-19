const ninjaCoinUrl = chrome.runtime.getURL('assets/ninjacoin.svg');

export default function replaceImage(img) {
    if (img instanceof HTMLImageElement) {
        img.src = ninjaCoinUrl;
    }
}
const ninjaCoinUrl = chrome.runtime.getURL('assets/ninjacoin.svg');

const santeDollarIcons = [
    document.querySelector('.TableNovodollars .ImageIcone'),
    document.querySelector('.TableSommaire .ImageIcone'),
    ...document.getElementsByClassName('NovodollarsSansFond')
].filter(img => img);

for (let img of santeDollarIcons) {
    img.src = ninjaCoinUrl;
}

const replaceText = element => {
    if (element && element.textContent) {
        element.textContent = element.textContent.replace('Santédollars', 'Ninja Coins');
    }
}

replaceText(document.querySelector('h1'));
replaceText(document.querySelector('.NoteBas.Droite'));
replaceText(document.querySelector('.TableSommaire .Libelle'));
replaceText(document.querySelector('ul.navbar-nav ul.dropdown-menu li:nth-child(2) a'));
replaceText(document.querySelector('ul.navbar-nav ul.dropdown-menu li:nth-child(4) a'));

for (let panel of document.querySelectorAll('.sky-form .tab-pane')) {
    const observer = new MutationObserver(mutationsList => {
        replaceText(document.querySelector('span.hidden-xs'));
        replaceText(document.querySelector('.col-xs-12:nth-child(2) .TitreDiagrammes .Libelle'));
    });

    observer.observe(panel, {attributes: true, childList: true});
}
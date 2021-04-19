import replaceText from './replaceText';

export default function replaceSkyForm() {
    for (let panel of document.querySelectorAll('.sky-form .tab-pane')) {
        const observer = new MutationObserver(mutationsList => {
            replaceText(document.querySelector('span.hidden-xs'));
            replaceText(document.querySelector('.col-xs-12:nth-child(2) .TitreDiagrammes .Libelle'));
        });
    
        observer.observe(panel, {attributes: true, childList: true});
    }
}
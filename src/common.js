import replaceImage from './replaceImage';
import replaceText from './replaceText';

replaceImage(document.querySelector('.ImageIcone.NovodollarsSansFond'));
replaceText(document.querySelector('ul.navbar-nav ul.dropdown-menu li:nth-child(2) a'));
replaceText(document.querySelector('ul.navbar-nav ul.dropdown-menu li:nth-child(4) a'));

const logo = document.createElement('img');
logo.width = 60;
logo.src = chrome.runtime.getURL('../assets/tlmlogo.svg');

const company = document.getElementById('nomEntrepriseHeader');
company.textContent = '';
company.append(logo);
company.style.bottom = '5px';
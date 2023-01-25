import { encrypt, decrypt } from './encrypt.js';
import { copyText } from './copyText.js';
import { translate, selectLanguage } from './translate.js';
import { saveTheme, changeTheme } from './theme.js';
import { fontReset, fontDecrease, fontIncrease } from './font.js';

const theme = document.getElementsByClassName('theme_content')[0];
const form = document.querySelector('form');
const fontIncreaseButton = document.getElementById('font__increase');
const fontResetButton = document.getElementById('font__reset');
const fontDecreaseButton = document.getElementById('font__decrease');
const buttonEncrypt = document.getElementById('button__Encrypt');
const buttonDecrypt = document.getElementById('button__Decrypt');
const textToEncodeOrToDecode = document.getElementById('text__encoded');
const textEncodedOrDecoded = document.getElementById('text__decoded');
const divNoContentText = document.getElementById('card__text');
const sectionTextEncodedOrDecoded = document.getElementById('card__copy');
const divCopySucess = document.getElementById('card__sucess');
const buttonCopy = document.getElementById('button__Copy');
const validationError = document.getElementById('validation__error');
const validation = document.getElementById('validation__warnning');
const validationBox = document.getElementsByClassName('validation')[0];
const subtitleMessage = document.getElementById('card__subtitle');
const titleMessage = document.getElementById('card__title');
const textCopy = document.getElementById('text__copy');
const languageList = document.getElementsByClassName('language__list')[0];
const list = languageList.getElementsByTagName('li');

saveTheme();
!textEncodedOrDecoded.value
? (sectionTextEncodedOrDecoded.style.display = 'none')
: null;

buttonEncrypt.addEventListener('click', (e) => {
  e.preventDefault();

  if (!textToEncodeOrToDecode.value) {
    validation.style.display = 'none';
    validationError.style.display = 'block';
    validationBox.style.color = 'red';
    validationBox.style.fontWeight = 600;
    textToEncodeOrToDecode.focus();
  } else {
    let textEncoded = encrypt(textToEncodeOrToDecode.value);

    textEncodedOrDecoded.innerText = textEncoded;

    if (textEncodedOrDecoded) {
      sectionTextEncodedOrDecoded.style.display = 'flex';
      divNoContentText.style.display = 'none';
      divCopySucess.style.display = 'none';
    }

    form.reset();

    validation.style.display = 'block';
    validationError.style.display = 'none';
    validationBox.style.color = 'black';
    validationBox.style.fontWeight = 400;
  }
});

buttonDecrypt.addEventListener('click', (e) => {
  e.preventDefault();

  if (!textToEncodeOrToDecode.value) {
    validation.style.display = 'none';
    validationError.style.display = 'block';
    validationBox.style.color = 'red';
    validationBox.style.fontWeight = 600;
    textToEncodeOrToDecode.focus();
  } else {
    let textDecoded = decrypt(textToEncodeOrToDecode.value);

    textEncodedOrDecoded.innerText = textDecoded;

    if (textEncodedOrDecoded) {
      sectionTextEncodedOrDecoded.style.display = 'flex';
      divNoContentText.style.display = 'none';
      divCopySucess.style.display = 'none';
    }

    form.reset();

    validation.style.display = 'block';
    validationError.style.display = 'none';
    validationBox.style.color = 'black';
    validationBox.style.fontWeight = 400;
  }
});

buttonCopy.addEventListener('click', async () => {
  copyText(textEncodedOrDecoded.innerHTML);
  textEncodedOrDecoded.innerText = '';
  divCopySucess.style.display = 'flex';
  sectionTextEncodedOrDecoded.style.display = 'none';
});

document.getElementById('ingles').addEventListener('click', function () {
  let language = this.value;
  selectLanguage(languageList, list, language);
  translate({
    language,
    buttonEncrypt,
    buttonDecrypt,
    textToEncodeOrToDecode,
    buttonCopy,
    validationError,
    validation,
    subtitleMessage,
    titleMessage,
    textCopy,
  });
});
document.getElementById('portugues').addEventListener('click', function () {
  let language = this.value;
  selectLanguage(languageList, list, language);
  translate({
    language,
    buttonEncrypt,
    buttonDecrypt,
    textToEncodeOrToDecode,
    buttonCopy,
    validationError,
    validation,
    subtitleMessage,
    titleMessage,
    textCopy,
  });
});
document.getElementById('espanhol').addEventListener('click', function () {
  let language = this.value;
  selectLanguage(languageList, list, language);
  translate({
    language,
    buttonEncrypt,
    buttonDecrypt,
    textToEncodeOrToDecode,
    buttonCopy,
    validationError,
    validation,
    subtitleMessage,
    titleMessage,
    textCopy,
  });
});

theme.addEventListener('click', () => {
  changeTheme();
});

fontIncreaseButton.addEventListener('click', () => {
  fontIncrease();
});
fontResetButton.addEventListener('click', () => {
  fontReset();
});
fontDecreaseButton.addEventListener('click', () => {
  fontDecrease();
});
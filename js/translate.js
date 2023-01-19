export const selectLanguage = (content, list, item) => {
  for (let i = 0; i < list.length; i++) {
    if (list[i].getAttribute('data-value') == item) {
      switch (i) {
        case 0:
          break;
        case 1:
          content.insertBefore(list[list.length - 2], list[0]);
          break;
        case 2:
          content.insertBefore(list[list.length - 1], list[0]);
          break;
      }
    }
  }
};

export const translate = (objectTranslate) => {
  if (objectTranslate.language == 'ingles') {
    objectTranslate.buttonEncrypt.innerHTML = EN.buttonEncrypt;
    objectTranslate.buttonDecrypt.innerHTML = EN.buttonDecrypt;
    objectTranslate.textToEncodeOrToDecode.placeholder = EN.textareaPlaceholder;
    objectTranslate.buttonCopy.innerHTML = EN.buttonCopy;
    objectTranslate.validationError.innerHTML = EN.validationError;
    objectTranslate.validation.innerHTML = EN.validation;
    objectTranslate.subtitleMessage.innerHTML = EN.subtitleMessage;
    objectTranslate.titleMessage.innerHTML = EN.titleMessage;
    objectTranslate.textCopy.innerHTML = EN.textCopy;
  }
  if (objectTranslate.language == 'espanhol') {
    objectTranslate.buttonEncrypt.innerHTML = ES.buttonEncrypt;
    objectTranslate.buttonDecrypt.innerHTML = ES.buttonDecrypt;
    objectTranslate.textToEncodeOrToDecode.placeholder = ES.textareaPlaceholder;
    objectTranslate.buttonCopy.innerHTML = ES.buttonCopy;
    objectTranslate.validationError.innerHTML = ES.validationError;
    objectTranslate.validation.innerHTML = ES.validation;
    objectTranslate.subtitleMessage.innerHTML = ES.subtitleMessage;
    objectTranslate.titleMessage.innerHTML = ES.titleMessage;
    objectTranslate.textCopy.innerHTML = ES.textCopy;
  }
  if (objectTranslate.language == 'portugues') {
    objectTranslate.buttonEncrypt.innerHTML = PT.buttonEncrypt;
    objectTranslate.buttonDecrypt.innerHTML = PT.buttonDecrypt;
    objectTranslate.textToEncodeOrToDecode.placeholder = PT.textareaPlaceholder;
    objectTranslate.buttonCopy.innerHTML = PT.buttonCopy;
    objectTranslate.validationError.innerHTML = PT.validationError;
    objectTranslate.validation.innerHTML = PT.validation;
    objectTranslate.subtitleMessage.innerHTML = PT.subtitleMessage;
    objectTranslate.titleMessage.innerHTML = PT.titleMessage;
    objectTranslate.textCopy.innerHTML = PT.textCopy;
  }
};

const PT = {
  textareaPlaceholder: 'Digite seu texto',
  buttonEncrypt: 'Criptografar',
  buttonDecrypt: 'Descriptografar',
  buttonCopy: 'Copiar',
  validation: 'Apenas letras minúsculas e sem acento.',
  validationError:
    'Por favor, digite uma mensagem para ser criptografada ou descriptografada!',
  titleMessage: 'Nenhuma mensagem encontrada',
  subtitleMessage:
    'Digite um texto que você deseja criptografar ou descriptografar.',
  textCopy: 'Texto copiado para sua área de transferência!',
};
const ES = {
  textareaPlaceholder: 'Escribe tu texto',
  buttonEncrypt: 'Cifrar',
  buttonDecrypt: 'Descifrar',
  buttonCopy: 'Copiar',
  validation: 'Solo letras minúsculas y sin acento.',
  validationError: '¡Ingrese un mensaje para cifrar o descifrar!',
  titleMessage: 'Ningún mensaje encontrado',
  subtitleMessage: 'Ingrese algún texto que desee cifrar o descifrar.',
  textCopy: '¡Texto copiado en tu portapapeles!',
};
const EN = {
  textareaPlaceholder: 'Type your text',
  buttonEncrypt: 'Encrypt',
  buttonDecrypt: 'Decrypt',
  buttonCopy: 'Copy',
  validation: 'Only lowercase letters and no accent.',
  validationError: 'Please enter a message to be encrypted or decrypted!',
  titleMessage: 'No message found',
  subtitleMessage: 'Enter some text that you want to encrypt or decrypt.',
  textCopy: 'Text copied to your clipboard!',
};

'use strict';
const copyButton=document.querySelector('#copy-prompt');
const promptText=document.querySelector('#master-prompt');
const copyStatus=document.querySelector('#copy-status');
copyButton.addEventListener('click',async()=>{
 try{
  if(!navigator.clipboard)throw new Error('clipboard unavailable');
  await navigator.clipboard.writeText(promptText.value);
  copyStatus.textContent='Prompt copiado. Pégalo en tu agente junto con la carpeta completa del proyecto.';
  copyButton.textContent='Prompt copiado ✓';
 }catch{
  promptText.closest('details').open=true;promptText.focus();promptText.select();
  copyStatus.textContent='El navegador no permitió copiar. El texto está seleccionado: usa Copiar o Ctrl+C.';
 }
});

const string = "JavaScript es un lenguaje de programacion que permite realizar diversas acciones"
const replacestring = string.replace("JavaScript", "TypeScript") // el primer valor es el que busca y el segundo es por el que lo cambia
console.log(replacestring);

// el método replace solo cambia la primera coincidencia, mientras que replaceAll cambia todas las que coincidan, devuelve una nueva cadena con todas las coincidencias de un patron reemplazadas por el segundo argumento, la cadena original no sufre cambios
// Ejemplo de alguien que encontre en los comentarios
const inputText = "If you're :) and you know it :clap your hands :clap :clap"

const emojiReplace = (text) => {
  let emojized = ""
  emojized = text.replaceAll(':)', '😀')
  emojized = emojized.replaceAll(':clap', '👏🏻')

  return emojized
}

console.log(emojiReplace(inputText))
var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
let element = startEl.children;

if(matchFunc(startEl)){
  resultSet.push(startEl);
}

for (let i = 0; i < element.length; i++){
  let result = traverseDomAndCollectElements(matchFunc, element[i])

  resultSet = [...resultSet, ...result]
}

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

var selectorTypeMatcher = function (selector) {
  // tu código aquí
  if(selector[0] === "#") {
    return "id";
  } else if(selector.startsWith(".")) {
    return "class";
  } else if(selector.includes(".")){
    return "tag.class";
  } else {
    return "tag";
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) { 
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction = function (element){
    if (selectorType === "id") {
      return element.id === selector.substring(1); //el metodo substring() elimina los caracteres de un string q le indicas // le elimino el #
  } else if (selectorType === "class") {
      return element.classList.contains(selector.substring(1));  
  } else if (selectorType === "tag.class") {
      if(element.tagName && element.tagName.toLowerCase() === selector.split(".")[0].toLowerCase() && element.classList.contains(selector.split(".")[1])){
        //esto se podria haber hecho con recursion, en vez de copiar todo de nuevo. (habria que agregarle el . a la clase antes de pasarlo de nuevo porque sino no lo va a tomar como clase)
        return true;
      } else {
        return false;
      };
  } else if (selectorType === "tag") {
    return element.tagName && element.tagName.toLowerCase() === selector.toLowerCase();
  }
}
  return matchFunction;
};

var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  function traverse(startEl) {
    if (matchFunc(startEl)) resultSet.push(startEl);

    for (var i = 0; i < startEl.children.length; i++) {
      traverse(startEl.children[i]);
    }
  }

  // Inicia la recursión desde el elemento de inicio
  traverse(startEl);

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

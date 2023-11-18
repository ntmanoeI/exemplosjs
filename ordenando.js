//mapeamento
document.getElementById("adicionar").addEventListener("click", add);

document.getElementById("ordenar").addEventListener("click", ordenar);

document.getElementById("misturar").addEventListener("click", misturar);

document.getElementById("algoritmo").addEventListener("change", ordenar);

//#########################################################################################################

// a) Função swap
const swap = (array, pos1, pos2) => {
  [array[pos1], array[pos2]] = [array[pos2], array[pos1]];
};

// b) Função shuffle
const shuffle = (array, numSwaps) => {
  for (let i = 0; i < numSwaps; i++) {
    const pos1 = Math.floor(Math.random() * array.length);
    const pos2 = Math.floor(Math.random() * array.length);
    swap(array, pos1, pos2);
  }
};


// c) Função bubble_sort
const bubble_sort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
};



/*
function bubble_sort(array) { 
  let swap;
  let last = array.length - 1; 
  do {
    swap = false;
    for (let i = 0; i < last; i++) { 
      if (array [i] > array [i + 1]) {
        [array [i], array [i + 1]] = [array [i + 1], array[i]]; 
        swap = true;
      }
  } 
    last--;
  } while (swap) 
  return array;
}
*/



// d) Função selection_sort
const selection_sort = (array) => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
};


// e) Função quick_sort
const quick_sort = (array, low, high) => {
  if (low < high) {
    const pivotIndex = partition(array, low, high);
    quick_sort(array, low, pivotIndex - 1);
    quick_sort(array, pivotIndex + 1, high);
  }
};

// f) Função particionamento
const partition = (array, low, high) => {
  const pivot = array[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, high);
  return i + 1;
};

//#################################################################################
//funções
function add() {
  console.log("Botao Adicionar Clicado");

  // a) Capturar o campo de entrada
  var campoValor = document.getElementById("valor");

  // b) Capturar a lista
  var listaValores = document.getElementById("valores");

  // c) Criar um elemento li
  var node = document.createElement("li");

  // d) Definir um nó de texto
  var textNode = document.createTextNode(campoValor.value);

  // Incluir o nó de texto como filho de node
  node.appendChild(textNode);

  // e) Adicionar o elemento li à lista
  listaValores.appendChild(node);

  // Limpar o campo de entrada após adicionar à lista
  campoValor.value = "";
}


//####################################################################################
function ordenar() {
    // a) Capturar a lista de valores e a lista de seleção
    var listaValores = document.getElementById("valores");
    var listaSelecao = document.getElementById("algoritmo");
  
    // b) Obter cada nó da lista de valores e adicionar o conteúdo do item em um vetor
    var vetorValores = Array.from(listaValores.children).map(function (item) {
      return parseInt(item.innerHTML);  //aqui antes era .innerHTML
    });
 

    // c) Escolher o algoritmo de ordenação adequado
/*  var algoritmoSelecionado = listaSelecao.options[listaSelecao.selectedIndex].value;
*/
    console.log("Valor selecionado no menu suspenso:", listaSelecao.value);
    var algoritmoSelecionado = listaSelecao.value;
    switch (algoritmoSelecionado) {
      case "Bubble Sort":
        bubble_sort(vetorValores);
        break;
      case "Selection Sort":
        selection_sort(vetorValores);
        break;
      case "Quick Sort":
        quick_sort(vetorValores, 0, vetorValores.length - 1);
        break;
      default:
        console.log("Algoritmo de ordenação não reconhecido");
        return;
    }
  
    // e) Gerar os novos itens da lista de valores
    var novosItens = vetorValores.map(function (valor) {
      return "<li>" + valor + "</li>";
    });
  
    // Substituir o conteúdo da lista via innerHTML
    listaValores.innerHTML = novosItens.reduce(function (acumulador, item) {
      return acumulador + item;
    }, "");
}
  

//#####################################################################################
function misturar() {
    var listaValores = document.getElementById("valores");
    var itens = Array.from(listaValores.children);
  
    // Obter valores atuais
    var valores = itens.map(function (item) {
      return parseInt(item.innerHTML);
    });
  
    // Embaralhar os valores
    shuffle(valores, valores.length * 2);
  
    // Atualizar a lista
    listaValores.innerHTML = valores.map(function (valor) {
      return "<li>" + valor + "</li>";
    }).reduce(function (acumulador, item) {
      return acumulador + item;
    }, "");
};
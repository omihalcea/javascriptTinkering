<script setup>
import {ref} from 'vue';

// Inicialitzem la pantalla amb un '0'
const display = ref('0');

// Funció per afegir a la pantalla
const appendToDisplay = (value) => {
  // Si la pantalla actual és '0', reemplaçar-ho
  if (display.value === '0' && value !== 'C' && value !== 'AC') {
    display.value = value;
  } else {
    // Obtenim l'últim caràcter del display
    const lastChar = display.value.slice(-1);

    // No fem res si tant l'últim caràcter com el nou valor són operadors
    if (['x', '/', '+', '-', '.'].includes(lastChar) && ['x', '/', '+', '-', '.'].includes(value)) {
      return;
    } else {
      // Afegim el nou valor a la pantalla
      display.value += value;
    }
  }
};

// Funció per esborrar l'últim caràcter
const clearLast = () => {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0'; // Si queda buit, mostrar '0'
  }
};

// Funció per esborrar tota la pantalla
const clearDisplay = () => {
  display.value = '0'; // Reestableix a '0'
};

// Funció per calcular el resultat
const calculateResult = () => {
  try {
    const result = eval(display.value.replace(/x/g, '*'));
    display.value = result.toString();
  } catch (error) {
    display.value = 'Error';
  }
};
</script>


<template>
  <div class="contingut max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-16 container flex-grow content-fade">
    <h1 class="titul text-white px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">Calculadora</h1>

    <div class="bg-inherit p-4 rounded-lg">
      <!-- Pantalla de la calculadora -->
      <input
          type="text"
          v-model="display"
          class="display w-full p-4 text-right text-2xl border border-gray-300 rounded mb-4"
          readonly
      />

      <!-- Botons numèrics i d'operació -->
      <div class="grid grid-cols-4 gap-4 items-center">
        <button @click="appendToDisplay('(')" class="btn oper" value="(">(</button>
        <button @click="appendToDisplay(')')" class="btn oper" value=")">)</button>
        <button @click="clearDisplay('C')" class="btn bg-red-500 hover:bg-red-700 text-white" value="C">C</button>
        <button @click="clearLast('AC')" class="btn bg-green-500 hover:bg-green-700 text-white" value="AC">AC</button>
        <!-- Números -->
        <button @click="appendToDisplay('7')" class="btn num" value="7">7</button>
        <button @click="appendToDisplay('8')" class="btn num" value="8">8</button>
        <button @click="appendToDisplay('9')" class="btn num" value="9">9</button>
        <button @click="appendToDisplay('/')" class="btn oper" value="/">÷</button>

        <button @click="appendToDisplay('4')" class="btn num" value="4">4</button>
        <button @click="appendToDisplay('5')" class="btn num" value="5">5</button>
        <button @click="appendToDisplay('6')" class="btn num" value="6">6</button>
        <button @click="appendToDisplay('x')" class="btn oper" value="x">×</button>

        <button @click="appendToDisplay('1')" class="btn num" value="1">1</button>
        <button @click="appendToDisplay('2')" class="btn num" value="2">2</button>
        <button @click="appendToDisplay('3')" class="btn num" value="3">3</button>
        <button @click="appendToDisplay('-')" class="btn oper" value="-">-</button>

        <button @click="appendToDisplay('0')" class="btn num" value="0">0</button>
        <button @click="appendToDisplay('.')" class="btn num" value=".">.</button>
        <button @click="calculateResult" class="btn bg-blue-500 hover:bg-blue-600 text-white" value="=">=</button>
        <button @click="appendToDisplay('+')" class="btn oper" value="+">+</button>
      </div>

    </div>
  </div>
</template>
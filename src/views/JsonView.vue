<script setup>
import {onMounted} from 'vue';

onMounted(() => {
  const ul = document.getElementById('comments');
  const colors = ['#08DEAA', '#F31199', '#a59ee2'];

  fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach((comment, index) => {

          const contenidor = document.createElement('li');
          const nom = document.createElement('h3');
          const missatge = document.createElement('p');
          const correu = document.createElement('u');

          contenidor.classList.add('comment-container', 'bg-gray-100', 'rounded-lg', 'mb-4', 'shadow');
          contenidor.style.background = colors[index % colors.length];

          nom.classList.add('text-lg', 'font-semibold');
          correu.classList.add('correu', 'text-lg', 'font-light', 'text-gray-900', 'align-right');

          contenidor.appendChild(nom);
          contenidor.appendChild(missatge);
          contenidor.appendChild(correu);

          nom.innerHTML = `${comment.name}`;
          missatge.innerHTML = `${comment.body}`;
          correu.innerHTML = `${comment.email}`;

          ul.appendChild(contenidor);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
});
</script>

<template>
  <div class="contingut max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-16 container flex-grow content-fade">
    <h1 class="titul text-white px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">Json Comments</h1>

    <div class="bg-inherit pt-4 rounded-lg">
      <ul id="comments" class="list-none">
      </ul>
    </div>
  </div>
</template>
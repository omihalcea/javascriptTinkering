<script setup>
import {onMounted, ref} from 'vue';
import axios from "axios";

const posts = ref([]);
const colors = ['#08DEAA', '#F31199', '#8473FF'];

onMounted(() => {
    axios.get('https://dummyjson.com/users')
      .then(response => {
        posts.value = response.data.users;
      })
      .catch(error => {
        console.error('Error al carregar els comentaris:', error);
      });
});

</script>

<template>
  <div class="contingut max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-16 container flex-grow content-fade">
    <h1 class="titul text-white px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4">Axios Comments</h1>

    <div class="bg-inherit pt-4 rounded-lg">
      <ul id="comments" class="list-none">
        <li v-for="(post, index) in posts" :key="post.id">
          <div class="users-container rounded-lg p-4 mb-4 shadow flex justify-between items-center"
               :style="{ backgroundColor: colors[index % colors.length] }">
            <div class="content">
              <h3>Name: {{ post.firstName }} {{ post.lastName }} {{ post.maidenName }}</h3>
              <p>Age: {{ post.age }}</p>
              <p :class="{'male-gender': post.gender === 'male', 'female-gender': post.gender === 'female'}">
                Gender: {{ post.gender }}
              </p><br>
              <p>Birthday: {{ post.birthDate }}</p>
              <p>Country: {{ post.address.country }}</p>
              <p>Username: {{ post.username }}</p>
              <p>Email: <u> {{ post.email }} </u></p>
            </div>
            <div class="imatge">
              <img :src="post.image" alt="User Image">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
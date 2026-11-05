<script setup>
import { ref } from 'vue'
// import { useFetch } from './fetch'
import { FetchJson } from './fetchclick'
import Listbox from './Listbox.vue'

const url = ref('')
const top = ref(5)
const limite = ref(1000000)
// const apiUrl = ref(null)

const domaines = ref([])
const erreur = ref(null)
const loading = ref(false) 

// const {data: domaines, error: erreur, isLoading: loading} =  useFetch(apiUrl)

const checkUrl = async () => {
  loading.value = true
  erreur.value = null
  domaines.value = []

  try{
    const apiUrl = `http://localhost:3000/api/domainesProches/${encodeURIComponent(url.value)}?top=${top.value}&limite=${limite.value}`
    domaines.value = await FetchJson(apiUrl)
  }
  catch (err) {
    erreur.value = err.message
  }
  finally {
    loading.value = false
  }
  // await console.log(domaines.value.domaines[0].nom_domaine)
}
</script>

<template>
  <h1>Check Les Domaines Proches de Ton URL Mon Homme</h1>
  <div>
    <label for="url">URL à vérifier : </label>
    <input type="text" id="url" v-model="url" />
    <button @click="checkUrl" :disabled="url.length <= 0">Vérifier</button>
  </div>

  <div v-if="loading">
    <p>Chargement...</p>
  </div>
  <div v-else-if="erreur" class="error">
    <p>Erreur : {{ erreur }}</p>
  </div>
  <Listbox :domaines="domaines" />

</template>


<style scoped>

</style>

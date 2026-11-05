<script setup>
const props = defineProps({
  domaines: {
    type: Object,
    required: true
  }
})

</script>



<template>
    <div v-if="domaines.domaines?.length > 0" id="domaines">
        <h3>Domaine{{ domaines.domaines.length > 1 ? 's' : '' }} trouvé{{ domaines.domaines.length > 1 ? 's' : '' }} </h3>
        <ul class="domaines">
            <li v-for="domaine in domaines.domaines" :key="domaine.nom_domaine">
                <div> 
                    <span v-if="domaine.redirection_detectee" class="icone rouge" title="Redirection">✖</span>
                    <span v-else class="icone vert" title="Pas de redirection">➜</span>
                    <span>{{ domaine.nom_domaine }}</span>
                </div>
            </li>
        </ul>
  </div>

</template>

<style scoped>

  #domaines {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0rem;
    padding: 0.75rem 0;
    margin: 2rem auto 0;
    border: 1px solid #960e0e;
    border-radius: 0.75rem;
    width: 45%;
  }

  #domaines h3{
    margin: 0 0rem 0.5rem 0;
    padding: 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #960e0e;
  }

  .domaines {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .domaines li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0;
    text-align: center;
    width: 80%;
    margin: 0 0.5rem 0 0;
  }

  .domaines li div {
    display: flexbox;
    align-items: center;
    gap: 0.5rem;
    margin: 0 auto;
    width: 50%;
  } 

  .domaines li div span {
    display: inline-block;
    width: 15%;
    text-align: left;
  }

  .icone {
    font-weight: bold;
    width: 1.2em;
    text-align: center;
  }

  .rouge { color: #e53935; }
  .vert  { color: #2e7d32; }
</style>
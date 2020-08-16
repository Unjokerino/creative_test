<template>
  <div>
    <div class="cards">
      <div v-for="apartment in favortiedApartments" :key="apartment.id">
        <ApartmentCard
          :favorite="true"
          :apartment="apartment"
        />
      </div>
    </div>
   
  </div>
</template>

<script>
import ApartmentCard from "../components/ApartmentCard";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ApartmentCard,
  },
  computed:{
    ...mapState({
      apartments: (state) => state.apartments.all,
      favorites: (state) => state.favorites.all,
    }),
    favortiedApartments(){
      return this.apartments.filter(apartment => {return this.favorites.includes(apartment.id)})
    }
  },
  created() {
    this.$store.dispatch("apartments/getAllApartments");
  },
};
</script>

<style>
</style>

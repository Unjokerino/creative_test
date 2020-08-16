<template>
  <div class="container">
    <div class="cards">
      <ApartmentCard
        v-for="apartment in apartments"
        :favorite="favorites.includes(apartment.id)"
        :key="apartment.id"
        :apartment="apartment"
      />
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
  computed: mapState({
    apartments: (state) => state.apartments.all,
    favorites: (state) => state.favorites.all,
  }),
  created() {
    this.$store.dispatch("apartments/getAllApartments");

  },
};
</script>

<style lang="sass">
.cards 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  align-items: center;
</style>

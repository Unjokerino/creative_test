<template>
  <div class="card">
    <div class="card__header">
      <div class="column">
        <div class="card__title">{{attributes.title}}</div>
        <div class="card__subtitle">{{agent_name}}</div>
      </div>
      <div class="card__actions">
        <div @click="addApartmentToFavorites(apartment.id)" class="card__favorite">
          <i v-if="favorite" class="material-icons colored">favorite</i>
          <i v-else class="material-icons colored">favorite_border</i>
        </div>
      </div>
    </div>
    <div class="card__content">
      <ApartmentCardContentItem icon="room" title="Адрес" :text="full_address" />
      <ApartmentCardContentItem icon="king_bed" title="Тип" :text="apartment.type" />
    </div>
    <div class="card__footer">
      <div class="card__chips">
        <ApartmentCardFooterItem icon="meeting_room" :text="attributes.rooms" />
        <ApartmentCardFooterItem
          icon="crop_square"
          :text="`${attributes.area} ${attributes.unit}`"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentCardContentItem from "./ApartmentCardContentItem";
import ApartmentCardFooterItem from "./ApartmentCardFooterItem";
import { mapActions } from "vuex";
export default {
  name: "ApartmentCard",
  props: {
    apartment: Object,
    favorite: Boolean,
  },
  components: {
    ApartmentCardContentItem,
    ApartmentCardFooterItem,
  },
  methods: mapActions("favorites", ["addApartmentToFavorites"]),
  computed: {
    attributes() {
      return this.apartment.attributes;
    },
    relationships() {
      return this.apartment.relationships;
    },
    agent_name() {
      const name = this.relationships.attributes;
      return `${name.last_name} ${name.first_name[0]}.${name.middle_name[0]}.`;
    },
    address() {
      return this.attributes.address;
    },
    full_address() {
      return `${this.address.city}, ${this.address.street}, ${this.address.house}, ${this.address.room}`;
    },
  },
};
</script>

<style lang="sass">
$accentColor: #9a88ed;
.colored
  color: $accentColor;
.column
  display: flex;
  flex-direction: column;
.card
  display: flex;
  background: white;
  height: 200px;
  transition: 200ms;
  flex-direction: column;
  padding: 12px;
  box-shadow: 0px 0px 7px 0px rgba(179, 179, 179, 1);
  &__header
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  &__title
    font-weight: 500;
    margin: 0px 0px 6px 0px;
  &__subtitle
    font-weight: 300;
    font-size: 0.9em;
    opacity: 0.9;
  &__favorite
    color: gray;
    font-size: 2em;
    border-color: $accentColor;
    border-radius: 6px;
    border-style: solid;
    border-width: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 18px;
    &:hover
      cursor: pointer;
      opacity: 0.8
    &:click 
      background: black;
  &__content
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
  &__footer
    display: flex;
    align-items: center;
    justify-content: space-between;
  &__chips
    display: flex;

  

</style>
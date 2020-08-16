<template>
  <div class="item">
      <i class="material-icons item__icon">{{icon}}</i>
      <span class="item__title">{{title}}:</span>
      <span class="item__text">{{text}}</span>
  </div>
</template>

<script>
export default {
    name:"ApartmentCardContentItem",
    props:{
        icon:String,
        title:String,
        text:String,
    }
}
</script>

<style lang="sass">
    .item
        display: flex;
        align-items: center;
        &__icon
            margin-right: 5px;
        &__title
            margin-right: 5px;
            opacity: 0.9;
        &__text
            font-weight: 500;
    
</style>
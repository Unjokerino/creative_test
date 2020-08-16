<template>
    <span class="chip">
          <i class="material-icons">{{icon}}</i>
          <span>{{text}}</span>
    </span>
</template>

<script>
export default {
    name:"ApartmentCardFooterItem",
    props:{
        icon:String,
        text:[String, Number]
    }
}
</script>

<style lang="sass">
    .chip
        display: flex;
        flex-direction: row;
        align-items: center;
        opacity: 0.8;
        font-weight: 300;
        font-size: 0.9em;
        margin-right: 5px;
    
</style>
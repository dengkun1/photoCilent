<template>
    <div>
        <img :src="item.imgUrl" alt="">
       <div>
           <p>{{item.name}}</p>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        props: ["item"]
    }
</script>

<style scoped>

</style>
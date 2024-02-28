<template>
     <card-view :items="items"/>
</template>

<script>
import CardView from './CardView.vue'
export default {
  components: { CardView },
    name:'Home-page',
    
    data(){
        return{
            items:[
                {
                    id:1,
                    itemName:'Amazfit GTR 4 Smartwatch',
                    Brand:'Amazfit',
                    price:'Rs. 62,390',
                    Discount:'4%',
                    NetPrice: 'Rs. 59,894'
                },
                {
                    id:2,
                    itemName:'Amazfit GTR Mini',
                    Brand:'Amazfit',
                    price:'Rs. 37,999',
                    Discount:'7%',
                    NetPrice: 'Rs. 35,339'
                },
                {
                    id:3,
                    img:'@/assets/logo.png',
                    itemName:'Samsung Galaxy Watch 4 ',
                    Brand:'Samsung',
                    price:'Rs. 65,830',
                    Discount:'5%',
                    NetPrice: 'Rs. 62,538'
                }
            ]
        }
    }
}
</script>
<style>
</style>
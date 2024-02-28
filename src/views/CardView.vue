<template>
    <div id="employee-table">

         <div class="cardlayout" v-for="item in items" :key="item.id">
             <div class="card" >
                <img :src="require('@/assets/smwatch.jpg')" alt="Logo" class="smaller-image"/>
                 <h3>{{item.itemName}}</h3>
                 <p>{{item.Brand}}</p>
                 <div>
                    <h2 class="Alignlefttxt">{{item.NetPrice}}</h2>
                    <div class="sigleLine">
                        <h5><s>{{item.price}}</s></h5>
                        <h5 class="space">{{item.Discount}}</h5>
                    </div>
                 </div>
                
                 
                 
             </div>
         </div>
     </div>
 </template>
 <script>
 export default {
     name:'cardView',
     props:{
         items:Array
         
     }
 }
 </script>
 <style scoped>
 
 .small-container{
     max-width: 680px;
 }
 .smaller-image{
    width:200px;
 }
 </style>
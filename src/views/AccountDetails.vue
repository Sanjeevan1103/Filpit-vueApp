<template>
    <div class="MainLayout">
        <h1>My Account</h1>
        <h4>Mange your account Details</h4>
        <div class="cardlayout" v-for="profile in profiles" :key="profile.id">
            <div class="cardAccount" >
                    <img :src="require('@/assets/Profile.png')" alt="Logo" class="smaller-image"/>
                    <h3>{{profile.name}}</h3>
                    <p>{{profile.email}}</p>
                    <h2>{{profile.address}}</h2>
                    <h5>{{profile.city}}</h5>
                    <h5>{{profile.phonenumber}}</h5>
                </div>
        </div>
        
    </div>
 </template>
 <script>
 export default {
     name:'AccountDateils',
     props:{
        profiles:Array,
      
         
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
 .MainLayout{
    margin: 2em;
 }
 </style>
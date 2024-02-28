<template>
   <AccountDetails :profiles="profiles"/>
</template>
<script>
import AccountDetails from './AccountDetails.vue';


export default {
    name: 'userPage',
    components: { AccountDetails },
    
    data(){
        return{
            profiles:[
                {
                    id:1,
                    name:'Sanjeevan Vijayakumar',
                    adress:'29,Fathima Road Trincomalee, SriLanka',
                    email:'vijaysanjeevan@gmail.com',
                    phonenumber:'(+94) 752989554',
                    city: 'Eastern - Trincomalee - Trincomalee Town'
                },
            ]
            }
        }
}
</script>
<style scoped>

</style>
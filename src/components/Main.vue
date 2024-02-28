<template>
    <div class="header">
        <div>
            <a class="logo">Flip-it</a>
            <div class="header-right">
                <a><router-link class="btn" to="/">Home</router-link></a>
                <a><router-link to="/user">Users</router-link></a>
                <a><router-link to="/signup">SignUp</router-link></a>
                <a><router-link to="/login">Login</router-link></a>
            </div>
        </div>
    </div>
   
    <router-view/>
   
</template>
<script>

export default {
    name:'Main-vue',
    
 
}
</script>
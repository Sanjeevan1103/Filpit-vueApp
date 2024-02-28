<template>
    <div class="centerDiv" >
        <h1>Welcome to Filp-it! Please Login.</h1>
        <h4 class="subHeading">please login form</h4>
        <div class="signinBorder">
            <div>
                <label class="txt">Phone Number or Email</label><br>
                <input type="text" class="txt" placeholder="Please enter your phone "
                maxlength="20"/>
            </div>
           
            <div>
                <label class="txt">Password</label><br>
                <input type="password" class="txt" placeholder="Enter the Password"
                    maxlength="20"/>
            </div>
           
            <button class="btnlogin">LOGIN</button>
            <h6>By clicking "LOGIN", i agree to filp-it Terms of use and Privacy Policy</h6>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'login-page'
}
</script>
<style scoped>

</style>
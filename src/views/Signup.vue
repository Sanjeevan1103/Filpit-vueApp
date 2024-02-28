<template>
    <div class="centerDiv" >
        <h1>Create your Flip-it Account</h1>
        <h4 class="subHeading">Create your Account</h4>
        <div class="signinBorder">
            <div>
                <label class="txt">First name</label><br>
                <input type="text" class="txt" placeholder="Enter your First name"
                maxlength="20"/>
            </div>
            <div>
                <label class="txt">Phone Number</label><br>
                <input type="text" class="txt" placeholder="Please enter your phone number"
                    maxlength="20"/>
            </div>
            <div>
                <label class="txt">Verification Code</label><br>
                <input type="text" class="txt" placeholder="Verification Code"
                    maxlength="20"/>
            </div>
           
            <label class="container">i'd like to receive exclusive offers and promotions via SMS
                <input type="checkbox" >
                <span class="checkmark"></span>
            </label>
            <button class="btnsignin">SIGN UP</button>
            <h6>By clicking "SIGN UP", i agree to filp-it Terms of use and Privacy Policy</h6>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'signUp'
}
</script>
<style scoped>

</style>
<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3>{{firstName}}'s Reviews</h3>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
           productsByUser: null,
            accountError: false
        }
    },
    computed:{
        firstName(){
            console.log(this.$store.state)
            return this.$store.state.user.firstName}
    },
    created(){
        axios.get("/products/:sku", {
            headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{
            console.log("here is my product/:sku response", response)
            this.productsByUserByUser = response.data})
    }
}
</script>

<style scoped>

</style>
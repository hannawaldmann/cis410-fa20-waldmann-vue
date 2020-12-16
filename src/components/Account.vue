<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3>{{firstName}}'s Reviews</h3>

<p v-if="accountError" class="form-text tex-danger">Can not get your account info, try again later.</p>
        <table v-if="ordersByUser" class = "table">
            <thead>
                <th>Product</th>
                <th>Quantity</th>
            </thead>
            <tbody>
                <tr v-for="thisOrder in ordersByUser" :key="thisOrder.OrderPK">
                    <th><router-link :to="`/products/${thisOrder.ProductSKU}`">{{thisOrder.ProductSKU}}</router-link></th>
                    <th>{{thisOrder.Quantity}}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
           ordersByUser: null,
            accountError: false
        }
    },
    computed:{
        firstName(){
            console.log(this.$store.state)
            return this.$store.state.user.firstName}
    },
    created(){
        axios.get("/order/me", {
            headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{
            console.log("here is my /order/me response", response)
            this.productsByUserByUser = response.data})
            .catch(()=>{
                this.accountError = true
            })
    }
}
</script>

<style scoped>

</style>
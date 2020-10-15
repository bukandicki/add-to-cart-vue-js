<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="item in cart" :key="item.id">
            <button @click="hapusProductCart(item.id)" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div class="media d-flex align-items-center text-left">
                <img
                    width="85px"
                    :src="item.imgUrl"
                    class="mr-2"
                    :alt="item.title"
                >
                <div class="media-body">
                    <h5 class="mt-0 small">{{ item.title }}</h5>
                    <button @click="kurangiJumlah(item.id)" class="btn btn-sm btn-secondary rounded mx-1">-</button>
                    x {{ item.qty }}
                    <button @click="tambahJumlah(item.id)" class="btn btn-sm btn-secondary rounded mx-1">+</button>
                </div>
            </div>
        </li>
        <li class="list-group-item p-0 pt-2 border-0">
            <button @click="checkOut" v-if="cart.length" class="btn btn-primary w-100 p-2 ">
                <span v-if="!sedangLoading">Checkout Rp{{ totalPrice }}</span>
                <div v-else>
                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                    Mohon tunggu...
                </div>
            </button>
        </li>
    </ul>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import swal from 'sweetalert'

export default {
    data() {
        return {
            sedangLoading: false,
            orderSukses: false,
        }
    },
    computed: {
        ...mapGetters(["cart"]),
        totalPrice() {
            return this.cart.reduce((awal,akhir) => awal + akhir.qty * akhir.price, 0 )
        }
    },
    methods: {
        ...mapActions(["tambahJumlah", "kurangiJumlah", "hapusProductCart", "emptyCart"]),
        checkOut() {
            this.sedangLoading = true
            setTimeout(() => {
                swal("Hore!", "Belanjaan Kamu Di Checkout", "success")
                this.orderSukses = true
                this.sedangLoading = false
                this.emptyCart()
            }, 2000);
        }
    },
}
</script>

<style scoped>
    .media
    {
        width: 90%;
    }
</style>
<template>
    <div class="d-flex">
        <div
            class="card mx-1"
            style="width: 18rem;"
            v-for="item in products"
            :key="item.id"
        >
            <img
                :src="item.imgUrl"
                class="card-img-top"
                :alt="item.title"
            >    
            <div class="card-body">
                <h5 class="card-title">{{ item.title }}</h5>
                <p class="card-text">Rp{{ item.price }}</p>
                <a href="#" @click="addToCart(item)" class="btn btn-primary">Add to cart</a>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductList',
    computed: {
        ...mapGetters(["products"])
    },
    methods: {
        ...mapActions(["getProducts","addToCart"])
    },
    mounted() {
        this.getProducts()
    }
}
</script>
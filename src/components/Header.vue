<template>
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 mr-auto h1">Shoping</span>
        <div class="d-flex align-items-center">
            <svg width="20px" height="20px" viewBox="0 0 16 16" class="bi bi-bag-fill text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
            </svg>
            <span class="badge p-2 ml-2">{{ totalJumlah }}</span>
        </div>
    </nav>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapGetters(['cart']),
        totalJumlah() {
            return this.cart.length
        }
    }
}
</script>
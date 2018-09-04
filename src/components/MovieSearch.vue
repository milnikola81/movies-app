<template>
    <div>
        <input class="form-control" type="text" @input="searchMovie" placeholder="search movies..." />
    </div>
</template>

<script>
import { movies } from '../services/Movies.js'

export default {
    props: ['movies'],
    data() {
        return {

        }
    },
    methods: {
        searchMovie(event) {
            // console.log(event.target.value)
            this.$emit('searchMovie', event.target.value)
        }
    }
    
}
</script>

<style scoped>
input {
    max-width: 40%;
    margin: 0 auto;
}
</style>



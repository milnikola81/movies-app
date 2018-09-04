<template>
    <!-- <tr v-background="selected"> -->
    <tr @click="showMovie(movie)">
        <td>
            {{movie.title}}
        </td>
        <td>
            {{movie.director}}
        </td>
        <td>
            {{movie.releaseDate}}
        </td>
        <td>
            {{movie.genre}}
        </td>
        <td>
            <img v-bind:src=movie.imageUrl height="90" width="120"/>
        </td>
        <td>
            <button type="button" class="btn btn-success" v-if="!selectedMoviesComputed.includes(movie)" v-on:click.stop @click="selectRow(movie)">Select</button>
            <button type="button" class="btn btn-success" v-else disabled>Select</button>
        </td>
    </tr>
</template>

<script>
import { movies } from '../services/Movies'

export default {
    props: ['movie', 'selectedMoviesComputed'],
    data() {
        return {
            selected: false
        }
    },
    methods: {
        selectRow(movie) {
            this.$emit('selectRow', movie)
            this.selected = true
        },
        showMovie(movie) {
            movies.get(movie.id)
            .then((response) => {
                this.$router.push({ name: 'single-movie', params: { id: movie.id }})
            })
        }
    }
}
</script>

<style scoped>
tr:hover {
    background: #DDE1E5;
}
</style>


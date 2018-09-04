<template>
    <div>
        <br>
        <h1>Complete movie list</h1>
        <br>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Director
                    </th>
                    <th>
                        Release date
                    </th>
                    <th>
                        Genre
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="filteredMovies.length === 0">
                    <td colspan="5">
                        There are no movies matching your search term
                    </td>
                </tr>
                <MovieRow v-for="(movie, index) in filteredMovies" :key="index" :movie = "movie" :selectedMoviesComputed = "selectedMoviesComputed" @selectRow="selectMovies"/>
            </tbody>
        </table>
        <br>
        <MovieSearch :movies = "movies" @searchMovie="filterMovies"/>
        <p v-if="selectedMoviesComputed.length > 0">You have chosen {{selectedMoviesComputed.length}} movies.</p>
        <br>
        <button type="button" class="btn btn-primary" @click="selectAll">Select All</button>
        <button type="button" class="btn btn-danger" @click="deselectAll">Deselect All</button>
        <br><br>
        <button type="button" class="btn btn-light" @click="sortDesc">Sort by name desc</button>
        <button type="button" class="btn btn-dark" @click="sortAsc">Sort by name asc</button>
        <br><br>
    </div>
</template>

<script>
import { authService } from '../services/Auth'
import { movies } from '../services/Movies'
import MovieRow from '../components/MovieRow.vue'
import MovieSearch from '../components/MovieSearch.vue'

export default {
    components: {
        MovieRow,
        MovieSearch
    },
    data () {
        return {
            movies: [],
            filteredMovies: [],
            selectedMovies: [],
        }
    },
    beforeRouteEnter (to, from, next) {
         next(vm => {
            movies.getAll()
            .then((response) => {
                vm.movies = response.data
                vm.filteredMovies = response.data
            })
         })
    },
    methods: {
        filterMovies(value) {
            this.filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().match(value));
        },
        selectMovies(movie) {
            this.selectedMovies.push(movie)
        },
        selectAll() {
            this.selectedMovies = []
            for(var i = 0; i < this.movies.length; i++) {
                this.selectedMovies.push(this.movies[i])
            }
        },
        deselectAll() {
            this.selectedMovies = []
        },
        sortDesc() {
            this.filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
        },
        sortAsc() {
            this.filteredMovies.sort((a, b) => b.title.localeCompare(a.title));
        }
    },
    computed: {
        selectedMoviesComputed: function() {
            return this.selectedMovies;
        }
    }
}
</script>

<style scoped>
table {
    max-width: 80%;
    margin: 0 auto;
}
button {
    margin-right: 2rem;
}
</style>



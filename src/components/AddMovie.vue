<template>
    <div>
        <h1>Add movie</h1>

        <form id="addCarForm" @submit.prevent>
            <div class="form-group">
                <label>Title</label> <br>
                <input  class="form-control" id="title" v-model="newMovie.title" type="text" placeholder="movie title...">
                <p v-if="errors.title" style="color:red">{{errors.title[0]}}</p>
            </div>

            <div class="form-group">
                <label>Director</label> <br>
                <input  class="form-control" id="director" v-model="newMovie.director" type="text" placeholder="director...">
                <p v-if="errors.director" style="color:red">{{errors.director[0]}}</p>
            </div>

            <div class="form-group">
                <label>Image</label> <br>
                <input  class="form-control" id="image" v-model="newMovie.imageUrl" type="url" placeholder="image url...">
            </div>

            <div class="form-group">
                <label>Duration</label> <br>
                <input  class="form-control" id="duration" v-model="newMovie.duration" type="number" placeholder="duration...">
                <p v-if="errors.duration" style="color:red">{{errors.duration[0]}}</p>
            </div>

            <div class="form-group">
                <label>Release year</label> <br>
                <input  class="form-control" id="year" v-model="newMovie.releaseDate" type="text" placeholder="release year...">
                <p v-if="errors.releaseDate" style="color:red">{{errors.releaseDate[0]}}</p>
            </div>

            <div class="form-group">
                <label>Genre</label> <br>
                <input  class="form-control" id="genre" v-model="newMovie.genre" type="text" placeholder="genre...">
            </div>

            <button class="btn btn-success" @click="addMovie(newMovie)" type="submit">Add movie</button>
            <input class="btn btn-danger" type="reset" value="Reset" />
            <br>         

        </form><br><br><br>
    </div>
</template>

<script>
import { authService } from '../services/Auth'
import { movies } from '../services/Movies'

export default {
    data() {
        return {
            newMovie: {},
            errors: []
        }
    },
    methods: {
        addMovie(newMovie) {
            movies.add(newMovie)
            .then((response) => {
                this.$router.push('movies')
            })
            .catch(error => {
                this.errors = error.response.data.errors
                console.log(error.response.data.errors)
                newMovie.genre = ''
                newMovie.imageUrl = ''
            })
            // checks if data is submitted, then redirects route (this way required in inputs works)
        }
    },
}
</script>

<style scoped>
form {
    max-width: 40%;
    margin: 0 auto;
}
button {
    margin-right: 2rem;
}
</style>



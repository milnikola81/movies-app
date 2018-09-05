<template>
    <div>
        <br>
        <h1>Register</h1>
        <br>

        <form id="registerForm" @submit.prevent>
            <div class="form-group">
                <label>Username</label> <br>
                <input v-model="newUser.name" class="form-control" id="name" type="text" placeholder="enter username...">
                <p v-if="errors.name" style="color:red">{{errors.name[0]}}</p>
            </div>

            <div class="form-group">
                <label>Email</label> <br>
                <input v-model="newUser.email" class="form-control" id="email" type="email" placeholder="enter email...">
                <p v-if="errors.email" style="color:red">{{errors.email[0]}}</p>
            </div>

            <div class="form-group">
                <label>Password</label> <br>
                <input v-model="newUser.password" class="form-control" id="password" type="password" placeholder="enter password...">
                <p v-if="errors.password" style="color:red">{{errors.password[0]}}</p>
            </div>

            <div class="form-group">
                <label>Confirm password</label> <br>
                <input v-model="newUser.password_confirmation" class="form-control" type="password" id="password_confirmation" placeholder="enter password...">
            </div>

            <button @click="addUser" class="btn btn-success" type="submit">Register</button>

        </form>           
    </div>
</template>

<script>
import { authService } from '../services/Auth'
import { users } from '../services/Users'
import { eventBus } from '../main'

export default {
    data() {
        return {
            newUser: {},
            errors: []
        }
    },
    methods: {
        addUser() {
            users.add(this.newUser)
            .then((response) => {              
                this.$router.push('login')
            })
            .catch(error => {
                this.errors = error.response.data.errors
            })
        }
    },
}
</script>

<style scoped>

form {
    max-width: 40%;
    margin: 0 auto;
}

</style>



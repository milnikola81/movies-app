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
                <input v-model="newUser.confirmPassword" class="form-control" id="confirmPassword" type="password" placeholder="enter password...">
                <p v-if="errors.confirmPassword" style="color:red">{{errors.confirmPassword[0]}}</p>
            </div>

            <p v-if="newUser.password && newUser.confirmPassword && passwordError" style="color: red">{{passwordError}}</p>

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
            passwordError: '',
            errors: []
        }
    },
    methods: {
        addUser() {
            if  (this.newUser.password && 
                this.newUser.confirmPassword && 
                this.newUser.password !== this.newUser.confirmPassword) 
                {
                this.passwordError = 'Your passwords do not match'
            }
            else {
                users.add(this.newUser)
                .then((response) => {              
                    this.$router.push('login')
                })
                .catch(error => {
                    this.errors = error.response.data.errors
                })
                this.passwordError = ''
            }
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



<template>
    <div>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand" href="/">Movies</a>
            <router-link to="/add">Add movie</router-link>
            <div v-if="!isAuthenticated">
                <router-link to="/login" class="mr-3">Login</router-link>
                <router-link to="/register">Register</router-link>
            </div>
            <span id="logoutLink" v-else @click="logout">Logout</span>
        </nav>
    </div>
</template>

<script>
import { authService } from '../services/Auth'
import { eventBus } from '../main'

export default {
    data() {
        return {
            isAuthenticated: authService.isAuthenticated()
        }
    },
    methods: {
        logout() {
            authService.logout()
            this.isAuthenticated = false
            this.$router.push("/login");
        }
    },
    created() {
        eventBus.$on("changeState", state => {
            this.isAuthenticated = state;
        });
    },
}
</script>

<style scoped>
#logoutLink {
    color: #4195EA;
    cursor: pointer;
}
#logoutLink:hover {
    color: #644FAC;
    text-decoration: underline;
}

</style>



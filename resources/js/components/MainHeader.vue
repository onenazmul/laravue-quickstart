<template>
    <div>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>
        <router-link to="/">APP</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/about">
        <v-btn>About</v-btn>
      </router-link>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      right
      class="indigo"
    >
      <v-list dense>
        <router-link to="/login">
          <v-list-item link>
              <v-list-item-action>
                <v-icon>mdi-account-circle-outline</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Login</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/register">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-account-plus-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sign Up</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    props: {
      source: String,
    },

    data: () => ({
      drawer: false,
    }),
}
</script>

<style>
header .v-toolbar__title a {
    color: #fff;
    text-decoration: none;
    transition: all .5s;
}
header .v-toolbar__title a:hover {
    font-weight: 700;
}
</style>
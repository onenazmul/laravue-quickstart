<template>
  <v-content>
      <v-container>
          <h1>About Page</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nulla perspiciatis at ex, laborum sed nihil voluptas dolores perferendis laboriosam, optio quae minima tenetur omnis quia vel! Et, voluptatum voluptates.</p>
      </v-container>
  </v-content>
</template>

<script>
export default {
    metaInfo(){
        return {
            title: 'About Page',
            meta: [
                {
                    name:'keywords', content:'quickstart, about page'
                },
                {
                    name: 'description', content: 'An awesome description for about page'
                }
            ]
        }
    }
}
</script>

<style>

</style>
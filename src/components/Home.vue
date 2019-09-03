<template>
    <v-container>
        <v-row>
            <v-col xs="12" sm="6" class="text-center text-sm-right">
                <v-btn large to="/meetups" class="info"> Explore Meetups </v-btn>
            </v-col>
            <v-col xs="12" sm="6" class="text-center text-sm-left">
                <v-btn large to="/meetup/new" class="info"> Organize meetup </v-btn>
            </v-col>
        </v-row>

        <v-row>
            <v-col xs="12">
                <v-carousel style="cursor: pointer">
                    <v-carousel-item v-for="meetup in meetups" :key="meetup.id" :src="meetup.imageUrl" @click="onLoadMeetup(meetup.id)">
                        <div class="title">
                            <h2> {{ meetup.title }} </h2>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col xs="12" class="text-center">
                <p> Join our awesome community </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  computed: {
      meetups () {
          return this.$store.getters.featuredMeetups;
      }
  },
  methods: {
    onLoadMeetup(id) {
      this.$router.push('/meetup/' + id)
    }
  }
};
</script>

<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  color: white;
}
</style>


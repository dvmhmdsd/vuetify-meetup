<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <v-card>
                    <v-card-title>
                        <h3 class="red--text"> {{ meetup.title }} </h3>
                    </v-card-title>
                    <v-img :src="meetup.imageUrl"></v-img>
                    <v-card-text>
                        <p class="info--text"> {{ meetup.date }} </p>
                        <p> {{ meetup.description }} </p>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="red white--text"> Register </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    meetup() {
      return this.$store.getters.loadedMeetup(this.id);
    }
  }
};
</script>

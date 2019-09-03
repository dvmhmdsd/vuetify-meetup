<template>
    <v-container>
        <v-card v-for="meetup in meetups" :key="meetup.id" class="mb-4">
            <v-container>
                <v-row>
                    <v-col xs="5" sm="4" md="3">
                        <v-img width="100%" height="100%" :src="meetup.imageUrl"></v-img>
                    </v-col>

                    <v-col xs="7" sm="8" md="9">
                        <v-card-title>
                            <section>
                                <h3> {{ meetup.title }} </h3>
                                <p> {{ meetup.date }} </p>
                            </section>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn text :to="'/meetup/' + meetup.id">
                                <v-icon left> mdi-arrow-right </v-icon>
                                View Meetup
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
</template>

<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups;
        }
    }
}
</script>

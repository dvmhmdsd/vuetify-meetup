<template>
    <v-container>
        <v-row class="text-center">
            <v-col
              xs="12" sm="6">
                <h2> Create a new meetup </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12">
                <v-form @submit.prevent="onSubmitMeetup">
                    <v-row>
                        <v-col xs="12" sm="6"  offset-sm="3">
                            <v-text-field
                              :rules="rules"
                              name="title"
                              id="title"
                              label="Title"
                              v-model="form.title"
                              ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="12" sm="6"  offset-sm="3">
                            <v-text-field
                              :rules="rules"
                              name="location"
                              id="location"
                              label="Location"
                              v-model="form.location"
                              ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="12" sm="6"  offset-sm="3">
                            <v-text-field
                              :rules="rules"
                              name="imageUrl"
                              id="image-url"
                              label="Image URL"
                              v-model="form.imageUrl"
                              ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="12" sm="6"  offset-sm="3">
                            <v-img
                              :src="form.imageUrl"
                              max-width="100%"
                              max-height="300"
                              rounded></v-img>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="12" sm="6"  offset-sm="3">
                            <v-textarea
                              :rules="rules"
                              name="description"
                              id="description"
                              label="Description"
                              v-model="form.description"
                              no-resize
                              ></v-textarea>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col xs="12" sm="6"  offset-sm="3">
                            <v-btn :disabled="!formIsValid" class="red white--text" type="submit"> Create Meetup </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  data() {
    return {
      rules: [v => !!v || "This field is required"],
      form: {
        title: "",
        location: "",
        description: "",
        imageUrl: ""
      }
    };
  },
  computed: {
    formIsValid() {
      return (
        this.form.title !== "" &&
        this.form.location !== "" &&
        this.form.description !== "" &&
        this.form.imageUrl !== ""
      );
    }
  },
  methods: {
    onSubmitMeetup() {
      if (!this.formIsValid) {
        return;
      }

      this.form.date = new Date();
      this.form.id = String(Math.ceil(Math.random() * 100));
      const meetupData = this.form;
      this.$store.dispatch("createMeetup", meetupData);

      this.$router.push('/meetups')
    }
  }
};
</script>

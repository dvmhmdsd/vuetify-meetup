import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
                id: "12",
                title: "Meetup in New York",
                date: '2017-7-19',
                desc: 'meetup 1'
            },
            {
                imageUrl: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
                id: "13",
                title: "Meetup in Paris",
                date: '2017-7-16',
                desc: 'meetup 2'
            }
        ],
        user: {
            id: '23',
            registeredMeetps: ['12']
        }
    },
    mutations: {
        createMeetup(state, payload) {
            state.loadedMeetups.push(payload)
        }
    },
    actions: {
        createMeetup({ commit }, payload) {
            const meetup = payload;
            // send data to firebase

            commit('createMeetup', meetup);
        }
    },
    getters: {
        loadedMeetups(state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups(state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup(state) {
            return meetupId => {
                return state.loadedMeetups.find(meetup => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})

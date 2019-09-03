import Home from './components/Home';
import Meetups from './components/Meetup/Meetups';
import CreateMeetup from './components/Meetup/CreateMeetup';
import Profile from './components/User/Profile';
import Signin from './components/User/Signin';
import Signup from './components/User/Signup';
import Meetup from './components/Meetup/Meetup';


export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/meetups',
        component: Meetups
    },
    {
        path: '/meetup/new',
        component: CreateMeetup
    },
    {
        path: '/meetup/:id',
        props: true,
        component: Meetup
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/signin',
        component: Signin
    },
    {
        path: '/signup',
        component: Signup
    },
]
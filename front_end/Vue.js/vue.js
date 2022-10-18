//Creating a Vue App with the Vue class constructor and the new keyword
const app = new Vue({
    //EL -> Means Element: Gives access to specific parts of the html. 
    //      Some class named app will have access to the vue script.
    el: '#app',

    //DATA -> Stores all the dynamic data: things that are constantly changing
    data: {
        username: 'Juno',
        newTweet: '',
        tweets: [
        'Started learning to code today. Wish me luck!', 
        'Okay, I learned HTML, CSS, and JavaScript. But, how do I combine them together?? Send help.', 
            'Today I start learning Vue. I got this.'
        ],
        bio: 'Excited future software engineer.',
        todo: ['1', '2', '3'],
        userIsLoggedIn: false
    }
})
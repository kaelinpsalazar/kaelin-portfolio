import self from "../img/self.jpg"
import smartGarden from "../img/smart-gardening.png"
import tracker from "../img/tracker.png"
import music from "../img/music_festival.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kaelin",
    lastName: "Salazar",
    initials: "kps", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🐶',
            text: "dog dad"
        },
        {
            emoji: '🌎',
            text: 'based in Denver'
        },
        {
            emoji: "📧",
            text: "kaelinpsalazar@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/kaelinpsalazar",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kaelin-salazar/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "My name is Kaelin Salazar, and I am a Software Developer based in Denver, Colorado. I graduated from the University of Kentucky with a B.S. in Environmental Sciences, and initially pursued a career in the chemistry field. After several years, I transitioned into a managerial role at a small startup in Boulder, where we produced organic dog treats. Now, I'm thrilled to have shifted to software development and am excited about the new opportunities ahead.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma'],
            exposedTo: ['nodejs', 'python', 'adobe illustrator']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Smart Gardening",
            live: "https://smart-gardening-fe.vercel.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            sourcefe: "https://github.com/wally-yawn/smart_gardening_fe", 
            sourcebe: "https://github.com/sethverrill/smart-gardening-be",
            image: smartGarden
        },
        {
            title: "Tracker by Turing",
            live: "https://tracker-crm-fe-38f7cf1aaca5.herokuapp.com/",
            sourcefe: "https://github.com/turingschool/tracker-crm-fe",
            sourcebe: "https://github.com/turingschool/tracker-crm",
            image: tracker
        },
        {
            title: "Music Festival Manager",
            live: "",
            sourcefe: "https://github.com/kaelinpsalazar/final-music-fe",
            sourcebe: "https://github.com/kaelinpsalazar/music_festival_app",
            image: music
        },
    ]
}
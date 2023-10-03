// usersData.js
import userImage2 from './../../../../Images/userImages/userImage8.jpeg'
import userImage3 from './../../../../Images/userImages/userImage9.jpeg'
import userImage1 from './../../../../Images/userImages/userImage10.jpg'
import userImage4 from './../../../../Images/userImages/userImage11.jpeg'
import userImage5 from './../../../../Images/userImages/userImage12.jpg'
import userImage8 from './../../../../Images/userImages/userImage13.webp'
import userImage6 from './../../../../Images/userImages/userimage6.png'
import userImage7 from './../../../../Images/userImages/userImage7.png'

const usersList = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      image: userImage1,
      messageList:[
        {message:"Bonjour Monsieur", sender:"You", type:"text" , },
        {message:"Bonjour Issam", sender:"send", type:"text", },
        {message:"J'ai une question concernant les droits d'auteur", sender:"You", type:"text", },
        {message:"D'accord", sender:"send", type:"text", },
        {message:"je peux vous citer les droits les plus important", sender:"send", type:"text", },

    ]
    },
    {
      id: 2,
      firstName: 'Jack',
      lastName: 'Smith',
      image: userImage2,
      messageList:[
        {message:"Bonjour", sender:"You", type:"text" , },
        {message:"Bonjour", sender:"send", type:"text", },
    ]
    },
    {
      id: 3,
      firstName: 'Olivia',
      lastName: 'Johnson',
      image: userImage5,
      messageList:[
        {message:"Bonjour Monsieur", sender:"You", type:"text" , },
        {message:"Bonjour Issam", sender:"send", type:"text", },
        {message:"ça va bien?", sender:"You", type:"text" , },
    ]
    },
    {
        id: 4,
        firstName: 'Mohamed',
        lastName: 'Hassine',
        image: userImage4,
        messageList:[
            {message:"Bonjour Monsieur", sender:"You", type:"text" , },
            {message:"Bonjour Issam", sender:"send", type:"text", },
            {message:"Avez vous des questions", sender:"send", type:"text", },
            {message:"oui j'ai plusieur question", sender:"You", type:"text", },
            {message:"concernant les droits de l'employeur", sender:"You", type:"text", },
        ]
    },
    {
        id: 5,
        firstName: 'Zaineb',
        lastName: 'Ben Fradj',
        image: userImage3,
        messageList:[
            {message:"Bonjour", sender:"You", type:"text" , },
            {message:"Bonjour", sender:"send", type:"text", },
        ]
    },
    {
        id: 6,
        firstName: 'Issam',
        lastName: 'Ben Hassine',
        image: userImage6,
        messageList:[
            {message:"Bonjour Monsieur", sender:"You", type:"text" , },
            {message:"Bonjour Issam", sender:"send", type:"text", },
            {message:"oui j'ai plusieur question les droits de l'homme", sender:"You", type:"text", },
        ]
    }, 
    {
        id: 7,
        firstName: 'hassen',
        lastName: 'Ben Salim',
        image: userImage2,
        messageList:[]
    },
    {
        id: 8,
        firstName: 'Sophia',
        lastName: 'Slimen',
        image: userImage8,
        messageList:[
            {message:"Bonjour Monsieur", sender:"You", type:"text" , },
            {message:"Bonjour Issam", sender:"send", type:"text", },
        ]
    },
    {
        id: 9,
        firstName: 'Aissa',
        lastName: 'ACHAFEJ',
        image: userImage7,
        messageList:[
            {message:"Bonjour", sender:"You", type:"text" , },
        ]
    },
    {
        id: 10,
        firstName: 'Hazem',
        lastName: 'ben Sariya',
        image: userImage1,
        messageList:[
            {message:"Bonjour Monsieur", sender:"You", type:"text" , },
            {message:"Bonjour Issam", sender:"send", type:"text", },
        ]
    },
    {
        id: 11,
        firstName: 'Omar',
        lastName: 'Ben Hassen',
        image: userImage6,
        messageList:[
            {message:"Bonjour Monsieur", sender:"You", type:"text" , },
            {message:"Bonjour Issam", sender:"send", type:"text", },
            {message:"oui j'ai plusieur question les droits de l'homme", sender:"You", type:"text", },
        ]
    },
    {
        id: 12,
        firstName: 'Salima',
        lastName: 'Sadak',
        image: userImage8,
        messageList:[
            {message:"Bonjour Monsieur", sender:"You", type:"text" , },
        ]
    }, 
];
  
  export default usersList;
  
 new Vue({
     el: '#app',
     data() {
         return {
             info: null,
             obj: null,
             logo: null,
             name: null,
             searchName: null,
             id: null,

             facebookAdress: null,
             redditAdress: null,
             twitterAdress: null,
             mediumAdress: null,


         }
     },
     methods: {
         searchCoin() {
             fetch("https://api.nomics.com/v1/currencies?key=74420a7d3bc34353bcd21da30533efe8&ids=" + this.searchName.toUpperCase())
                 .then(response => response.json())
                 .then(data => {
                     console.log(data);
                     this.info = data[0].description;
                     this.logo = data[0].logo_url;
                     this.name = data[0].name;
                     this.id = data[0].id;
                     this.redditAdress = data[0].reddit_url;
                     this.facebookAdress = data[0].facebook_url;
                     this.mediumAdress = data[0].medium_url;
                     this.twitterAdress = data[0].twitter_url;

                 }).catch(() => alert("We couldn't find the money you were looking for."))
         },

     },



 })
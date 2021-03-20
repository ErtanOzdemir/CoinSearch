 new Vue({
     el: '#app',
     data() {
         return {
             descriptionOfCoin: null,
             logoOfCoin: null,
             nameOfCoin: null,
             enteredAcronymNameOfCoin: null,
             acronymOfCoin: null,

             adressAt: {
                 facebook: null,
                 reddit: null,
                 twitter: null,
                 medium: null,
             }


         }
     },
     methods: {
         searchCoin() {
             fetch("https://api.nomics.com/v1/currencies?key=74420a7d3bc34353bcd21da30533efe8&ids=" + this.enteredAcronymNameOfCoin.toUpperCase())
                 .then(response => response.json())
                 .then(data => {
                     console.log(data);
                     this.descriptionOfCoin = data[0].description;
                     this.logoOfCoin = data[0].logo_url;
                     this.nameOfCoin = data[0].name;
                     this.acronymOfCoin = data[0].id;

                     this.adressAt.reddit = data[0].reddit_url;
                     this.adressAt.facebook = data[0].facebook_url;
                     this.adressAt.medium = data[0].medium_url;
                     this.adressAt.twitter = data[0].twitter_url;

                 }).catch(() => alert("We couldn't find the money you were looking for."))
         },

     },



 })
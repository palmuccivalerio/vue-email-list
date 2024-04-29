

const { createApp } = Vue;

createApp({
  data() {
    return {
      mail: "",
      mailArray: [],

      loadingProgress: 0,
      emailTarget: 10,
    }
  },

  created() {

    for (let i = 0; i < 10; i++) {
      this.generateMail();
    }
  },
  methods: {

    generateMail: function () {
      axios

        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          console.log(resp);

          this.mail = resp.data.response;

          this.mailArray.push(this.mail);

          if (this.mailArray.length === 10) {
            this.loadingComplete = true;
          }

          this.loadingProgress = Math.floor((this.mailArray.length / this.emailTarget) * 100);

        });
    },
  },

}).mount("#app")
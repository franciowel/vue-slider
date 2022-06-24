// Descrizione:
// Partendo dal markup in allegato, rifare lo slider usando Vuejs.

// // START
var app = new Vue({
    el: '#app',
    data: {
      currentElement: 0,
    //   QUI CI SONO GLI OGGETTI IMG DA METTERE IN SLIDER
      slides: [
        {
          image: 'img/01.jpg',
          title: 'Svezia',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
          image: 'img/02.jpg',
          title: 'Svizzera',
          text: 'Lorem ipsum.',
        },
        {
          image: 'img/03.jpg',
          title: 'Gran Bretagna',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          image: 'img/04.jpg',
          title: 'Germania',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
        },
        {
          image: 'img/05.jpg',
          title: 'Paradise',
          text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
        },
      ],
    },
    methods: {
        // CLIC PER ANDARE AVANTI NEGLI [i]
        nextElement() {
            if (this.currentElement < this.slides.length - 1) {
              this.currentElement++;
            } else {
              this.currentElement = 0;
            }
          },
        // CLIC PER ANDARE INDIETRO NEGLI [i]
        previousElement() {
            if (this.currentElement > 0) {
              this.currentElement--;
            } else {
              this.currentElement = this.slides.length - 1;
            }
          },
      
    },
  });


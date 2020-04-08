const app = new Vue({
  el: '#app',
  data: {
    books: [
      {id: 1, name: '《算法导论》', date: '2006-9', price: 85.00, quantity: 1},
      {id: 2, name: '《UNIX编程艺术》', date: '2006-2', price: 59.00, quantity: 1},
      {id: 3, name: '《编程珠玑》', date: '2008-10', price: 39.00, quantity: 1},
      {id: 4, name: '《代码大全》', date: '2006-3', price: 128.00, quantity: 1}
    ]
  },
  methods: {
    increment(index) {
      this.books[index].quantity++;
    },
    decrement(index) {
      this.books[index].quantity--;
    },
    deleteBook(index) {
      this.books.splice(index, 1)
    },
    // realPrice(price) {
    //   return '¥' + price.toFixed(2)
    // }
  },
  computed: {
    // totalPrice() {
    //   return this.books.reduce(function(prev, n) {
    //     return prev + n.price * n.quantity;
    //   }, 0)
    // }

    totalPrice() {
      return this.books.reduce((prev, book) => prev + book.price * book.quantity, 0)
    }

    // totalPrice() {
    //   let sum = 0;
    //   this.books.forEach(function(book) {
    //     sum += book.price * book.quantity
    //   })
    //   return sum;
    // }

    // totalPrice() {
    //   let sum = 0
    //   for(let book of this.books) {
    //     sum += book.price * book.quantity
    //   }
    //   return sum;
    // }
  },
  filters: {
    realPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }
})
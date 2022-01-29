const App = {

    data() {
        return {
            newItem: '',
            items: [

            ],
        }
    },

    computed: {
        reversedItems() {
            return this.items.slice();
        },
    },

    methods: {
        addItem: function () {
            this.items.push({
                id: this.items.length + 1,
                name: this.newItem,
            });
            this.newItem = '';
        },

        removeItem: function ( item ) {
            this.items = this.items.filter( ( newItem ) => newItem.id !== item.id );
          },
    },
}



Vue.createApp(App).mount("#app");
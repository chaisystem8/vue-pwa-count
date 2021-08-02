const app = Vue.createApp({
    data() {
        return {
            title:"Contador App - Vue",
            count:0,
        };
    },
    methods: {
        disCount(){
            this.count--
        },
        addCount(){
            this.count += 1
        }
    },
});
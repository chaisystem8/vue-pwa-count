const app = Vue.createApp({
    data() {
        return {
            title:"Contador App - Vue",
            count:0,
        };
    },
    methods: {
        disCount(){
            console.log('dis')
        },
        addCount(){
            console.log('add')
        }
    },
});
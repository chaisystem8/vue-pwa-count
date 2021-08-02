const app = Vue.createApp({
    data() {
        return {
            title:"Contador App - Vue",
            count:0,
        };
    },
    methods: {
        modCount( ins = "add"){
        (ins === "add") ? this.count+=1 : this.count--;            
        },
    },
});
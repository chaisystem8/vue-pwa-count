const app = Vue.createApp({
    data() {
        return {
            title:"Contador App - Vue",
            footer:"by Ch@iystem",
            count:0,
        };
    },
    methods: {
        modCount( ins = "add", cant = 1){
        (ins === "add") ? this.count+=cant : this.count-=cant;            
        },
    },
});
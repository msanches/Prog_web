const app = Vue.createApp({
    data() {
        return{
            tarefas: [],
            item: ""
        }
    },

    methods:{
        add: function(){
            this.tarefas.push(this.item);
            this.item = "";
        },

        check: function(e){
            e.target.parentElement.querySelector(".check").style.color = "#349223";
            e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
        },
        del: function(index){
            this.tarefas.splice(index, 1);
        }
    }
});

app.mount("#app")
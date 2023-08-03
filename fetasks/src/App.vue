<template>
<h1> FE Tasks</h1>
</template>
<script>
 import axios from "axios";
    export default {
  
      data () {
        return {
          value:{
            name : "Imeuswe App" ,
            email: "imeuswe@example.com"
          }
        }
      },
      created(){
          this.getTask();
          this.getPostById();
          
        },
        mounted(){
          this.Addvalue();
          this.Deletevalue();
        },
      
      methods:{
          getTask(){
            axios.get(" https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                      
                      
                      console.log(response.data);
                      
                  })
                  .catch((errors) => {
                      console.log(errors); 
                  });
          },
          getPostById(){
            let id=5;
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                    
                      console.log(response.data);
                      
                  })
                  .catch((errors) => {
                      console.log(errors);
                  });
          },
        Addvalue(){
        
        axios.post(" https://jsonplaceholder.typicode.com/users ",{name:"Imeuswe App",email: "imeuswe@example.com"})
        .then((response) => {
          console.log(response.data);
        })
        .catch((errors) => {
                    console.log(errors); // Errors
                });
    },
    Deletevalue(){
      let id=2;
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
          console.log(response.data);
        })
        .catch((errors) => {
                    console.log(errors); 
                });
    },
  
        }
        
    }
</script>


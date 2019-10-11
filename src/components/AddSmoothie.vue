<template>
   <div class="add-smoothie container">
      <h3 class="center-align blue-text">Add New Smoothie Recipe</h3>

      <br><br>

      <form @submit.prevent="AddSmoothie">

         <div class="field title">
            <label for="title">Smoothie Title:</label>
            <input type="text" name="title" v-model="title">
         </div>

         <div v-for="(ing, index) in ingredients" :key="index" class="field">
            <label for="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" v-model="ingredients[index]">
            <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
         </div>

         <div class="field add-ingredient">
            <label for="add-ingredient">Add an ingredient:</label>
            <input type="text" name='add-ingredient' @keydown.tab.prevent="addIng" v-model="another">
         </div>
         
         <div class="field center-align">
            <p v-if='feedback' class="red-text">{{ feedback }}</p>
            <button class="btn pink lighten-3">Add smoothie</button>
         </div>

      </form>


   </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'　//slug化するpackage


export default {

   name: 'AddSmoothie',
   data() {
      return{
         title: null,
         another: null,
         ingredients: [],
         feedback: null,
         slug: null
      }
   },


   methods: {
      AddSmoothie(){ //DBに情報を送る
         if(this.title){
            this.feedback = null
            // create a slug
            this.slug = slugify(this.title, {
               replacement: '-',
               remove: /[$*_+~.()'"!\-:@]/g,
               lower: true
            })
            db.collection('smoothies').add({
               title: this.title,
               ingredients: this.ingredients,
               slug: this.slug
            }).then(() => {
               this.$router.push({name: 'Index'})
            }).catch(err => {
               console.log(err)
            })
         }else{
            this.feedback = 'You must enter a smoothie title'
         }
      },


      addIng(){
         if(this.another){
            this.ingredients.push(this.another)
            this.another =　null
            this.feedback = null
         }else{
            this.feedback = 'You must enter a value to add an ingredient'
         }
      },
      deleteIng(ing){
         this.ingredients = this.ingredients.filter(ingredient => {
            return ingredient != ing
         })
      }
   }
}
</script>


<style scoped>
.btn {
   margin: 30px;
}
.add-smoothie{
   margin-top: 60px;
   padding: 20px;
   max-width: 800px;
}
.add-smoothie h3{
   margin-bottom: 50px;
}
.add-smoothie .field{
   margin: 20px auto;
   position: relative;
}
.add-smoothie .delete{
   position: absolute;
   right: 0;
   botton: 16px;
   color: #aaa;
   font-size: 1.4em;
   cursor: pointer;
}
</style>
<template>
   <div class="add-smoothie container">
      <h3 class="center-align blue-text">Add New Smoothie Recipe</h3>
      <br><br>

      <form @submit.prevent="AddSmoothie">

         <div class="field title">
            <label for="title">Smoothie Title:</label>
            <input type="text" name="title" v-model="title">
         </div>

         <div v-for="(ing, index) in ingredients" :key="index">
            <label for="ingredient">Ingredient:</label>
            <input type="text" name="ingredient" v-model="ingredients[index]">
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
export default {
   name: 'AddSmoothie',
   data() {
      return{
         title: null,
         another: null,
         ingredients: [],
         feedback: null
      }
   },
   methods: {
      AddSmoothie(){
         console.log(this.title, this.ingredients)
      },
      addIng(){
         if(this.another){
            this.ingredients.push(this.another)
            this.another =　null
            this.feedback = null
         }else{
            this.feedback = 'You must enter a value to add an ingredient'
         }
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
}

</style>
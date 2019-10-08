<template>
   <div class="add-smoothie container">
      <h3 class="center-align indigo-text">Add New Smoothie Recipe</h3>
      <br><br>
      <form>
         <div class="field title">
            <label for="title">Smoothie Title:</label>
            <input type="text" name="title" v-model="title">
         </div>
         <div class="field add-ingredient">
            <label for="add-ingredient">Add an ingredient:</label>
            <input type="text" name='add-ingredient'>
         </div>
         <div class="field center-align">
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
         title: null
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
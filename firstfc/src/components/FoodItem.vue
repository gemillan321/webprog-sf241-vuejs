<template>
  <div class="FoodItem">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Apples, Pineapple',
      message: 'I like apples'
    }
  }
};
</script>
 
<style></style>
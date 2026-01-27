<template>
  <Introduction />

  <h1>Food</h1>
  <food-item/>
  <food-item/>
  <food-item/>

  <h1>MAY MGA UTANG</h1>
  <utang/>
  <utang/>
  <utang/>
</template>

<script setup>
import Introduction from './components/Introduction.vue'
import FoodItem from './components/FoodItem.vue'
import Utang from './components/Utang.vue'
</script>

<style>
.FoodItem{
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: rgb(52, 132, 52);
}
.utang {
  background-color: rgb(132, 52, 52);
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
}
</style>

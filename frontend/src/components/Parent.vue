<template>
  <div class="search">
    <SearchBar :db="type1"></SearchBar>
    <SearchBar :db="type2"></SearchBar>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";

export default {
  data() {
    return { type1: true, type2: false };
  },
  components: {
    SearchBar
  }
};
</script>

<style>
.search {
  display: flex;

}
</style>
<template>
  <div>
    <multiselect
      v-model="optionsProxy"
      id="ajax"
      label="name"
      track-by="name"
      placeholder="Type to search"
      open-direction="bottom"
      :options="arr()"
      :internal-search="false"
      :limit="5"
      :max-height="600"
      :show-no-results="false"
      :hide-selected="true"
      @search-change="asyncFind"
    ></multiselect>
  </div>
</template>

<script>
import initialize from "@/components/search";
export default {
  name: "SearchBar",
  props: {
    db: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return { optionsProxy: "", options: [] };
  },
  methods: {
    asyncFind(query) {
      this.isLoading = true;
      initialize(query, this.$props.db).then(response => {
        this.options = response;
        this.isLoading = false;
      });
    },
    arr() {
      console.log(this.options.length);
      if (this.options.length > 0) {
        return this.options;
      } else {
        return [];
      }
    }
  }
};
</script>

<style scoped>
* {
  font-family: "Lato", "Avenir", sans-serif;
  min-width: 600px;
  max-width: 600px;
  margin: 50px;
}
</style>
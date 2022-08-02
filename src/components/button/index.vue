<template>
  <div>
    <button :class="type"><slot /></button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped>
.default {
  border: none;
  background-color: #eee;
  color: black;
  border-radius: 5px;
  width: 60px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.success {
  border: none;
  width: 60px;
  height: 40px;
  background-color: greenyellow;
  color: #fff;
}
</style>

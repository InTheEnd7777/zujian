<template>
  <div>
    <gz-btn>登录</gz-btn>
    <gz-btn type="success">注册</gz-btn>
    <gz-gogo></gz-gogo>
    <gz-gogo type="bashi"></gz-gogo>
    <gz-gogo type="wushi"></gz-gogo>
    <gz-gogo type="ershi"></gz-gogo>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},

  methods: {},
};
</script>

<style scoped>
    html,
    body {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0;
    }
    circle {
        transition: stroke-dashoffset 0.15s;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    .txt{
		font-size: 14px;
		text-align: center;
    }
    .loading{
    	padding:40vh;
    }
    </style>


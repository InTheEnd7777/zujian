<template>
  <div>
    <div class="q1">
      <slot />
      <transition>
        <p class="onehundred" :class="type">{{ bfb }}</p>
      </transition>
    </div>
  </div>
</template>

<script>  
export default {
  data() {
    return {
      jindu: '',
      bfb: '',
    };
  },
  mounted() {
    if (this.type === 'success') {
      return (this.bfb = '80%');
    } else if (this.type === 'onehundred') {
      return (this.bfb = '100%');
    }else if(this.type === 'wushi'){
      return (this.bfb = '50%');
    }else{
      this.type === 'ershi'
      return (this.bfb = '20%');
    }
  },

  props: {
    type: {
      type: String,
      default: 'onehundred',
    },
  },
};
</script>

<style scoped>
.q1 {
  display: flex;
  width: 300px;
  height: 20px;
  border: 1px solid #333;
  margin-top: 20px;
  margin-left: 50px;
  overflow: hidden;
}
.onehundred {
  color: #fff;
  border: 1px solid #333;
  height: 20px;
  background-color: greenyellow;
  width: 100%;
  margin-top: 0px;
  text-align: center;
  animation: jindu 1s;
}
.bashi {

  background-color: yellow;
  width: 80%;
  color: #333;
}
.wushi {
  background-color: red;
  width: 50%;
  color: #eee;

}
.ershi {
  background-color: burlywood;
  width: 20%;
}
.go {
  animation: jindu 1s reverse;
}
@keyframes jindu {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>

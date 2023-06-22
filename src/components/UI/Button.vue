<template>
<button :class="buttonClass" :style="buttonStyle" @click="handleClick">{{buttonText}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    url: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const buttonClass = {
      'custom-button': true,
      'secondary-button': props.buttonText === 'Secondary',
    };

    const buttonStyle = {
      color: 'white',
    };

    function handleClick() {
      window.location.href = props.url;
    }

    return {
      buttonClass,
      buttonStyle,
      handleClick,
    };
  },
}
</script>

<style lang="scss" scoped>
@use "src/styles/variables" as var;
.custom-button {
  width: 169px;
  height: 58px;
  background: var.$c101;
  border-radius: 10px;
  font-size: 16px;
  line-height: 20px;
  font-weight: var.$font-bl;
  text-transform: uppercase;
  @extend %dtrans;
  &:hover{
    background-color: var.$c100;
    @extend %htrans;
  }
}

.secondary-button {
  /* Стилізуйте вторинну кнопку за вашими потребами */
}
</style>
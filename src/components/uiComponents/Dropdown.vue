<template>
  <el-dropdown
    popper-class="rounded-dropdown"
    :hide-timeout="dropdownHideTimeout"
    @visible-change="handleDropdownVisibleChange"
  >
    <el-button
      ref="dropdownButton"
      :type="buttonType"
      :plain="buttonPlain"
      :circle="buttonCircle"
      :size="buttonSize"
      :round="buttonRound"
    >
      <el-icon :size="iconSize">
        <slot name="button-icon" />
      </el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in items"
          :key="item.label"
          :disabled="item.disabled"
          :divided="item.divided"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  props: {
    name: String,
    buttonType: {
      type: String,
      default: "primary",
    },
    buttonPlain: {
      type: Boolean,
      default: true,
    },
    buttonCircle: {
      type: Boolean,
      default: true,
    },
    buttonSize: {
      type: String,
      default: "large",
    },
    buttonRound: {
      type: Boolean,
      default: true,
    },
    iconSize: {
      type: String,
      default: "large",
    },
    dropdownHideTimeout: {
      type: Number,
      default: 500,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDropdownVisibleChange(isVisible) {
      if (isVisible) {
        this.$emit("opened", this.name);
      } else {
        this.$emit("closed", this.name);
      }
      if (!isVisible) {
        this.$refs.dropdownButton.$el.blur();
      }
    },
    hide() {
      this.$refs.dropdownButton.hide();  // Викликаємо метод hide елемента dropdown
    },
  },
};
</script>

<style>
.rounded-dropdown {
  border-radius: 15px;
  overflow: hidden; /* Це забезпечує, що вміст також закруглений */
}
</style>
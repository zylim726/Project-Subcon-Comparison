<template>
  <div class="modal" :class="{ 'is-active': showModal }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content" style="height: 50%; width: 25%">
      <div class="box">
        <h1 class="titleHeader">{{ title }}</h1>
        <br />
        <hr style="margin-top: -10px" />
        <br />
        <input
          type="text"
          v-model="module"
          placeholder="module"
          class="typeInput"
          @focus="onInputFocus('Module')"
        />
        <input
          type="text"
          v-model="permission"
          placeholder="permission"
          class="typeInput"
          @focus="onInputFocus('Permission')"
        />
      </div>
    </div>
    <button
      class="btn-save"
      aria-label="close"
      @click.stop="saveAndCloseModal"
      style="margin-top: 228px; margin-left: -156px"
    >
      Save
    </button>
    <button
      class="btn-save"
      aria-label="close"
      @click.stop="closeModal"
      style="margin-top: 228px"
    >
      Close
    </button>
  </div>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    title: String,
  },
  data() {
    return {
      module: "",
      permission: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    saveAndCloseModal() {
      this.$emit("save", { module: this.module, permission: this.permission });
      this.closeModal();
    },
    onInputFocus(input) {
      // Handle focus event for inputs
      console.log("Input focused:", input);
    },
  },
};
</script>

<style scoped>
.typeInput {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  transition: border-color 0.5s ease;
}

.typeInput:focus {
  outline: none;
  border-color: orange;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  height: 50%;
  overflow-y: auto;
}
</style>

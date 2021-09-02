export default {
  methods: {
    t: function(property, modelName = this.$translationName) {
      var translate, vue;
      vue = Object.getPrototypeOf(this.$root).constructor;
      translate = vue.prototype.VueResourceForm.translate;
      if (!translate) {
        return property;
      }
      return translate(property, modelName);
    }
  }
};
<template>
  <div class="toolbar-elements" v-dragula="colOne" bag="first" drake="firsto">
    <h2>Elements</h2>
    <div class="toolbar-element">
      <div>
        <h5>Token de topo 1</h5>
        <div class="toolbar-element-image"></div>
      </div>
    </div>
    <div class="toolbar-element">
      <div>
        <h5>Token de topo 2</h5>
        <div class="toolbar-element-image"></div>
      </div>
    </div>
    <div class="toolbar-element">
      <h5>Token de meio</h5>
      <div class="toolbar-element-image"></div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'

  export default {
    name: 'ToolbarElements',
    data: () => ({
      toolbarOpen: false,
      colOne: [
        'You can move these elements between these two containers',
        'Moving them anywhere else isn"t quite possible',
        'There"s also the possibility of moving elements around in the same container, changing their position'
      ],
      categories: [
        [1, 2, 3],
        [4, 5, 6]
      ],
    }),
    mounted() {
      var _this = this
      Vue.vueDragula.eventBus.$on(
        'drop',
        function (args) {
          console.log('drop: ' + args[0])
          console.log(_this.categories)
        }
      )
      Vue.vueDragula.eventBus.$on(
        'dropModel',
        function (args) {
          console.log('dropModel: ' + args)
          console.log(_this.categories)
        }
      )
    },
    ready: function () {

    },
    methods: {
      onClick: function () {
        console.log(Vue.vueDragula.find('first-bag'))
        window.alert('click event')
      },
    }
  };

</script>

<style>
  .toolbar-elements{
    width: 230px;
    height: 414px;
    background-color: lightcyan;
    margin: 6px;
    padding: 6px;
    position: absolute;
    top: 65px;
    left: 100px;
    z-index: 99;
  }

  .toolbar-element-image{
    width: 180px;
    height: 80px;
    background-color: gainsboro;
    border: 1px;
    border-color: aqua;
  }

</style>

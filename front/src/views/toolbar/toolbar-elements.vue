<template>
  <div class="toolbar-elements" v-dragula="colOne" drake="first">
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

      var service = Vue.$dragula.$service;

      service.eventBus.$on('drop', (args) => {
        console.log('drop: ' + args[0])
        console.log(args);
      })

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

<template>
  <div class="toolbar-elements" v-dragula="colOne" drake="first" service="servical">
    <h2>Elements</h2>
    <div class="toolbar-element container">
      <div>
        <h5>Token de topo 1</h5>
        <div class="toolbar-element-image"></div>
      </div>
    </div>
    <div class="toolbar-element container">
      <div>
        <h5>Token de topo 2</h5>
        <div class="toolbar-element-image"></div>
      </div>
    </div>
    <div class="toolbar-element container">
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

      let servical = Vue.$dragula.createService({
        name: 'servical',
        drakes: {
          first: {
            copy: true,
          }
        }
      })

      servical.on('', {
        accepts: (drake, el, target) => {
          console.log('accepts: ', el, target)
          return true // target !== document.getElementById(left)
        },
        drag: (drake, el, container) => {
          console.log('drag: ', 'el:', el, 'c:', container)
          //console.log('classList', el.classList)
          //el.classList.remove('ex-moved')
        },
        drop: (drake, el, container) => {
          console.log('drop: ', el, container)
          //console.log('classList', el.classList)
          //el.classList.add('ex-moved')
          return false;
        },
        over: (drake, el, container) => {
          console.log('over: ', el, container)
          //console.log('classList', el.classList)
          //el.classList.add('ex-over')
        },
        out: (drake, el, container) => {
          console.log('out: ', el, container)
          //console.log('classList', el.classList)
          //el.classList.remove('ex-over')
        }
      })

    },
    created() {

      console.log('created');
/*
      let myService = Vue.$dragula.createService({
        name: 'my-service',
        drakes: {
          first: {
            copy: true,
          }
        }
      })

      myService.on({
        drop: (el, container) => {
          console.log('myService drop: ', el, container)
        }
      })*/

    },
    methods: {
      onClick: function () {
        console.log(Vue.vueDragula.find('first-bag'))
        window.alert('click event')
      },
    }
  };

</script>

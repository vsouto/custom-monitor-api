<template>
  <div>
    <div class="monitor-grid" v-dragula="colTwo" drake="first">
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
  </div>
</template>

<script>

  import Vue from 'vue'

  // @ts-ignore
  import { Vue2Dragula } from "vue2-dragula"

  export default {
    name: 'MonitorGrid',
    data: () => ({
      toolbarOpen: false,
      colTwo: [
        'This is the default use case. You only need to specify the containers you want to use',
        'More interactive use cases lie ahead',
        'Another message'
      ],
    }),
    ready() {

    },
    created () {

    }
  };
</script>

<style>
  .monitor-grid{
    width: 680px;
    height: 420px;
    background-color: grey;
    margin: 4px;
    z-index: 1;
  }

</style>

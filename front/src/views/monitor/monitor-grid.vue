<template>
  <div>
    <div class="monitor-grid" v-dragula="colTwo" drake="first">
      <!-- row 1-->
      <div class="grid-row">
        <div class="toolbar-element">
          <div>
            <h5>Token de topo 1</h5>
            <div class="toolbar-element-image"></div>
          </div>
        </div>
      </div>
      <!-- row 2-->
      <div class="grid-row">
        <div class="toolbar-element">
          <div>
            <h5>Token de topo 2</h5>
            <div class="toolbar-element-image"></div>
          </div>
        </div>
      </div>
      <!-- row 3-->
      <div class="grid-row">
        <div class="toolbar-element">
          <h5>Token de meio</h5>
          <div class="toolbar-element-image"></div>
        </div>
      </div>
      <!-- row 4-->
      <div class="grid-row"></div>
      <!-- row 5-->
      <div class="grid-row"></div>
      <!-- row 6-->
      <div class="grid-row"></div>
      <!-- row 7-->
      <div class="grid-row"></div>
      <!-- row 8-->
      <div class="grid-row"></div>
    </div>
  </div>
</template>

<script>

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

<template>
  <div>
    <div class="monitor-grid" v-dragula="colTwo" drake="first">
      <!-- row X -->
      <div class="grid-row" v-for="item in items">
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
        <div class="grid-column"></div>
      </div>
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
      items: [0,0,0,0,0,0,0,0]
    }),
    ready() {

    },
    created () {

    }
  };
</script>

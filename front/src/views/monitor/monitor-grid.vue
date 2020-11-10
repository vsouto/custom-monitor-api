<template>
  <div>
    <div class="container monitor-grid" v-dragula="colTwo" drake="first">
      <!--<div class="grid-cel" v-for="cel in cels"></div>-->
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1 grid-col">
          <div class="box-row grid-cel">.</div>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-8 col-lg-10 grid-col">
          <div class="box-row grid-cel">.</div>
        </div>
        <div class="col-xs-6 col-sm-3 col-md-2 col-lg-1 grid-col">
          <div class="box-row grid-cel">.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-3 col-md-2 col-lg-1 grid-col">
          <div class="box-row grid-cel">.</div>
        </div>
        <div class="col-xs-12 col-sm-9 col-md-10 col-lg-11 grid-col">
          <div class="box-row grid-cel">.</div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
          <div class="box">Responsive</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 col-6">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0 box-row grid-cel">.</div>
        </div>
        <div class="col-md-4 col-6">
          <div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-6 .col-md-4
          </div>
        </div>
        <div class="col-md-4 col-6"><div class="pa-2 v-card v-sheet v-sheet--outlined theme--light rounded-0">
          .col-6 .col-md-4
        </div></div>
      </div>
      <v-row>
        <v-col
          v-for="n in 2"
          :key="n"
          cols="6"
        >
          <v-card
            class="pa-2"
            outlined
            tile
          >
            .col-6
          </v-card>
        </v-col>
      </v-row>
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
      items: [0,0,0,0,0,0,0,0],
      cels: 8
    }),
    ready() {

    },
    created () {

    }
  };
</script>


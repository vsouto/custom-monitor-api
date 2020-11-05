<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <h1>Welcome to Custom Monitor Proof of Concept</h1>
      </v-row>

      <v-row>
        <sidebar-tasy></sidebar-tasy>

        <v-col cols="12">
        </v-col>

        <v-col class="mb-8 pb-8">

          <br>
          <p class="subheading font-weight-regular">
            Hello
          </p>
        </v-col>

      </v-row>
    </v-container>
  </div>
</template>

<script>

import SidebarTasy from "@/views/sidebar/sidebar-tasy";
//import Sidebar from "@/views/sidebar/sidebar";

export default {
  name: 'Poc',
  components: {
    SidebarTasy
  },
  data: () => ({

  })
};
</script>

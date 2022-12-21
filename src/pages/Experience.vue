<template>
  <q-layout
    view="lHh Lpr lFf"
    style="display: flex; justify-content: left; flex-wrap: wrap"
  >
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <b>danylo morhun</b> / frontend developer
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> more about me: </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container style="width: 1000px; background: $primary">
      <div class="q-pa-md row items-start q-gutter-md">
        <a href="https://ezcloudllc.com/" target="_blank">
          <q-card class="my-card">
            <img src="../../public/ezcloud.png" />

            <q-card-section>
              <div class="text-h6">ezcloudllc:</div>

              <div class="text-subtitle2">
                from november 2022 to present time i work for ezcloudllc as a
                vue.js frontend developer.
              </div>
            </q-card-section>
          </q-card>
        </a>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "about me",
    caption: "who_am_i?",
    icon: "settings_accessibility",
    link: "/",
  },
  {
    title: "skills",
    caption: "my_hard_skills",
    icon: "javascript",
    link: "/skills",
  },
  {
    title: "experience",
    caption: "my_work_experience",
    icon: "workspaces",
    link: "/experience",
  },
  {
    title: "contacts",
    caption: "contact_me",
    icon: "link",
    link: "contacts",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    const progress = 100;

    return {
      progress,
      randomize() {
        progress.value = Math.random();
      },
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="scss">
* {
  font-family: "Consolas", monospace;
}

ul {
  padding: 0;
}

a {
  text-decoration: none;
  color: black;
}

li {
  list-style: none;
  list-style-type: none;
  display: flex;
  b {
    margin-right: 3px;
  }
  img {
    margin-right: 20px;
  }
}

.q-toolbar__title {
  font-size: 18px;
}

.about-me__text {
  padding: 15px;
  max-width: 370px;
  font-size: 18px;
}
</style>

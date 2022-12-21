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
    <q-page-container style="margin: 15px">
      <p style="font-size: 18px"><b>hard skills:</b></p>
      <ul>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/js.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>javascript: </b> good knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/react.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>react.js: </b> good knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/vue.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>vue.js: </b> basic knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/quasar.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>quasar framework: </b> basic knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/html.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>html5 + css3: </b> good knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/scss.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>scss: </b>good knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/git.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>git: </b> basic knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/figma.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>figma: </b> bacis knowledge;
        </li>
        <li style="display: flex; align-items: center; margin: 5px">
          <img
            src="../../public/ps.svg"
            alt=""
            style="width: 50px; height: 50px"
          />
          <b>adobe photoshop:</b> good knowledge;
        </li>
      </ul>
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

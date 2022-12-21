<template>
  <q-layout view="lHh Lpr lFf" style="display: flex; justify-content: left">
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

    <q-page-container style="width: 700px">
      <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <img src="../../public/profile.png" />

          <q-card-section>
            <div class="text-h6">Danylo Morhun</div>
            <div class="text-subtitle2">frontend developer</div>
          </q-card-section>
        </q-card>
      </div>
    </q-page-container>

    <q-page-container>
      <div class="about-me__text">
        <p><b>about me:</b></p>
        <p>
          hello there. my name is Danylo Morhun. i am a student from Ukraine
          currently studying software engineering in Kherson State University. i
          am interested in frontend development and ux/ui design.*
        </p>
        <p><b>personal data:</b></p>
        <p>
          Ukraine, Kherson <br />
          2 may 2003 (19 years old)
        </p>
        <b>*</b>u can use buttons on the left sidebar to find more information
        about me.
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

    return {
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

.q-toolbar__title {
  font-size: 18px;
}

.about-me__text {
  padding: 15px;
  max-width: 370px;
  font-size: 18px;
}
</style>

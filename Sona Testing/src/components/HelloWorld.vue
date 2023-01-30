<template>
  <!-- <v-container> -->

  <v-app>
    <v-card color="#90CAF9" width="400">
      <v-card-title> Welcome to Sona Testing </v-card-title>

      <v-card-text class="pb-2">
        <v-text-field label="Email" solo></v-text-field>

        <v-text-field
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show3 ? 'text' : 'password'"
          name="input-10-2"
          label="Password"
          hint="At least 8 characters"
          solo
          class="input-group--focused"
          @click:append="show3 = !show3"
        ></v-text-field>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-text class="text-center text-h6">
        <b>OR</b>
      </v-card-text>

      <v-card-text class="text-center">
        <img src="../assets/google.png" alt="" width="60" height="50" />
        <img src="../assets/link.png" alt="" width="60" height="50" />
      </v-card-text>

      <v-card-actions class="justify-center">
        <v-btn
          flat
          dark
          color="blue darken-1 text-white px-10 mb-5"
          to="/Home/"
        >
          Sign In
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
  <!-- </v-container> -->
</template>

<style>
html {
  overflow-y: auto;
}
</style>

<!-- REQUIRED SCRIPTS  -->

<script>
import * as firebase from "firebase/app";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsAdm3QQTHlmwMihKSaXcEjcx-cwOeX8c",
  authDomain: "project-360e7.firebaseapp.com",
  projectId: "project-360e7",
  storageBucket: "project-360e7.appspot.com",
  messagingSenderId: "921356772970",
  appId: "1:921356772970:web:362f876a5d94e3ae280c13",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
  data() {
    return {
      dialog: true,
      items: [
        { title: "Institute" },
        { title: "Employer" },
        { title: "Student" },
      ],
      samurl: "",
      selectedfile: null,
      show3: false,
      uploadValue: 0,
      img1: null,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
      },
    };
  },

  methods: {
    filechange(event) {
      this.selectedfile = event.target.files[0];
      console.log("Selected file : ", this.selectedfile);
      console.log("Event : ", event);
    },

    uploadfile() {
      const storage = getStorage();

      const metadata = {
        contentType: "image/jpeg",
      };

      // Create a reference to 'mountains.jpg'
      const mountainsRef = ref(storage, "data/" + this.selectedfile.name);

      const Task = uploadBytesResumable(
        mountainsRef,
        this.selectedfile,
        metadata
      );

      Task.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(Task.snapshot.ref).then((downloadURL) => {
            this.samurl = downloadURL;
            console.log("File available at", downloadURL);
          });
        }
      );

      console.log("mountainsRef : ", mountainsRef);

      // console.log("app : ",app)
      console.log("firebase : ", firebase);
    },
  },
};
</script>

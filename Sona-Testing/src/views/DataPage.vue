<template>
  <v-app>
    <div></div>

    <div class="text-left ml-10 mb-5">
      <v-dialog v-model="dialog" width="900">
        <template v-slot:activator="{ on, attrs }">
          <v-row class="mt-8 ml-8">
            <v-btn color="primary" class="white--text" v-bind="attrs" v-on="on">
              <v-icon dark>mdi-plus</v-icon>Add
            </v-btn>

            <v-btn
              color="primary"
              class="white--text ml-3"
              @click="edit(selected1)"
              >EDIT</v-btn
            >
            <v-col cols="2" class="pa-0">
              <v-select
                :items="DTList"
                v-model="DTFilterValue"
                label="Gear Pair"
                class="pa-0 ml-3"
                @change="Selecteditm1"
              ></v-select>
            </v-col>
            <v-btn
              color="primary"
              class="white--text ml-3"
              @click="dash2()"
              :disabled="disableb"
              >Search</v-btn
            >

            <v-btn color="primary" class="white--text ml-3" to="/Home"
              >HOME</v-btn
            >
          </v-row>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            ADD DATA HERE
          </v-card-title>

          <v-divider></v-divider>

          <!-- ---------------------------------------------------------------------------------------------------- -->

          <v-card-text>
            <div ma-0>
              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> GEAR PAIR </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Project"
                    :items="GearPair"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="Projectselected()"
                    :rules="[(v) => !!v || 'Gear Pair is required']"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row
                class="text-center"
                justify="center"
                align="center"
                pa-0
                ma-0
                mt-0
              >
                <v-col cols="3" pa-0 ma-0>
                  <v-header class="font-weight-medium" pa-0 ma-0>
                    Differential Torque
                  </v-header>
                </v-col>

                <v-col cols="3" pa-0 ma-0>
                  <v-select
                    v-model="postdata.JJ01"
                    :items="items1"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="DTselected()"
                    :rules="[(v) => !!v || 'Differential Torque is required']"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> Application </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Column3"
                    :items="Application"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="AppSelect()"
                    :rules="[(v) => !!v || 'Application is required']"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium" pa-0> STEPS </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Report"
                    :items="items"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="selectpost(postdata.Report)"
                    :rules="[(v) => !!v || 'Report is required']"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>
            </div>
            <br /><br />

            <v-container>
              <!-- --------------------------------------------------------------------------------------------------- -->

              <div>
                <v-row>
                  <v-col cols="6">
                    <v-row justify="center">
                      <v-col cols="8" align="center" pt-0 ma-0>
                        <p class="font-weight-bold" mb-0 pa-0>GEAR</p>
                      </v-col>
                    </v-row>

                    <div>
                      <v-row align="center" justify="center">
                        <v-col cols="4" align="center">
                          <v-header align="center">MCS</v-header>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="postdata.Column5"
                            type="number"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Tensile Side
                          </p>
                        </v-col>
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Compression Side
                          </p>
                        </v-col>
                      </v-row>

                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column8"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column9"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column7"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column10"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4" class="py-1" py-1>
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column6"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="py-1" py-1>
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column11"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <!-- <input
                            hidden="true"
                            type="file"
                            ref="gearF1"
                            @change="filechange1"
                          />

                          <input
                            hidden="true"
                            type="file"
                            ref="gearF2"
                            @change="filechange2"
                          />
                          <input
                            hidden="true"
                            type="file"
                            ref="gearP1"
                            @change="filechange3"
                          />
                          <input
                            hidden="true"
                            type="file"
                            ref="gearP2"
                            @change="filechange4"
                          /> -->
                        </v-row>

                        <!-- <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="gf1()">Gear Feasible1</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namegf1 }}</p>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="gf2()">Gear Feasible2</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namegf2 }}</p>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="gp1()">Gear Physical1</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namegp1 }}</p>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="gp2()">Gear Physical2</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namegp2 }}</p>
                          </v-col>
                        </v-row> -->
                      </div>
                    </div>
                  </v-col>

                  <!-- *************************************** -->

                  <v-col cols="6">
                    <div>
                      <v-row justify="center">
                        <v-col cols="8" align="center">
                          <p class="font-weight-bold" mb-0 pa-0>PINION</p>
                        </v-col>
                      </v-row>
                    </div>

                    <div>
                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4" align="center">
                            <v-header align="center">MCS</v-header>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              v-model="postdata.Column12"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row justify="center">
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Tensile Side
                            </p>
                          </v-col>
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Compression Side
                            </p>
                          </v-col>
                        </v-row>
                      </div>

                      <div>
                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column13"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="postdata.Column16"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column14"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="postdata.Column17"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4" py-1 class="py-1">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column15"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4" class="py-1" py-1>
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="postdata.Column18"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <!-- <input
                            hidden="true"
                            type="file"
                            ref="pinionF1"
                            @change="filechange5"
                          />

                          <input
                            hidden="true"
                            type="file"
                            ref="pinionF2"
                            @change="filechange6"
                          />
                          <input
                            hidden="true"
                            type="file"
                            ref="pinionP1"
                            @change="filechange7"
                          />
                          <input
                            hidden="true"
                            type="file"
                            ref="pinionP2"
                            @change="filechange8"
                          /> -->
                        </v-row>

                        <!-- <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="pf1()">Pinion Feasible1</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namepf1 }}</p>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="pf2()">Pinion Feasible2</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namepf2 }}</p>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="pp1()">Pinion Physical1</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namepp1 }}</p>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="6">
                            <v-btn @click="pp2()">Pinion Physical2</v-btn>
                          </v-col>
                          <v-col cols="6" align="left" justify="left">
                            <p class="mb-0">{{ postdata.namepp2 }}</p>
                          </v-col>
                        </v-row> -->
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>

            <div>
              <v-row justify="center">
                <v-col cols="3" align="center">
                  <v-text-field
                    label="Remark"
                    solo
                    dense
                    v-model="postdata.Column19"
                    type="number"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              class="ma-2 px-2"
              @click="dialog = false"
            >
              Cancel
            </v-btn>
            <v-btn color="primary" text @click="save1()" class="ma-2 px-2">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- ------------------------------------------------------------------------------------------------- -->
      <!-- ------------------------------------------------------------------------------------------------- -->

      <v-dialog v-model="dialog1" width="900">
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            UPDATE DATA HERE
          </v-card-title>

          <v-divider></v-divider>

          <!-- ---------------------------------------------------------------------------------------------------- -->

          <v-card-text>
            <div ma-0>
              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> GEAR PAIR </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="editdata.Project"
                    :items="GearPair"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row
                class="text-center"
                justify="center"
                align="center"
                pa-0
                ma-0
                mt-0
              >
                <v-col cols="3" pa-0 ma-0>
                  <v-header class="font-weight-medium" pa-0 ma-0>
                    Differential Torque
                  </v-header>
                </v-col>

                <v-col cols="3" pa-0 ma-0>
                  <v-select
                    v-model="editdata.JJ01"
                    :items="items1"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> Application </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="editdata.Column3"
                    :items="Application"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium" pa-0> STEPS </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="editdata.Report"
                    :items="items"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                  >
                  </v-select>
                </v-col>
              </v-row>
            </div>
            <br /><br />

            <v-container>
              <!-- --------------------------------------------------------------------------------------------------- -->

              <div>
                <v-row>
                  <v-col cols="6">
                    <v-row justify="center">
                      <v-col cols="8" align="center" pt-0 ma-0>
                        <p class="font-weight-bold" mb-0 pa-0>GEAR</p>
                      </v-col>
                    </v-row>

                    <div>
                      <v-row align="center" justify="center">
                        <v-col cols="4" align="center">
                          <v-header align="center">MCS</v-header>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            v-model="editdata.Column5"
                            type="number"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-row justify="center">
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Tensile Side
                          </p>
                        </v-col>
                        <v-col cols="4">
                          <p class="font-weight-bold" align="center">
                            Compression Side
                          </p>
                        </v-col>
                      </v-row>

                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column8"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column9"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column7"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column10"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="center" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column6"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column11"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <!-- <v-row align="center">
                          <v-col cols="8" align="center">
                            <v-btn depressed color="primary" @click="save1">
                              SAVE
                            </v-btn>
                          </v-col>
                        </v-row> -->
                      </div>
                    </div>
                  </v-col>

                  <!-- *************************************** -->

                  <v-col cols="6">
                    <div>
                      <v-row justify="center">
                        <v-col cols="8" align="center">
                          <p class="font-weight-bold" mb-0 pa-0>PINION</p>
                        </v-col>
                      </v-row>
                    </div>

                    <div>
                      <div>
                        <v-row align="center" justify="center">
                          <v-col cols="4" align="center">
                            <v-header align="center">MCS</v-header>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              v-model="editdata.Column12"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                        <v-row justify="center">
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Tensile Side
                            </p>
                          </v-col>
                          <v-col cols="4">
                            <p class="font-weight-bold" align="center">
                              Compression Side
                            </p>
                          </v-col>
                        </v-row>
                      </div>

                      <div>
                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column13"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Rib"
                              solo
                              dense
                              v-model="editdata.Column16"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column14"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Root"
                              solo
                              dense
                              v-model="editdata.Column17"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>

                        <v-row align="left" justify="center">
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column15"
                              type="number"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="4">
                            <v-text-field
                              label="Web"
                              solo
                              dense
                              v-model="editdata.Column18"
                              type="number"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-container>

            <div>
              <v-row justify="center">
                <v-col cols="3" align="center">
                  <v-text-field
                    label="Remark"
                    solo
                    dense
                    v-model="editdata.Column19"
                    type="number"
                  >
                  </v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              text
              class="ma-2 px-2"
              @click="dialog1 = false"
            >
              Cancel
            </v-btn>
            <v-btn color="primary" text @click="update()" class="ma-2 px-2">
              Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <v-data-table
      v-model="selected1"
      :headers="headers"
      :items="SAM"
      :single-select="singleSelect1"
      item-key="id"
      show-select
      class="elevation-1"
      id="ttable1"
    >
    </v-data-table>
  </v-app>
</template>

<style>
#b1 {
  margin-left: 44%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.row + .row {
  margin-top: 1px;
}

.row {
  margin: -16px;
}

.row {
  margin: -16px;
}
html {
  overflow-y: auto;
}
</style>

<script>
import axios from "axios";

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
      select: { state: "" },
      items: ["GTPR", "PCD", "PTGR"],
      items1: [1000, 2000, 3000, 4000, 5000, 6000, 4500, 5500],

      GearPair: ["JJ01-A1B1", "JJ01-A1B2", "JJ01-A1B3", "JJ01-A1B4"],

      Application: ["2Pinion", "4Pinion"],

      DTList: [
        // { text: "All", value: null },

        { text: "JJ01-A1B1", value: "JJ01-A1B1" },
        { text: "JJ01-A1B2", value: "JJ01-A1B2" },
        { text: "JJ01-A1B3", value: "JJ01-A1B3" },
        { text: "JJ01-A1B4", value: "JJ01-A1B4" },
      ],

      DTFilterValue: null,

      singleSelect1: true,
      selected1: [],
      disableb: true,
      dialog: false,
      dialog1: false,

      path1: "/Dashboard/ ",
      path2: "/Dashboard/",
      checkpointer1: false,

      SAM: [],

      selectedfile: null,

      Sgf1: false,
      Sgf2: false,
      Sgp1: false,
      Sgp2: false,

      Spf1: false,
      Spf2: false,
      Spp1: false,
      Spp2: false,

      namegf1: null,

      projectclick: false,
      dtselected: false,
      selectedStep: "",
      allselect: false,
      duplicate: "sam",

      postdata: {
        Project: "",
        JJ01: "",
        Column3: "",
        Report: "",
        Column5: "",
        Column6: "",
        Column7: "",
        Column8: "",
        Column9: "",
        Column10: "",
        Column11: "",
        Column12: "",
        Column13: "",
        Column14: "",
        Column15: "",
        Column16: "",
        Column17: "",
        Column18: "",
        Column19: "",
        // GF1: "",
        // GF2: "",
        // GP1: "",
        // GP2: "",
        // PF1: "",
        // PF2: "",
        // PP1: "",
        // PP2: "",
        // namegf1: "no file selected",
        // namegf2: "no file selected",
        // namegp1: "no file selected",
        // namegp2: "no file selected",

        // namepf1: "no file selected",
        // namepf2: "no file selected",
        // namepp1: "no file selected",
        // namepp2: "no file selected",
      },

      editdata: {
        Project: "",
        JJ01: "",
        Column3: "",
        Report: "",
        Column5: "",
        Column6: "",
        Column7: "",
        Column8: "",
        Column9: "",
        Column10: "",
        Column11: "",
        Column12: "",
        Column13: "",
        Column14: "",
        Column15: "",
        Column16: "",
        Column17: "",
        Column18: "",
        Column19: "",
      },
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Gear Pair",
          align: "left",
          sortable: false,
          value: "Project",
          filter: this.DTFilter,
        },
        {
          text: "Diffrential \nTorque",
          value: "JJ01",
          // filter: this.DTFilter,
        },
        { text: "Application", value: "Column3" },
        { text: "Step", value: "Report" },
        { text: "MCS", value: "Column5" },
        { text: "Rib (MBS)", value: "Column6" },
        { text: "Root (MBS)", value: "Column7" },
        { text: "Web (MBS)", value: "Column8" },
        { text: "Rib (MBS)", value: "Column9" },
        { text: "Root (MBS)", value: "Column10" },
        { text: "Web (MBS)", value: "Column11" },
        { text: "MCS", value: "Column12" },
        { text: "Rib (MBS)", value: "Column13" },
        { text: "Root (MBS)", value: "Column14" },
        { text: "Web (MBS)", value: "Column15" },
        { text: "Rib (MBS)", value: "Column16" },
        { text: "Root (MBS)", value: "Column17" },
        { text: "Web (MBS)", value: "Column18" },
        { text: "Remarks", value: "Column19" },
      ];
    },
  },
  mounted() {
    this.getapicall();
  },
  created() {},
  methods: {
    Projectselected() {
      // this.projectclick = true;
    },
    DTselected() {
      // console.log("DT : ", this.postdata.JJ01);
      // if (this.projectclick) {
      //   // this.getapicall();
      //   this.dtselected = true;
      //   if (this.postdata.Project != "") {
      //     if (this.postdata.JJ01 != null) {
      //       if (this.postdata.Column3 != "") {
      //         // this.allselect=true;
      //         this.getapicall1();
      //       }
      //     }
      //   }
      // } else {
      //   alert("Select Project first...");
      //   this.postdata.JJ01 = null;
      // }
    },

    AppSelect() {
      // if (this.dtselected) {
      //   this.getapicall1();
      // } else {
      //   alert("Select Differential Torque first...");
      //   this.postdata.Column3 = null;
      // }
    },

    async getapicall1() {
      await axios
        .get(
          "http://localhost:8083/api/items/" +
            this.postdata.Project +
            "/" +
            this.postdata.JJ01 +
            "/" +
            this.postdata.Column3 +
            "/" +
            this.postdata.Report
        )
        .then((resp) => {
          this.SAM = resp.data;
          console.log("this.sam : ", this.SAM);

          if (this.SAM.length == 0) {
            console.log("not duplicate pair is present");
            this.abc = "not";
          } else {
            alert("Inserted duplicate Data...");
            // this.postdata.Report = null;
            this.abc = "duplicate";
            // this.postdata.JJ01 = null;
          }
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    selectpost(sp) {
      console.log("selected post : ", sp);

      if (this.postdata.Project != "") {
        if (this.postdata.JJ01 != null) {
          if (this.postdata.Column3 != "") {
            this.allselect = true;
            this.getapicall1();
          } else {
            alert("Enter Application...");
            this.postdata.Report = null;
          }
        } else {
          alert("Enter Differential Torque...");
          this.postdata.Report = null;
        }
      } else {
        alert("Enter Gear Pair...");
        this.postdata.Report = null;
      }
      this.selectedStep = sp;
    },

    save2() {
      this.getapicall1();
      console.log("duplicate is : ", this.duplicate);
      if (this.duplicate == "sam2") {
        alert("Inserting wrong data...");
      } else {
        this.gtpr.Project = this.postdata.Project;
        this.pcd.Project = this.postdata.Project;
        this.ptgr.Project = this.postdata.Project;

        this.gtpr.JJ01 = this.postdata.JJ01;
        this.pcd.JJ01 = this.postdata.JJ01;
        this.ptgr.JJ01 = this.postdata.JJ01;

        this.gtpr.Column3 = this.postdata.Column3;
        this.pcd.Column3 = this.postdata.Column3;
        this.ptgr.Column3 = this.postdata.Column3;

        console.log("GTPR : ", this.gtpr);
        console.log("PCD : ", this.pcd);
        console.log("PTGR : ", this.ptgr);

        if (this.postdata.Report == "GTPR") {
          this.gtpr = this.postdata;
          console.log("This is gtpr ");
          this.save1();
        } else if (this.postdata.Report == "PCD") {
          this.pcd = this.postdata;
          this.save1();
          // this.postdata = this.gtpr;
        } else if (this.postdata.Report == "PTGR") {
          this.ptgr = this.postdata;
          // this.postdata = this.gtpr;
          this.save1();
        } else {
          alert("Please enter STEP.......");
        }
      }
    },

    async getapicall() {
      console.log("previous postdata : ", this.postdata);

      await axios
        .get("http://localhost:8083/api/items")
        // .get("http://localhost:3000/DATA1/")
        .then((resp) => {
          this.SAM = resp.data;
          this.SAM.reverse();
          console.log("this.sam : ", this.SAM);
          console.log("selected array : ", this.selected1);
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    async save1() {
      if (this.postdata.Project != "") {
        if (this.postdata.JJ01 != null) {
          if (this.postdata.Column3 != "") {
            if (this.postdata.Report != null) {
              await this.getapicall1();

              if (this.abc == "duplicate") {
                return;
              }
            } else {
              alert("select Report...");
              return;
            }
          } else {
            alert("Enter Application...");
            this.postdata.Report = null;
            return;
          }
        } else {
          alert("Enter Differential Torque...");
          this.postdata.Report = null;
          return;
        }
      } else {
        alert("Enter Project...");
        this.postdata.Project = null;
        if (this.postdata.JJ01 == null) {
          this.postdata.JJ01 = null;
        }
        return;
      }

      this.dialog = false;

      await axios
        .post("http://localhost:8083/api/items", this.postdata)
        .then((result1) => {
          console.log("Result : ", result1);
          // this.pcddata();

          this.postdata = {
            Project: "",
            JJ01: "",
            Column3: "",
            Report: "",
            Column5: "",
            Column6: "",
            Column7: "",
            Column8: "",
            Column9: "",
            Column10: "",
            Column11: "",
            Column12: "",
            Column13: "",
            Column14: "",
            Column15: "",
            Column16: "",
            Column17: "",
            Column18: "",
            Column19: "",
            // GF1: "",
            // GF2: "",
            // GP1: "",
            // GP2: "",
            // PF1: "",
            // PF2: "",
            // PP1: "",
            // PP2: "",
            // namegf1: "no file selected",
            // namegf2: "no file selected",
            // namegp1: "no file selected",
            // namegp2: "no file selected",

            // namepf1: "no file selected",
            // namepf2: "no file selected",
            // namepp1: "no file selected",
            // namepp2: "no file selected",
          };
          this.getapicall();
          console.log("data inserted : ", this.SAM);
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    pcddata() {
      axios
        .post("http://localhost:3000/DATA1", this.pcd)
        .then((result2) => {
          console.log(result2);
          this.ptgrdata();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    ptgrdata() {
      axios
        .post("http://localhost:3000/DATA1", this.ptgr)
        .then((result3) => {
          console.log(result3);
          this.postdata = {
            Project: "",
            JJ01: "",
            Column3: "",
            Report: "",
            Column5: "",
            Column6: "",
            Column7: "",
            Column8: "",
            Column9: "",
            Column10: "",
            Column11: "",
            Column12: "",
            Column13: "",
            Column14: "",
            Column15: "",
            Column16: "",
            Column17: "",
            Column18: "",
            Column19: "",
          };
          this.gtpr = {
            Project: "",
            JJ01: "",
            Column3: "",
            Report: "GTPR",
            Column5: "",
            Column6: "",
            Column7: "",
            Column8: "",
            Column9: "",
            Column10: "",
            Column11: "",
            Column12: "",
            Column13: "",
            Column14: "",
            Column15: "",
            Column16: "",
            Column17: "",
            Column18: "",
            Column19: "",
          };
          this.pcd = {
            Project: "",
            JJ01: "",
            Column3: "",
            Report: "PCD",
            Column5: "",
            Column6: "",
            Column7: "",
            Column8: "",
            Column9: "",
            Column10: "",
            Column11: "",
            Column12: "",
            Column13: "",
            Column14: "",
            Column15: "",
            Column16: "",
            Column17: "",
            Column18: "",
            Column19: "",
          };
          this.ptgr = {
            Project: "",
            JJ01: "",
            Column3: "",
            Report: "PTGR",
            Column5: "",
            Column6: "",
            Column7: "",
            Column8: "",
            Column9: "",
            Column10: "",
            Column11: "",
            Column12: "",
            Column13: "",
            Column14: "",
            Column15: "",
            Column16: "",
            Column17: "",
            Column18: "",
            Column19: "",
          };
          this.getapicall();
          // this.$router.push("/Data/");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    edit(inputd) {
      this.editdata = inputd[0];
      this.dialog1 = true;
      console.log("input selected : ", this.editdata.id);
      console.log("editdata selected : ", this.editdata);
    },

    async update() {
      this.dialog1 = false;
      console.log("edited data in update : ", this.editdata);

      await axios
        .put("http://localhost:3000/DATA1/" + this.editdata.id, this.editdata)
        .then((resp) => {
          console.log("Responce is : ", resp);
          this.getapicall();
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    /**
     * Filter for calories column.
     * @param value Value to be tested.
     * @returns {boolean}
     */
    DTFilter(value) {
      // If this filter has no value we just skip the entire filter.
      if (!this.DTFilterValue) {
        return true;
      }

      // Check if the current loop value (The calories value)
      // equals to the selected value at the <v-select>.
      return value == this.DTFilterValue;
    },

    Selecteditm1() {
      this.path2 = this.path2 + this.DTFilterValue;
      this.checkpointer1 = true;
      this.disableb = false;
    },
    dash2() {
      if (this.checkpointer1) {
        this.$router.push(this.path2);
      } else {
        this.$router.push(this.path1);
      }
    },

    gf1() {
      this.$refs.gearF1.click();
    },
    filechange1(event) {
      console.log("file1 : ", event.target.files[0].name);
      this.postdata.namegf1 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Sgf1 = true;

      this.geturl("gf1");
    },
    gf2() {
      this.$refs.gearF2.click();
    },
    filechange2(event) {
      console.log("file2 : ", event.target.files[0].name);
      this.postdata.namegf2 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Sgf2 = true;
      this.geturl("gf2");
    },
    gp1() {
      this.$refs.gearP1.click();
    },
    filechange3(event) {
      console.log("file3 : ", event.target.files[0].name);
      this.postdata.namegp1 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Sgp1 = true;
      this.geturl("gp1");
    },
    gp2() {
      this.$refs.gearP2.click();
    },
    filechange4(event) {
      console.log("file4 : ", event.target.files[0].name);
      this.postdata.namegp2 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Spf2 = true;
      this.geturl("gp2");
    },

    pf1() {
      this.$refs.pinionF1.click();
    },
    filechange5(event) {
      console.log("file5 : ", event.target.files[0].name);
      this.postdata.namepf1 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Spf1 = true;
      this.geturl("pf1");
    },
    pf2() {
      this.$refs.pinionF2.click();
    },
    filechange6(event) {
      console.log("file6 : ", event.target.files[0].name);
      this.postdata.namepf2 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Spf2 = true;
      this.geturl("pf2");
    },
    pp1() {
      this.$refs.pinionP1.click();
    },
    filechange7(event) {
      console.log("file7 : ", event.target.files[0].name);
      this.postdata.namepp1 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Spp1 = true;
      this.geturl("pp1");
    },
    pp2() {
      this.$refs.pinionP2.click();
    },
    filechange8(event) {
      console.log("file8 : ", event.target.files[0].name);
      this.postdata.namepp2 = event.target.files[0].name;
      this.selectedfile = event.target.files[0];
      this.Spp2 = true;
      this.geturl("pp2");
    },

    geturl(option) {
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
            console.log("option : ", option);

            if (option == "gf1") {
              this.postdata.GF1 = downloadURL;
            } else if (option == "gf2") {
              this.postdata.GF2 = downloadURL;
            } else if (option == "gp1") {
              this.postdata.GP1 = downloadURL;
            } else if (option == "gp2") {
              this.postdata.GP2 = downloadURL;
            } else if (option == "pf1") {
              this.postdata.PF1 = downloadURL;
            } else if (option == "pf2") {
              this.postdata.PF2 = downloadURL;
            } else if (option == "pp1") {
              this.postdata.PP1 = downloadURL;
            } else if (option == "pp2") {
              this.postdata.PP2 = downloadURL;
            } else {
              console.log("else block");
            }

            this.samurl = downloadURL;
            console.log("File available at : ", downloadURL);
          });
        }
      );
    },
  },
};





// filter: value => {
//             if (!this.calories && !this.sam) return true
//              // if(this.sam) return value > parseInt(this.sam)
//            if(this.calories && this.sam)
  
//            {
//              let S =value < parseInt(this.calories) && value>parseInt(this.sam)
             
//              return S}
//           },



// <div id="app">
//   <v-app id="inspire">
//     <div>
//       <v-data-table
//         :headers="headers"
//         :items="desserts"
//         item-key="name"
//         class="elevation-1"
//         :search="search"
//         :custom-filter="filterOnlyCapsText"
//       >
//         <template v-slot:top>
//           <v-text-field
//             v-model="search"
//             label="Search (UPPER CASE ONLY)"
//             class="mx-4"
//           ></v-text-field>
//         </template>
//         <template v-slot:body.append>
//           <tr>
//             <td></td>
//             <td>
//               <v-text-field
//                 v-model="calories"
//                 type="number"
//                 label="Less than"
//               ></v-text-field>
//             </td>
//              <td>
//               <v-text-field
//                 v-model="sam"
//                 type="number"
//                 label="greater than"
//               ></v-text-field>
//             </td>
//             <td colspan="4"></td>
//           </tr>
//         </template>
//       </v-data-table>
//     </div>
//   </v-app>
// </div>



// new Vue({
//   el: '#app',
//   vuetify: new Vuetify(),
//   data () {
//     return {
//       search: '',
//       calories: '',
//       sam:'',
//       desserts: [
//         {
//           name: 'Frozen Yogurt',
//           calories: 159,
//           fat: 6.0,
//           carbs: 24,
//           protein: 4.0,
//           iron: 1,
//         },
//         {
//           name: 'Ice cream sandwich',
//           calories: 237,
//           fat: 9.0,
//           carbs: 37,
//           protein: 4.3,
//           iron: 1,
//         },
//         {
//           name: 'Eclair',
//           calories: 262,
//           fat: 16.0,
//           carbs: 23,
//           protein: 6.0,
//           iron: 7,
//         },
//         {
//           name: 'Cupcake',
//           calories: 305,
//           fat: 3.7,
//           carbs: 67,
//           protein: 4.3,
//           iron: 8,
//         },
//         {
//           name: 'Gingerbread',
//           calories: 356,
//           fat: 16.0,
//           carbs: 49,
//           protein: 3.9,
//           iron: 16,
//         },
//         {
//           name: 'Jelly bean',
//           calories: 375,
//           fat: 0.0,
//           carbs: 94,
//           protein: 0.0,
//           iron: 0,
//         },
//         {
//           name: 'Lollipop',
//           calories: 392,
//           fat: 0.2,
//           carbs: 98,
//           protein: 0,
//           iron: 2,
//         },
//         {
//           name: 'Honeycomb',
//           calories: 408,
//           fat: 3.2,
//           carbs: 87,
//           protein: 6.5,
//           iron: 45,
//         },
//         {
//           name: 'Donut',
//           calories: 452,
//           fat: 25.0,
//           carbs: 51,
//           protein: 4.9,
//           iron: 22,
//         },
//         {
//           name: 'KitKat',
//           calories: 518,
//           fat: 26.0,
//           carbs: 65,
//           protein: 7,
//           iron: 6,
//         },
//       ],
//     }
//   },
//   computed: {
//     headers () {
//       return [
//         {
//           text: 'Dessert (100g serving)',
//           align: 'start',
//           sortable: false,
//           value: 'name',
//         },
//         {
//           text: 'Calories',
//           value: 'calories',
//           filter: value => {
//             if (!this.calories && !this.sam) return true
//              // if(this.sam) return value > parseInt(this.sam)
//            if(this.calories && this.sam)
  
//            {
//              let S =value < parseInt(this.calories) && value>parseInt(this.sam)
             
//              return S}
//           },
//         },
//         { text: 'Fat (g)', value: 'fat' },
//         { text: 'Carbs (g)', value: 'carbs' },
//         { text: 'Protein (g)', value: 'protein' },
//         { text: 'Iron (%)', value: 'iron' },
//       ]
//     },
//   },
//   methods: {
//     filterOnlyCapsText (value, search, item) {
//       return value != null &&
//         search != null &&
//         typeof value === 'string' &&
//         value.toString().toLocaleUpperCase().indexOf(search) !== -1
//     },
//   },
// })

</script>

<template>
  <v-app>
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
                  <v-header class="font-weight-medium"> Project </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Project1"
                    :items="Project1List"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="Project1selected()"
                    :rules="[(v) => !!v || 'Project is required']"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>

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

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium"> Model </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Model"
                    :items="ModelList"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="ModelSelected()"
                    :rules="[(v) => !!v || 'Model is required']"
                    required
                  >
                  </v-select>
                </v-col>
              </v-row>

              <v-row class="text-center" justify="center" align="center">
                <v-col cols="3">
                  <v-header class="font-weight-medium" pa-0> Design </v-header>
                </v-col>

                <v-col cols="3">
                  <v-select
                    v-model="postdata.Design"
                    :items="DesignList"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="DesignSelected()"
                    :rules="[(v) => !!v || 'Report is required']"
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
                    Nominal/Design Torque
                  </v-header>
                </v-col>

                <v-col cols="3" pa-0 ma-0>
                  <v-select
                    v-model="postdata.NominalTorque"
                    :items="NominalList"
                    label="Select"
                    persistent-hint
                    return-object
                    single-line
                    @change="NTselected()"
                    :rules="[(v) => !!v || 'Nominal Torque is required']"
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
                      <div>
                        <v-row align="center" justify="center">
                          <input
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
                          <!-- <input
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

                        <v-row align="center" justify="center">
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

                        <!-- <v-row align="center" justify="center">
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
                        <v-row align="left" justify="center">
                          <input
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
                          <!-- <input
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

                        <v-row align="center" justify="center">
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

                        <!-- <v-row align="center" justify="center">
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
            <v-btn color="primary" text @click="save()" class="ma-2 px-2">
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <!-- <div>
      <form>
        <input type="file" @change="filesave" />
      </form>
    </div> -->

    <div class="mt-10 ml-8">
      <table cellspacing="0" border="0">
        <colgroup span="15" width="64"></colgroup>
        <tr>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 2px solid #000000;
              border-right: 2px solid #000000;
            "
            colspan="18"
            height="24"
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" size="4" color="#000000"
                >Contact Stress Plot of all Gear Pair at different differential
                Torque [Considering 2 pinion application]</font
              ></b
            >
          </td>
        </tr>
        <tr>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 2px solid #000000;
              border-right: 1px solid #000000;
            "
            height="20"
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 2px solid #000000;
              border-right: 2px solid #000000;
            "
            colspan="11"
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"
                >FEA Contact Stress Plot</font
              ></b
            >
          </td>
        </tr>
        <tr>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 2px solid #000000;
              border-right: 1px solid #000000;
            "
            height="68"
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">S.N.</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">Project</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">Gear Pair</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">Model</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">Design</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-left: 1px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b
              ><font face="Century Gothic" color="#000000"
                >Nominal /Design <br />Torque <br />[Nm]</font
              ></b
            >
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 2px solid #000000;
              border-right: 2px solid #000000;
            "
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">Parts</font></b>
          </td>
          <td
            style="
              border-bottom: 2px solid #000000;
              border-right: 1px solid #000000;
            "
            colspan="2"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdval="0"
            sdnum="1033;"
          >
            <b><font face="Century Gothic" color="#000000">2000</font></b>
          </td>
          <td
            style="
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            colspan="2"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdval="1000"
            sdnum="1033;0;0"
          >
            <b><font face="Century Gothic" color="#000000">3000</font></b>
          </td>
          <td
            style="
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            colspan="2"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdval="2000"
            sdnum="1033;0;0"
          >
            <b><font face="Century Gothic" color="#000000">4000</font></b>
          </td>
          <td
            style="
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            colspan="2"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdval="4000"
            sdnum="1033;0;0"
          >
            <b><font face="Century Gothic" color="#000000">5000</font></b>
          </td>
          <td
            style="
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            colspan="2"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdval="4000"
            sdnum="1033;0;0"
          >
            <b><font face="Century Gothic" color="#000000">6000</font></b>
          </td>
        </tr>
        <tr>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 2px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="6"
            height="116"
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
            sdval="1"
            sdnum="1033;"
          >
            <b><font face="Century Gothic" color="#000000">1</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="6"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b><font face="Century Gothic" color="#000000">JJ01</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="6"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b><font face="Century Gothic" color="#000000">JJ01-A1B1</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="6"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b><font face="Century Gothic" color="#000000">31XX</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="6"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b><font face="Century Gothic" color="#000000">AAM</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="6"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdval="4000"
            sdnum="1033;"
          >
            <b><font face="Century Gothic" color="#000000">4000</font></b>
          </td>
          <td
            style="
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">Gear</font></b>
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
            <img src="../assets/img/g1.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
            <img src="../assets/img/g2.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g3.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g4.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g5.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g6.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g7.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g8.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g9.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 2px solid #000000;
              border-bottom: 1px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/g10.jpg" width="100" height="100" />
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
        <tr>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#BFBFBF"
          >
            <b><font face="Century Gothic" color="#000000">Pinion</font></b>
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
            <img src="../assets/img/p1.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
          >
            <b
              ><font face="Century Gothic" color="#000000"><br /></font
            ></b>
            <img src="../assets/img/p2.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p3.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p4.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p5.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p6.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 1px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p7.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p8.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p9.jpg" width="100" height="100" />
          </td>
          <td
            style="
              border-top: 1px solid #000000;
              border-bottom: 2px solid #000000;
              border-left: 1px solid #000000;
              border-right: 2px solid #000000;
            "
            rowspan="3"
            align="center"
            valign="middle"
            bgcolor="#00B050"
            sdnum="1033;0;0"
          >
            <font face="Century Gothic" color="#000000"><br /></font>
            <img src="../assets/img/p10.jpg" width="100" height="100" />
          </td>
        </tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
  </v-app>
</template>


<script>
import axios from "axios";

import * as firebase from "firebase/app";

// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";

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
      Project1List: ["JJ01", "JJ02", "JJ03", "JJ04"],
      items1: [1000, 2000, 3000, 4000, 5000, 6000, 4500, 5500],
      NominalList: [1000, 2000, 3000, 4000, 5000, 6000, 4500, 5500],

      GearPair: ["A1B1", "A1B2", "A1B3", "A1B4"],

      ModelList: ["31XX", "32XX", "33XX", "34XX"],
      DesignList: ["AAM", "AAM1", "AAM2", "AAM3"],

      singleSelect1: true,
      selected1: [],
      disableb: true,
      dialog: false,
      dialog1: false,

      path1: "/Dashboard/ ",
      path2: "/Dashboard/",
      checkpointer1: false,

      SAM: [],

      SData: null,

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
        Project1: "",
        Project: "",
        Model: "",
        Design: "",
        NominalTorque: "",
        JJ01: "",

        GF1: "",
        GF2: "",
        // GP1: "",
        // GP2: "",
        PF1: "",
        PF2: "",
        // PP1: "",
        // PP2: "",
        namegf1: "no file selected",
        namegf2: "no file selected",
        // namegp1: "no file selected",
        // namegp2: "no file selected",

        namepf1: "no file selected",
        namepf2: "no file selected",
        // namepp1: "no file selected",
        // namepp2: "no file selected",
      },

      editdata: {
        Project1: "",
        Project: "",
        Model: "",
        Design: "",
        NominalTorque: "",
        JJ01: "",

        SGF1: null,
        SGF2: null,
        // SGP1: null,
        // SGP2: null,
        SPF1: null,
        SPF2: null,
        // SPP1: null,
        // SPP2: null,

        // GF1: "",
        // GF2: "",
        // GP1: "",
        // GP2: "",
        // PF1: "",
        // PF2: "",
        // PP1: "",
        // PP2: "",
        namegf1: "no file selected",
        namegf2: "no file selected",
        // namegp1: "no file selected",
        // namegp2: "no file selected",

        namepf1: "no file selected",
        namepf2: "no file selected",
        // namepp1: "no file selected",
        // namepp2: "no file selected",
      },
    };
  },
  computed: {},
  mounted() {},
  created() {},
  methods: {
    filesave(event) {
      let imgfile = event.target.files[0];

      const formData = new FormData();
      formData.append("files", imgfile);
      // formData.append('name',sam)
//       let sam={
//   name1:"Sambhaji"
// }
formData.append('s',"sam")

      let avatar = formData;
      console.log("formdata : ", avatar);
      console.log("avatar : ", avatar);
      axios
        .post("http://localhost:8083/api/items2", avatar, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log("result : ", res);
        })
        .catch((err) => {
          console.log("file error : ", err);
        });
    },

    Project1selected() {
      this.projectclick = true;
      console.log("size : ", this.GearPair.length);
      let gearpair1 = [];
      let j = 1;
      for (let i = 0; i < this.GearPair.length; i++) {
        gearpair1.push(this.postdata.Project1 + "A1B" + j);
        j++;
      }
      this.GearPair = gearpair1;
    },
    DTselected() {
      console.log("DT : ", this.postdata.JJ01);

      this.dtselected = true;
    },

    AppSelect() {},

    selectpost(sp) {
      console.log("selected post : ", sp);

      //   if (this.postdata.Project != "") {
      //     if (this.postdata.JJ01 != null) {
      //       if (this.postdata.Column3 != "") {
      //         this.allselect = true;
      //         // this.getapicall1();
      //       } else {
      //         alert("Enter Application...");
      //         this.postdata.Report = null;
      //       }
      //     } else {
      //       alert("Enter Differential Torque...");
      //       this.postdata.Report = null;
      //     }
      //   } else {
      //     alert("Enter Gear Pair...");
      //     this.postdata.Report = null;
      //   }
      //   this.selectedStep = sp;
    },

    async save() {
      this.dialog = false;

      const formData = new FormData();
      formData.append('files',this.postdata.GF1)
      formData.append('files',this.postdata.GF2)
      formData.append('files',this.postdata.PF1)
      formData.append('files',this.postdata.PF2)

      formData.append('Project1',this.postdata.Project1)
      formData.append('Project',this.postdata.Project)
      formData.append('Model',this.postdata.Model)
      formData.append('Design',this.postdata.Design)
      formData.append('NominalTorque',this.postdata.NominalTorque)
      formData.append('JJ01',this.postdata.JJ01)
     

      // this.SData.append("postdata : ",this.postdata)
      // let Postdata = this.Postdata
      await axios
        // .post("http://localhost:8083/api/items", this.postdata)
        .post("http://localhost:8083/api/items2", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((result1) => {
          console.log("Result : ", result1);
          // this.pcddata();

          this.postdata = {
            Project1: "",
            Project: "",
            Model: "",
            Design: "",
            NominalTorque: "",
            JJ01: "",

            GearF1: "",
            GearF2: "",
            GearP1: "",
            GearP2: "",
            PinionF1: "",
            PinionF2: "",
            PinionP1: "",
            PinionP2: "",
            namegf1: "no file selected",
            namegf2: "no file selected",
            namegp1: "no file selected",
            namegp2: "no file selected",

            namepf1: "no file selected",
            namepf2: "no file selected",
            namepp1: "no file selected",
            namepp2: "no file selected",
          };
          //   this.getapicall();
          console.log("data inserted : ", this.SAM);
        })
        .catch((err) => {
          console.log("Error : ", err);
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
     
      this.postdata.namegf1 = event.target.files[0].name;
      this.postdata.GearF1 = "S" + Date.now() + event.target.files[0].name;

    
      
      // event.target.files[0].name = "S" + Date.now() + this.postdata.namegf1;
      // this.selectedfile = event.target.files[0];

      this.postdata.GF1 = event.target.files[0];

      this.postdata.GF1.name="S" + Date.now() + event.target.files[0].name;
      console.log("img : ",this.postdata.GF1)
      // const formData = new FormData();
      // formData.append("files", imgfile);

      // this.postdata.SGF1 = formData;

      // this.SData=formData;

      this.Sgf1 = true;

      // this.geturl("gf1");
    },
    gf2() {
      this.$refs.gearF2.click();
    },
    filechange2(event) {
      
      this.postdata.namegf2 = event.target.files[0].name;
      this.postdata.GF2 = event.target.files[0];
      this.Sgf2 = true;
      // this.geturl("gf2");
    },
    // gp1() {
    //   this.$refs.gearP1.click();
    // },
    // filechange3(event) {
    //   console.log("file3 : ", event.target.files[0].name);
    //   this.postdata.namegp1 = event.target.files[0].name;
    //   this.selectedfile = event.target.files[0];
    //   this.Sgp1 = true;
    //   this.geturl("gp1");
    // },
    // gp2() {
    //   this.$refs.gearP2.click();
    // },
    // filechange4(event) {
    //   console.log("file4 : ", event.target.files[0].name);
    //   this.postdata.namegp2 = event.target.files[0].name;
    //   this.selectedfile = event.target.files[0];
    //   this.Spf2 = true;
    //   this.geturl("gp2");
    // },

    pf1() {
      this.$refs.pinionF1.click();
    },
    filechange5(event) {
      
      this.postdata.namepf1 = event.target.files[0].name;
      this.postdata.PF1 = event.target.files[0];
      this.Spf1 = true;
      // this.geturl("pf1");
    },
    pf2() {
      this.$refs.pinionF2.click();
    },
    filechange6(event) {
      
      this.postdata.namepf2 = event.target.files[0].name;
      this.postdata.PF2 = event.target.files[0];
      this.Spf2 = true;
      // this.geturl("pf2");
    },
    // pp1() {
    //   this.$refs.pinionP1.click();
    // },
    // filechange7(event) {
    //   console.log("file7 : ", event.target.files[0].name);
    //   this.postdata.namepp1 = event.target.files[0].name;
    //   this.selectedfile = event.target.files[0];
    //   this.Spp1 = true;
    //   this.geturl("pp1");
    // },
    // pp2() {
    //   this.$refs.pinionP2.click();
    // },
    // filechange8(event) {
    //   console.log("file8 : ", event.target.files[0].name);
    //   this.postdata.namepp2 = event.target.files[0].name;
    //   this.selectedfile = event.target.files[0];
    //   this.Spp2 = true;
    //   this.geturl("pp2");
    // },

    geturl() {
      // const storage = getStorage();

      // const metadata = {
      //   contentType: "image/jpeg",
      // };

      // // Create a reference to 'mountains.jpg'
      // const mountainsRef = ref(storage, "data/" + this.selectedfile.name);

      // const Task = uploadBytesResumable(
      //   mountainsRef,
      //   this.selectedfile,
      //   metadata
      // );

      // Task.on(
      //   "state_changed",
      //   (snapshot) => {
      //     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     console.log("Upload is " + progress + "% done");
      //     switch (snapshot.state) {
      //       case "paused":
      //         console.log("Upload is paused");
      //         break;
      //       case "running":
      //         console.log("Upload is running");
      //         break;
      //     }
      //   },
      //   (error) => {
      //     // A full list of error codes is available at
      //     // https://firebase.google.com/docs/storage/web/handle-errors
      //     switch (error.code) {
      //       case "storage/unauthorized":
      //         // User doesn't have permission to access the object
      //         break;
      //       case "storage/canceled":
      //         // User canceled the upload
      //         break;

      //       // ...

      //       case "storage/unknown":
      //         // Unknown error occurred, inspect error.serverResponse
      //         break;
      //     }
      //   },
      //   () => {
      //     // Upload completed successfully, now we can get the download URL
      //     getDownloadURL(Task.snapshot.ref).then((downloadURL) => {
      //       console.log("option : ", option);

      //       if (option == "gf1") {
      //         this.postdata.GF1 = downloadURL;
      //       } else if (option == "gf2") {
      //         this.postdata.GF2 = downloadURL;
      //       } else if (option == "gp1") {
      //         this.postdata.GP1 = downloadURL;
      //       } else if (option == "gp2") {
      //         this.postdata.GP2 = downloadURL;
      //       } else if (option == "pf1") {
      //         this.postdata.PF1 = downloadURL;
      //       } else if (option == "pf2") {
      //         this.postdata.PF2 = downloadURL;
      //       } else if (option == "pp1") {
      //         this.postdata.PP1 = downloadURL;
      //       } else if (option == "pp2") {
      //         this.postdata.PP2 = downloadURL;
      //       } else {
      //         console.log("else block");
      //       }

      //       this.samurl = downloadURL;
      //       console.log("File available at : ", downloadURL);
      //     });
      //   }
      // );
    },
  },
};
</script>

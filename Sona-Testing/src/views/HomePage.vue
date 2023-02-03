<template>
  <v-app>
    <v-dialog v-model="dialog" width="900">
      <template v-slot:activator="{ on, attrs }">
        <v-row>
          <v-btn
            color="primary"
            class="white--text ml-10 mt-10"
            v-bind="attrs"
            v-on="on"
            @click="addData()"
          >
            <v-icon dark>mdi-plus</v-icon>Add
          </v-btn>

          <v-col cols="2" class="pa-0">
            <v-select
              :items="DTList"
              v-model="DTFilterValue"
              label="Gear Pair"
              class="pa-0 ml-3 mt-10"
              @change="selectedItm()"
            ></v-select>
          </v-col>
          <v-btn
            color="primary"
            class="white--text ml-3 mt-10"
            @click="dash1()"
            :disabled="disableb"
            >Search</v-btn
          >
          <v-btn color="primary" class="white--text ml-3 mt-10" @click="FEA()"
            >FEA Contact</v-btn
          >
        </v-row>
      </template>

      <v-card ref="form">
        <v-card-title class="text-h5 grey lighten-2">
          ADD DATA HERE
        </v-card-title>

        <v-divider></v-divider>

        <!-- ---------------------------------------------------------------------------------------------------- -->

        <v-card-text>
          <!-- <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  > -->
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
                        <v-col cols="4">
                          <v-text-field
                            label="Web"
                            solo
                            dense
                            v-model="postdata.Column6"
                            type="number"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            label="Web"
                            solo
                            dense
                            v-model="postdata.Column11"
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
                        <v-col cols="4">
                          <v-text-field
                            label="Web"
                            solo
                            dense
                            v-model="postdata.Column15"
                            type="number"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                          <v-text-field
                            label="Web"
                            solo
                            dense
                            v-model="postdata.Column18"
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
                  v-model="postdata.Column19"
                  type="number"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </div>

          <!-- </v-form> -->
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text class="ma-2 px-2" @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="primary" text @click="save1()" class="ma-2 px-2">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<style>
html {
  overflow-y: auto;
}
</style>

<script>
import axios from "axios";
// import useValidate from 'vuelidate'

export default {
  data() {
    return {
      // v$:useValidate(),
      valid: true,
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

      path1: "/Dashboard/ ",
      path2: "/Dashboard/",
      checkpointer: false,

      projectclick: false,
      appclick: false,
      reportclick: false,

      allselect: false,

      // Filter models.
      abc: "",
      DTFilterValue: null,
      dtselected: false,

      selected1: [],
      disableb: true,
      dialog: false,

      selectedStep: "",

      SAM: [],
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
          // filter: this.nameFilter,
        },
        {
          text: "Diffrential \nTorque",
          value: "JJ01",
        },

        { text: "Application", value: "Column3" },
        { text: "Step", value: "FEA Report" },
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
        { text: "Actions", value: "actions", sortable: false, width: "100px" },
      ];
    },
  },

  methods: {
    Projectselected() {
      this.projectclick = true;
    },
    DTselected() {
      // if (this.projectclick) {
      //   // this.getapicall();
      this.dtselected = true;
      // } else {
      //   alert("Select Project first...");
      //   this.postdata.JJ01 = null;
      // }
    },

    AppSelect() {
      this.appclick = true;
      // console.log("app selected-------------------------------------------------------------------")
      // if (this.dtselected) {
      //   this.getapicall();
      // } else {
      //   alert("Select Differential Torque first...");
      //   this.postdata.Column3 = null;
      // }
    },

    addData() {},

    async getapicall() {
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
    selectedItm() {
      console.log("Selected item is in method : ", this.DTFilterValue);
      this.path2="/Dashboard/"
      this.path2 = this.path2 + this.DTFilterValue;
      this.checkpointer = true;
      this.disableb = false;
    },
    dash1() {
      console.log("dashboard clicked : ", this.path1);
      console.log("updatated path is : ", this.path2);
      if (this.checkpointer) {
        this.$router.push(this.path2);
      } else {
        this.$router.push(this.path1);
      }
    },

    FEA() {
      this.$router.push("/FEAContact/");
    },

    selectpost(sp) {
      console.log("selected post : ", sp);

      if (this.postdata.Project != "") {
        if (this.postdata.JJ01 != null) {
          if (this.postdata.Column3 != "") {
            this.allselect = true;
            this.reportclick = true;
            // this.getapicall();
          } else {
            alert("Enter Application...");
            // this.postdata.Report=null;
          }
        } else {
          alert("Enter Differential Torque...");
          // this.postdata.Report=null;
        }
      } else {
        alert("Enter Project...");
        // this.postdata.Report=null;
      }
      this.selectedStep = sp;
    },

    // save2() {
    //   this.gtpr.Project = this.postdata.Project;
    //   this.pcd.Project = this.postdata.Project;
    //   this.ptgr.Project = this.postdata.Project;

    //   this.gtpr.JJ01 = this.postdata.JJ01;
    //   this.pcd.JJ01 = this.postdata.JJ01;
    //   this.ptgr.JJ01 = this.postdata.JJ01;

    //   this.gtpr.Column3 = this.postdata.Column3;
    //   this.pcd.Column3 = this.postdata.Column3;
    //   this.ptgr.Column3 = this.postdata.Column3;

    //   console.log("GTPR : ", this.gtpr);
    //   console.log("PCD : ", this.pcd);
    //   console.log("PTGR : ", this.ptgr);

    //   if (this.postdata.Report == "GTPR") {
    //     this.gtpr = this.postdata;
    //     console.log("This is gtpr ");
    //     this.save1();
    //   } else if (this.postdata.Report == "PCD") {
    //     this.pcd = this.postdata;
    //     this.save1();
    //     // this.postdata = this.gtpr;
    //   } else if (this.postdata.Report == "PTGR") {
    //     this.ptgr = this.postdata;
    //     // this.postdata = this.gtpr;
    //     this.save1();
    //   } else {
    //     alert("Please enter STEP.......");
    //   }
    // },

    async save1() {
      // if(this.allselect==false){
      //   alert("Hey select all fields...")
      //   return
      // }

      if (this.postdata.Project != "") {
        if (this.postdata.JJ01 != null) {
          if (this.postdata.Column3 != "") {
            if (this.postdata.Report != null) {
              await this.getapicall();

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

      // this.$refs.form.validate()

      // this.v$.$validate();
      // if(!this.v$.$error){
      //   alert("error in form")
      // }

      // this.$v.$touch()
      this.dialog = false;

      await axios
        .post("http://localhost:8083/api/items", this.postdata)
        // .post("http://localhost:3000/DATA1", this.postdata)
        .then((result) => {
          console.log("Result : ", result);
          // this.pcddata();
          this.$router.push("/Data/");
          console.log("data inserted : ", this.SAM);
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    },

    // pcddata() {
    //   axios
    //     .post("http://localhost:3000/DATA1", this.pcd)
    //     .then((result) => {
    //       console.log(result);
    //       this.ptgrdata();
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },

    // ptgrdata() {
    //   axios
    //     .post("http://localhost:3000/DATA1", this.ptgr)
    //     .then((result) => {
    //       console.log(result);

    //       this.$router.push("/Data/");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
};
</script>

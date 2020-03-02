<template>
<v-app>
    <!-- <component v-for="(field, index) in schema"
               :key="index"
               :is="field.fieldType"
               v-model="formData[field.name]"
               v-bind="field">

    </component> -->

  <v-card width ="400" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">Login</h1>
    </v-card-title>
   <v-card-text>
     <v-form>
       <v-text-field 
       label="Username"
       prepend-icon="mdi-account-circle"
       />
       <v-text-field 
       type="password"
       label="Password"
       prepend-icon="mdi-lock"
      append-icon="mdi-eye-off"
        />
      
     </v-form>
   </v-card-text>
   <v-divider></v-divider>
   <v-card-action>
     <v-btn color="info">Login</v-btn>
   </v-card-action>
  </v-card>
</v-app>
</template>

<script>
import NumberInput from "../components/v4/NumberInput";
import SelectList from "../components/v4/SelectList";
import TextInput from "../components/v4/TextInput";

export default {
  name: "FormsDemo",
  components: { NumberInput, SelectList, TextInput },
  data() {
    return {
      formData: {
       // firstName: "Evan"
      },
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"]
        },
        {
          fieldType: "TextInput",
          placeholder: "First Name",
          label: "First Name",
          name: "firstName"
        },
        {
          fieldType: "TextInput",
          placeholder: "Password",
          label: "Last Name",
          name: "lastName"
        },
      
        // {
        //   fieldType: "NumberInput",
        //   placeholder: "Age",
        //   name: "age",
        //   label: "Age",
        //   minValue: 0
        // }
      ]
    };
  }
};
</script>

<template>
  <div class="test">
    <h1>{{ title }}</h1>

    <form id="demo">

      <div id="property-information">
        <p>
          Property Type:
          <select v-model="propertyType">
            <option>Single Family Home</option>
            <option>Townhouse</option>
            <option>Condo</option>
          </select>
        </p>
        <p>
          Property Address: <input type="text" v-model="propertyAddress">
        </p>

        <p>
          Test:
          <vue-google-autocomplete :country="['ca']"></vue-google-autocomplete>
        </p>

      </div>



      <div id="">
        <p>
          Purchase Price: <input type="text" v-model="purchasePrice" number>
        </p>
        <p>
          Term: <input type="text" v-model="term" number>
        </p>
      </div>
      <!-- checkbox -->
      <p>
        <input type="checkbox" v-model="checked">
        {{checked ? "yes" : "no"}}
      </p>
      <!-- radio buttons -->
      <p>
        <input type="radio" name="picked" value="one" v-model="picked">
        <input type="radio" name="picked" value="two" v-model="picked">
        {{picked}}
      </p>
      <!-- select -->
      <p>
        <select v-model="selected">
          <option>one</option>
          <option>two</option>
        </select>
        {{selected}}
      </p>
      <!-- multiple select -->
      <p>
        <select v-model="multiSelect" multiple>
          <option>one</option>
          <option>two</option>
          <option>three</option>
        </select>
        {{multiSelect}}
      </p>
    </form>
    <p><pre>data: {{$data | json }}</pre></p>
  </div>
</template>

<script>

import VueGoogleAutocomplete from 'vue-google-autocomplete';

export default {
  name: 'RtoCalculator',
  data () {
    return {
      propertyType: '',
      propertyType2: '',
      title: 'Rent To Own',
      purchasePrice: 300000,
      checked: true,
      picked: 'one',
      selected: 'two',
      multiSelect: ['one', 'three']
    }
  }
}
</script>

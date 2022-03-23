<script lang="ts" setup>
  import { ref } from 'vue'
  import MyBox from '@/components/Common/MyBox/MyBox.vue'
  interface tableDataProps {
    id: number
    action: string
    start: string
    pattern: string,
    end: string
  }

  const avInput = ref(0) // A/V Input
  const displayPower = ref(0) // Display Power
  const systemPower = ref(0) // System Power
  const startDate = ref('') // 开始时间
  const defaultDate = new Date() // 默认显示当前时间
  const setType = ref(0) // 选择Recurrence pattern是每天还是 一周内选
  const dataSelect = ref([0, 1, 2 ,3]) // 选择的天数
  const rangeStartDate = ref('')
  const rangeTypeSelect = ref(0)
  const scheduleList: tableDataProps[] = [
    {
      id: 0,
      action: 'Display ON',
      start: '2022/09/04',
      pattern: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 1,
      action: 'Display ON',
      start: '2022/09/04',
      pattern: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 1,
      action: 'Display ON',
      start: '2022/09/04',
      pattern: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 1,
      action: 'Display ON',
      start: '2022/09/04',
      pattern: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 1,
      action: 'Display ON',
      start: '2022/09/04',
      pattern: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    }
  ]
</script>

<template>
  <div>Choose a scheduling function</div>
  <div class="d-flex mt-3 align-items-center">
    <div class="d-title">A/V Inputs</div>
    <div class="flex-1">
      <el-radio-group v-model="avInput">
      <el-radio-button :label="0">HDMI 1</el-radio-button>
      <el-radio-button :label="1">HDMI 2</el-radio-button>
      <el-radio-button :label="2">USB-C</el-radio-button>
    </el-radio-group>
    </div>
  </div>
  <div class="d-flex mt-3 align-items-center">
    <div class="d-title">Display Power</div>
    <div class="flex-1">
      <el-radio-group v-model="displayPower">
      <el-radio-button :label="0">HDMI 1</el-radio-button>
      <el-radio-button :label="1">HDMI 2</el-radio-button>
    </el-radio-group>
    </div>
  </div>
  <div class="d-flex mt-3 align-items-center">
    <div class="d-title">System Power</div>
    <div class="flex-1">
      <el-radio-group v-model="systemPower">
      <el-radio-button :label="0">HDMI 1</el-radio-button>
      <el-radio-button :label="1">HDMI 2</el-radio-button>
    </el-radio-group>
    </div>
  </div>
  <div class="d-flex mt-3 align-items-center">
    <div class="d-title">Start</div>
    <div class="flex-1">
      <el-date-picker
        v-model="startDate"
        :default-time="defaultDate"
        type="datetime"
        placeholder="Select date and time"
      />
    </div>
  </div>
  <div class="d-flex mt-3 align-items-center">
    <div class="flex-1">
      <MyBox class="function-box" title="Recurrence pattern">
        <div class="d-flex">
          <div class="type-select">
            <el-radio v-model="setType" :label="0">Daily</el-radio>
            <el-radio v-model="setType" :label="1">Weekly</el-radio>
          </div>
          <div class="day-select">
            <el-checkbox-group v-model="dataSelect">
              <el-checkbox :label="0">Sunday</el-checkbox>
              <el-checkbox :label="1">Monday</el-checkbox>
              <el-checkbox :label="2">Tuesday</el-checkbox>
              <el-checkbox :label="3">Wednesday</el-checkbox>
              <el-checkbox :label="4">Thursday</el-checkbox>
              <el-checkbox :label="5">Friday</el-checkbox>
              <el-checkbox :label="6">Saturday</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </MyBox>
    </div>
  </div>
  <div class="d-flex mt-4 align-items-center">
    <div class="flex-1">
      <MyBox class="function-box" title="Range of recurrence">
        <div class="d-flex align-items-start">
          <div class="type-select d-flex align-items-center m-2 me-3">
            <label class="me-3">Start</label>
            <el-date-picker v-model="rangeStartDate" class="flex-1 d-title" size="small"></el-date-picker>
          </div>
          <div class="day-select">
            <div class="d-flex">
              <el-radio :label="0" v-model="rangeTypeSelect">No end date</el-radio>
            </div>
            <div class="d-flex align-items-center">
              <el-radio :label="1" v-model="rangeTypeSelect" class="radio-width">End after</el-radio>
              <el-input class="flex-1 me-2 input-width" size="small" ></el-input>
              <label>occurrences</label>
            </div>
            <div class="d-flex align-items-center">
              <el-radio :label="2" v-model="rangeTypeSelect" class="radio-width">End by</el-radio>
              <el-date-picker v-model="rangeStartDate" class="input-width" size="small"></el-date-picker>
            </div>
          </div>
        </div>
      </MyBox>
    </div>
  </div>
  <div class="d-flex function-box mt-3">
    <el-button type="primary">OK</el-button>
    <el-button type="primary">Cancel</el-button>
    <el-button type="primary">Remove Recurrence</el-button>
  </div>
  <div class="my-3">Current Schedule</div>
  <el-table :data="scheduleList" class="w-75" height="180">
    <el-table-column prop="id" label="ID"/>
    <el-table-column prop="action" label="Action"/>
    <el-table-column prop="start" label="Start" />
    <el-table-column prop="pattern" label="Pattern"/>
    <el-table-column prop="end" label="End" />
  </el-table>
</template>

<style lang="scss">
.d-title {
  width: 150px !important;
}
.function-box {
  width: 600px;
}
.input-width {
  width: 130px !important;
}
.radio-width {
  width: 80px;
  margin: 0;
}
</style>

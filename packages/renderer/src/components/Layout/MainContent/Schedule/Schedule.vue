<script lang="ts" setup>
  import { ref } from 'vue'
  import MyBox from '@/components/Common/MyBox/MyBox.vue'
  import ControlBox from'@/components/Common/ControlBox/ControlBox.vue'
  interface tableDataProps {
    id: number
    deviceName: string
    action: string
    start: string
    repeat: string,
    end: string
  }

  const avInput = ref(0) // A/V Input
  const displayPower = ref(0) // Display Power
  const systemPower = ref(0) // System Power
  const startDate = ref('') // 开始时间
  const defaultDate = new Date() // 默认显示当前时间
  const setType = ref(0) // 选择Recurrence repeat是每天还是 一周内选
  const dataSelect = ref([0, 1, 2 ,3]) // 选择的天数
  const rangeStartDate = ref('')
  const rangeTypeSelect = ref(0)
  const scheduleList: tableDataProps[] = [
    {
      id: 0,
      deviceName: 'Building/Floor 1/Device 1',
      action: 'Display ON',
      start: '2022/09/04',
      repeat: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 1,
      deviceName: 'Building/Floor 1/Device 2',
      action: 'Display ON',
      start: '2022/09/04',
      repeat: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 2,
      deviceName: 'Building/Floor 1/Device 3',
      action: 'Display ON',
      start: '2022/09/04',
      repeat: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 3,
      deviceName: 'Building/Floor 2/Device 4',
      action: 'Display ON',
      start: '2022/09/04',
      repeat: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    },
    {
      id: 4,
      deviceName: 'Building/Floor 2/Device 5',
      action: 'Display ON',
      start: '2022/09/04',
      repeat: '11: 19 Weekly 1 2 3 4 5 6',
      end: 'No end date'
    }
  ]
</script>

<template>
  <div class="fw-bold">Choose Devices at Device Online Tree to add a schedule</div>
  <div class="mt-3 fw-bold">Choose a scheduling function</div>
  <ControlBox class="mt-3"></ControlBox>
  <div class="d-flex mt-3 align-items-center">
    <div class="d-title fw-bold">Start</div>
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
      <MyBox class="function-box" title="Repeat">
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
      <MyBox class="function-box" title="Range of Repeat">
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
    <el-button type="primary">Save</el-button>
    <el-button type="primary">Clear</el-button>
  </div>
  <el-row class="mt-3">
    <el-col :span="24">
      <div class="function-title mb-3">Current Schedule</div>
      <el-table :data="scheduleList" class="w-100" size="small">
        <el-table-column prop="id" label="ID" width="40"/>
        <el-table-column prop="deviceName" label="Device name"/>
        <el-table-column prop="action" label="Name"/>
        <el-table-column prop="start" label="Start" />
        <el-table-column prop="repeat" label="Repeat" />
        <el-table-column prop="repeat" label="Repeat">
          <template #default="scope">
            <el-button size="small" type="primary">Remove</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
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

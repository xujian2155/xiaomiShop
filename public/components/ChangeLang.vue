<template>
    <div>
        <el-select
            @change="changeLang()"
            v-model="value"
            placeholder="Select"
            style="width: 240px"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
    </div>
  </template>
  
<script lang="ts" setup>
    import { getCurrentInstance, ref } from 'vue'
    const value = ref('中文(简体)')
    const options = [
        {
            value: 'en',
            label: 'English'
        },
        {
            value: 'cn',
            label: '中文(简体)'
        }
    ]
    const { proxy } = getCurrentInstance() as any
    const changeLang = () => {
        proxy.$i18n.locale = value.value
    }
</script>
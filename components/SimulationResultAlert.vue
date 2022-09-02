<script setup lang='ts'>
import { ref, PropType, onBeforeUnmount } from 'vue';

const props = defineProps({
    resultType: {
        type: String as PropType< 'success' | 'fail' | 'none'>,
        required: true
    }
})


const successClass = "bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
const failClass = "bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
const noneClass = "hidden"

const currentClass = () => {
    if(props.resultType == 'success') {
        return successClass
    }else if(props.resultType == 'fail'){
        return failClass
    }else{
        return noneClass
    }
}

</script>

<template>
    <div :class="currentClass()" role="alert">
        <p class="font-bold"><slot /></p>
    </div>
</template>
<script setup>
import { ref, reactive, onBeforeUnmount } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    defaultValue: {
        type: Number,
        required: true
    },
    maxValue: {
        type: Number,
        required: true
    },
})

const emits = defineEmits([
    "changeNotification"
])

const currentValue = ref(props.defaultValue)

const onChange = () => {
    // 数値以外を削除
    currentValue.value = String(currentValue.value).replace(/[^0-9]/g, '')

    // 0フィルを削除しつつ、数値型にする
    currentValue.value = Number(currentValue.value)

    // 最大値を超えた場合は最大値に設定する
    if(currentValue.value > props.maxValue){
        currentValue.value = props.maxValue
    }

    // 親コンポーネントに値を通知する
    emits('changeNotification', currentValue.value)
}

</script>

<template>
	<div>
		<label :for="id" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">
			<slot />
		</label>
        <input type="text" inputmode="numeric" pattern="\d*" min="1" :max="maxValue" :id="id" v-model="currentValue" @input="onChange()" @change="onChange()" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
	</div>
</template>
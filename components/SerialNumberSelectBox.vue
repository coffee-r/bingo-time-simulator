<script setup>
import { ref, reactive, onBeforeUnmount } from 'vue';

const props = defineProps({
    id: {
        type: String,
        required: true
    },
    defaultSelectNumber: {
        type: Number,
        required: true
    },
    maxSelectNumber: {
        type: Number,
        required: true
    },
})

const emits = defineEmits([
    "changeNotification"
])

const currentSelectValue = ref(props.defaultSelectNumber)

</script>

<template>
	<div>
		<label :for="id" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">
			<slot />
		</label>
		<select :id="id" v-model="currentSelectValue" @change="emits('changeNotification', currentSelectValue)" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
		<option v-for="(value, key) in maxSelectNumber" :key="key">{{ value }}</option>
		</select>
	</div>
</template>
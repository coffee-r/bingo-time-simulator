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

</script>

<template>
	<div>
		<label :for="id" class="block mb-2 font-medium text-gray-900 dark:text-gray-300">
			<slot />
		</label>
        <input type="number" min="0" :max="maxValue" :id="id" v-model="currentValue" @change="emits('changeNotification', currentValue)" class="bg-gray-50 border border-gray-300 text-gray-900 rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
	</div>
</template>
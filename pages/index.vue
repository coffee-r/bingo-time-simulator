<template>

	<!-- ビンゴシュミレーター部分・フッター部分 -->
	<div class="max-w-3xl mx-auto">

		<!-- ビンゴシュミレーター -->
		<main class="mt-4 px-4 lg:px-0">

			<!-- ページ説明 -->
			<h1 class="font-semibold text-3xl">Bingo time simulator</h1>
			<p>
				パーティーや宴会などで行われるビンゴ大会にかかる時間をざっくり計算します。
			</p>

			<!-- 入力フォーム -->
			<form class="mt-6">
				<CustomInputNumber class="mt-3" id='test1' :defaultValue="personCount" :maxValue="300" @changeNotification="setPersonCount">参加人数</CustomInputNumber>
				<CustomInputNumber class="mt-3" id='test2' :defaultValue="winningItemCount" :maxValue="200" @changeNotification="setWinningItemCount">景品数</CustomInputNumber>
				<CustomInputNumber class="mt-3" id='test3' :defaultValue="lotteryTime" :maxValue="100" @changeNotification="setLotteryTime">1回の番号抽選にかける秒数</CustomInputNumber>
				<CustomInputNumber class="mt-3" id='test4' :defaultValue="winningTime" :maxValue="120" @changeNotification="setWinningTime">1回の当選にかける秒数</CustomInputNumber>
			</form>

			<!-- TOPページリンク -->
			<div class="text-center mt-6">
				<button @click="simulate()" class="bg-black hover:bg-gray-700 text-white  py-2 px-4 rounded-full">
					計算する
				</button>
			</div>

			<!-- 計算結果 -->
			<SimulationResultAlert class="mt-6" :resultType="simulationResultType">{{simulationResultMessage}}</SimulationResultAlert>

			<!-- 補足事項の説明 -->
			<h2 class="mt-8">補足事項</h2>
			<ul class="list-disc list-outside">
				<li class="ml-5">プログラム上でビンゴ大会を100回開催し、その最短と最長の終了時間を計算します。</li>
				<li class="ml-5">景品は参加者1人1個までとし、ダブルビンゴなどによる重複当選はなしの前提で計算します。</li>
				<li class="ml-5">5×5マスのビンゴで計算します。</li>
			</ul>
		</main>

		<!-- フッター -->
		<CustomFooter />
	</div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { BingoSheetFactory, LotteryBingoNumberStack, BingoTournament, BingoTournamentCollection } from '~/plugins/bingo.js';
import CustomInputNumber from "~/components/CustomInputNumber.vue";
import SimulationResultAlert from "~/components/SimulationResultAlert.vue";
import CustomFooter from "~/components/CustomFooter.vue";

// ビンゴ終了時間計算用の変数
const personCount = ref(100)
const winningItemCount = ref(20)
const lotteryTime = ref(30)
const winningTime = ref(60)

// 計算結果表示用の変数
const simulationResultType = ref("none")
const simulationResultMessage = ref("")

// 参加人数を更新する
const setPersonCount = (input) => {
	personCount.value = Number(input)
}

// 景品数を更新する
const setWinningItemCount = (input) => {
	winningItemCount.value = Number(input)
}

// 1抽選あたりの時間を更新する
const setLotteryTime = (input) => {
	lotteryTime.value = Number(input)
}

// 1当選あたりの時間を更新する
const setWinningTime = (input) => {
	winningTime.value = Number(input)
}

// ビンゴ終了時間をシュミレーションする
const simulate = () => {

	// 重複の当選は想定していないため
	// 景品数が参加者数を上回った状態で計算しないようにする
	if(personCount.value < winningItemCount.value){
		simulationResultType.value = 'fail'
		simulationResultMessage.value = '景品数を参加人数より少なくしてください'
		return;
	}

	// ビンゴ大会を100回試行する
	let bingoTournamentCollection = new BingoTournamentCollection([]);
	for(let i=0; i<100; i++){
		bingoTournamentCollection = bingoTournamentCollection.add(new BingoTournament(BingoSheetFactory, new LotteryBingoNumberStack(), personCount.value, winningItemCount.value, lotteryTime.value, winningTime.value));
	}
	const result = bingoTournamentCollection.calculatePlayTime();

	// 計算結果を更新する
	simulationResultType.value = 'success'
	simulationResultMessage.value = "所要時間 " + Math.floor(result.minEndTimeSeconds / 60)+ " ~ " + Math.floor(result.maxEndTimeSeconds / 60) +"分 前後";
}

</script>

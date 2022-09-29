<template>
	<v-card class="task">
		<v-list-item three-line>
			<v-list-item-content>
				<div class="overline mb-4">
					OVERLINE
				</div>
				<v-list-item-title class="headline mb-1">
					Headline 5
				</v-list-item-title>
				<v-list-item-subtitle
				>Greyhound divisely hello coldly fonwderfully
				</v-list-item-subtitle
				>
			</v-list-item-content>

			<v-list-item-avatar color="grey" size="80" tile></v-list-item-avatar>
		</v-list-item>

		<v-card-actions>
			<v-btn outlined rounded text>
				Button
			</v-btn>
		</v-card-actions>
	</v-card>
</template>
<script>
export default {
	props: {
		task: {type: Object, required: true}
	}
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/main.scss";

.task {
	margin-bottom: 12px;
	border-radius: 10px;
}
</style>

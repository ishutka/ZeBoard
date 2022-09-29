<template>
	<v-expansion-panel
		:class="{ column__empty: !tasks.length }"
        :disabled="!tasks.length || !isMobile"
        class="column"
	>
		<v-expansion-panel-header>
			{{ column.name }} - {{ tasks.length }}
		</v-expansion-panel-header>

		<v-expansion-panel-content v-if="tasks.length">
			<task v-for="task in column.tasks"
			      :key="task.id"
			      :task="task"
			/>
		</v-expansion-panel-content>
	</v-expansion-panel>
</template>

<script>
export default {
	props: {
		column: {
			type: Object,
			required: true,
		},
	},

	computed: {
		tasks () {
			return this.column.tasks || [];
		},

		isMobile () {
			return this.$vuetify.breakpoint.smAndDown;
		},
	},
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.column {
	background-color: transparent !important;

	&:after,
	&:before {
		content: none !important;
	}

	&__empty {
		height: fit-content;
		.v-expansion-panel-header i.v-icon {
			display: none;
		}
	}

	.v-expansion-panel-header {
		height: 44px;
		background: $blue;
		color: #fff;
		font-weight: bold;
		font-size: 16px;
		text-transform: uppercase;
		min-height: 44px;
		padding: 12px 10px;
		border-radius: 10px !important;
		margin-bottom: 10px;

		@media screen and (min-width: 960px) {
			height: 74px;
			padding: 10px 24px 24px;
			margin-bottom: -14px;
		}
	}
}
</style>

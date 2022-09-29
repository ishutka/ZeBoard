<template>
	<v-expansion-panels
		v-model="panels"
		multiple
		class="columns-wrap"
	>
		<Column
			:column="toDoColumn"
			class="columns-wrap__item"
			data-index="0"
		/>
		<Column
			v-for="(column, index) in columns"
			:key="index"
			:column="column"
			class="columns-wrap__item"
			:data-index="index"
		/>
		<Column
			:column="doneColumn"
			class="columns-wrap__item"
			:data-index="columns.length + 1"
		/>
	</v-expansion-panels>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
	data () {
		return {
			panels: [],
		};
	},

	mounted() {
		this.fetchDataFromLocalstorage();
	},

	watch: {
		isMobile (val) {
			if (val) {
				this.panels = [];
			} else {
				this.panels = this.columns.reduce(
					(first, column, index) => {
						return [...first, index + 1];
					}, [0]);
				this.panels = [...this.panels, this.panels.length];
			}
		}
	},

	computed:{
		...mapState(['columns','toDoColumn','doneColumn']),

		isMobile () {
			return this.$vuetify.breakpoint.smAndDown;
		},
	},

	methods: {
		showError(e) {
			console.log("there is an error: ", e);
			// show eror for user
		},

		...mapActions(["fetchDataFromLocalstorage"]),
	}
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.columns-wrap {
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;

	&__item {
		width: 100%;
	}

	.v-expansion-panel-content__wrap {
		padding: 0;
	}

	@media screen and (min-width: 960px) {
		flex-wrap: nowrap;
		grid-gap: 12px 21px;

		&__item {
			width: 526px;
			flex: 0 0 526px;
		}

		.v-expansion-panel--active + .v-expansion-panel,
		.v-expansion-panel--active:not(:first-child) {
			margin-top: 0;
		}

	}
}
</style>

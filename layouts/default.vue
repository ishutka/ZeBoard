<template>
	<v-app class="board-body">
		<v-main class="board-body__inner">
			<toolbar
				@openCreateColumnDialog="createColumnDialog = true"
				@openCreateTaskDialog="createTaskDialog = true"
			/>
			<Nuxt ref="nuxt"
			      class="board-body__content"
			/>
		</v-main>
		<v-dialog v-model="createTaskDialog" max-width="900" width="90%">
			<v-card class="pa-4 pa-lg-10">
				<createTaskForm
					v-if="createTaskDialog"
					:toDoColumn="toDoColumn"
				/>
				<v-card-actions class="flex-wrap">
					<v-btn
						block
						color="blue darken-1"
						large
						text
						@click="createTaskDialog = false"
					>
						Cancel
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>

		<v-dialog v-model="createColumnDialog" max-width="900" width="90%">
			<create-column-form
				v-if="createColumnDialog"
				@close-dialog="createColumnDialog = false"
			/>
		</v-dialog>
	</v-app>
</template>

<script>
import {mapState} from 'vuex';
import CreateTaskForm from "../components/CreateTaskForm";

export default {
	components: {CreateTaskForm},
	data() {
		return {
			createTaskDialog: false,
			createColumnDialog: false,
			// toDoColumn: {}
		};
	},
	mounted() {
	},
	computed: {
		...mapState(['toDoColumn']),
	},
	// methods: {
	// }
};
</script>
<style lang="scss">
#app {
	font-family: "Montserrat", sans-serif;
}

#app button {
	text-transform: none;
}

.board-body {
	background-color: #cdeafb !important;

	&__inner {
		.v-main__wrap {
			display: flex;
			flex-direction: column;
		}
	}

	&__content {
		flex: 1;
	}
}

.container {
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>

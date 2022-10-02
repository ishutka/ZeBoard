<template>
	<v-card class="pa-4 pa-lg-10" >
		<v-form ref="taskForm"
		        v-model="valid"
		        lazy-validation
		        @submit.prevent="createColumn"
		>
			<v-row class="create-task-form">
				<v-col cols="12">
					<v-card-title class="headline"> Сreate task</v-card-title>
				</v-col>
				<v-col cols="12">
					<v-text-field
						v-model="newColumnName"
						label="Name"
						name="name"
						outlined
						placeholder="Placeholder"
						@change="valid = true"
						required
					></v-text-field>
					<span v-if="!valid"
					      class="form-error"
					></span>
				</v-col>
			</v-row>
		</v-form>
		<v-card-actions class="flex-wrap">
			<v-btn
				block
				class="create-task-btn"
				dark
				elevation="0"
				large
				@click="createColumn"
			>
				Сreate task
			</v-btn>
			<v-btn
				block
				color="blue darken-1"
				large
				text
				@click="$emit('close-dialog')"
			>
				Cancel
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
	data () {
		return  {
			valid: true,
			newColumnName: '',
		};
	},
	methods: {
		...mapMutations(['addNewEmptyColumn', 'fillColumnsNames']),

		createColumn () {
			if (this.newColumnName.trim().length > 1) {
				this.addNewEmptyColumn(this.newColumnName.trim());
				this.fillColumnsNames(this.newColumnName.trim());
				this.$emit('close-dialog');

				return;
			}

			this.valid = false;
		},
	},
};
</script>

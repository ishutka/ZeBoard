<template>
    <v-container class="column-holder d-flex flex-column justify-start">
        <v-expansion-panels>
            <Column
                v-for="(column, index) in columns"
                :key="index"
                :column="column"
                :data-index="index"
            />
        </v-expansion-panels>
        <v-btn
            v-if="$vuetify.breakpoint.xsOnly"
            text
            large
            class="mx-4 mx-md-8 px-sm-2 px-md-10 create-column-btn"
        >
            Сreate column
            <v-icon dark> mdi-plus </v-icon>
        </v-btn>
    </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";

export default {
    data() {
        return {
            // columns: [],
            // toDoColumn: {}
        };
    },
    mounted() {
        this.fetchDataFromLocalstorage();
        import(/*webpackChunkName: "YM"*/ "vue-yandex-metrika").then(module => {
            Vue.use(module.default, {
                id: 84009433,
                env: "production"
            });
        });
    },
    computed: {
        ...mapState(["columns", "toDoColumn"])
    },
    methods: {
        showError(e) {
            console.log("there is an error: ", e);
            // show eror for user
        },
        ...mapActions(["fetchDataFromLocalstorage"])
    }
};
</script>

<style lang="scss">
@import "~/assets/css/main.scss";

.column-holder {
    overflow: auto;

    .v-btn.create-column-btn {
        color: $dark-blue;
    }

    .v-btn.create-column-btn:hover {
        opacity: 0.5;
    }

    .v-btn.create-column-btn:focus,
    .v-btn.create-column-btn:active {
        background-color: $blue;
        border-color: $blue;
        color: $dark-blue;
        opacity: 1 !important;
    }

    @media screen and (min-width: 960px) {
        > div::-webkit-scrollbar-track {
            background: #fff;
        }

        > div::-webkit-scrollbar-thumb {
            background: #414141;
            border-radius: 10px;
            display: table-row-group;
            width: 0px;
        }

        > div::-webkit-scrollbar {
            width: 8px;
            border-radius: 5px;
            background: #fff;
        }
        > div {
            max-height: calc(100vh - 200px);
        }
    }
}
</style>

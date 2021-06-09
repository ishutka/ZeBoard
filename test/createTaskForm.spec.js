import Vuetify from 'vuetify';
import { mount, createLocalVue } from "@vue/test-utils";
import TaskForm from "@/components/createTaskForm";


describe("createTaskForm.test.js", () => {
  const localVue = createLocalVue();
  let wrapper, vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();//for vuetify compilation
  //   // vm = new cmp({
  //   //   data: {
  //   //     // Replace data value with this fake data
  //   //     selectedAutor: { name: "Ben", avatar: "images/avatar_Ben.png" },
  //   //     name: "Hanna",
  //   //     estimation: "1d 0h 0m"
  //   //   }
  //   // }).mount(); // Instances and mounts the component
  //   const  taskForm= mount(TaskForm); // Create a copy of the original component

  //   taskForm.vm.selectedAutor={ name: "Ben", avatar: "images/avatar_Ben.png" };
  //   taskForm.vm.name="Hanna";
  //   taskForm.vm.estimation="1d 0h 0m";
  //   taskForm.vm.createTask();
  //   const today= new Date();
  });
  function sum(a, b) {
    return a + b;
  }

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("check TaskForm creating", () => {
    wrapper = mount(TaskForm, {
      localVue,
      vuetify,//for vuetify compilation
      mocks: {
        selectedAutor: {
          name: "Ben",
          avatar: "images/avatar_Ben.png"
        },
        name: "Hanna",
        estimation: "1d 0h 0m"
      }
    }); // Create a copy of the original component
    // expect(taskForm.vm).toBeTruthy();

    // wrapper.vm.createTask();
    const today = new Date();
    const tomorrow=new Date(today + 24 * 60 * 60).toISOString().substr(0, 10);
    console.log('today: ', today,' date: ', wrapper.vm.date,' tomorrow: ',tomorrow);
    expect(wrapper.vm.date).toEqual(tomorrow);
  });
});

import { mount } from '@vue/test-utils'
import TaskForm from "@/components/createTaskForm";

describe("App.test.js", () => {
  let cmp, vm;

  beforeEach(() => {
    // vm = new cmp({
    //   data: {
    //     // Replace data value with this fake data
    //     selectedAutor: { name: "Ben", avatar: "images/avatar_Ben.png" },
    //     name: "Hanna",
    //     estimation: "1d 0h 0m"
    //   }
    // }).mount(); // Instances and mounts the component
    const  taskForm= mount(TaskForm); // Create a copy of the original component

    taskForm.selectedAutor={ name: "Ben", avatar: "images/avatar_Ben.png" };
    taskForm.name="Hanna";
    taskForm.estimation="1d 0h 0m";
    taskForm.createTask();
    const today= new Date();
  });
  
  it('equals messages to ["Cat"]', () => {
    expect(vm.date).toEqual([new Date(today+24*60*60).toISOString().substr(0, 10)]);
  });
});

import Vuetify from 'vuetify';
import { mount} from "@vue/test-utils";
import TaskForm from "@/components/createTaskForm";


describe("createTaskForm.test.js", () => {
  let wrapper, vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();//for vuetify compilation
  });
  it("Estimation = 1 day=> Date must be tomorrow", () => {
    wrapper = mount(TaskForm, {
      vuetify,//for vuetify compilation
    }); 
    wrapper.setData({
      selectedAutor: {
        name: "Ben",
        avatar: "images/avatar_Ben.png"
      },
      name: "Hanna",
      estimation: "1d 0h 0m"
    });
    expect(wrapper.vm).toBeTruthy();

    wrapper.vm.createTask();

    const today = new Date();
    const tomorrow=new Date(today.getTime() + 24*3600*1000).toISOString().substr(0, 10);
    expect(wrapper.vm.date).toEqual(tomorrow);
  });
});

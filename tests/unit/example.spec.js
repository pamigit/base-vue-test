import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import HiEverybody from "@/components/HiEverybody.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("HiEverybody.vue", () => {
  it("renders props.friend when passed", () => {
    const friend = "Nikola";
    const wrapper = shallowMount(HiEverybody, {
      propsData: { friend }
    });
    expect(wrapper.text()).toMatch(friend);
  });
});
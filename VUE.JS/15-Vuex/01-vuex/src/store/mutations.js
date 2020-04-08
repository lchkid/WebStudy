export default {
  increment(state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  countAdd(state, n) {
    state.counter += n;
  },
  studentAdd(state, payload) {
    state.students.push(payload.stu);
  },
  infoUpdate(state, payload) {
    state.info.name = 'lchkid';
    console.log(payload);
    // state.info.address = 'china';
    // Vue.set(state.info, 'address', 'china')
    // delete state.info.name;
    // Vue.delete(state.info, 'name')
  }
}
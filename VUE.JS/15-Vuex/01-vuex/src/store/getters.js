export default {
  get15Stu(state) {
    return state.students.filter(stu => stu.age >= 15)
  },
  get15StuLen(state, getters) {
    return getters.get15Stu.length
  },
  getAgeStu(state) {
    return age => {
      return state.students.filter(stu => stu.age >= age)
    }
  },
  // getAgeStu: state => age => state.students.filter(stu => stu.age >= age)
}
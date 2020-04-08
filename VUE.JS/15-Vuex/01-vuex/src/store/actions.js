export default {
  aInfoUpdate(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(context);
        context.commit('infoUpdate', payload + 'hahaha');
        console.log(payload);
        resolve(payload + 'xixixi');
      }, 1000)
    })
  }
}
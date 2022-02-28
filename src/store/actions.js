// import { getGatewayList } from "Service/apis.js";

export default {
  a_getwayList(context) {
    const key = "gateway";
    return new Promise((resolve) => {
      if (localStorage.getItem(key)) {
        context.commit("m_setOptionsList", {
          key,
          items: JSON.parse(localStorage.getItem(key)),
        });
        resolve();
      } else {
        // getGatewayList()
        //   .then(({ data: items }) => {
        //     context.commit('m_setOptionsList', { key, items })
        //     resolve()
        //   })
      }
    });
  },
};

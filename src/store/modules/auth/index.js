import mutations from "../auth/mutations";
import actions from "../auth/actions";
import getters from "./getters";

export default {
    state() {
        return {
          userId: null,
          token: null,
          didAutoLogout: false
        };
      },
      mutations,
      actions,
      getters
}
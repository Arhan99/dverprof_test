import { makeAutoObservable } from "mobx";

class UserStore {
  currentUser = {};

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentUser = (user) => {
    this.currentUser = user;
  };
  addRequisite = (req) => {
    this.currentUser.requisites.push(req);
  };
}

const userStore = new UserStore();
export default userStore;

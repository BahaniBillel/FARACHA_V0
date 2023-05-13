import React from "react";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { store } from "../../redux/store"; // Replace with the path to your store file

export const resetReduxPersist = async () => {
  await persistStore(store).purge();
};

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
function Reset() {
  return <button onClick={resetReduxPersist}>Reset Redux Persist</button>;
}

export default Reset;

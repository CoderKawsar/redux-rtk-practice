const { configureStore, getDefaultMiddlewares } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");
const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");

const logger = createLogger();

// configure store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat([logger]),
});

module.exports = store;

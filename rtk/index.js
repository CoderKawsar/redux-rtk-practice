const store = require("./app/store");
const { counterActions } = require("./features/counter/counterSlice");
const {
  dynamicCounterActions,
} = require("./features/dynamicCounter/dynamicCounterSlice");

// subscibe to state changes
store.subscribe(() => {
  // console.log(store.getState());
});

// dispatch actions
// console.log("Static");
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.decrement());
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());

// console.log("Dynamic");
// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.decrement(2));
// store.dispatch(dynamicCounterActions.increment(1));

store.dispatch(counterActions.increment());

import _ from "lodash";

const execWithEventValue = func => event => {
  event.preventDefault();
  const value = _.get(event, "target.value");
  return func(value);
};

const displayPrice = priceNum => `$${priceNum.toFixed(2)}`;

export { execWithEventValue, displayPrice };

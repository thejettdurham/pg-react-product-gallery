import _ from "lodash";

const execWithEventValue = func => event => {
  event.preventDefault();
  const value = _.get(event, "target.value");
  return func(value);
};

export { execWithEventValue };

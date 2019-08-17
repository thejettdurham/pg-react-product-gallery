import _ from "lodash";

const execWithEventValue = func => event => {
  const value = _.get(event, "target.value");
  return func(value);
};

export { execWithEventValue };

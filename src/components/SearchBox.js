import React from "react";
import _ from "lodash";
import store from "../store";
import { execWithEventValue } from "../util";

const styles = {
  wrapper: {}
};

const SearchBoxPresentation = ({ query, setQuery }) => {
  const [input, setInputField] = React.useState(query);

  const setInput = input => {
    setInputField(input);
    setQuery(input);
  };

  return (
    <div style={styles.wrapper}>
      <form>
        <label>
          Search
          <input
            type="text"
            value={input}
            onChange={execWithEventValue(setInput)}
            placeholder="Search products by name"
          />
        </label>
      </form>
    </div>
  );
};

const SearchBox = () => {
  const { state, dispatch } = React.useContext(store.StoreContext);
  const query = state.search;
  const setQuery = search =>
    dispatch({
      type: store.actions.SET_SEARCH,
      payload: search
    });
  const setQueryDebounced = _.debounce(setQuery, 250);

  return <SearchBoxPresentation {...{ query, setQuery: setQueryDebounced }} />;
};

export default SearchBox;

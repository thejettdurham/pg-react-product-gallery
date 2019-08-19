import React from "react";
import _ from "lodash";
import store from "../store";
import { execWithEventValue } from "../util";

const styles = {
  wrapper: {
    display: "flex"
  },
  searchInput: {
    background: "#ffffff",
    borderRadius: "4px",
    width: "661px",
    height: "51px",
    border: 0,
    paddingLeft: "52px"
  },
  searchIcon: {
    position: "relative",
    fontSize: "18px",
    zIndex: 1,
    left: "20px",
    color: "#525252",
    width: 0
  }
};

const SearchBoxPresentation = ({ query, setQuery }) => {
  const [input, setInputField] = React.useState(query);

  const setInput = input => {
    setInputField(input);
    setQuery(input);
  };

  return (
    <div style={styles.wrapper}>
      <form onSubmit={e => e.preventDefault()}>
        <i style={styles.searchIcon} className="fa fa-search" />
        <input
          className="search-input"
          style={styles.searchInput}
          type="text"
          value={input}
          onChange={execWithEventValue(setInput)}
          placeholder="Search products by name"
        />
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

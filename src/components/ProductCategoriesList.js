import React from "react";
import store from "../store";

const styles = {
  wrapper: {},
  headerText: {},
  categoryText: {},
  selectedCategoryText: {
    color: "red"
  }
};

const ProductCategoriesListPresentation = ({
  categories,
  selectedCategory,
  selectCategory
}) => (
  <div style={styles.wrapper}>
    <h4 style={styles.headerText}>ALL CATEGORIES</h4>
    {categories.map(category => {
      const categoryIsSelected = category.id === selectedCategory;

      const style = categoryIsSelected
        ? { ...styles.categoryText, ...styles.selectedCategoryText }
        : styles.categoryText;

      return (
        <p
          key={category.id}
          onClick={() =>
            selectCategory(category.id)
          }
          {...{ style }}
        >
          {category.name}
        </p>
      );
    })}
  </div>
);

const ProductCategoriesList = () => {
  const { state, dispatch } = React.useContext(store.StoreContext);
  const categories = Object.values(state.data.categories);
  const selectedCategory = state.category;
  const selectCategory = category =>
    dispatch({
      type: store.actions.SET_CATEGORY,
      payload: category
    });

  return (
    <ProductCategoriesListPresentation
      {...{ categories, selectedCategory, selectCategory }}
    />
  );
};

export default ProductCategoriesList;

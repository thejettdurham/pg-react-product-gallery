import React from "react";
import store from "../store";
import ProductSidebarHeader from "./ProductSidebarHeader";

const styles = {
  categoriesWrapper: {
    margin: "20px 0",
    listStyleType: "none",
    padding: 0
  },
  categoryText: {
    fontSize: "15px",
    lineHeight: "31px",
    color: "rgba(123, 123, 123, 0.78)",
    cursor: "pointer"
  },
  selectedCategoryText: {
    color: "#f8cb00"
  }
};

const ProductCategoriesListPresentation = ({
  categories,
  selectedCategory,
  selectCategory
}) => (
  <div>
    <ProductSidebarHeader>ALL CATEGORIES</ProductSidebarHeader>
    <ul style={styles.categoriesWrapper}>
      {categories.map(category => {
        const categoryIsSelected = category.id === selectedCategory;

        const style = categoryIsSelected
          ? { ...styles.categoryText, ...styles.selectedCategoryText }
          : styles.categoryText;

        return (
          <li
            key={category.id}
            onClick={() => selectCategory(category.id)}
            {...{ style }}
          >
            {category.name}
          </li>
        );
      })}
    </ul>
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

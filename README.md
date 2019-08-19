# React Product Gallery

Completed React Product Gallery for PracticeGenius hiring process. The original README is [here](README.original.md) for posterity.

## Instructions

- Clone this repo
- `cd pg-react-product-gallery` and install dependencies via `yarn install`
- Execute `yarn start` to begin the development server.
- You should be able to reach the project at http://localhost:3000/

_\*[`yarn`](https://yarnpkg.com) is interchangeable with [`npm`](https://www.npmjs.com/) throughout these instructions_

## BONUS FEATURE: Fetching the data from a REST API

This solution as implemented is quite simplified from a real-world scenario since the data does not need to be fetched. If the data was to come from a REST API requiring authentication, here's how I would implement that.

To make the API requests, I would use [axios](https://www.npmjs.com/package/axios). Despite [problems](https://www.reddit.com/r/javascript/comments/cp5qhm/askjs_the_sad_state_of_axios/) with the library, I think it's the friendliest, most concise `async/await`-compatible REST client. I've built directly with `fetch` before, and the library is so low-level that I ended up writing some helper functions around it that turned into a worse version of axios. `¯\_(ツ)_/¯`

In most cases, fetching data from an API requires authentication. For this case, I'll assume that we already have a known-good standard OAuth token (from local storage, for example). For making the requests, I would make a new axios instance that bakes in the API's baseURL and this authorization token. This instance can be exposed to the components with a React Context, so components further down don't have to worry about the auth aspect.

```javascript
const authenticatedApi = axios.create({
  baseUrl: "https://some-domain.com/api",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${apiToken}`
  }
});
```

There are two fetching scenarios to consider: the initial load, and subsequent loads as the filter state changes. When the page mounts, we won't have any data to show; we'll need to fetch it with our axios instance. Then, we must do subsequent fetches as the state of the filters change, as our API would most likely support filtering (and pagination) via query parameters. So, we have to visually indicate these loading states to the user. [Suspense](https://reactjs.org/blog/2018/11/27/react-16-roadmap.html#react-16x-mid-2019-the-one-with-suspense-for-data-fetching) promises to provide a first-class way to do this in the React API, but for now we must implement it manually.

For the initial load, since we don't have any products or categories to show, I would replace the entire `ProductListing` component with a loading indicator. Trivially, this could just be a spinner that says "Loading...", but a more sophisticated approach would use a skeleton preview library like [react-skeletor](https://github.com/trainline/react-skeletor)

For subsequent loads, dismissing all of the data we've already fetched would likely be a jarring UX, so I would opt for a less obtrusive loading indicator. Two possible options would be:

- a translucent overlay (like the modal background) that displays atop the `ProductListing` with a loading spinner
- A loading spinner statically positioned in the lower-right corner of the page

In the current implementation, data filtering can be done synchronously. In this scenario, assuming the API supports filtering via query params, the data filtering is coupled to data fetching. So, data filtering becomes asynchronous. Because there are several elements across the page that can initiate a fetch, I think it's ideal to still use a React Context to provide the data to the component tree. We just need to re-architect it's internals.

Instead of exposing `state` and `dispatch` from the useReducer hook directly in the context, I would indirect those behind an API that looks like this:

```
// Flow Types
type ContextValue = {
  data: ?{
    products: { [number: productId]: Product},
    categories: { [number: categoryId]: Category}
  },

  // For tracking selected product
  selectedProduct: ?number,
  selectProduct: number => void,

  // Group together the state that is related to fetching
  filterState: {
    search: string,
    category: ?number,
    price: [?number, ?number],
  },
  // Merges current filter state with the given input
  updateFilters: Object => void,

  fetching: boolean,
  fetch: () => Promise<void>
}
```

For wiring this to the components:

- `ProductsGrid` and `ProductCategoriesList` consume `data` directly, assuming that filtering is done as a side-effect of running `fetch`
- The inputs on the page update `filterState` directly via `updateFilters`
- `fetching` is used to show the loading states. If `data` is _null_, assume that it's the initial load, otherwise assume that it's a subsequent fetch
- `fetch` is executed by the `SearchBox` (debounced) and `PriceFilter`'s Go button to send the API request based on the current `filterState`. In the process of making the request, this will update the `fetching` state and `data` as it comes back from the API. If the promise rejects with an error, it's assumed that the API request failed and we should indicate the error in the UI. In general, I like the [Snackbar](https://material.io/design/components/snackbars.html) Pattern from material design, but it's implementation is a little out-of-scope for this spec. In the past I've had success with the [notistack](https://www.npmjs.com/package/notistack) library.

import SliceProvider from "./SliceProvider";
import { globalSearchSlice, imageSearchSlice } from "../store/slices";
import Pager from "./Pager";
import AllPager from "./AllPager";
import ResultsPerPage from "./ResultsPerPage";
import Reset from "./Reset";

const App = () => (
  <>
    <header>
      <h1>Search</h1>
    </header>
    <main>
      <AllPager />
      <SliceProvider slice={globalSearchSlice}>
        <h2>Global</h2>
        <ResultsPerPage />
        <Pager />
        <Reset />
      </SliceProvider>
      <SliceProvider slice={imageSearchSlice}>
        <h2>Images</h2>
        <ResultsPerPage />
        <Pager />
        <Reset />
      </SliceProvider>
    </main>
  </>
);

export default App;

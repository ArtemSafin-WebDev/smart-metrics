import documentation from "./pages-data/documentation";
import home from "./pages-data/home";
import newsArchive from "./pages-data/newsArchive";
import notFound from "./pages-data/not-found";
import solutions from "./pages-data/solutions";
import tariffs from "./pages-data/tariffs";
import cases from "./pages-data/cases";

const pagesConfig = {
  ...home,
  ...solutions,
  ...tariffs,
  ...documentation,
  ...notFound,
  ...newsArchive,
  ...cases,
};

export default pagesConfig;

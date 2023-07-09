import documentation from "./pages-data/documentation";
import home from "./pages-data/home";
import notFound from "./pages-data/not-found";
import solutions from "./pages-data/solutions";
import tariffs from "./pages-data/tariffs";

const pagesConfig = {
  ...home,
  ...solutions,
  ...tariffs,
  ...documentation,
  ...notFound,
};

export default pagesConfig;

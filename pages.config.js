import documentation from "./pages-data/documentation";
import home from "./pages-data/home";
import newsArchive from "./pages-data/newsArchive";
import notFound from "./pages-data/not-found";
import solutions from "./pages-data/solutions";
import tariffs from "./pages-data/tariffs";
import cases from "./pages-data/cases";
import contacts from "./pages-data/contacts";
import newsSingle from "./pages-data/newsSingle";
import casesSingle from "./pages-data/casesSingle";
import solutionSingle from "./pages-data/solutionSingle";

const pagesConfig = {
  ...home,
  ...solutions,
  ...tariffs,
  ...documentation,
  ...notFound,
  ...newsArchive,
  ...cases,
  ...contacts,
  ...newsSingle,
  ...casesSingle,
  ...solutionSingle,
};

export default pagesConfig;

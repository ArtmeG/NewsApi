import Article from "./Article/Article";
import {Pagination} from "@material-ui/lab";
import {useState} from "react";

function NewsList({newsList}) {
  const [page, setPage] = useState(1);
  const [articlesToView, setArticlesToView] = useState(5);
  const onChangeHandler = (event, value) => {
    setPage(value);
  }

  return (
    <>
      <ul className='articles'>
        {newsList
          .slice(page*articlesToView - articlesToView, page*articlesToView)
          .map(article => <Article key={Math.random()} article={article} />)}
      </ul>
      <Pagination
        count={Math.ceil(newsList.length/articlesToView)}
        page={page}
        onChange={onChangeHandler}/>
    </>
  )
};

export default NewsList;
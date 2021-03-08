import {lazy, Suspense, useContext, useEffect, useState} from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import Header from "./Main/Header/Header";
import {Query} from "../heplers/query";
import Filter from "./Main/Filter/Filter";

const NewsList = lazy(() => import('./Main/NewsList/NewsList'));

function Main() {
  const [newsTopList, setNewsTopList] = useState([]);
  const [newsEveryList, setNewsEveryList] = useState([]);

  useEffect(() => {
    Query('top-headlines','country=us')
      .then(result => setNewsTopList(result.articles));
  }, []);

  useEffect(() => {
    Query('everything','q=news')
      .then(result => setNewsEveryList(result.articles));
  }, []);

  return (
    <>
      <Header/>
      <Link to="/" className='link'>Home</Link>
      <Link to="/everything" className='link'>Everything</Link>
      <Link to="/top-headlines" className='link'>Top headlines</Link>
      <Switch>
        <Route exact path="/everything">
          <Filter filter={'everything'} list={setNewsEveryList}/>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <NewsList newsList={newsEveryList}/>
          </Suspense>
        </Route>
        <Route path="/top-headlines">
          <Filter filter={'top-headlines'} list={setNewsTopList}/>
          <Suspense fallback={<h1>LOADING...</h1>}>
            <NewsList newsList={newsTopList}/>
          </Suspense>
        </Route>
        <Route path="/">
          <Suspense fallback={<h1>LOADING...</h1>}>
            <NewsList newsList={newsTopList}/>
          </Suspense>
        </Route>
      </Switch>
    </>
  )
}

export default Main;
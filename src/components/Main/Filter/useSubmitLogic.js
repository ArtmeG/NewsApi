import {Query} from "../../../heplers/query";

function useSubmitLogic() {
  return (formData, filter, list) => {
    let searchString =
      Object
        .entries(formData)
        .filter(val => val[1] !== '')
        .map(value => value.join('='))
        .join('&')
        .replace('fromDate', 'from')
        .replace('toDate', 'to');

    if (filter === 'everything') {
      searchString = 'q=news&'.concat(searchString);
    }
    Query(filter, searchString)
      .then(res => list(res.articles));
  }
}

export default useSubmitLogic;
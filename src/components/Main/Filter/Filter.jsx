import {useContext, useState} from "react";
import FiltersContext from "../../../heplers/filtersObject";
import TopHeadlinesFilter from "./FilterType/TopHeadlinesFilter";
import EverythingFilter from "./FilterType/EverythingFilter";
import useSubmitLogic from "./useSubmitLogic";

const formDataInit = {
  sortBy: '',
  lang: '',
  fromDate: '',
  toDate: '',
  category: '',
  country: ''
}

function Filter({filter, list}) {
  const filters = useContext(FiltersContext);
  const [formData, setFormData] = useState(formDataInit);
  const submitLogic = useSubmitLogic();

  const currentDate = new Date(Date.now());
  const maxDate = currentDate.toISOString().split('T')[0];
  currentDate.setDate(currentDate.getDate() - 28);
  const minDate = currentDate.toISOString().split('T')[0];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitLogic(formData, filter, list);
  }

  const onChangeData = ({target: {name, value}}) => {
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  let filterData;

  if (filter === 'top-headlines') {
    filterData =
        <TopHeadlinesFilter
          formData={formData}
          filters={filters}
          onChangeData={onChangeData}
        />;
  }

  if (filter === 'everything') {
    filterData =
      <EverythingFilter
        formData={formData}
        filters={filters}
        onChangeData={onChangeData}
        minDate={minDate}
        maxDate={maxDate}
      />;
  }

  return (
    <form
      className='filter'
      onSubmit={onSubmitHandler}
    >
      {filterData}
      <button>Search</button>
    </form>
  )

}

export default Filter;
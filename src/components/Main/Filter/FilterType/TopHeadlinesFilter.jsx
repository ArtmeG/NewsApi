function TopHeadlinesFilter({filters, formData, onChangeData}) {
  return (
    <>
      <label className='category'>
        Category:
      </label>
      <select
        onChange={onChangeData}
        className="category-by"
        id=""
        name='category'
        value={formData.category}>
        {filters.categoryArr.map((category) => (
          <option key={Math.random()} value={category}>{category}</option>
        ))}
      </select>
      <label className='country'>
        Country:
      </label>
      <select
        className="country-by" id=""
        onChange={onChangeData}
        name='country'
        value={formData.country}>
        {filters.countryArr.map((country) => (
          <option key={Math.random()} value={country}>{country}</option>
        ))}
      </select>
    </>
  )
}

export default TopHeadlinesFilter;
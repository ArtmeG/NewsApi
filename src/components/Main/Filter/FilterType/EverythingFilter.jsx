function EverythingFilter({filters, formData, onChangeData, minDate, maxDate}) {

  return (
    <>
      <label className='sort'>
        Sorted by:
      </label>
      <select
        onChange={onChangeData}
        className='sorted-by'
        id=''
        name='sortBy'
        value={formData.sortBy}>
        {filters.sortedByArr.map((sortedBy) => (
          <option
            key={Math.random()}
            value={sortedBy}>{sortedBy}
          </option>
        ))}
      </select>

      <label className='lang'>
        Language:
      </label>
      <select
        onChange={onChangeData}
        className='language'
        id=''
        name='lang'
        value={formData.lang}>
        {filters.languageArr.map((language) => (
          <option
            key={Math.random()}
            value={language}>{language}
          </option>
        ))}
      </select>

      <label className='dateFrom'>
        From:
      </label>
      <input
        onChange={onChangeData}
        className='date-from'
        type='date'
        name='fromDate'
        value={formData.fromDate}
        min={minDate}
        max={formData.toDate ? formData.toDate : maxDate}
      />

      <label className='dateTo'>
        To:
      </label>
      <input
        onChange={onChangeData}
        className='date-to'
        type='date'
        name='toDate'
        value={formData.toDate}
        min={formData.fromDate ? formData.fromDate : minDate}
        max={maxDate}
      />
    </>
  )
}

export default EverythingFilter;

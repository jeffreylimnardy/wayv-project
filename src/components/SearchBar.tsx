'use client'

import React from 'react'
import "%styles/SearchBar.modules.css"

const SearchBar = () => {
  return (
      <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden" aria-hidden="true">Search our products</span>
        </label>
        <input type="text" id="header-search" placeholder="search" name="s" />
        <button className="visually-hidden" type="submit">Search</button>
      </form>
  )
}

export default SearchBar
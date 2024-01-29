import React from 'react'

export default function CategoryMenu(props) {
  const categories = props.categories
  var myView = categories.  map((category) => (
    <li
      key={category.id}>
        <a href="#st">{category.attributes.categoryName}</a></li>
  ))
  return (

    <div>
      <div className="well well-small">
        <nav className="megamenu">
          <ul className='nav nav-list'>
            {myView}
          </ul>
        </nav>
      </div>
    </div>
  )
}

import React from 'react'

import './hackernews.css'

const Bookmarks = props => {
  const bookmarks = props.bookmarks
  const deleteBookmark = props.deleteBookmark

  return (
    <div>
      <section className="bookmarks-container">
        <h3>
          <i class="far fa-star" />
          Bookmarks
        </h3>
        {bookmarks.map(bookmark => (
          <ul key={bookmark.id}>
            <a href={bookmark.url}>
              <b>
                <li>{bookmark.title}</li>
              </b>
              <li>author: {bookmark.by}</li>
              <li>score: {bookmark.score}</li>
            </a>
            <button type="button" onClick={() => deleteBookmark(bookmark.id)}>
              <i class="fas fa-trash-alt" />
            </button>
          </ul>
        ))}
      </section>
    </div>
  )
}

export default Bookmarks

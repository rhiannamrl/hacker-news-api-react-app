import React from 'react'

const Bookmarks = props => {
  const { bookmarks } = props.location.state
  console.log(props.location.state)
  return (
    <div>
      <h1>Bookmarks</h1>
      {bookmarks.map(bookmark => (
        <ul key={bookmark.id}>
          <a href={bookmark.url}>
            <b>
              <li>{bookmark.title}</li>
            </b>
            <li>author: {bookmark.by}</li>
            <li>score: {bookmark.score}</li>
          </a>
          <button>
            <i class="fas fa-star" />
          </button>
        </ul>
      ))}
    </div>
  )
}

export default Bookmarks

import axios from 'axios'

export const GET_STORIES = 'GET_STORIES'

export const getCurrentStories = stories => ({
  type: GET_STORIES,
  stories
})

export const fetchStories = stories => async dispatch => {
  try {
    const { data } = await axios.get(
      ' https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty'
    )
    dispatch(getCurrentStories(data))
    return data
  } catch (err) {
    console.error(err)
  }
}

export const currentStories = (state = [], action) => {
  switch (action.type) {
    case GET_STORIES:
      return action.stories
    default:
      return state
  }
}

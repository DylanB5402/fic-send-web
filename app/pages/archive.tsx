import type { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'reactstrap'
import FicSendNavBar from '../components/FicSendNavBar'
import getAllStories from '../common/api/Story'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [stories, setStories] = useState<string[]>(() => [])

  useEffect(() => {
    const fetchStories = async () => {
      const allStories = await getAllStories()
      setStories(allStories);
    }

    fetchStories()
  })
  getAllStories();

  const storyList = stories.map((story, i) => <li key={`story{i}`}> <a href={story}> {story} </a> </li>)
  return (
    <>
      <FicSendNavBar />
      <Container>
        <h1> Fic Archive </h1>
        <ul>
          {storyList}
        </ul>
      </Container>
    </>
  )
}

export default Home

import { Route, Routes } from 'react-router-dom'
import './App.css'
import DirectedGraph from './graph/DirectedGraph'
import Graph from './graph/Graph'
import SubwayGraph from './graph/SubwayGraph'
import YoutubeSearch from './youtube/YoutubeSearch'
import MissionPage from './pages/MissionPage'
import YoutubePage from './pages/YoutubePage'
import MainPage from './pages/MainPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/youtube' element={<YoutubePage />} />
      <Route path='/mission' element={<MissionPage />} />
    </Routes>
  )
}

export default App

/**
 네트워크
 - 정보 공유 모임

 그래프 자료 구조
 - 각 노드가 하나 이상의 다른 노드와 연결되어있는 구조로 네트워크, 추천 시스템, 경로 탐색, 소셜 미디어 관계도 등을 표현할 때 사용
 - 연결이 자유롭고 반복될 수 있는 구조
 - 사람들 관계도, 지하철 노선도, 길 찾기 앱과 같은 구조
 - vis-network, d3.js : 시각화
 - graphlib, cytoscape.js : 그래프 연산 + UI

 - 그래프 방향 그래프/무방향그래프
 - 가중치 그래프/비가중치 그래프
 - 정점(node), 간선(edge)
 */
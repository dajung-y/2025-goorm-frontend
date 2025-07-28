import React from 'react'
import members from './data/members.js';
import TeamCard from './components/TeamCard/TeamCard.jsx';
import ClsxTest1 from './components/clsxTest/clsxTest1.jsx';
import AlertCardIndex from './components/alert/AlertCardIndex.jsx';
import Tab from './components/tab/Tab.jsx';

export default function App() {
  return (
    <div>
      <AlertCardIndex />
      <Tab />
    </div>
  )
}

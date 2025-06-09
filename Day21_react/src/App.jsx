import './App.css'
import Card from './components/Card'

function App() {
  const profiles = [
    {
      name: 'James Kim',
      role: '프론트엔드 개발자',
      imgUrl: 'https://i.pinimg.com/736x/d4/fd/2c/d4fd2cb5e136905447669494f766554d.jpg',
      isNew: true,
    },
    {
      name: 'Anna Young',
      role: '프론트엔드 개발자',
      imgUrl: 'https://i.pinimg.com/736x/27/a8/0d/27a80d7c368a7fbc58bc3eafba2207a9.jpg',
      isNew: false,
    },
    {
      name: 'Bob Yu',
      role: '프론트엔드 개발자',
      imgUrl: 'https://i.pinimg.com/736x/7f/53/9b/7f539b0c0a6b690240a245ef9511636a.jpg',
      isNew: false,
    }
  ];

  return (
    <>
      {profiles.map((profile, index) => (
        <Card profile={profile} key={index} isNew={profile.isNew} />
      ))}
    </>
  )
}

export default App

import './App.css'
import Header from './Header'
import Footer from './Footer'
import Card from './Card';
import Icon from './Icon';
import CovertLetter from './CovertLetter';
function App() {
  const projectList = [
    { name: 'Sword of Obsessia', desc: 'In Sword of Obsessia, you embark on an epic journey as a knight with a cursed sword. Traverse through the dungeon, confront your fears and rise!', imagePath: 'Images/project1Image.png' },
    { name: 'Wordle Foursome', desc: 'leo', imagePath: 'image.jpg' },
    { name: 'Wordle Foursome', desc: 'leo', imagePath: 'image.jpg' },
    { name: 'Wordle Foursome', desc: 'leo', imagePath: 'image.jpg' },
    { name: 'Wordle Foursome', desc: 'leo', imagePath: 'image.jpg' }
  ]
  const iconSocialMediaList = [
    { name: "instagramIcon", imagePath: "Images/instagram-icon.png", link: "https://www.instagram.com/leonaart_/" },
    { name: "githubIcon", imagePath: "Images/github-Icon.png", link: "https://github.com/leotagliati" },
    { name: "linkdinIcon", imagePath: "Images/linkdin-icon.png", link: "https://www.linkedin.com/in/leotagliati/" }
  ]

  const projectsMap = projectList.map(x => <Card name={x.name} desc={x.desc} img={x.imagePath}></Card>)

  const socialIconsMap = iconSocialMediaList.map(x => <Icon id={x.name} imagePath={x.imagePath} link={x.link}></Icon>)
  return (
    <>
      <div className='head'>
        <div className='socialIcons'>
          {socialIconsMap}
        </div>
        <Header id="MainTitle"></Header>
      </div>

      <div className='covertLetter'>
        <CovertLetter></CovertLetter>
      </div>

      <h1>Projects</h1>
      <div className='gallery'>
        {projectsMap}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App

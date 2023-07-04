
import Hero from './components/Content/Hero'
import Story from './components/Content/Story'
import Gameplay from './components/Content/Gameplay'
import Concept from './components/Content/Concept/Concept'
import Development from './components/Content/Development'
import Rewards from './components/Content/Rewards'
import Achievement from './components/Content/Achievement'
import Team from './components/Content/Team'
import Intro from './components/Content/Intro'

const baseURL = '/donjonDraft';

const IntroContent = {
  title: 'Donjon Fauna',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}

const storyContent = {
  title: 'Background Story',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  storySrc: `${baseURL}/Placeholder.png`,
}

const GameplayContent = {
  title: 'Gameplay',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  carousel: [
    "https://drive.google.com/uc?export=view&id=1qCPR5lL8_GdODrZgYm14k6aUdFDqME80",
    "https://drive.google.com/uc?export=view&id=1Ab6Gj3-TEUwsZ6qO1R98um2VMCh0-QgN",
    `${baseURL}Placeholder.png`,
    `${baseURL}Placeholder.png`,
  ]
}

const ConceptContent = {
  title: 'Concept',
  Creatures: {
    header: 'Creatures',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    contentSrc: `${baseURL}Placeholder.png`,
  },
  Characters: {
    header: 'Characters',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    contentSrc: `${baseURL}Placeholder.png`,
    carousel: [
      `${baseURL}Placeholder.png`,
      `${baseURL}Placeholder.png`,
      `${baseURL}Placeholder.png`,
      `${baseURL}Placeholder.png`,
    ],
  }
}


export default function Home() {
  return (
      <div className='min-w-[390px] space-y-1 snap-y snap-mandatory'>

        <div id='1' className=''>
          <Hero/>
        </div>

        <div id='2' className=''>
          <Intro
            title={IntroContent.title}
            content={IntroContent.content}
          />
        </div>

        <div id='3' className=''>
          <Story
            title={storyContent.title}
            content={storyContent.content}
            storySrc={storyContent.storySrc}
          />
        </div>

        <div id='4' className=''>
          <Gameplay 
            title={GameplayContent.title}  
            content={GameplayContent.content}
            slidesSrc={GameplayContent.carousel}
          />
        </div>

        <div id='5' className=''>
          <Concept
            title={ConceptContent.title}
            Creatures_head={ConceptContent.Creatures.header}
            Creatures_cont={ConceptContent.Creatures.content} 
            Creatures_contSrc={ConceptContent.Creatures.contentSrc}
            Char_head={ConceptContent.Characters.header}
            Char_cont={ConceptContent.Characters.content}
            Char_contSrc={ConceptContent.Characters.contentSrc}
            Char_slidesSrc={ConceptContent.Characters.carousel}
          />
        </div>

        <div id='6' className=''>
          <Development/>
        </div>

        <div id='7' className=''>
          <Rewards/>
        </div>

        <div id='8' className=''>
          <Achievement/>
        </div>

        <div id='9' className=''>
          <Team/>
        </div>

      </div>
  )
}

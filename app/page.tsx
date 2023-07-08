
import Hero from './components/Content/Hero'
import Story from './components/Content/Story'
import Gameplay from './components/Content/Gameplay'
import Concept from './components/Content/Concept/Concept'
import Development from './components/Content/Development'
import Rewards from './components/Content/Rewards'
import Achievement from './components/Content/Achievement'
import Team from './components/Content/Team'
import Intro from './components/Content/Intro'
import { IntroContent, storyContent, GameplayContent, ConceptContent, AchievementContent, TheTeamContent, HeroContent } from './actions/getData'

export default function Home() {
  return (
      <div className='min-w-[390px] snap-y snap-mandatory'>
          <Hero
            bgSrc={HeroContent.bgSrc}
            LogoSrc={HeroContent.logoSrc}
          />
          <Intro
            title={IntroContent.title}
            content={IntroContent.content}
            bgSrc={IntroContent.bgSrc}
          />
          <Story
            title={storyContent.title}
            content={storyContent.content}
            storySrc={storyContent.storySrc}
          />
          <Gameplay 
            title={GameplayContent.title}  
            content={GameplayContent.content}
            slidesSrc={GameplayContent.carousel}
          />
          <Concept
            title={ConceptContent.title}
            bgSrc={ConceptContent.bgSrc}
            Creatures_head={ConceptContent.Creatures.header}
            Creatures_cont={ConceptContent.Creatures.content} 
            Creatures_contSrc={ConceptContent.Creatures.contentSrc}
            Char_head={ConceptContent.Characters.header}
            Char_cont={ConceptContent.Characters.content}
            Char_contSrc={ConceptContent.Characters.contentSrc}
            Char_slidesSrc={ConceptContent.Characters.carousel}
          />
          {/* <Development 
            title='Development'
          />
          <Rewards
            title='Rewards'
          /> */}
          <Achievement 
            title={AchievementContent.title}
            content={AchievementContent.content}
            contentSrc={AchievementContent.storySrc}
          />
          <Team 
            title={TheTeamContent.title}
            core={TheTeamContent.core}
            advisor={TheTeamContent.advisor}
          />
      </div>
  )
}

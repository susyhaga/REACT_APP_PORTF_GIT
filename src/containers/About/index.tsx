import Titulo from '../../components/Titulo'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'

const About = () => (
  <section>
    <Titulo fontSize={16}>About me</Titulo>
    <Paragraph propType="primary">
      With over 10 years of experience as a Marketing Professional, I have
      strong communication, creativity, problem-solving, teamwork, leadership,
      and project coordination skills. After realizing the importance of keeping
      up with technological changes, I specialized in web development while
      living in Berlin. I am currently pursuing a Front-End Engineering course
      at EBAC – British School of Creative Arts and Technology, with an expected
      completion date at the end of 2024.
    </Paragraph>
    <GithubSection>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=susyhaga&theme=vue-dark&show_icons=true&hide_border=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=susyhaga&theme=vue-dark&show_icons=true&hide_border=true&layout=compact"
      />
    </GithubSection>
  </section>
)
export default About

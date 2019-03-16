import Paragraph from '../../components/paragraph'
import Page from '../../components/page'
import Pills from '../../components/pills'

const buzzwords = `JavaScript, Node.js, Express.js, Restify, Meteor, D3.js,
 React, React Native, Redux, AngularJS, Angular, Ionic, Cordova, Bootstrap,
 SemanticUI, Foundation, Tachyons, Lodash,Git, Vim, Python, Ruby, Ruby on Rails,
 Java, Objective C, Swift, AWS, Google Cloud, Firebase, AGILE`

const About = () => (
	<Page title="Dragos Horodnic"
		subtitle="Passionate Web and Cross-Platform Mobile Developer">
		<Paragraph>
			I build rich, UX focused products with JavaScript and Node.js, using tests, linters, CI/CD and modern tools.
		</Paragraph>

		<h2 class="fw5 f4 f2-l">Buzzwords</h2>
		<Pills values={buzzwords}/>
	</Page>
)

export default About

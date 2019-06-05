import Page from '../../components/page'
import Paragraph from '../../components/paragraph'
import Form from '../../components/form'
import mailer from '../../api/mailer'

const resumeForm = [
	{
		element: 'input',
		placeholder: "Your Email Address",
		type: "email",
		name: "email",
		id: "email",
		required: true,
		validators: ['email']
	},
	{
		element: 'textarea',
		rows: "10",
		cols: "80",
		placeholder: "Company details, requirements, day rate budget etc.",
		style: "resize: none",
		id: "text",
		required: true
	},
]

const Resume = () => (
	<Page title="Resume">
		<Paragraph>
			Developing web and cross-platform mobile apps with passion for over 7 years, varying from small startups to very large enterprise codebases, primarily in the education and health industries. I am open to remote B2B contracts. My complete resume is only available to those that provide their e-mail address and the necessary project details below:
		</Paragraph>
		<Form fields={resumeForm}
			onSubmit={mailer({ subject: 'Resume Request' })} />
	</Page>
);

export default Resume;

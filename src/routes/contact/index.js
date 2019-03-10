import Page from '../../components/page'
import Paragraph from '../../components/paragraph'
import Form from '../../components/form'
import mailer from '../../api/mailer'

const contactForm = [
	{
		element: 'input',
		placeholder: "Your Email Address",
		type: "email",
		name: "email",
		// label: "Email",
		id: "email",
		required: true,
		validators: ['email']
	},
	{
		element: 'textarea',
		rows: "10",
		cols: "80",
		placeholder: "Your Message",
		style: "resize: none",
		id: "text",
		required: true
	},
]

const Contact = () => (
	<Page title="Contact">
		<Paragraph>
			If you want to reach out to me or you have a project in mind, just
			type here:
		</Paragraph>
		<Form fields={contactForm}
			onSubmit={mailer({ subject: 'Contact' })} />
	</Page>
)

export default Contact

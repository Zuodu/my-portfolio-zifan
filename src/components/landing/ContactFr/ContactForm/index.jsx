import React from 'react'
import { Form, withFormik, FastField, ErrorMessage } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import { Button } from 'rendition'
import { Input } from 'Common'
import { recaptcha_key } from 'Data'
import { Error, Center, InputField } from './styles'

const ContactForm = ({
											 setFieldValue,
											 isSubmitting,
											 values,
											 errors,
											 touched,
										 }) => (
	<Form
		name="zifan-web"
		method="post"
		data-netlify="true"
		data-netlify-recaptcha="true"
		data-netlify-honeypot="bot-field"
	>
		<InputField>
			<Input
				as={FastField}
				type="text"
				name="name"
				component="input"
				aria-label="name"
				placeholder="Nom complet*"
				error={touched.name && errors.name}
			/>
			<ErrorMessage component={Error} name="name" />
		</InputField>
		<InputField>
			<Input
				id="email"
				aria-label="email"
				component="input"
				as={FastField}
				type="email"
				name="email"
				placeholder="Email*"
				error={touched.email && errors.email}
			/>
			<ErrorMessage component={Error} name="email" />
		</InputField>
		<InputField>
			<Input
				as={FastField}
				component="textarea"
				aria-label="message"
				id="message"
				rows="8"
				type="text"
				name="message"
				placeholder="Message*"
				error={touched.message && errors.message}
			/>
			<ErrorMessage component={Error} name="message" />
		</InputField>
		{values.name && values.email && values.message && (
			<InputField>
				<FastField
					component={Recaptcha}
					sitekey={recaptcha_key}
					name="recaptcha"
					onChange={value => setFieldValue('recaptcha', value)}
				/>
				<ErrorMessage component={Error} name="recaptcha" />
			</InputField>
		)}
		{values.success && (
			<InputField>
				<Center>
					<h4>
						Votre message a été correctement envoyé, je vous répondrai dès que possible !
					</h4>
				</Center>
			</InputField>
		)}
		<Center>
			<Button info type="submit" disabled={isSubmitting}>
				Envoyer
			</Button>
		</Center>
	</Form>
)

export default withFormik({
	mapPropsToValues: () => ({
		name: '',
		email: '',
		message: '',
		recaptcha: '',
		success: false,
	}),
	validationSchema: () =>
		Yup.object().shape({
			name: Yup.string().required('Le nom est obligatoire'),
			email: Yup.string()
				.email('L\'adresse n\'est pas valide')
				.required('L\'adresse est obligatoire'),
			message: Yup.string().required('Le message est obligatoire'),
			recaptcha: Yup.string().required('Ouste les robots !'),
		}),
	handleSubmit: async (
		{ name, email, message, recaptcha },
		{ setSubmitting, resetForm, setFieldValue },
	) => {
		try {
			const encode = data => {
				return Object.keys(data)
					.map(
						key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
					)
					.join('&')
			}
			await fetch('/?no-cache=1', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: encode({
					'form-name': 'zifan-web',
					name,
					email,
					message,
					'g-recaptcha-response': recaptcha,
				}),
			})
			await setSubmitting(false)
			await setFieldValue('success', true)
			setTimeout(() => resetForm(), 2000)
		} catch (err) {
			setSubmitting(false)
			setFieldValue('success', false)
			alert('Quelque chose s\'est cassé, veuillez réessayer !') // eslint-disable-line
		}
	},
})(ContactForm)

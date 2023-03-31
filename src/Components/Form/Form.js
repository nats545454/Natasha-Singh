import React, { useState } from 'react';

import {
	FormColumn,
	FormWrapper,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from './FormStyles';
import validateForm from './validateForm';

const Form = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [company, setCompany] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, phone, company});

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setPhone('');
		setCompany('');
		setError(null);
		setSuccess('Application was submitted!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Full Name', value: name, onChange: (e) => setName(e.target.value), type: 'text' },
		{ label: 'Email Address', value: email, onChange: (e) => setEmail(e.target.value), type: 'email' },

		{
			label: 'Phone Number',
			value: phone,
			onChange: (e) => setPhone(e.target.value),
			type: 'tel',
		},
		{
			label: 'Company Name',
			value: company,
			onChange: (e) => setCompany(e.target.value),
			type: 'text',
		},
	];
	return (
		<FormSection>
			<div >
				<FormRow>
					<FormColumn small>
						<FormTitle>Let's get you started</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<input 
										type={el.type}
										placeholder={`Enter ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
										style={{padding: "10px", marginTop: "10px"}}
									/>
								</FormInputRow>
							))}

							<FormButton type="submit">Submit</FormButton>
						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
					</FormColumn>
				</FormRow>
			</div>
		</FormSection>
	);
};

export default Form;
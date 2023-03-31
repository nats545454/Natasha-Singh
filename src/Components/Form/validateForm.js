export default function validateForm({ name, email, phone, company }) {
	if (!name.trim()) {
		return 'Username required';
	}
	// else if (!/^[A-Za-z]+/.test(name.trim())) {
	//   errors.name = 'Enter a valid name';
	// }

	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!email) {
		return 'Email required';
	} else if (regex.test(email.toLocalLowerCase)) {
		return 'Email address is invalid';
	}

	const regex2 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (!phone) {
		return 'Phone Number is required';
	} else if (phone.length < 10) {
		return 'Phone Number needs to be 10 characters or more';
	}
	else if (!regex2.test(phone)){
		return 'Phone Number not Valid';
	}

	if (!company.trim()) {
		return 'Company Name required';
	}

	return null;
}
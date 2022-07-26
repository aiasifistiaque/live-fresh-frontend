import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import {
	useLoginMutation,
	useRegisterMutation,
} from '../../../store/services/apiService';
import Div from '../../containers/div/Div';
import Disclaimer from '../../Text/disclaimer/Disclaimer';
import BlackButton from '../../util/black-button/BlackButton';
import Error from '../../util/Error/Error';
import Input from '../../util/input/Input';
import Red from '../../util/text/Red';
import { ChangePage } from './Styles';
import { toast, ToastContainer } from 'react-toastify';
import { loginAction } from '../../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

const LoginModal = ({ show, hide }) => {
	const [option, setOption] = useState('login');
	const setLogin = () => setOption('login');
	const setSignup = () => setOption('signup');

	return (
		<Modal
			show={show}
			onHide={() => {
				hide();
				setLogin();
			}}
			centered>
			<Modal.Header closeButton>
				<Modal.Title>
					<h5>
						{option === 'login' ? 'Login' : 'Sign Up'} to <Red>Live Fresh</Red>
					</h5>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{option === 'login' ? (
					<Login onClick={setSignup} hide={hide} />
				) : (
					<Signup onClick={setLogin} hide={hide} />
				)}
			</Modal.Body>
		</Modal>
	);
};

const Login = ({ onClick, hide }) => {
	const [phone, setPhone] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();

	const [login, result] = useLoginMutation();

	const loginPressed = e => {
		e.preventDefault();
		const submitData = {
			phone,
			password,
		};
		login(submitData);
	};

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(loginAction(result.data.token));
			toast('Signed In Successfully');
			hide();
			console.log(result);
		}
	}, [result]);

	return (
		<Div>
			<form onSubmit={loginPressed}>
				<Input
					label='Phone Number'
					value={phone}
					onChange={e => setPhone(e)}
					placeholder='eg. 01828xxxxxx'
					required
					type='Number'
				/>
				<Input
					label='Password'
					password
					placeholder='***********'
					required
					value={password}
					onChange={e => setPassword(e)}
				/>
				<Error isError={result.isError}>{result.error}</Error>
				<BlackButton submit fill icon='arrow-white' loading={result.isLoading}>
					Login
				</BlackButton>
			</form>
			<Disclaimer>
				By proceeding, you agree to have read and accept our{' '}
				<Link href='/terms'>
					<a>Terms of Use</a>
				</Link>{' '}
				and{' '}
				<Link href='/terms'>
					<a> Privacy Policy</a>
				</Link>
			</Disclaimer>
			<ChangePage href='Sign Up' onClick={onClick}>
				Do not have an account?
			</ChangePage>
		</Div>
	);
};

const Signup = ({ onClick }) => {
	const [phone, setPhone] = useState();
	const [password, setPassword] = useState();
	const [confirm, setConfirm] = useState();

	const [login, result] = useRegisterMutation();

	const dispatch = useDispatch();

	const loginPressed = e => {
		e.preventDefault();
		const submitData = {
			phone,
			password,
			confirm,
		};
		login(submitData);
	};

	useEffect(() => {
		if (result.isSuccess) {
			dispatch(loginAction(result.data.token));
			toast('Signed Up Successfully');
		}
	}, [result]);

	return (
		<Div>
			<form onSubmit={loginPressed}>
				<Input
					label='Phone Number'
					value={phone}
					onChange={e => setPhone(e)}
					placeholder='eg. 01828xxxxxx'
					required
					type='Number'
				/>
				<Input
					label='Password'
					password
					placeholder='***********'
					required
					value={password}
					onChange={e => setPassword(e)}
				/>
				<Input
					label='Confirm Password'
					password
					placeholder='***********'
					required
					value={confirm}
					onChange={e => setConfirm(e)}
				/>
				<Error isError={result.isError}>{result.error}</Error>

				<BlackButton fill submit loading={result.isLoading} icon='arrow-white'>
					Sign Up
				</BlackButton>
			</form>
			<Disclaimer>
				By proceeding, you agree to have read and accept our{' '}
				<Link href='/terms'>
					<a>Terms of Use</a>
				</Link>{' '}
				and{' '}
				<Link href='/terms'>
					<a> Privacy Policy</a>
				</Link>
			</Disclaimer>
			<ChangePage href='Login' onClick={onClick}>
				Already Have an account?
			</ChangePage>
		</Div>
	);
};

export default LoginModal;

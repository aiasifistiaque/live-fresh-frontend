import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from '../store';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/styles.css';

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
}

export default MyApp;

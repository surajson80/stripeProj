import { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div className='App'>
			<h1>Payment Method</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					{/* <img src={Axe} alt='Payment' /> */}
					<button onClick={() => setShowItem(true)}>Purchase</button>
				</>
			)}
		</div>
	);
}

export default App;
import { useState, useEffect, useRef } from 'react';

let ORIGINAL_COUNT = 60;
let timer;

export default function CountDownTimer() {
	const [count, setCount] = useState(ORIGINAL_COUNT);
	const [isCounting, setIsCounting] = useState(false);
	// better to use ref since module-scoped varialbe only works if there's only one instance
	// const timer = useRef(null);
	// clearInterval(timer.current)

	useEffect(() => {
		if (!isCounting) return;

		timer = setInterval(() => {
			setCount(prev => prev - 1);
		}, 1000);

		return () => clearInterval(timer);
	}, [isCounting]);

	const handleStart = () => {
		setIsCounting(true);
	};

	return (
		<>
			<div>{count}</div>
			<button onClick={handleStart}>Start</button>
			<button
				onClick={() => {
					clearInterval(timer);
					setIsCounting(false);
				}}
			>
				Pause
			</button>
			<button
				onClick={() => {
					clearInterval(timer);
					setCount(ORIGINAL_COUNT);
					setIsCounting(false);
				}}
			>
				Reset
			</button>
		</>
	);
}

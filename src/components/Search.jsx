import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Search = () => {
	const [search, setSearch] = useState('');
	const [result, setResult] = useState({});

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	// Create a function to submit the search
	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(search);
		const headers = {
			'X-RapidAPI-Key':
				'58e89cca31msh32a964d414c4115p1d8973jsnecf2d4cdd377',
			'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
		};
		const response = await axios.get(
			'https://shazam.p.rapidapi.com/search',
			{
				params: {
					term: `${search}`,
					locale: 'en-US',
					offset: '0',
					limit: '5',
				},
				headers,
			}
		);

		const data = response.data;

		console.log(data);
	};

	return (
		<div style={{ display: 'flex' }}>
			<div className='ui input focus'>
				<input
					onChange={handleChange}
					type='text'
					placeholder='Search...'
				/>
			</div>
			<button className='ui icon button' onClick={handleSubmit}>
				Search
			</button>
		</div>
	);
}

export default Search
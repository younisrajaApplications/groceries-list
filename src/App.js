import React, { useState } from 'react';
import AddItem from './AddItem';
import Header from './Header';
import Content from './content';
import './output.css';
import Footer from './Footer';
import Search from './Search';

function App() {

    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
	const [search, setSearch] = useState('');

	const setAndSaveItems = (newItemsList) => {
		setItems(newItemsList);
		localStorage.setItem('items', JSON.stringify(newItemsList));
	}

	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = {id, checked: false, item}
		const listItems = [...items, myNewItem]; // creates a list with the original list at the start and copies the new item after that
		setAndSaveItems(listItems);
	}

 	const handleCheck = (id) => {
    	const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
    	setAndSaveItems(listItems);
  	}

  	const handleDelete = (id) => {
      	const listItems = items.filter((item) => item.id !== id);
      	if (listItems.length === 0) {
			setItems(listItems)
          	localStorage.removeItem('items');
      	} else {
			setAndSaveItems(listItems);
      	}
  	}

	const [newItem, setNewItem] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!newItem) return;
		addItem(newItem);
		console.log('s');
		setNewItem('');
	}

	return (
		<div className="App flex justify-between flex-col h-full">
			<div>
			<Header title='Groceries List' />
			<AddItem newItem={newItem}
				setNewItem={setNewItem}
				handleSubmmit={handleSubmit}
			/>
			<Search search={search} setSearch={setSearch}/>
			<Content items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
				handleCheck = {handleCheck}
				handleDelete = {handleDelete}
			/>
			</div>
			<div>
			<Footer length = {items.length}/>
			</div>
		</div>
	);
}

export default App;

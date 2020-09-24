import { useState, useEffect } from 'react';
import axios from 'axios';


const useToDo = (url) => {

  const [list, setList] = useState([]);

  const addItem = (item) => {
  item.difficulty = parseInt(item.difficulty) || 1;
  item.complete = false;
  const response =  axios.post(url, item)
  setList([...list, response.data]);
};


const deleteItem = async (id) => {
  await axios.delete(`${url}/${id}}`)
}

const toggleComplete = async (id) => {

  let item = await axios.get(`${url}/${id}`)
  item = item.data;
  if (item._id) {
    item.complete = !item.complete;
    let newList = list.map(listItem => listItem._id === item._id ? item : listItem);
    axios.patch(`${url}/${id}`, item);
  }

};

useEffect(() => {

  async function fetchData() {
    // setIsLoading(true);
    const response = await axios.get('http://localhost:3001/api/v1/todos');
    const results = response.data.results;
    setList(results);
    // setIsLoading(false);
  }

  fetchData();

}, []);

  return [
    list,
    addItem,
    deleteItem,
    toggleComplete,
    ];
}

export default useToDo;
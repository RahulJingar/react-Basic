import React, { useEffect, useState } from 'react';
import Gif from '../components/Gif';
import axios from 'axios';

const Fetch = () => {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const [cartItems, setCartItems] = useState([]); 

  const axiosData = async () => {
    const fetchData = await axios.get(`https://fakestoreapi.com/products`);
    setUser(fetchData.data);
    setData(fetchData.data);
  };

  const filterData = data.filter((item) => {
    const fullData = `${item.id} ${item.title}`;
    return fullData.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    axiosData();
  }, []);

  const electronicHandle = () => setData(user.filter((item) => item.category === 'electronics'));
  const mensHandle = () => setData(user.filter((item) => item.category === "men's clothing"));
  const womensHandle = () => setData(user.filter((item) => item.category === "women's clothing"));
  const jweleryHandle = () => setData(user.filter((item) => item.category === 'jewelery'));

  const searchHandle = (e) => setSearch(e.target.value);

  const ascendingHandle = () => setData([...filterData].sort((a, b) => a.id - b.id));
  const descendingHandle = () => setData([...filterData].sort((a, b) => b.id - a.id));

  const selectHandle = (e) => {
    const value = e.target.value;
    setSelect(value);
    let sorted = [...filterData];
    if (value === 'lowtoHigh') sorted.sort((a, b) => a.price - b.price);
    else if (value === 'hightoLow') sorted.sort((a, b) => b.price - a.price);
    else if (value === 'atoz') sorted.sort((a, b) => a.title.localeCompare(b.title));
    else if (value === 'ztoa') sorted.sort((a, b) => b.title.localeCompare(a.title));
    setData(sorted);
  };


  const toggleCart = (product) => {
    const isInCart = cartItems.find((item) => item.id === product.id);
    if (isInCart) {
      setCartItems(cartItems.filter((item) => item.id !== product.id)); 
    } else {
      setCartItems([...cartItems, product]); 
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-700 underline decoration-green-500">
          Fetch API Store
        </h1>
      </div>


      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow" onClick={ascendingHandle}>Ascending</button>
        <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow" onClick={descendingHandle}>Descending</button>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow" onClick={electronicHandle}>Electronics</button>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow" onClick={mensHandle}>Mens</button>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow" onClick={womensHandle}>Womens</button>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow" onClick={jweleryHandle}>Jewelery</button>
      </div>


      <div className="flex justify-center mb-6">
        <select
          className="border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-green-400 outline-none"
          value={select}
          onChange={selectHandle}
        >
          <option>Sort by</option>
          <option value="lowtoHigh">Low to High</option>
          <option value="hightoLow">High to Low</option>
          <option value="atoz">A to Z</option>
          <option value="ztoa">Z to A</option>
        </select>
      </div>


      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-lg p-2 w-1/2 shadow-sm focus:ring-2 focus:ring-green-400 outline-none"
          value={search}
          onChange={searchHandle}
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterData.length > 0 ? (
          filterData.map((item) => {
            const isInCart = cartItems.find((cart) => cart.id === item.id);
            return (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition duration-200">
                <img src={item.image} alt={item.title} className="h-48 w-full object-contain mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                <p className="text-green-600 font-bold mb-1">${item.price}</p>
                <p className="text-sm text-gray-500 capitalize mb-1">{item.category}</p>
                <p className="text-yellow-500 text-sm">⭐ {item.rating.rate} ({item.rating.count} reviews)</p>
                <button
                  onClick={() => toggleCart(item)}
                  className={`mt-2 px-4 py-2 rounded-lg text-white ${isInCart ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                  {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                </button>
              </div>
            );
          })
        ) : (
          <div className="col-span-full flex justify-center">
            <Gif />
          </div>
        )}
      </div>

      <div className="fixed bottom-5 right-5 bg-yellow-400 p-3 rounded-full shadow-lg font-bold">
        🛒 {cartItems.length}
      </div>
    </div>
  );
};

export default Fetch;

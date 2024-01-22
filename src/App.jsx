import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NewsCard from './componets/newsCard';
import { Link } from 'react-router-dom';
import SearchBar from './componets/SearchBar';

function App() {
  const [news, setNews] = useState([])
  const [theme, setTheme] = useState('light');


  const newsList = news.map(newsItem =>
    <Link to={"/articles/" + news.indexOf(newsItem)} state={{ data: newsItem }}>
      <NewsCard title={newsItem.title} image={newsItem.urlToImage} author={newsItem.author} data={newsItem.publishedAt} />
    </Link>

  );

  useEffect(() => {
    var themeValue = localStorage.getItem("theme");
    if (themeValue !== null) {
      setTheme(themeValue);
    }
    getTopNews();

  }, []);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);


  async function getTopNews() {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7eb2e28bad0c474ea2a9e8897426bc21');
      console.log(response)
      setNews(response["data"]["articles"]);
    } catch (error) {
      console.error(error);
    }
  }
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem("theme", "dark");
    } else {
      setTheme('light');
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div className='header'>

        <h1>News App</h1>
        {<button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>}
      </div>
      <div className={`App ${theme}`}>
        <SearchBar onChange={setNews} />
        {newsList}</div>
    </>
  )
}

export default App





import { useEffect, useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';

function Article() {

    let { state } = useLocation();
    const dateToFormat = new Date(state["data"]["publishedAt"])
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        var themeValue = localStorage.getItem("theme");
        if (themeValue !== null) {
          setTheme(themeValue);
        }
    }, []);

    return (
        <>
            {state["data"]["urlToImage"] == null ? null :
                <div className='headerDetail'>
                    <img src={state["data"]["urlToImage"]} />
                </div>}

            <div className={`articleData ${theme}`}>
                <div className='topContent'>
                    <div className='spacer'></div>
                    <h3>{state["data"]["title"]}</h3>
                    <div className='spacer'></div>
                    <div className='publicationInfo'>
                        <p>{state["data"]["author"]}</p>
                        <p>-</p>
                        <p>{dateToFormat.toLocaleDateString()}</p>
                        <div className='spacer'></div>
                    </div>
                    <div className='divider'></div>
                    <div className='articleDesc'>{state["data"]["content"]}</div>

                </div>
                <div className='bottomContent'>
                    <a href={state["data"]["url"]}><button>Articolo completo</button></a>

                </div>
            </div>
        </>
    )
}

export default Article

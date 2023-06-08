import './HomePage.css';

export default function HomePage() {
    return (
        <div id='homepage-container'>
            <div className="icon-container">
                    <div class="box-1">
                        <div class="mushroom-position">
                            <div class="mushroom"></div>
                        </div>
                    </div>
                    <div class="box-2">
                        <div class="fire-flower-position">
                            <div class="fire-flower"></div>
                        </div>
                    </div>
                    <div class="box-3">
                        <div class="question-block-position">
                            <div class="question-block"></div>
                        </div>
                    </div>
                    <div class="box-4">
                        <div class="star-position">
                            <div class="star"></div>
                        </div>
                    </div>
            </div>
            <div className='detail-container p-5'>
                <h1 className='display-3'>Welcome to LevelUp Legends</h1>
                <p className=''>
                Unleash your gaming potential and ascend to greatness. <br/> Explore our vast library, search for games with ease, including the top games right now. <br/> Join our legendary community, forge friendships, and embark on epic quests together. <br/> LevelUp Legends: Where legends are born and gaming reaches new heights!
                </p>
                <hr className='my-4' />
                <p>This is a videogame search application with session authentication, built with React and Django</p>
            </div>
        </div>
    )
}
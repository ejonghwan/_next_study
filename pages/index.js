import React from 'react';

const Home = () => {

    const dummy = {
    isLogged: true,
    user: 'ejonghwan',
    mainPosts: [
        { 
            user: {
                id:1,
                nickName: 'haha',
            },
            img: 'https://placeimg.com/320/100/any',
            content: '첫번째 게시글',
        },
    ],
    imagesPath: ['asdasd', 'asdasd','123123'],
    
}

    return (
        <div>
            { dummy.isLogged ? <div>{dummy.user}님이 로그인 하셨습니다</div> : <div>{dummy.user} 로그아웃 하셨습니다</div> }
            { dummy.imagesPath.map(v => {
                return (
                <div><img src={'https://localhost3030' + v} />{v}</div>
                )
            })}
            
                    
            <div className="posts-cards">
                <div><a href="#none">retweet</a></div>
                <div><a href="#none">heart</a></div>
                <div><a href="#none">message</a></div>
                <div><a href="#none">ellipsis</a></div>
            </div>
        </div>
    )
}

export default Home;
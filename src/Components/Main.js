import React, { useState, useEffect } from 'react';
import Header from './Header/Header'
import Body from './Body/Body';

const Main = () => {

  const [signedIn, setSignedIn] = useState(null);
  const [displayCategories, setDisplayCategories] = useState(null);

  const handleSignIn = (user) => setSignedIn(user);

  const handleCategories = (category) => {
    switch(category){
      case "Sleepy Cats" : setDisplayCategories('sleepycats'); break;
      case "Chonky Cats" : setDisplayCategories('chonkycats'); break;
      case "Hungry Cats" : setDisplayCategories('hungrycats'); break;
    };
  };

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('user');
    const timeNow = new Date().getTime();
    if(loggedInUser){
      const foundUser = JSON.parse(loggedInUser);
      if(foundUser.stsTokenManager.expirationTime > timeNow ){
        setSignedIn(foundUser);
      } else {
        setSignedIn(null)
        localStorage.clear()
      }
    }
  }, [])

  return (
    <div>
        <Header signedIn={signedIn} handleSignIn={handleSignIn} selectCategory={handleCategories}/>
        <Body signedIn={signedIn} displayCategory={displayCategories} />
    </div>
  )
}

export default Main;
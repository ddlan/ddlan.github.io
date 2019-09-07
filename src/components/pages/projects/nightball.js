import React, { Component } from 'react';
import ProjectTemplate from '../../projectTemplate';

class NightBall extends Component {
  render() {
    return (
      <div>
        <ProjectTemplate title='NightBall' image='nightcover.png'/>

        <div className="container-fluid project">
          <p>
          NightBall is a mobile game I created with a fellow developer for iOS and Android. Gameplay involves tapping on the screen to rotate the "NightBall" in the middle of the screen to match the colour of the ball to the colour of stars that fly onto the screen. The iOS version supports multiple game modes, Game Centre integration, and in-app purchases.
          </p>
          <br />
          <p>
          NightBall iOS was built from the ground up using Swift, SpriteKit, and StoreKit. NightBall leverages SpriteKit for the game engine and uses StoreKit to support in-app purchases to unlock the new game mode faster. Game Centre allows users to compare their score on a global and local leaderboard. NightBall Android was built using the GameMaker Studio engine, and uses GameMaker Studio's own native programming language.
          </p>
          <br />
          <p>
          NightBall was my first major project outside of school, and so I learned a great deal working on NightBall with a partner. My main takeaways from working on this game was the importance of dutiful source control and good documentation. We occasionally found ourselves in a situtation where both of us would concurrently work on the same section of code, and thus would end up with merge conflicts and no shortage of headaches in moving forward with both of our changes. Through the use of open communication and branches, we were able to consolidate changes that both of us made without running into merge conflicts. Clear documentation was another important part of NightBall. Because we decided to update NightBall to support a new game mode and other features, we had to revisit code that we had not touched in several months. It became clear that parts of the code that were more complex or less intuitive were much easier to revisit when they had comments clarifying their implementation or usage. Thus, part of updating NightBall involved combing through the code and adding helpful comments when needed so we could work on NightBall later if we so choosed without too much hassle.
          </p>
        </div>
      </div>
    );
  }
}

export default NightBall;

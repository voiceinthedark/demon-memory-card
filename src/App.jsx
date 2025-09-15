import { useEffect, useState } from 'react'
import './App.css'
import { useImmer } from 'use-immer'
import GameBoard from './components/game/GameBoard';
import Shuffler from './components/utils/shuffler';
import MainMenu from './components/menu/MainMenu';
import DifficultyMenu from './components/menu/DifficultyMenu';
import WinScreen from './components/game/WinScreen'
import LoseScreen from './components/game/LoseScreen'
import Modal from './components/menu/Modal';
import BackgroundVideo from './components/utils/BackgroundVideo';

const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * @typedef {object} StructuredCharacter
 * @property {number} id
 * @property {string} source
 * @property {string} name
 * @property {string} name_kanji
 * @property {string} about
 */

function App() {
  /**
   * @type {Array<object>} data
   * */
  const [originalData, updateOriginalData] = useImmer([])
  /** @type {Array<StructuredCharacter>} 
   * */
  const [structuredData, updateStructuredData] = useImmer([])
  // TODO: difficulty levels
  // NOTE: EASY 8 cards, 3 exchanges
  // NORMAL 16 cards, 2 exchanges
  // HARD 32 cards, 1 exchange
  const [gameStatus, updateGameStatus] = useImmer({
    gameScreen: 'title', // title, options, win, lose
    difficulty: 'easy', // easy, normal, hard
    score: 0,
    highestScore: 0, // maybe save to lacalstorage later
  })
  const [difficulty, setDifficulty] = useState('easy') // default easy
  const [gameDeck, updateGameDeck] = useImmer([]); // New state for the active game deck
  const [isLoading, setIsLoading] = useState(true); // New loading state

  // Characted ids to fetch from jikan api
  const charactersIds = [
    146158, 146159, 146157, 146156, 173936, 170254,
    151146, 151148, 172124, 173940, 151145, 173537,
    151156, 173733, 146736, 172066, 151143, 171967,
    169779, 170070, 151149, 170248, 151157, 151147,
    146735, 174159, 151142, 151144, 172052, 169813,
    174147, 174151, 170152, 174150, 174145, 174152,
  ]

  /**
   * Shuffle the characters set and take a number of cards
   * @param {Array<object>} data - the structured data 
   * @param {number} take - the number of cards to be taken, 8 for easy etc. 
   * */
  function handleShuffling(data, take = data.length) {
    let newData = data.slice()
    newData = Shuffler.shuffle(newData)
    return newData.slice(0, take)
  }

  /**
     * Initializes or resets the game deck based on difficulty.
     * Resets clicked status of all cards, selects and shuffles cards for the new deck.
     * @param {string} difficultyLevel - 'easy', 'normal', or 'hard'.
     */
  const resetGame = (difficultyLevel) => {
    if (structuredData.length === 0) {
      console.warn("Structured data not yet loaded. Cannot initialize game deck.");
      return;
    }

    // Reset all clicked states in the master structuredData for a new game
    updateStructuredData(draft => {
      draft.forEach(item => {
        item.clicked = false;
      });
    });

    let cardsToTake;
    switch (difficultyLevel) {
      case 'easy':
        cardsToTake = 8;
        break;
      case 'normal':
        cardsToTake = 16;
        break;
      case 'hard':
        cardsToTake = 32;
        break;
      default:
        cardsToTake = 8; // Default to easy
    }

    const newGameDeck = handleShuffling(structuredData, cardsToTake);
    updateGameDeck(draft => {
      // Replace the entire gameDeck array with the new set of cards
      draft.splice(0, draft.length, ...newGameDeck);
    });

    updateGameStatus(draft => {
      draft.score = 0;
      // No need to reset highestScore here
      draft.gameScreen = 'game'; // Transition to game screen
    });
  };

  // handleCardClick
  /**
   * @function handleCardClick to handle the click event on a card on the board
   * @param {number} id
   * */
  const handleCardClick = (id) => {
    let charWasClicked = false;
    let newGameScreen = gameStatus.gameScreen; // Capture current, will update in immer draft

    // Step 1: Update structuredData
    updateStructuredData(draft => {
      let char = draft.find((item) => item.id === id);
      if (!char) {
        console.warn(`Character with id ${id} not found in structured data.`);
        return;
      }
      charWasClicked = char.clicked; // Capture original clicked status

      if (!char.clicked) {
        char.clicked = true; // Mark as clicked if not already
      }
    });

    // Step 2: Update gameStatus based on the original clicked status
    updateGameStatus(draft => {
      if (charWasClicked) {
        draft.gameScreen = 'lose';
        newGameScreen = 'lose'
      } else {
        const newCurrentScore = draft.score + 1;
        draft.score = newCurrentScore;
        draft.highestScore = Math.max(draft.highestScore, newCurrentScore);

        // Check for win condition: if current score equals the number of cards in the deck
        if (newCurrentScore === gameDeck.length) {
          draft.gameScreen = 'win';
          newGameScreen = 'win'; // Update local variable
        }
      }
    });

    // Step 3: Shuffle the current gameDeck, but only if the game is still active.
    // Use `newGameScreen` determined above.
    if (newGameScreen !== 'lose' && newGameScreen !== 'win') {
      updateGameDeck(draft => {
        // Create a shallow copy to ensure immer processes it as a new array for shuffling
        const shuffledDraft = Shuffler.shuffle([...draft]);
        return shuffledDraft;
      });
    }
  };

  // fetch characters from api and fill data into states
  useEffect(() => {
    let ignore = false;

    const fetchCharacters = async () => {
      let url = 'https://api.jikan.moe/v4/characters/'

      for (const id of charactersIds) {
        try {
          let res = await fetch(`${url}${id}`)
          let d = await res.json()
          if (!ignore) {
            updateOriginalData(draft => {
              draft.push((d.data));
            });

            updateStructuredData((draft) => {
              /**@type {Array<object>} draft */
              draft.push({
                id: d.data.mal_id,
                source: d.data.images.jpg.image_url,
                name: d.data.name,
                name_kanji: d.data.name_kanji,
                about: d.data.about,
                clicked: false,
              })
            })
          }

          await delay(550); // Wait for 1 second between requests to avoid rate limiting
        } catch (error) {
          console.error(`Error fetching character ${id}:`, error);
        }
      }
      if (!ignore) {
        setIsLoading(false)
      }
    };
    fetchCharacters();
    // resetGame('easy'); // reset and start the game on start

    return () => {
      ignore = true
    }
  }, [])


  return (
    <>
      <BackgroundVideo />
      {isLoading ? (
        <Modal isOpen={isLoading}>
          <div className="loading-screen">
            <h1>Loading Characters...</h1>
            <p>Please wait</p>
          </div>
        </Modal>
      )
        : gameStatus.gameScreen === 'title'
          ? <MainMenu
            updateGameStatus={updateGameStatus} />
          : gameStatus.gameScreen === 'config'
            ? <DifficultyMenu
              updateGameStatus={updateGameStatus}
              setDifficulty={setDifficulty}
              resetGame={resetGame}
            />
            : gameStatus.gameScreen === 'game'
              ? <GameBoard
                data={gameDeck}
                updateStructuredData={updateStructuredData}
                gameStatus={gameStatus}
                updateGameStatus={updateGameStatus}
                onCardClick={handleCardClick}
              />
              : gameStatus.gameScreen === 'lose'
                ? <LoseScreen updateGameStatus={updateGameStatus} />
                : <WinScreen updateGameStatus={updateGameStatus} />
      }

    </>
  )
}

export default App

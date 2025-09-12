
import { useEffect, useState } from 'react'
import './App.css'
import { useImmer } from 'use-immer'
import GameBoard from './components/game/GameBoard';

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
  const [gameStatus, updateGameStatus] = useImmer({
    gameScreen: 'title',
    score: 0,
    highestScore: 0,
  })

  // Characted ids to fetch from jikan api
  const charactersIds = [
    146158, 146159, 146157, 146156, 173936, 170254,
    151146, 151148, 172124, 173940, 151145, 173537,
    151156, 173733, 146736, 172066, 151143, 171967,
    169779, 170070, 151149, 170248, 151157, 151147,
    146735, 174159, 151142, 151144, 172052, 169813,
    174147, 174151, 170152, 174150, 174145, 174152,
  ]

  const handleCardClick = (id) => {
    let charWasClicked = false;

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
      } else {
        const newCurrentScore = draft.score + 1;
        draft.score = newCurrentScore;
        draft.highestScore = Math.max(draft.highestScore, newCurrentScore);
      }
    });
  };


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

          await delay(350); // Wait for 1 second between requests to avoid rate limiting
        } catch (error) {
          console.error(`Error fetching character ${id}:`, error);
        }
      }
    };
    fetchCharacters();

    return () => {
      ignore = true
    }
  }, [])

  return (
    <>
      <GameBoard
        data={structuredData}
        updateStructuredData={updateStructuredData}
        gameStatus={gameStatus}
        updateGameStatus={updateGameStatus}
        onCardClick={handleCardClick}
      />
    </>
  )
}

export default App

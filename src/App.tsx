import { useState, useRef } from 'react'
import rock from './assets/stone.png'
import scissor from './assets/scissors.png'
import paper from './assets/paper.png'
import user from './assets/user.png'
import computer from './assets/computer.png'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function App() {

  const compWinData = JSON.parse(localStorage.getItem('compWin')!)
  const userWinData = JSON.parse(localStorage.getItem('userWin')!)
  const drawData = JSON.parse(localStorage.getItem('draw')!)
  
  const [compWin, setCompWin] = useState(compWinData || 0)
  const [userWin, setUserWin] = useState(userWinData || 0)
  const [draw, setDraw] = useState(drawData || 0)

  const userOutput = useRef<HTMLImageElement>(null)
  const compOutput = useRef<HTMLImageElement>(null)

  const assets = [rock, paper, scissor]

  paper > rock
  rock > scissor
  scissor > paper

  const clickHandler = (userChoice: string) => {

    userOutput.current!.src = userChoice

    let computerChoice = assets[Math.floor(Math.random() * 3)]

    compOutput.current!.src = computerChoice

    scoreLogic(userChoice, computerChoice);

  }

  const resetScore = () => {
    setCompWin(0)
    setUserWin(0)
    setDraw(0)
    compOutput.current!.src = computer
    userOutput.current!.src = user
    localStorage.clear()
  }

  const scoreLogic = (userChoice: string, computerChoice: string) => {

    if (userChoice === computerChoice) {
      setDraw(draw + 1)
      localStorage.setItem('draw', JSON.stringify(draw + 1))
    }
    
    else if (userChoice > computerChoice) {
      setUserWin(userWin + 1)
      localStorage.setItem('userWin', JSON.stringify(userWin + 1))
    }
    
    else if (userChoice < computerChoice) {
      setCompWin(compWin + 1)
      localStorage.setItem('compWin', JSON.stringify(compWin + 1))
    }

  }

  return (
    <>
      <div className="main grid place-items-center gap-2">

        <h1 className='text-3xl font-bold text-white'>Rock-Paper-Scissors</h1>

        <div className="container grid place-items-center bg-transparent w-96 h-96 ">

          <Box sx={{
            display: 'flex', alignItems: 'center', border: '1px solid', borderColor: 'transparent', gap: '30px',
            borderRadius: 1, bgcolor: 'transparent', paddingInline: '0.5rem',
            '& svg': { m: 1, },
            '& hr': { mx: 0.5, },
          }}>
            <h2 className='text-dullRed'>Comp: {compWin}</h2>
            <h2 className='text-dullBlue'>Draw: {draw}</h2>
            <h2 className='text-lime'>You: {userWin}</h2>
          </Box>

          <Button style={{ color: '#ffcc33', borderColor: '#ffcc33' }} onClick={() => resetScore()}>
            Reset Score
          </Button>

          <div className="output flex justify-center items-center gap-10 ">

            <div className="computerOutput grid place-items-center gap-6 text-dullRed p-5 rounded-full size-32 border-light border-2 ">
              <img src={computer} alt='Computer Output' ref={compOutput} />
              <h3>Computer</h3>
            </div>

            <div className="userOutput grid place-items-center gap-6 text-lime p-5 rounded-full size-32 border-light border-2">
              <img src={user} alt='User Output' ref={userOutput} />
              <h3>You</h3>
            </div>

          </div>

          <Box sx={{
            border: '1px solid', borderColor: 'transparent', borderRadius: 1, bgcolor: 'transparent', padding: '0.5rem', marginTop: '2rem',
          }}>

            <div className="userInput grid place-items-center gap-3 relative ">

              <h2 className='underline text-white'>Select your option</h2>

              <div className="options flex justify-center items-center gap-5">

                <div className="rock border-solid border-2 border-light p-3 rounded-full cursor-pointer transition-all ease-in-out hover:bg-light"
                  onClick={() => clickHandler(rock)}>
                  <img src={rock} alt="user Rock" className='size-14' />
                </div>

                <div className="paper border-solid border-2 border-light p-3 rounded-full cursor-pointer transition-all ease-in-out hover:bg-light"
                  onClick={() => clickHandler(paper)}>
                  <img src={paper} alt="user Paper" className='size-14' />
                </div>

                <div className="scissor border-solid border-2 border-light p-3 rounded-full cursor-pointer transition-all ease-in-out hover:bg-light"
                  onClick={() => clickHandler(scissor)}>
                  <img src={scissor} alt="user Scissor" className='size-14' />
                </div>

              </div>

            </div>

          </Box>

        </div>

      </div>
    </>
  )
}

export default App
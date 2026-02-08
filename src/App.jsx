import { useState } from 'react'
import './App.css'
import two from './images/two.jpeg'
import three from './images/three.jpeg'
import four from './images/four.jpeg'
import one from './images/one.mp4'

function App() {
  const [yesSize, setYesSize] = useState(1)
  const [noPosition, setNoPosition] = useState({ top: 0, left: 0 })
  const [accepted, setAccepted] = useState(false)
  const [noClickCount, setNoClickCount] = useState(0)

  const noButtonTexts = [
    "No",
    "Wait... are you sure?",
    "But... but... why? 🥺",
    "My heart is breaking...",
    "Noooo, think again!",
    "What if I said pretty please?",
    "You're breaking my heart! 💔",
    "The Yes button is right there... 👉",
    "I promise I'll be good! 🥹",
    "Just one chance? Please?",
    "Fine, but I'll keep trying! 😤",
    "You know you want to say yes... 😏",
    "I won't give up! Never! 💪"
  ]

  const handleYesClick = () => {
    setAccepted(true)
    // Create heart animation
    createHearts()
  }

  const handleNoClick = (e) => {
    e.preventDefault()
    // Increase Yes button size
    setYesSize(prev => prev + 0.3)

    // Move No button to random position
    const container = e.target.closest('.button-container')
    if (container) {
      const containerRect = container.getBoundingClientRect()
      const buttonWidth = e.target.offsetWidth
      const buttonHeight = e.target.offsetHeight

      // Add more padding to prevent overflow
      const padding = 30
      const maxX = Math.max(0, containerRect.width - buttonWidth - padding)
      const maxY = Math.max(0, containerRect.height - buttonHeight - padding)

      const randomX = Math.random() * maxX
      const randomY = Math.random() * maxY

      setNoPosition({ top: randomY, left: randomX })
    }

    setNoClickCount(prev => prev + 1)
  }

  const createHearts = () => {
    const colors = ['#ff6b9d', '#ff85a1', '#ff9fb8', '#ffb3c6', '#ffc2d4']
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        const heart = document.createElement('div')
        heart.innerHTML = '❤️'
        heart.style.position = 'fixed'
        heart.style.left = Math.random() * 100 + 'vw'
        heart.style.top = '-50px'
        heart.style.fontSize = (Math.random() * 30 + 20) + 'px'
        heart.style.animation = 'fall 3s linear'
        heart.style.zIndex = '1000'
        heart.style.pointerEvents = 'none'
        document.body.appendChild(heart)

        setTimeout(() => {
          heart.remove()
        }, 3000)
      }, i * 100)
    }
  }

  if (accepted) {
    return (
      <div className="accepted-container">
        <div className="celebration">
          <h1 className="main-title">Yesss! 💕</h1>
          <p className="subtitle">I knew you couldn't resist! You've just made me the happiest person alive! 🥰</p>

          <div className="center-message">
            <h2 className="love-message">I Love You All The Time</h2>
          </div>

          <div className="images-grid">
            <div className="image-card">
              <div className="image-placeholder">
                <video src={one} style={{ width: '100%', height: '100%', objectFit: 'contain' }} autoPlay muted loop />
              </div>
            </div>
            <div className="image-card">
              <div className="image-placeholder">
                <img src={two} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Our First Memory" />
              </div>
            </div>
            <div className="image-card">
              <div className="image-placeholder">
                <img src={three} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Our First Memory" />
              </div>
            </div>
            <div className="image-card">
              <div className="image-placeholder">
                <img src={four} style={{ width: '100%', height: '100%', objectFit: 'contain' }} alt="Our First Memory" />
              </div>
            </div>
          </div>

          <div className="quote-section">
            <p className="quote">"In a sea of people, my eyes will always search for you"</p>
            <p className="quote-author">- Because I wanna be with you all the time</p>
            <div className="quote-decoration">
              <span>✨</span>
              <span>💫</span>
              <span>✨</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="container">
        <div className="hearts-background">
          <span className="floating-heart" style={{ left: '10%', animationDelay: '0s' }}>💕</span>
          <span className="floating-heart" style={{ left: '20%', animationDelay: '1s' }}>💖</span>
          <span className="floating-heart" style={{ left: '80%', animationDelay: '2s' }}>💗</span>
          <span className="floating-heart" style={{ left: '90%', animationDelay: '1.5s' }}>💝</span>
          <span className="floating-heart" style={{ left: '50%', animationDelay: '0.5s' }}>❤️</span>
          <span className="floating-heart" style={{ left: '70%', animationDelay: '2.5s' }}>💕</span>
        </div>

        <div className="content">
          <h1 className="question">Will You Be Mine,</h1>
          <h1 className="question-highlight">My Div? 💝</h1>
          <p className="subtext">I promise to make every day feel like today... only better! ✨</p>

          <div className="button-container">
            <button
              className="yes-button"
              onClick={handleYesClick}
              style={{
                transform: `scale(${yesSize})`,
                transition: 'transform 0.3s ease'
              }}
            >
              Yes! 💕
            </button>

            <button
              className="no-button"
              onClick={handleNoClick}
              style={{
                position: noClickCount > 0 ? 'absolute' : 'relative',
                top: noClickCount > 0 ? `${noPosition.top}px` : 'auto',
                left: noClickCount > 0 ? `${noPosition.left}px` : 'auto',
                transition: 'all 0.3s ease'
              }}
            >
              {noButtonTexts[Math.min(noClickCount, noButtonTexts.length - 1)]}
            </button>
          </div>

          {noClickCount > 0 && (
            <p className="hint">
              {noClickCount < 2 ? "Hmm, the Yes button seems to be growing... 👀" :
               noClickCount < 4 ? "Notice anything different? That's my love growing! 💗" :
               noClickCount < 7 ? "The universe is trying to tell you something... ✨" :
               noClickCount < 10 ? "Even the Yes button believes we're meant to be! 💕" :
               "Okay, I see what you're doing... but I'm not giving up! 😤💕"}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App

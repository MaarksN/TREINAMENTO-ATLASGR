import React, { useState, useEffect } from 'react';
import styles from './CyberCrisisSimulator.module.css';

const CyberCrisisSimulator: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'won' | 'lost'>('idle');
  const [actions, setActions] = useState({
    isolateNetwork: false,
    alertDPO: false,
    paidRansom: false,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setTimeout(() => {
        setGameState('lost');
        setIsActive(false);
      }, 0);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  useEffect(() => {
    if (actions.isolateNetwork && actions.alertDPO && !actions.paidRansom && gameState === 'playing') {
      setTimeout(() => {
        setGameState('won');
        setIsActive(false);
      }, 0);
    }
  }, [actions, gameState]);

  const startGame = () => {
    setGameState('playing');
    setIsActive(true);
    setTimeLeft(30);
    setActions({ isolateNetwork: false, alertDPO: false, paidRansom: false });
  };

  const handleAction = (action: keyof typeof actions) => {
    if (gameState !== 'playing') return;
    
    if (action === 'paidRansom') {
      setGameState('lost');
      setIsActive(false);
      setActions(prev => ({ ...prev, paidRansom: true }));
    } else {
      setActions(prev => ({ ...prev, [action]: true }));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>CYBER CRISIS SIMULATOR</h2>
        <div className={styles.statusBox}>
          <span className={styles.statusLabel}>SYSTEM STATUS:</span>
          <span className={`${styles.statusValue} ${gameState === 'playing' ? styles.alertPulse : ''}`}>
            {gameState === 'idle' ? 'SECURE' : gameState === 'won' ? 'CONTAINED' : gameState === 'lost' ? 'COMPROMISED' : 'UNDER ATTACK'}
          </span>
        </div>
      </div>

      <div className={styles.screen}>
        {gameState === 'idle' && (
          <div className={styles.overlay}>
            <h3>RANSOMWARE ATTACK IMMINENT</h3>
            <p>Prepare to respond to a critical security breach.</p>
            <button className={styles.btnStart} onClick={startGame}>INITIALIZE SIMULATION</button>
          </div>
        )}

        {(gameState === 'playing' || gameState === 'won' || gameState === 'lost') && (
          <div className={styles.dashboard}>
            <div className={styles.timerDisplay}>
              <span className={styles.timerLabel}>T-MINUS</span>
              <span className={`${styles.timerValue} ${timeLeft <= 10 ? styles.criticalText : ''}`}>
                00:{timeLeft.toString().padStart(2, '0')}
              </span>
            </div>

            <div className={styles.threatInfo}>
              <h4>THREAT DETECTED: ATLAS-CRYPT RANSOMWARE</h4>
              <p>Encrypting central database...</p>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${(30 - timeLeft) * 3.33}%` }}></div>
              </div>
            </div>

            <div className={styles.actionsGrid}>
              <button 
                className={`${styles.actionBtn} ${actions.isolateNetwork ? styles.btnSuccess : ''}`}
                onClick={() => handleAction('isolateNetwork')}
                disabled={actions.isolateNetwork || gameState !== 'playing'}
              >
                [1] ISOLATE NETWORK
              </button>
              
              <button 
                className={`${styles.actionBtn} ${actions.alertDPO ? styles.btnSuccess : ''}`}
                onClick={() => handleAction('alertDPO')}
                disabled={actions.alertDPO || gameState !== 'playing'}
              >
                [2] ALERT D.P.O.
              </button>

              <button 
                className={`${styles.actionBtn} ${styles.btnDanger} ${actions.paidRansom ? styles.btnFailed : ''}`}
                onClick={() => handleAction('paidRansom')}
                disabled={gameState !== 'playing'}
              >
                [3] PAY RANSOM (₿50)
              </button>
            </div>
          </div>
        )}

        {gameState === 'won' && (
          <div className={`${styles.overlay} ${styles.winOverlay}`}>
            <h3>THREAT NEUTRALIZED</h3>
            <p>Protocols successfully executed. Data integrity maintained.</p>
            <button className={styles.btnStart} onClick={startGame}>RESTART SIMULATION</button>
          </div>
        )}

        {gameState === 'lost' && (
          <div className={`${styles.overlay} ${styles.lossOverlay}`}>
            <h3>SYSTEM COMPROMISED</h3>
            <p>{actions.paidRansom ? 'Payment traced. Attackers did not decrypt files.' : 'Time expired. Critical data encrypted.'}</p>
            <button className={styles.btnStart} onClick={startGame}>RESTART SIMULATION</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CyberCrisisSimulator;

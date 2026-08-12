import React, { useState, useEffect } from 'react';
import styles from './LiveRobberySimulator.module.css';

const LiveRobberySimulator: React.FC = () => {
  const [gameState, setGameState] = useState<'idle' | 'active' | 'resolved' | 'failed'>('idle');
  const [signalLost, setSignalLost] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'system' | 'user' | 'prf', text: string }[]>([]);
  const [truckLocked, setTruckLocked] = useState(false);
  const [prfContacted, setPrfContacted] = useState(false);
  
  useEffect(() => {
    if (gameState === 'active' && !signalLost) {
      const timer = setTimeout(() => {
        setSignalLost(true);
        addMessage('system', 'ALERT: TRUCK SIGNAL LOST ON HIGHWAY BR-116. SUSPECTED JAMMER ACTIVITY.');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [gameState, signalLost]);

  useEffect(() => {
    if (truckLocked && prfContacted && gameState === 'active') {
      setTimeout(() => {
        setGameState('resolved');
        addMessage('system', 'INCIDENT RESOLVED. CARGO SECURED.');
      }, 2000);
    }
  }, [truckLocked, prfContacted, gameState]);

  const addMessage = (sender: 'system' | 'user' | 'prf', text: string) => {
    setMessages(prev => [...prev, { sender, text }]);
  };

  const startGame = () => {
    setGameState('active');
    setSignalLost(false);
    setTruckLocked(false);
    setPrfContacted(false);
    setMessages([{ sender: 'system', text: 'MONITORING TRUCK CONVOY ALPHA-7...' }]);
  };

  const handleContactPRF = () => {
    if (!signalLost || prfContacted || gameState !== 'active') return;
    
    addMessage('user', 'INITIATING EMERGENCY COMMS TO PRF...');
    setPrfContacted(true);
    
    setTimeout(() => {
      addMessage('prf', 'PRF UNIT RESPONDING. LOCATION RECEIVED. DISPATCHING INTERCEPTORS.');
    }, 1500);
  };

  const handleLockTruck = () => {
    if (!signalLost || truckLocked || gameState !== 'active') return;
    
    addMessage('user', 'SENDING OVERRIDE COMMAND: LOCKDOWN ACTUATORS...');
    setTruckLocked(true);
    
    setTimeout(() => {
      addMessage('system', 'LOCKDOWN CONFIRMED. ENGINE IMMOBILIZED. DOORS SECURED.');
    }, 1000);
  };

  const handleIgnore = () => {
    if (!signalLost || gameState !== 'active') return;
    
    addMessage('user', 'DISMISSING ALERT. CONTINUING STANDARD MONITORING...');
    
    setTimeout(() => {
      setGameState('failed');
      addMessage('system', 'CRITICAL FAILURE: CARGO HIJACKED. LAST KNOWN POSITION LOST.');
    }, 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>LIVE ROBBERY SIMULATOR</h2>
        <div className={styles.statusBox}>
          <div className={`${styles.indicator} ${signalLost ? styles.indicatorRed : styles.indicatorGreen}`} />
          <span>{signalLost ? 'SIGNAL LOST' : 'SIGNAL STABLE'}</span>
        </div>
      </div>

      <div className={styles.interface}>
        <div className={styles.mapSection}>
          <div className={styles.mapGrid}></div>
          <div className={`${styles.truckMarker} ${signalLost ? styles.truckBlink : ''}`} />
          {signalLost && <div className={styles.jammerRadius} />}
        </div>

        <div className={styles.radioTerminal}>
          <div className={styles.terminalHeader}>TACTICAL RADIO COMMS</div>
          <div className={styles.terminalBody}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`${styles.message} ${styles[`msg-${msg.sender}`]}`}>
                <span className={styles.sender}>[{msg.sender.toUpperCase()}]:</span> {msg.text}
              </div>
            ))}
          </div>
          
          <div className={styles.controls}>
            {gameState === 'idle' ? (
              <button className={styles.primaryBtn} onClick={startGame}>START PATROL</button>
            ) : gameState === 'resolved' || gameState === 'failed' ? (
              <button className={styles.primaryBtn} onClick={startGame}>RESTART SIMULATOR</button>
            ) : (
              <div className={styles.actionPanel}>
                <button 
                  className={styles.tacticalBtn} 
                  onClick={handleContactPRF}
                  disabled={!signalLost || prfContacted}
                >
                  CONTACT PRF
                </button>
                <button 
                  className={styles.tacticalBtn} 
                  onClick={handleLockTruck}
                  disabled={!signalLost || truckLocked}
                >
                  REMOTE LOCKDOWN
                </button>
                <button 
                  className={`${styles.tacticalBtn} ${styles.dangerBtn}`} 
                  onClick={handleIgnore}
                  disabled={!signalLost}
                >
                  DISMISS ALERT
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {(gameState === 'resolved' || gameState === 'failed') && (
        <div className={styles.resultBanner}>
          <h3 className={gameState === 'resolved' ? styles.textSuccess : styles.textDanger}>
            {gameState === 'resolved' ? 'MISSION ACCOMPLISHED' : 'MISSION FAILED'}
          </h3>
        </div>
      )}
    </div>
  );
};

export default LiveRobberySimulator;

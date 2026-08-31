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

    const nextActions = { ...actions, [action]: true };
    setActions(nextActions);
    if (nextActions.contain && nextActions.report) {
      setGameState("won");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>SIMULADOR DE RESPOSTA A INCIDENTE DIGITAL</h2>
        <div className={styles.statusBox}>
          <span className={styles.statusLabel}>STATUS:</span>
          <span className={`${styles.statusValue} ${gameState === "playing" ? styles.alertPulse : ""}`}>
            {gameState === "idle" ? "PRONTO" : gameState === "won" ? "CONTIDO" : gameState === "lost" ? "RISCO AMPLIADO" : "EM ANÁLISE"}
          </span>
        </div>
      </div>

      <div className={styles.screen}>
        {gameState === "idle" && (
          <div className={styles.overlay}>
            <h3>ALERTA DE SEGURANÇA</h3>
            <p>Um comportamento anormal foi identificado em um sistema corporativo. Você ainda não conhece a causa.</p>
            <button className={styles.btnStart} onClick={startGame}>INICIAR SIMULAÇÃO</button>
          </div>
        )}

        {(gameState === "playing" || gameState === "won" || gameState === "lost") && (
          <div className={styles.dashboard}>
            <div className={styles.threatInfo}>
              <h4>SITUAÇÃO: ATIVIDADE ANORMAL EM VALIDAÇÃO</h4>
              <p>O objetivo é reduzir exposição sem inventar diagnóstico ou executar uma resposta fora do processo aprovado.</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${(Number(actions.contain) + Number(actions.report)) * 50}%` }}
                />
              </div>
            </div>

            <div className={styles.actionsGrid}>
              <button
                className={`${styles.actionBtn} ${actions.contain ? styles.btnSuccess : ""}`}
                onClick={() => handleAction("contain")}
                disabled={actions.contain || gameState !== "playing"}
              >
                [1] CONTER CONFORME PROCEDIMENTO
              </button>

              <button
                className={`${styles.actionBtn} ${actions.report ? styles.btnSuccess : ""}`}
                onClick={() => handleAction("report")}
                disabled={actions.report || gameState !== "playing"}
              >
                [2] ACIONAR O CANAL DE INCIDENTE
              </button>

              <button
                className={`${styles.actionBtn} ${styles.btnDanger} ${actions.improvise ? styles.btnFailed : ""}`}
                onClick={() => handleAction("improvise")}
                disabled={gameState !== "playing"}
              >
                [3] IMPROVISAR E OCULTAR O EVENTO
              </button>
            </div>
          </div>
        )}

        {gameState === "won" && (
          <div className={`${styles.overlay} ${styles.winOverlay}`}>
            <h3>RESPOSTA RESPONSÁVEL</h3>
            <p>Você conteve a exposição e acionou o fluxo apropriado sem transformar hipótese em certeza.</p>
            <button className={styles.btnStart} onClick={startGame}>REFAZER SIMULAÇÃO</button>
          </div>
        )}

        {gameState === "lost" && (
          <div className={`${styles.overlay} ${styles.lossOverlay}`}>
            <h3>DECISÃO DE RISCO</h3>
            <p>Improvisar ou esconder um incidente reduz rastreabilidade e pode ampliar o impacto. Use o procedimento vigente e escale cedo.</p>
            <button className={styles.btnStart} onClick={startGame}>REFAZER SIMULAÇÃO</button>
          </div>
        )}
      </div>
    </div>
  );
}

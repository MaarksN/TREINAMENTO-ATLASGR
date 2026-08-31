"use client";

const LiveRobberySimulator: React.FC = () => {
  const [gameState, setGameState] = useState<'idle' | 'active' | 'resolved' | 'failed'>('idle');
  const [signalLost, setSignalLost] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'system' | 'user' | 'prf', text: string }[]>([]);

  const addMessage = React.useCallback((sender: 'system' | 'user' | 'prf', text: string) => {
    setMessages(prev => [...prev, { sender, text }]);
  }, []);
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

export default function LiveRobberySimulator() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [signalLost, setSignalLost] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [contextValidated, setContextValidated] = useState(false);
  const [protocolEscalated, setProtocolEscalated] = useState(false);



  function startGame() {
    setGameState("active");
    setSignalLost(true);
    setContextValidated(false);
    setProtocolEscalated(false);
    setMessages([
      { sender: "system", text: "ALERTA: perda de comunicação identificada durante uma viagem. A causa ainda não foi confirmada." },
    ]);
  }

  function handleValidateContext() {
    if (!signalLost || contextValidated || gameState !== "active") return;
    setContextValidated(true);
    addMessage("user", "Validando última atualização, viagem, rota, contexto e regra operacional vigente.");
    addMessage("system", "Contexto validado. O alerta permanece relevante e exige tratamento conforme o procedimento da operação.");
  }

  function handleEscalate() {
    if (!contextValidated || protocolEscalated || gameState !== "active") return;
    setProtocolEscalated(true);
    addMessage("user", "Escalando o evento pelo fluxo definido, com evidências e estado atual.");
    addMessage("prf", "Escalonamento registrado. A continuidade deve seguir o procedimento e as autoridades/áreas previstas para esta operação.");
    setGameState("resolved");
  }

  function handleIgnore() {
    if (!signalLost || gameState !== "active") return;
    addMessage("user", "Alerta ignorado sem validação ou registro adequado.");
    addMessage("system", "Falha de processo: um sinal relevante ficou sem tratamento e sem responsável definido.");
    setGameState("failed");
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>SIMULADOR DE DECISÃO OPERACIONAL</h2>
        <div className={styles.statusBox}>
          <div className={`${styles.indicator} ${signalLost ? styles.indicatorRed : styles.indicatorGreen}`} />
          <span>{signalLost ? "ALERTA EM TRATAMENTO" : "PRONTO"}</span>
        </div>
      </div>

      <div className={styles.interface}>
        <div className={styles.mapSection}>
          <div className={styles.mapGrid} />
          <div className={`${styles.truckMarker} ${signalLost ? styles.truckBlink : ""}`} />
          {signalLost && <div className={styles.jammerRadius} />}
        </div>

        <div className={styles.radioTerminal}>
          <div className={styles.terminalHeader}>REGISTRO DO EVENTO</div>
          <div className={styles.terminalBody}>
            {messages.map((message, index) => (
              <div key={`${message.sender}-${index}`} className={`${styles.message} ${styles[`msg-${message.sender}`]}`}>
                <span className={styles.sender}>[{message.sender === "system" ? "SISTEMA" : message.sender === "user" ? "ALUNO" : "ESCALADA"}]:</span> {message.text}
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            {gameState === "idle" ? (
              <button className={styles.primaryBtn} onClick={startGame}>INICIAR CENÁRIO</button>
            ) : gameState === "resolved" || gameState === "failed" ? (
              <button className={styles.primaryBtn} onClick={startGame}>REFAZER SIMULAÇÃO</button>
            ) : (
              <div className={styles.actionPanel}>
                <button
                  className={styles.tacticalBtn}
                  onClick={handleValidateContext}
                  disabled={contextValidated}
                >
                  VALIDAR CONTEXTO E REGRA
                </button>
                <button
                  className={styles.tacticalBtn}
                  onClick={handleEscalate}
                  disabled={!contextValidated || protocolEscalated}
                >
                  ESCALAR CONFORME PROTOCOLO
                </button>
                <button
                  className={`${styles.tacticalBtn} ${styles.dangerBtn}`}
                  onClick={handleIgnore}
                >
                  IGNORAR ALERTA
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {(gameState === "resolved" || gameState === "failed") && (
        <div className={styles.resultBanner}>
          <h3 className={gameState === "resolved" ? styles.textSuccess : styles.textDanger}>
            {gameState === "resolved" ? "DECISÃO RESPONSÁVEL" : "FALHA DE TRATAMENTO"}
          </h3>
          <p>
            {gameState === "resolved"
              ? "Você separou alerta de conclusão, validou contexto e escalou com rastreabilidade."
              : "Alertas relevantes não devem ser descartados sem validação, procedimento e responsável."}
          </p>
        </div>
      )}
    </div>
  );
}

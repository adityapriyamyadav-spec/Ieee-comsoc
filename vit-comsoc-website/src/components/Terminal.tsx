import React, { useState, useEffect, useRef } from 'react';

interface TerminalState {
  isBooting: boolean;
  inputHistory: string[];
  currentCommand: string;
  isAwaitingInput: boolean;
  contactStep: 'idle' | 'name' | 'message' | 'sending' | 'success';
  userName: string;
  userMessage: string;
}

const Terminal: React.FC = () => {
  const [terminalState, setTerminalState] = useState<TerminalState>({
    isBooting: true,
    inputHistory: [],
    currentCommand: '',
    isAwaitingInput: false,
    contactStep: 'idle',
    userName: '',
    userMessage: ''
  });

  const [displayedHistory, setDisplayedHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Boot sequence
  useEffect(() => {
    const bootMessages = [
      'COMSOC_OS v1.0.4 - VIT Node',
      'Initializing quantum communication protocols...',
      'Establishing secure connection to VIT network...',
      'System ready. Type "help" for available commands.'
    ];

    let currentIndex = 0;
    const bootInterval = setInterval(() => {
      if (currentIndex < bootMessages.length) {
        setDisplayedHistory(prev => [...prev, bootMessages[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(bootInterval);
        setTerminalState(prev => ({ ...prev, isBooting: false, isAwaitingInput: true }));
      }
    }, 800);

    return () => clearInterval(bootInterval);
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedHistory]);

  // Focus input when ready
  useEffect(() => {
    if (terminalState.isAwaitingInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalState.isAwaitingInput]);

  const typeText = (text: string, callback?: () => void) => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedHistory(prev => {
          const newHistory = [...prev];
          if (newHistory.length > 0 && currentIndex > 0) {
            newHistory[newHistory.length - 1] = text.substring(0, currentIndex);
          } else if (currentIndex > 0) {
            newHistory.push(text.substring(0, currentIndex));
          }
          return newHistory;
        });
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        if (callback) callback();
      }
    }, 20);
  };

  const handleCommand = (command: string) => {
    if (terminalState.isBooting || !terminalState.isAwaitingInput) return;

    // Add command to history
    setDisplayedHistory(prev => [...prev, `$ ${command}`]);

    const trimmedCommand = command.trim().toLowerCase();

    switch (terminalState.contactStep) {
      case 'name':
        setTerminalState(prev => ({ ...prev, userName: command, contactStep: 'message' }));
        typeText('Enter Message:', () => {
          // Focus input after text finishes typing
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }, 50);
        });
        return;

      case 'message':
        setTerminalState(prev => ({ ...prev, userMessage: command, contactStep: 'sending' }));
        typeText('Sending...');
        setTimeout(() => {
          typeText('Transmission Successful. Message received by VIT_Admin.', () => {
            setTerminalState(prev => ({ 
              ...prev, 
              contactStep: 'idle', 
              userName: '', 
              userMessage: '' 
            }));
          });
        }, 2000);
        return;

      default:
        break;
    }

    switch (trimmedCommand) {
      case 'help':
        const helpText = `Available Commands:
  about     - Learn about IEEE ComSoc VIT chapter
  clear     - Clear terminal history
  contact   - Send a message to the administrators
  socials   - View social media links
  sudo      - Attempt privileged access
  exit      - Close terminal`;
        typeText(helpText);
        break;

      case 'about':
        const aboutText = `IEEE Communications Society (ComSoc) VIT Vellore

We are a dynamic student chapter dedicated to advancing the 
field of communications technology. Our mission is to foster
innovation, collaboration, and technical excellence among
students passionate about networking, wireless communications,
and information theory.

Key Focus Areas:
• 5G/6G Research & Development
• Network Security & Protocols
• IoT & Smart Systems
• Technical Workshops & Hackathons

Join us in shaping the future of global communications!`;
        typeText(aboutText);
        break;

      case 'clear':
        setDisplayedHistory([]);
        break;

      case 'contact':
        setTerminalState(prev => ({ ...prev, contactStep: 'name' }));
        typeText('Enter Name:', () => {
          // Focus input after text finishes typing
          setTimeout(() => {
            if (inputRef.current) {
              inputRef.current.focus();
            }
          }, 50);
        });
        break;

      case 'socials':
        const socialsText = `Connect with IEEE ComSoc VIT:

📧 Email: comsoc@vit.ac.in
🔗 LinkedIn: linkedin.com/company/ieee-comsoc-vit
🐦 Twitter: @IEEEComSocVIT
📷 Instagram: @ieee_comsoc_vit
🌐 Website: comsoc.vit.ac.in

Stay updated with our latest events and opportunities!`;
        typeText(socialsText);
        break;

      case 'sudo':
        const sudoText = 'ERROR: Unauthorized access attempt recorded. VIT_Admin alerted.';
        typeText(sudoText);
        break;

      case 'exit':
        typeText('Terminal session terminated. Goodbye!');
        setTimeout(() => {
          setTerminalState(prev => ({ ...prev, isAwaitingInput: false }));
        }, 1500);
        break;

      default:
        typeText(`Command not found: ${command}. Type "help" for available commands.`);
        break;
    }

    // Clear current command
    setTerminalState(prev => ({ ...prev, currentCommand: '' }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && terminalState.currentCommand.trim()) {
      handleCommand(terminalState.currentCommand);
      setTerminalState(prev => ({ ...prev, currentCommand: '' }));
    }
  };

  const getPrompt = () => {
    switch (terminalState.contactStep) {
      case 'name':
      case 'message':
        return '> ';
      default:
        return '$ ';
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Terminal Header */}
      <div className="bg-slate-900/90 backdrop-blur-lg border border-purple-500/30 dark:border-trace/30 rounded-t-lg px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-purple-400 dark:text-trace text-sm font-mono">
            COMSOC_OS v1.0.4 - VIT Node
          </div>
          <div className="w-16"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="bg-slate-950/95 backdrop-blur-lg border border-t-0 border-purple-500/30 rounded-b-lg p-4 h-96 overflow-y-auto font-mono text-sm"
      >
        {/* Terminal Output */}
        <div className="space-y-1">
          {displayedHistory.map((line, index) => (
            <div 
              key={index} 
              className="text-purple-400 dark:text-trace leading-relaxed"
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {line}
            </div>
          ))}

          {/* Current Input Line */}
          {terminalState.isAwaitingInput && (
            <div className="flex items-center">
              <span className="text-purple-400 dark:text-trace mr-2">{getPrompt()}</span>
              <input
                ref={inputRef}
                type="text"
                value={terminalState.currentCommand}
                onChange={(e) => setTerminalState(prev => ({ ...prev, currentCommand: e.target.value }))}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-purple-400 dark:text-trace outline-none placeholder-purple-600 dark:placeholder-trace/60"
                placeholder={terminalState.contactStep !== 'idle' ? '' : 'Enter command...'}
              />
              <span className="w-2 h-4 bg-purple-400 dark:bg-trace animate-pulse ml-1"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;

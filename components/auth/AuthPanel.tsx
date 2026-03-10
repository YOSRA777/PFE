'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

type AuthMode = 'login' | 'register';

export function AuthPanel() {
  const [mode, setMode] = useState<AuthMode>('login');

  return (
    <AnimatePresence mode="wait" initial={false}>
      {mode === 'login' ? (
        <div key="login" className="w-full">
          <LoginForm onSwitch={() => setMode('register')} />
        </div>
      ) : (
        <div key="register" className="w-full">
          <RegisterForm onSwitch={() => setMode('login')} />
        </div>
      )}
    </AnimatePresence>
  );
}

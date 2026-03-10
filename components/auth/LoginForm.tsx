'use client';

import { Mail, Facebook, Instagram } from 'lucide-react'; // Ajout des icônes
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';

type LoginFormProps = {
  onSwitch: () => void;
};

export function LoginForm({ onSwitch }: LoginFormProps) {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
      <h2 className="mb-2 text-3xl font-bold text-slate-900">Bon retour !</h2>
      <p className="mb-8 text-slate-500">Connectez-vous pour gérer vos campagnes.</p>

      <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
        <InputField label="E-mail professionnel" type="email" placeholder="nom@entreprise.com" icon={Mail} />

        <Button type="submit" variant="dark" className="w-full py-4">
          Se connecter
        </Button>

        {/* --- SÉPARATEUR "OU CONTINUER AVEC" --- */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-slate-500 font-medium tracking-wider">
              Ou continuer avec
            </span>
          </div>
        </div>

        {/* --- BOUTONS RÉSEAUX SOCIAUX --- */}
        <div className="grid grid-cols-2 gap-4">
          <button 
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium transition-all hover:bg-slate-50 hover:border-slate-300"
          >
            <Facebook className="h-5 w-5 text-[#1877F2]" />
            <span className="text-slate-700">Facebook</span>
          </button>
          <button 
            type="button"
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 px-4 text-sm font-medium transition-all hover:bg-slate-50 hover:border-slate-300"
          >
            <Instagram className="h-5 w-5 text-[#E4405F]" />
            <span className="text-slate-700">Instagram</span>
          </button>
        </div>

        <p className="mt-8 text-center text-slate-600">
          Pas de compte ?{' '}
          <button type="button" onClick={onSwitch} className="font-bold text-orange-vif hover:underline">
            Inscrivez-vous
          </button>
        </p>
      </form>
    </motion.div>
  );
}
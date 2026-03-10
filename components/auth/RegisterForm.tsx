'use client';

import { Lock, Mail, User, Facebook, Instagram } from 'lucide-react'; // Ajout des icônes
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';

type RegisterFormProps = {
  onSwitch: () => void;
};

export function RegisterForm({ onSwitch }: RegisterFormProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.35 }}
    >
      <h2 className="mb-2 text-3xl font-bold text-slate-900">Créer un compte</h2>
      <p className="mb-8 text-slate-500">Rejoignez l&apos;élite du marketing automatisé.</p>

      <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
        {/* Ligne 1: Identifiants */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InputField label="Nom complet" placeholder="Jean" icon={User} compact />
          <InputField label="Email" type="email" placeholder="jean@pme.fr" icon={Mail} compact />
          <InputField label="Mot de passe" type="password" placeholder="••••••••" icon={Lock} compact />
        </div>

        {/* Ligne 2: Entreprise */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InputField label="Téléphone" type="tel" placeholder="+33..." compact />
          <SelectField label="Type d'entreprise" compact options={['PME', 'Agence']} />
          <InputField label="Taille" placeholder="10-50" compact />
        </div>

        {/* Ligne 3: Secteur */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <SelectField label="Secteur d'activité" compact options={['Technologie', 'Services']} />
          <InputField label="Matricule fiscale" placeholder="1234567/A" compact />
        </div>

        {/* --- NOUVEAU : BOUTON LIER COMPTES (STYLE POINTILLÉS) --- */}
        <div className="pt-2">
          <button 
            type="button"
            className="group flex w-full items-center justify-center gap-3 rounded-xl border-2 border-dashed border-slate-300 bg-white py-3 transition-all hover:border-orange-vif hover:bg-orange-vif/5"
          >
            <div className="flex -space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1877F2] ring-2 ring-white shadow-sm">
                <Facebook className="h-3 w-3 text-white" />
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E4405F] ring-2 ring-white shadow-sm">
                <Instagram className="h-3 w-3 text-white" />
              </div>
            </div>
            <span className="text-sm font-semibold text-slate-700 transition-colors group-hover:text-orange-vif">
              Lier mes comptes sociaux
            </span>
          </button>
        </div>
        {/* ------------------------------------------------------ */}

        <Button type="submit" className="mt-4 w-full py-4">
          Démarrer l&apos;essai gratuit
        </Button>

        <p className="mt-6 text-center text-sm text-slate-600">
          Déjà inscrit ?{' '}
          <button type="button" onClick={onSwitch} className="font-bold text-midnight hover:underline">
            Connectez-vous
          </button>
        </p>
      </form>
    </motion.div>
  );
}
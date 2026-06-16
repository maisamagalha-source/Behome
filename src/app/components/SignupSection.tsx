import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Mail, Lock, User, Phone, Chrome } from 'lucide-react';

export function SignupSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    whatsapp: '',
    acceptWhatsapp: false,
    acceptMarketing: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode adicionar a lógica de cadastro
  };

  const handleSocialLogin = (provider: 'google' | 'facebook') => {
    console.log(`Login with ${provider}`);
    // Aqui você pode adicionar a lógica de login social
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl tracking-tight text-white">
            Crie sua conta
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Acesso exclusivo às maiores experiências de entretenimento adulto
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-card rounded-lg border border-red-900/30 p-8 shadow-xl shadow-red-900/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nome Completo */}
            <div>
              <Label htmlFor="fullName" className="text-white">
                Nome completo
              </Label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-neutral-500" />
                </div>
                <Input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="pl-10 bg-input-background border-red-900/30 text-white placeholder:text-neutral-600 focus:border-red-600"
                  placeholder="Seu nome completo"
                />
              </div>
            </div>

            {/* E-mail */}
            <div>
              <Label htmlFor="email" className="text-white">
                E-mail
              </Label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-neutral-500" />
                </div>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 bg-input-background border-red-900/30 text-white placeholder:text-neutral-600 focus:border-red-600"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <Label htmlFor="password" className="text-white">
                Criar senha
              </Label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-neutral-500" />
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 bg-input-background border-red-900/30 text-white placeholder:text-neutral-600 focus:border-red-600"
                  placeholder="Mínimo 8 caracteres"
                />
              </div>
            </div>

            {/* WhatsApp */}
            <div>
              <Label htmlFor="whatsapp" className="text-white">
                WhatsApp
              </Label>
              <div className="mt-2 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-neutral-500" />
                </div>
                <Input
                  id="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="pl-10 bg-input-background border-red-900/30 text-white placeholder:text-neutral-600 focus:border-red-600"
                  placeholder="(11) 91234-5678"
                />
              </div>
            </div>

            {/* Aceites */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="acceptWhatsapp"
                  checked={formData.acceptWhatsapp}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptWhatsapp: checked as boolean })
                  }
                  className="mt-0.5"
                />
                <Label
                  htmlFor="acceptWhatsapp"
                  className="text-sm text-neutral-300 leading-relaxed cursor-pointer"
                >
                  Aceito receber mensagens e interações via WhatsApp, onde temos nosso
                  assistente de busca
                </Label>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="acceptMarketing"
                  checked={formData.acceptMarketing}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, acceptMarketing: checked as boolean })
                  }
                  className="mt-0.5"
                />
                <Label
                  htmlFor="acceptMarketing"
                  className="text-sm text-neutral-300 leading-relaxed cursor-pointer"
                >
                  Aceito receber e-mail marketing e comunicação
                </Label>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white h-11 relative overflow-hidden group"
            >
              <span className="relative z-10">Criar conta</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-red-900/30" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-neutral-500">Ou continue com</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin('google')}
                className="h-11 border-red-900/30 bg-input-background hover:bg-red-900/10 text-white"
              >
                <Chrome className="h-5 w-5 mr-2" />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin('facebook')}
                className="h-11 border-red-900/30 bg-input-background hover:bg-red-900/10 text-white"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </Button>
            </div>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-neutral-400">
            Já tem uma conta?{' '}
            <a href="#" className="text-red-500 hover:text-red-400 transition-colors">
              Fazer login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

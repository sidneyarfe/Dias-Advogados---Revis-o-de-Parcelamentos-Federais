import React, { useEffect } from 'react';
import { LucideIcon, X } from 'lucide-react';

export const Button: React.FC<{
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}> = ({ children, primary = true, className = '', onClick, fullWidth = false }) => {
  const baseStyle = "font-sans font-bold uppercase tracking-wider py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group cursor-pointer";
  
  const primaryStyle = "bg-brand-gold text-black hover:bg-[#d4b078] shadow-[0_0_20px_rgba(197,160,101,0.4)] hover:shadow-[0_0_30px_rgba(197,160,101,0.6)]";
  const secondaryStyle = "border border-brand-gold text-brand-gold hover:bg-brand-gold/10";
  
  return (
    <button 
      className={`${baseStyle} ${primary ? primaryStyle : secondaryStyle} ${fullWidth ? 'w-full' : ''} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {primary && <div className="absolute inset-0 bg-white/20 translate-y-full skew-y-12 group-hover:translate-y-0 transition-transform duration-500 ease-out" />}
    </button>
  );
};

export const GlassCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  fullHeight?: boolean;
}> = ({ children, className = '', glow = false, fullHeight = false }) => {
  return (
    <div className={`relative ${className} ${fullHeight ? 'h-full' : ''}`}>
      {glow && (
        <div className="absolute -inset-1 bg-brand-gold/20 rounded-2xl blur-xl opacity-50 -z-10" />
      )}
      <div className={`glass-card rounded-2xl p-6 relative z-0 ${fullHeight ? 'h-full' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; icon?: LucideIcon }> = ({ children, icon: Icon }) => {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
      {Icon && <Icon size={12} />}
      {children}
    </div>
  );
};

export const SectionTitle: React.FC<{
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}> = ({ title, subtitle, align = 'center', dark = false }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${dark ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export const CheckItem: React.FC<{ children: React.ReactNode; type?: 'success' | 'danger' | 'neutral' }> = ({ children, type = 'neutral' }) => {
  let colorClass = "text-brand-gold";
  if (type === 'danger') colorClass = "text-red-500";
  if (type === 'success') colorClass = "text-green-500";

  return (
    <div className="flex items-start gap-3 mb-3">
      <span className={`mt-1 text-lg ${colorClass}`}>
        {type === 'danger' ? '❌' : type === 'success' ? '✅' : '✓'}
      </span>
      <p className="text-neutral-300 leading-relaxed">{children}</p>
    </div>
  );
};

export const FormInput: React.FC<{
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  options?: string[];
  required?: boolean;
  error?: string;
}> = ({ label, type = "text", placeholder, value, onChange, options, required, error }) => {
  const baseInput = `w-full bg-white/5 border ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-brand-gold focus:ring-brand-gold'} rounded-lg px-4 py-2.5 md:py-3 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 transition-colors font-sans`;
  
  return (
    <div className="mb-3">
      <label className="block text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1.5">
        {label} {required && <span className="text-brand-gold">*</span>}
      </label>
      {options ? (
        <select className={baseInput} value={value} onChange={onChange}>
          <option value="" disabled>{placeholder || "Selecione..."}</option>
          {options.map(opt => <option key={opt} value={opt} className="bg-deep-carbon text-white">{opt}</option>)}
        </select>
      ) : (
        <input 
          type={type} 
          className={baseInput} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
    </div>
  );
};

export const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 md:top-4 md:right-4 text-neutral-500 hover:text-white transition-colors p-2 z-10 bg-black/20 rounded-full"
        >
          <X size={20} className="md:w-6 md:h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};
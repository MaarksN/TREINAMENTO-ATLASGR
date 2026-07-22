import { ShieldCheck } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="w-full flex flex-col items-center justify-center p-12 bg-white/5 rounded-xl border border-white/10 text-center">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-green-500/20 blur-2xl rounded-full" />
        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center border border-white/10 relative z-10">
          <ShieldCheck className="w-10 h-10 text-green-400" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">Sua operação está sob controle.</h3>
      <p className="text-gray-400 max-w-sm mx-auto">
        Nenhuma não conformidade detectada nas últimas 24h. O Atlas Connect continua monitorando seus veículos em tempo real.
      </p>
    </div>
  );
}

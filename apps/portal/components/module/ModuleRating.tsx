"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function ModuleRating({ onRate }: { onRate?: (rating: number) => void }) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRate = (value: number) => {
    setRating(value);
    setSubmitted(true);
    if (onRate) onRate(value);
  };

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center justify-center p-6 rounded-2xl bg-surface/50 border border-border">
        <span className="text-2xl mb-2">🎉</span>
        <h3 className="text-lg font-bold text-foreground">Obrigado pelo seu feedback!</h3>
        <p className="text-sm text-muted text-center">Isso nos ajuda a melhorar nossos treinamentos.</p>
      </div>
    );
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center p-6 rounded-2xl bg-surface/30 border border-border">
      <h3 className="text-lg font-bold text-foreground mb-4">Como você avalia este módulo?</h3>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.button
            key={star}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleRate(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="focus:outline-none"
            aria-label={`Avaliar ${star} estrelas`}
          >
            <Star
              size={32}
              className={`transition-colors ${
                star <= (hoverRating || rating)
                  ? "fill-atlas-orange text-atlas-orange"
                  : "text-muted"
              }`}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

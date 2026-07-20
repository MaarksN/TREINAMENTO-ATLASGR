"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CertificateInfo, ExamResult, ModuleProgress, RegistrationData } from "./types";
import { BADGES, XP_CERTIFICATE, XP_PER_EXAM_PASS, XP_PER_MODULE, XP_PER_QUIZ_PASS } from "./gamification";

interface OnboardingState {
  registration: RegistrationData | null;
  progress: Record<string, ModuleProgress>;
  xp: number;
  badges: string[];
  streakDays: string[];
  examResult: ExamResult | null;
  certificate: CertificateInfo | null;
  hasHydrated: boolean;

  setHasHydrated: (v: boolean) => void;
  register: (data: RegistrationData) => void;
  clearRegistration: () => void;
  touchStreak: () => void;
  completeModuleQuiz: (slug: string, score: number) => boolean;
  setExamResult: (result: ExamResult) => void;
  issueCertificate: (cert: CertificateInfo) => void;
  addBadge: (id: string) => void;
  resetAll: () => void;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export const useOnboardingStore = create<OnboardingState>()(
  persist(
    (set, get) => ({
      registration: null,
      progress: {},
      xp: 0,
      badges: [],
      streakDays: [],
      examResult: null,
      certificate: null,
      hasHydrated: false,

      setHasHydrated: (v) => set({ hasHydrated: v }),

      register: (data) => {
        set({ registration: data });
        get().touchStreak();
        get().addBadge("primeiro-passo");
      },

      clearRegistration: () => set({ registration: null }),

      touchStreak: () => {
        const key = todayKey();
        set((s) => (s.streakDays.includes(key) ? s : { streakDays: [...s.streakDays, key].slice(-30) }));
        if (get().streakDays.length >= 3) get().addBadge("streak-3");
      },

      completeModuleQuiz: (slug, score) => {
        const passed = score >= 70;
        const prev = get().progress[slug];
        const isFirstPass = passed && !prev?.passed;
        const xpGain = (isFirstPass ? XP_PER_MODULE + XP_PER_QUIZ_PASS : 0) + (score === 100 ? 0 : 0);

        set((s) => ({
          progress: {
            ...s.progress,
            [slug]: {
              completed: passed || !!prev?.completed,
              bestScore: Math.max(score, prev?.bestScore ?? 0),
              passed: passed || !!prev?.passed,
              attempts: (prev?.attempts ?? 0) + 1,
              xpEarned: (prev?.xpEarned ?? 0) + xpGain,
            },
          },
          xp: s.xp + xpGain,
        }));

        get().touchStreak();
        if (score === 100) get().addBadge("nota-maxima");
        if (passed) {
          if (slug === "01-bem-vindo-atlasgr") get().addBadge("modulo-1");
          if (slug === "03-gerenciamento-risco") get().addBadge("guardiao-risco");
          if (slug === "05-software-logistico") get().addBadge("mestre-connect");
        }
        return passed;
      },

      setExamResult: (result) => {
        set((s) => ({ examResult: result, xp: s.xp + (result.passed ? XP_PER_EXAM_PASS : 0) }));
        get().touchStreak();
      },

      issueCertificate: (cert) => {
        set((s) => ({ certificate: cert, xp: s.xp + XP_CERTIFICATE }));
        get().addBadge("certificado");
      },

      addBadge: (id) => {
        if (!BADGES.find((b) => b.id === id)) return;
        set((s) => (s.badges.includes(id) ? s : { badges: [...s.badges, id] }));
      },

      resetAll: () =>
        set({
          registration: null,
          progress: {},
          xp: 0,
          badges: [],
          streakDays: [],
          examResult: null,
          certificate: null,
        }),
    }),
    {
      name: "atlasgr-onboarding-demo",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);

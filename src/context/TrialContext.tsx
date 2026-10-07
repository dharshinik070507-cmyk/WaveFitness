"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FreeTrialModal } from "@/components/FreeTrialModal";

interface TrialContextType {
  isOpen: boolean;
  prefilledPlan?: string;
  prefilledQuizData?: any;
  openTrialModal: (plan?: string, quizData?: any) => void;
  closeTrialModal: () => void;
}

const TrialContext = createContext<TrialContextType | undefined>(undefined);

export function TrialProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [prefilledPlan, setPrefilledPlan] = useState<string | undefined>(undefined);
  const [prefilledQuizData, setPrefilledQuizData] = useState<any>(null);

  const openTrialModal = (plan?: string, quizData?: any) => {
    setPrefilledPlan(plan);
    setPrefilledQuizData(quizData || null);
    setIsOpen(true);
  };

  const closeTrialModal = () => {
    setIsOpen(false);
  };

  return (
    <TrialContext.Provider
      value={{
        isOpen,
        prefilledPlan,
        prefilledQuizData,
        openTrialModal,
        closeTrialModal,
      }}
    >
      {children}
      <FreeTrialModal
        isOpen={isOpen}
        onClose={closeTrialModal}
        prefilledPlan={prefilledPlan}
        prefilledQuizData={prefilledQuizData}
      />
    </TrialContext.Provider>
  );
}

export function useTrial() {
  const context = useContext(TrialContext);
  if (!context) {
    throw new Error("useTrial must be used within a TrialProvider");
  }
  return context;
}

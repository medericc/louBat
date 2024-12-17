"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Définir le type pour le contexte
interface LoaderContextProps {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

// Créer le contexte
const LoaderContext = createContext<LoaderContextProps | undefined>(undefined);

// Fournisseur du contexte
export const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true); // Gestion de l'état du chargement

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

// Hook pour utiliser le contexte dans d'autres composants
export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used within a LoaderProvider");
  }
  return context;
};

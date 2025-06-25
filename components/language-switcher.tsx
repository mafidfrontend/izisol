"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import type { Language } from "@/lib/translations"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "ru" as Language, name: "Русский", flag: "🇷🇺" },
    { code: "uz" as Language, name: "O'zbek", flag: "🇺🇿" },
    { code: "en" as Language, name: "English", flag: "🇺🇸" },
  ]

  const currentLang = languages.find((lang) => lang.code === currentLanguage)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border-2 border-white/60 hover:scale-105 transition-all duration-300"
      >
        <Globe className="w-4 h-4 mr-2 text-[#67c096]" />
        <span className="text-sm font-bold text-gray-800">
          {currentLang?.flag} {currentLang?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border-2 border-white/60 overflow-hidden z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code)
                setIsOpen(false)
              }}
              className={`w-full px-4 py-3 text-left hover:bg-[#bcff58]/20 transition-colors duration-200 flex items-center ${
                currentLanguage === language.code ? "bg-[#bcff58]/30" : ""
              }`}
            >
              <span className="mr-2">{language.flag}</span>
              <span className="text-sm font-medium text-gray-800">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

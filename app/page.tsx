"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Youtube, Globe, FileText, ShoppingBag, Phone, Star, Sparkles, Zap, Rocket } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

export default function LinkInBio() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("ru")

  const t = (key: TranslationKey) => translations[currentLanguage][key]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#bcff58] via-[#67c096] to-[#bcff58] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-4 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-32 right-8 w-12 h-12 bg-[#bcff58]/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-8 w-16 h-16 bg-white/15 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 right-4 w-8 h-8 bg-[#67c096]/30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-2 w-6 h-6 bg-white/20 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-6 py-8 max-w-sm relative z-10">
        {/* Language Switcher */}
        <div className="flex justify-end mb-6">
          <LanguageSwitcher currentLanguage={currentLanguage} onLanguageChange={setCurrentLanguage} />
        </div>

        {/* Profile Section */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-4 -left-4 text-[#bcff58] animate-spin-slow">
            <Sparkles className="w-8 h-8" />
          </div>
          <div className="absolute -top-2 -right-6 text-white animate-bounce">
            <Zap className="w-6 h-6" />
          </div>

          <div className="relative w-28 h-28 mx-auto mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-[#bcff58] to-[#67c096] rounded-full animate-pulse"></div>
            <Image
              src="./6.png"
              alt="Izisol Profile"
              fill
              className="rounded-full object-cover border-4 border-white shadow-2xl relative z-10 transform hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute -bottom-2 -right-2 bg-[#bcff58] rounded-full p-2 shadow-lg animate-bounce">
              <Rocket className="w-4 h-4 text-black" />
            </div>
          </div>

          <h1 className="text-3xl font-black text-white mb-2 font-sans tracking-wide drop-shadow-lg">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">{t("name")}</span>
          </h1>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-white/50">
            <p className="text-gray-800 text-sm leading-relaxed font-medium">🚀 {t("description")}</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-8 transform transition-transform duration-300">
          <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md rounded-3xl p-5 shadow-2xl border-2 border-white/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#bcff58]/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#67c096]/10 rounded-full translate-y-8 -translate-x-8"></div>

            <div className="flex items-center justify-between mb-3 relative z-10">
              <div className="flex text-[#bcff58]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-current animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <div className="bg-[#67c096] text-white px-3 py-1 rounded-full text-xs font-bold">
                {t("happyClients")}
              </div>
            </div>
            <p className="text-gray-800 text-sm italic font-medium relative z-10 mb-2">{t("testimonial")}</p>
            <p className="text-gray-600 text-xs font-semibold relative z-10">{t("testimonialAuthor")}</p>
          </div>
        </div>

        {/* CTA Buttons Section */}
        <div className="space-y-5 mb-8">
          <Link
            href="https://wa.me/+998946602727"
            className="flex items-center justify-center w-full bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#25D366] rounded-3xl p-5 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:rotate-1 active:scale-95 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 rounded-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <Phone className="w-7 h-7 text-white mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
            <span className="text-white font-bold text-xl relative z-10">{t("whatsapp")}</span>
            <div className="absolute right-4 text-white/50 group-hover:text-white transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
          </Link>

          <Link
            href="https://t.me/izisoluz"
            className="flex items-center justify-center w-full bg-gradient-to-r from-white via-gray-50 to-white rounded-3xl p-5 shadow-2xl border-4 border-[#bcff58] hover:shadow-3xl transform hover:scale-110 hover:-rotate-1 active:scale-95 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#bcff58]/5 rounded-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <MessageCircle className="w-7 h-7 text-[#67c096] mr-4 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 relative z-10" />
            <span className="text-black font-bold text-xl relative z-10">{t("telegram")}</span>
            <div className="absolute right-4 text-[#67c096]/50 group-hover:text-[#67c096] transition-colors">
              <Zap className="w-5 h-5" />
            </div>
          </Link>

          <Link
            href="https://izisol.uz"
            className="flex items-center justify-center w-full bg-gradient-to-r from-purple-500 via-purple-600 to-purple-500 rounded-3xl p-5 shadow-2xl hover:shadow-3xl transform hover:scale-110 hover:-rotate-1 active:scale-95 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 rounded-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <Globe className="w-7 h-7 text-white mr-4 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-300 relative z-10" />
            <span className="text-white font-bold text-xl relative z-10">{t("ourWork")}</span>
            <div className="absolute right-4 text-white/50 group-hover:text-white transition-colors">
              <Rocket className="w-5 h-5" />
            </div>
          </Link>

          <Link
            href="https://websol.uz"
            className="flex items-center justify-center w-full bg-gradient-to-r from-[#bcff58] via-[#67c096] to-[#bcff58] rounded-3xl p-6 shadow-2xl hover:shadow-3xl transform hover:scale-115 active:scale-95 transition-all duration-300 group relative overflow-hidden border-4 border-white"
          >
            <div className="absolute inset-0 bg-white/20 rounded-3xl transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            <ShoppingBag className="w-8 h-8 text-black mr-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 relative z-10" />
            <span className="text-black font-black text-xl relative z-10">{t("getQuote")}</span>
            <div className="absolute right-4 text-black/50 group-hover:text-black transition-colors">
              <Sparkles className="w-6 h-6" />
            </div>
          </Link>
        </div>

        {/* Quick Contact */}
        <ContactForm language={currentLanguage} />
      </div>
    </div>
  )
}

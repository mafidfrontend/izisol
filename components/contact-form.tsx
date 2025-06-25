"use client"

import { useState } from "react"
import { submitContactForm } from "@/app/actions"
import { Send, Sparkles } from "lucide-react"
import type { Language, TranslationKey } from "@/lib/translations"
import { translations } from "@/lib/translations"

interface ContactFormProps {
  language: Language
}

export function ContactForm({ language }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")

  const t = (key: TranslationKey) => translations[language][key]

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await submitContactForm(formData)
      setMessage(t("successMessage"))
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
      <div className="bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md rounded-3xl p-6 shadow-2xl border-4 border-white/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#bcff58]/10 rounded-full -translate-y-12 translate-x-12"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-[#67c096]/10 rounded-full translate-y-10 -translate-x-10"></div>

        <div className="flex items-center justify-center mb-4 relative z-10">
          <Sparkles className="w-6 h-6 text-[#bcff58] mr-2 animate-spin" />
          <h3 className="text-xl font-black text-gray-800">{t("startProject")}</h3>
          <Sparkles className="w-6 h-6 text-[#67c096] ml-2 animate-spin" />
        </div>

        <form id="contact-form" action={handleSubmit} className="space-y-4 relative z-10">
          <input
            name="name"
            type="text"
            placeholder={t("yourName")}
            required
            className="w-full px-4 py-3 rounded-2xl border-2 border-[#bcff58]/30 focus:border-[#bcff58] focus:outline-none text-sm font-medium bg-white/80 backdrop-blur-sm shadow-lg transform focus:scale-105 transition-all duration-300"
          />
          <input
            name="email"
            type="email"
            placeholder={t("yourEmail")}
            required
            className="w-full px-4 py-3 rounded-2xl border-2 border-[#67c096]/30 focus:border-[#67c096] focus:outline-none text-sm font-medium bg-white/80 backdrop-blur-sm shadow-lg transform focus:scale-105 transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder={t("projectDescription")}
            rows={4}
            required
            className="w-full px-4 py-3 rounded-2xl border-2 border-[#bcff58]/30 focus:border-[#bcff58] focus:outline-none text-sm resize-none font-medium bg-white/80 backdrop-blur-sm shadow-lg transform focus:scale-105 transition-all duration-300"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#67c096] to-[#bcff58] text-black font-black py-4 rounded-2xl hover:from-[#bcff58] hover:to-[#67c096] transition-all duration-300 disabled:opacity-50 shadow-2xl transform hover:scale-110 active:scale-95 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 rounded-2xl transform scale-0 hover:scale-100 transition-transform duration-500"></div>
            {isSubmitting ? (
              <span className="relative z-10">{t("sendingMagic")}</span>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">{t("sendMessage")}</span>
              </>
            )}
          </button>
        </form>
        {message && (
          <div className="mt-4 text-center relative z-10">
            <div className="bg-[#67c096]/20 border-2 border-[#67c096] rounded-2xl p-3">
              <div className="text-sm text-[#67c096] font-bold">{message}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

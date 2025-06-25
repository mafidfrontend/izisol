"use server"

export async function submitContactForm(formData: FormData) {
  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // In a real app, you'd send this to your email service or database
  console.log("Contact form submission:", { name, email, message })

  return {
    success: true,
    message: "Thank you! We'll get back to you within 24 hours.",
  }
}

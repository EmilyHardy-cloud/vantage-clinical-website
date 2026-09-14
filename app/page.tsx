import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import About from '@/components/about'
import Team from '@/components/team'
import ContactForm from '@/components/contact-form'
import Footer from '@/components/footer'

export default function Page() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Services />
      <About />
      <Team />
      <ContactForm />
      <Footer />
    </main>
  )
}

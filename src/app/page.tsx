"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardSix from '@/components/sections/team/TeamCardSix';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Briefcase, CheckCircle, Settings, Shield, Sparkles, Star, User, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="small"
        sizing="medium"
        background="blurBottom"
        cardStyle="glass-depth"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Experience",          id: "about"},
        {
          name: "Services",          id: "features"},
        {
          name: "Team",          id: "team"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Aura Luxury"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars"}}
      title="Defining Modern Luxury"
      description="Exquisite craftsmanship meets sophisticated design. We curate bespoke experiences for the most discerning clientele."
      buttons={[
        {
          text: "Explore Services",          href: "#features"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/puff-brown-smoke_23-2147734829.jpg"
      imageAlt="Luxury interior design marble textures"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/golden-luxurious-marble-texture-design_23-2149379684.jpg",          alt: "Golden luxurious marble texture design"},
        {
          src: "http://img.b2bpic.net/free-photo/copy-space-plain-white-concrete-surface-background_23-2148402376.jpg",          alt: "Copy space plain white concrete surface background"},
        {
          src: "http://img.b2bpic.net/free-photo/still-life-putting-up-decorative-vinyls_23-2149683442.jpg",          alt: "Still life of putting up decorative vinyls"},
        {
          src: "http://img.b2bpic.net/free-photo/top-view-concrete-surface_23-2148795856.jpg",          alt: "Top view of concrete surface"},
        {
          src: "http://img.b2bpic.net/free-photo/front-view-black-gold-lamp-designed-decorated-exquisite-white-background_140725-15866.jpg",          alt: "A front view black-gold lamp designed"},
      ]}
      avatarText="Trusted by industry leaders globally"
      marqueeItems={[
        {
          type: "text",          text: "Craftsmanship"},
        {
          type: "text",          text: "Innovation"},
        {
          type: "text",          text: "Sophistication"},
        {
          type: "text",          text: "Precision"},
        {
          type: "text",          text: "Exclusivity"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="A Legacy of Perfection"
      metrics={[
        {
          icon: Award,
          label: "Years Experience",          value: "25+"},
        {
          icon: Star,
          label: "Projects Completed",          value: "500+"},
        {
          icon: Shield,
          label: "Client Retention",          value: "98%"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Bespoke Design",          description: "Customized luxury concepts tailored to your exact specifications.",          media: {
            imageSrc: "http://img.b2bpic.net/free-vector/best-quality-high-premium-value-superior-brands-individual-labels-with-royal-crown-emblems-collection-isolated-vector-illustration_1284-2752.jpg",            imageAlt: "Bespoke design"},
          items: [
            {
              icon: Sparkles,
              text: "Personalized"},
            {
              icon: CheckCircle,
              text: "High Quality"},
          ],
          reverse: false,
        },
        {
          title: "Expert Consultation",          description: "Professional guidance from industry pioneers.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/young-female-client-store-is-trying-different-frames-her-small-canvas-is-talking-with-attractive-male-employee_662251-239.jpg",            imageAlt: "Consultation"},
          items: [
            {
              icon: User,
              text: "Expertise"},
            {
              icon: Briefcase,
              text: "Strategy"},
          ],
          reverse: true,
        },
        {
          title: "Seamless Execution",          description: "Flawless delivery and project management.",          media: {
            imageSrc: "http://img.b2bpic.net/free-photo/high-angle-clay-plate-with-pattern_23-2148878470.jpg",            imageAlt: "Execution"},
          items: [
            {
              icon: Settings,
              text: "Process"},
            {
              icon: Zap,
              text: "Speed"},
          ],
          reverse: false,
        },
      ]}
      title="Our Signature Offerings"
      description="Comprehensive solutions tailored to your unique vision, executed with absolute precision."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",          value: "15",          title: "Countries",          description: "Active global presence",          imageSrc: "http://img.b2bpic.net/free-photo/chinese-new-year-2021-minimalist-room_23-2148763956.jpg"},
        {
          id: "m2",          value: "120",          title: "Awards",          description: "Industry recognized excellence",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-modern-female-talking-phone_23-2148415855.jpg"},
        {
          id: "m3",          value: "5k",          title: "Projects",          description: "Successful completions",          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-lifestyle-rich-woman_52683-97508.jpg"},
      ]}
      title="Global Impact"
      description="Measuring our success by the satisfaction of our clients worldwide."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardSix
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      members={[
        {
          id: "t1",          name: "Julian Thorne",          role: "Creative Director",          imageSrc: "http://img.b2bpic.net/free-photo/woman-holding-camera-looking-through-windows_23-2148424385.jpg"},
        {
          id: "t2",          name: "Elena Vance",          role: "Lead Architect",          imageSrc: "http://img.b2bpic.net/free-photo/interior-designer-working-out-office_23-2150379267.jpg"},
        {
          id: "t3",          name: "Marcus Reid",          role: "Client Relations",          imageSrc: "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-isolated-dark-background_613910-17885.jpg"},
      ]}
      title="The Masters Behind Aura"
      description="Meet our team of experts dedicated to your success."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sophia L.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-two-young-businesswomen-having-meeting-shaking-hands-hotel-lobby-business-travel-concept_58466-11961.jpg"},
        {
          id: "2",          name: "James M.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-young-business-woman_158595-4753.jpg"},
        {
          id: "3",          name: "Linda K.",          imageSrc: "http://img.b2bpic.net/free-photo/clothing-store-worker-helping-woman-choose-from-stylish-selection-clothes_482257-109184.jpg"},
        {
          id: "4",          name: "Robert B.",          imageSrc: "http://img.b2bpic.net/free-photo/middle-age-businessman-smiling-happy-standing-city_839833-25759.jpg"},
        {
          id: "5",          name: "Alice T.",          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-smiling-blonde-fashion-model-sits-white-suit-soft-armchair_8353-5476.jpg"},
      ]}
      cardTitle="Client Voices"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="socialproof" data-section="socialproof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Microsoft",        "Google",        "Apple",        "Tesla",        "Amazon",        "Nike",        "Adidas"]}
      title="Trusted Partners"
      description="Leading global brands trust us to deliver exceptional results."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "How do we start?",          content: "Simply fill out our contact form and our team will reach out."},
        {
          id: "2",          title: "Is the design bespoke?",          content: "Every project is uniquely crafted to your vision."},
        {
          id: "3",          title: "Do you work globally?",          content: "Yes, we operate internationally."},
      ]}
      sideTitle="Common Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Get In Touch"
      title="Start Your Journey"
      description="Connect with us to begin crafting your next premium project."
      imageSrc="http://img.b2bpic.net/free-photo/boss-studying-reports-gadgets-screen_1262-18148.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",              href: "#features"},
            {
              label: "About Us",              href: "#about"},
          ],
        },
        {
          items: [
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy",              href: "#"},
          ],
        },
      ]}
      logoText="Aura Luxury"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}

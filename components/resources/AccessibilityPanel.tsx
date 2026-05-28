'use client'

import React, { useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

type Resource = {
  name: string
  url: string
  desc: string
  cat: string
  tag: string
  emoji: string
}

const CATEGORIES = [
  'All',
  'Screen Readers',
  'Speech → Text',
  'Reading Support',
  'Captions & Audio',
  'Motor & Navigation',
  'Focus & Organization',
  'All-in-One Suites',
] as const

const RESOURCES: Resource[] = [
  // 🧠 Screen Readers
  { name: 'NVDA (Windows)', url: 'https://www.nvaccess.org/', desc: 'Free, open-source screen reader for Windows.', cat: 'Screen Readers', tag: 'Free', emoji: '🧠' },
  { name: 'VoiceOver (Apple)', url: 'https://www.apple.com/accessibility/voiceover/', desc: 'Built-in screen reader for macOS and iOS.', cat: 'Screen Readers', tag: 'Built-in', emoji: '🍎' },
  { name: 'TalkBack (Android)', url: 'https://support.google.com/accessibility/android/answer/6283677', desc: 'Android’s integrated screen reader.', cat: 'Screen Readers', tag: 'Built-in', emoji: '🤖' },
  { name: 'ChromeVox (Chromebook)', url: 'https://chrome.google.com/accessibility', desc: 'Screen reader for ChromeOS and Chrome.', cat: 'Screen Readers', tag: 'Free', emoji: '💻' },

  // 🧩 Speech-to-Text
  { name: 'Windows Speech Recognition', url: 'https://support.microsoft.com/en-us/topic/use-speech-recognition-in-windows', desc: 'Voice typing and commands in Windows.', cat: 'Speech → Text', tag: 'Built-in', emoji: '🪟' },
  { name: 'Apple Dictation', url: 'https://support.apple.com/guide/iphone/dictate-text-iph2c0a0d4c/ios', desc: 'Dictation on macOS and iOS, anywhere you can type.', cat: 'Speech → Text', tag: 'Built-in', emoji: '🎙️' },
  { name: 'Google Voice Typing', url: 'https://support.google.com/docs/answer/4492226', desc: 'Voice typing in Google Docs and on Android.', cat: 'Speech → Text', tag: 'Free', emoji: '🗣️' },

  // 📖 Reading Support
  { name: 'Immersive Reader', url: 'https://www.microsoft.com/en-us/education/products/learning-tools', desc: 'Reads text aloud, syllables, spacing, color themes.', cat: 'Reading Support', tag: 'Free', emoji: '📖' },
  { name: 'BeeLine Reader', url: 'https://www.beelinereader.com/', desc: 'Color gradients that guide the eyes while reading.', cat: 'Reading Support', tag: 'Freemium', emoji: '🌈' },
  { name: 'Rewordify', url: 'https://rewordify.com/', desc: 'Simplifies complex English for comprehension.', cat: 'Reading Support', tag: 'Free', emoji: '📝' },
  { name: 'Natural Reader', url: 'https://www.naturalreaders.com/', desc: 'Natural-sounding text-to-speech for docs & web.', cat: 'Reading Support', tag: 'Freemium', emoji: '🔊' },

  // 🎧 Captions & Audio
  { name: 'YouTube Captions', url: 'https://support.google.com/youtube/answer/2734796', desc: 'Auto-captions with editing for accuracy.', cat: 'Captions & Audio', tag: 'Free', emoji: '🎬' },
  { name: 'Otter.ai', url: 'https://otter.ai/', desc: 'Real-time transcription for classes & meetings.', cat: 'Captions & Audio', tag: 'Freemium', emoji: '🦦' },
  { name: 'Web Captioner', url: 'https://webcaptioner.com/', desc: 'Live captions in your browser—no install.', cat: 'Captions & Audio', tag: 'Free', emoji: '💬' },
  { name: 'Descript', url: 'https://www.descript.com/', desc: 'Edit audio/video by editing the transcript.', cat: 'Captions & Audio', tag: 'Paid', emoji: '✂️' },

  // 🖱️ Motor & Navigation
  { name: 'Windows Ease of Access', url: 'https://support.microsoft.com/en-us/accessibility', desc: 'On-screen keyboard, Sticky Keys, magnifier, more.', cat: 'Motor & Navigation', tag: 'Built-in', emoji: '🧩' },
  { name: 'Apple Switch Control', url: 'https://www.apple.com/accessibility/switch-control/', desc: 'Control iOS/macOS with switches or devices.', cat: 'Motor & Navigation', tag: 'Built-in', emoji: '🎛️' },
  { name: 'Click2Speak', url: 'https://www.click2speak.net/', desc: 'On-screen keyboard with word prediction.', cat: 'Motor & Navigation', tag: 'Freemium', emoji: '⌨️' },
  { name: 'EyeGaze Edge', url: 'https://eyegaze.com/', desc: 'Control a computer using only your eyes.', cat: 'Motor & Navigation', tag: 'Hardware', emoji: '👀' },

  // 🧩 Focus & Organization
  { name: 'Todoist', url: 'https://todoist.com/', desc: 'Simple task manager with reminders & priorities.', cat: 'Focus & Organization', tag: 'Freemium', emoji: '✅' },
  { name: 'Forest', url: 'https://www.forestapp.cc/', desc: 'Stay focused by growing a virtual tree.', cat: 'Focus & Organization', tag: 'Paid', emoji: '🌳' },
  { name: 'MindMeister', url: 'https://www.mindmeister.com/', desc: 'Mind mapping for study plans and brainstorming.', cat: 'Focus & Organization', tag: 'Freemium', emoji: '🧭' },
  { name: 'Freedom', url: 'https://freedom.to/', desc: 'Blocks distracting apps and sites on a schedule.', cat: 'Focus & Organization', tag: 'Paid', emoji: '🛡️' },

  // ❤️ All-in-One Suites
  { name: 'Kurzweil 3000', url: 'https://www.kurzweiledu.com/', desc: 'Comprehensive literacy & learning platform.', cat: 'All-in-One Suites', tag: 'Paid', emoji: '📚' },
  { name: 'Read&Write (Texthelp)', url: 'https://www.texthelp.com/en-us/products/read-write/', desc: 'Reading, writing, research support in one tool.', cat: 'All-in-One Suites', tag: 'Freemium', emoji: '🧰' },
]

const Accessibility: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const slidesRef = useRef<HTMLDivElement | null>(null)
  const resourcesRef = useRef<HTMLDivElement | null>(null)
  const helpRef = useRef<HTMLDivElement | null>(null)

  const [active, setActive] = useState<(typeof CATEGORIES)[number]>('All')

  const filtered = useMemo(
    () => (active === 'All' ? RESOURCES : RESOURCES.filter((r) => r.cat === active)),
    [active]
  )

  useGSAP(() => {
    ;[heroRef, slidesRef, resourcesRef, helpRef].forEach((ref) => {
      if (!ref.current) return
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', toggleActions: 'play none none none' },
        }
      )
    })
  }, [])

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        ref={heroRef}
        className="max-w-6xl mx-auto mb-10 bg-white/70 backdrop-blur-sm rounded-3xl p-10 shadow-xl text-center"
      >
        <h1 className="text-4xl font-bold text-primary mb-4">Accessibility Tools & Support</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We believe every learner deserves easy access to education. Explore tools that help students thrive, regardless of ability or background.
        </p>
      </section>

      {/* Accessible Learning Workshop Slides */}
      <section
        ref={slidesRef}
        className="max-w-6xl mx-auto mb-12 bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center"
      >
        <h2 className="text-2xl font-semibold text-primary mb-6">Accessible Learning Workshop Slides</h2>

        <div className="relative w-full overflow-hidden rounded-xl border border-blue-100 shadow-inner">
          <div className="aspect-[16/9]">
            <iframe
              src="https://docs.google.com/presentation/d/e/2PACX-1vRgOLcPzZhSI7gWKCSkU_VssZLOq0HpfiSEqQFMiLGTwTYSzvXPDf76N-_LEHRZJ9jyt22JsckLhW6c/pubembed?start=false&loop=false&delayms=3000"
              allowFullScreen
              className="w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>

        <p className="text-muted-foreground mt-4 text-sm">
          Presentation by GRMR on building inclusive classrooms and leveraging accessibility tools.
        </p>
      </section>

      {/* Accessibility Resources */}
      <section ref={resourcesRef} className="max-w-6xl mx-auto mb-10 px-4">
        <header className="text-center mb-6">
          <h2 className="text-3xl font-bold text-primary">Accessibility Tools & Assistive Tech</h2>
          <p className="text-gray-700 mt-2">
            Free and trusted tools to support reading, writing, focus, and communication for learners of all abilities.
          </p>
        </header>

        {/* Category Pills */}
        <div
          role="tablist"
          aria-label="Filter resources by category"
          className="flex flex-wrap justify-center gap-2 mb-6"
        >
          {CATEGORIES.map((cat) => {
            const selected = active === cat
            return (
              <button
                key={cat}
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${cat}`}
                onClick={() => setActive(cat)}
                className={[
                  'px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
                  selected ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400',
                  'motion-reduce:transition-none',
                ].join(' ')}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Resource Grid */}
        <div
          id={`panel-${active}`}
          role="tabpanel"
          tabIndex={0}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((r) => (
            <article
              key={r.name}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow motion-reduce:transition-none"
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="text-2xl leading-none" aria-hidden>
                    {r.emoji}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      <a href={r.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {r.name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-3">
                      <span className="inline-flex items-center rounded-full bg-purple-50 px-2 py-0.5 text-xs font-medium text-purple-700">
                        {r.cat}
                      </span>
                      <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
                        {r.tag}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Tip: Many of these tools are already built into student devices (Apple/Android/Windows). Check “Accessibility” in device settings.
        </p>
      </section>

      {/* Help */}
      <section
        ref={helpRef}
        className="max-w-6xl mx-auto bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg text-center"
      >
        <h2 className="text-2xl font-semibold text-primary mb-3">Need Help Choosing a Tool?</h2>
        <p className="text-muted-foreground mb-5">
          Tell us about your student’s needs and device. We’ll suggest a simple setup that works.
        </p>
        <Link
          href="mailto:education@grmruf.org"
          className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 shadow-md hover:shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:scale-[1.03] transform transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  )
}

export default Accessibility
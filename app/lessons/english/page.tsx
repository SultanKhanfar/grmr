'use client';

import Link from "next/link";
import { useState } from "react";
import { BookOpen, FileText, Sparkles } from "lucide-react";

type LessonFormat = "slides" | "powerpoint" | "pdf";

type Lesson = {
  title: string;
  benchmark: string;
  description: string;
  fileId: string;
  format: LessonFormat;
};

type GradeBand = {
  label: string;
  subtitle: string;
  description: string;
  gradient: string;
  border: string;
  lessons: Lesson[];
};

const getLessonUrl = ({ fileId, format }: Lesson) =>
  format === "slides"
    ? `https://docs.google.com/presentation/d/${fileId}/export/pdf`
    : `/lessons/english-pdfs/${fileId}.pdf`;

const getPreviewImageUrl = ({ fileId, format }: Lesson) =>
  format === "slides"
    ? `https://docs.google.com/presentation/d/${fileId}/export/png`
    : `/lessons/english-previews/${fileId}.png`;

const gradeBands: GradeBand[] = [
  {
    label: "K-2",
    subtitle: "Grammar foundations",
    description:
      "Early language lessons build confidence with capitalization, nouns, sentences, agreement, pronouns, punctuation, and other essential grammar skills.",
    gradient: "from-amber-50 via-orange-50 to-rose-50",
    border: "border-amber-100",
    lessons: [
      {
        title: "Let's Build a Story",
        benchmark: "ELA.K.R.1.1-1.3 / ELA.1.R.1.1-1.3",
        description:
          "Explore characters, setting, events, and key details while learning how stories are structured and brought to life.",
        fileId: "1HEUZ025xGQmBO1PTcE5rEn9RVV2YvzRpy7oERdfnyI4",
        format: "slides",
      },
      {
        title: "Let's Learn Poetry",
        benchmark: "ELA.K.R.1.4 / ELA.1.R.1.4",
        description:
          "Discover rhyme, rhythm, repeated words, and other features that help young readers understand and enjoy poetry.",
        fileId: "1p0VknT4Zf0yiE77bV7O6ikhF-yM21v8xv_ODVISfWhw",
        format: "slides",
      },
      {
        title: "Descriptive Words",
        benchmark: "ELA.K.R.3.1 / ELA.1.R.3.1",
        description:
          "Identify and explain descriptive words that help readers imagine people, places, objects, and events.",
        fileId: "1HnRzQr3qLPZqShAcE2vF5XkPi07ZruQO",
        format: "powerpoint",
      },
      {
        title: "Capitalization",
        benchmark: "ELA.K.C.3.1",
        description:
          "Practice using capital letters at the beginning of sentences and for names and other proper nouns.",
        fileId: "1LhUEU_FiH5oQOl1Ul7VBK-kEj3H1ivBj2xT7LmAzXME",
        format: "slides",
      },
      {
        title: "Plural Nouns and Asking Questions",
        benchmark: "ELA.K.C.3.1",
        description:
          "Build simple plural nouns and form clear questions using age-appropriate sentence patterns.",
        fileId: "1Sp_Uu8vhfjhcJg2ou-GxUGOT66XBXte0Ms-viU1ErtY",
        format: "slides",
      },
      {
        title: "Simple Sentences and Possessives",
        benchmark: "ELA.1.C.3.1",
        description:
          "Construct complete simple sentences and use possessive forms to show ownership.",
        fileId: "1_f1OKMoP_t-oJmp6e09NlUVEWq-cSO9j",
        format: "powerpoint",
      },
      {
        title: "Past-Tense Verbs with -ed",
        benchmark: "ELA.1.C.3.1",
        description:
          "Practice forming and using regular past-tense verbs by adding -ed to describe completed actions.",
        fileId: "1agg8Kmsuslok44x_EFbziZw_xK2mKYvb",
        format: "pdf",
      },
      {
        title: "Proper Nouns",
        benchmark: "ELA.1.C.3.1",
        description:
          "Identify proper nouns and capitalize specific names of people, places, organizations, and things.",
        fileId: "1ayeCgkKFw1YVL4L1dlbww3u24zHm3Jsx",
        format: "pdf",
      },
      {
        title: "Subject-Verb Agreement",
        benchmark: "ELA.1.C.3.1",
        description:
          "Match singular and plural subjects with the correct verb forms in complete sentences.",
        fileId: "1gcZANDweHaUWUQ832ul0ybl8bVx_ZR9C",
        format: "powerpoint",
      },
      {
        title: "Using Pronouns",
        benchmark: "ELA.2.C.3.1",
        description:
          "Choose pronouns that clearly replace nouns and agree with the people or things they describe.",
        fileId: "1DRXcD-8BxRiaR_lLrseno3hmMEF6mQN1hjT8F-AWoCc",
        format: "slides",
      },
      {
        title: "Apostrophes in Contractions",
        benchmark: "ELA.2.C.3.1",
        description:
          "Combine words into contractions and place apostrophes where letters have been removed.",
        fileId: "1DFZyUD5KfKpgn4M-dPllOIoJzMtAldxKvQX1rHgPwfU",
        format: "slides",
      },
      {
        title: "Commas in a Series",
        benchmark: "ELA.2.C.3.1",
        description:
          "Use commas to separate three or more words or phrases in a list.",
        fileId: "1te5ImZyNUk0MjvJw2UfJLNif31mZSD2lil2e4Azqb3Q",
        format: "slides",
      },
      {
        title: "Using Interjections",
        benchmark: "ELA.2.C.3.1",
        description:
          "Recognize and use interjections to express emotion while applying appropriate punctuation.",
        fileId: "1ZrFybpe-SQ-l51H6WFSO8u-v6prbHC_cULTJOB780Jc",
        format: "slides",
      },
      {
        title: "Plural Possessives",
        benchmark: "ELA.2.C.3.1",
        description:
          "Use apostrophes correctly to show ownership when a noun names more than one person or thing.",
        fileId: "1b7-L7pdjazlcbIVHTxa8V22YtfYY3AZYyvAoghVXdbQ",
        format: "slides",
      },
    ],
  },
  {
    label: "3-5",
    subtitle: "Grammar and sentence development",
    description:
      "Elementary lessons strengthen sentence structure, verb tense, punctuation, modifiers, conjunctions, clauses, and increasingly precise written expression.",
    gradient: "from-emerald-50 via-teal-50 to-cyan-50",
    border: "border-emerald-100",
    lessons: [
      {
        title: "Rhyme and Poems",
        benchmark: "ELA.2.R.1.4 / ELA.3.R.1.4",
        description:
          "Examine rhyme, rhythm, stanzas, and poetic language to explain how poems create meaning and feeling.",
        fileId: "10Bz4S6PfGMNCJQxRZctjoEDlbyIxg5kW",
        format: "powerpoint",
      },
      {
        title: "Figurative Language",
        benchmark: "ELA.2.R.3.1 / ELA.3.R.3.1",
        description:
          "Recognize and explain figurative language that authors use to create comparisons, imagery, and emphasis.",
        fileId: "155BVFUpES3x1SO-2XT0c4-aW1kISC78H",
        format: "powerpoint",
      },
      {
        title: "Text Features",
        benchmark: "ELA.2.R.2.1 / ELA.3.R.2.1",
        description:
          "Use headings, captions, diagrams, labels, and other text features to locate and understand information.",
        fileId: "1EcnDHjQcMFjXrlmB0NLCYoP7Vji9kgz0",
        format: "powerpoint",
      },
      {
        title: "Main Idea and Author's Purpose",
        benchmark: "ELA.2.R.2.2-2.4 / ELA.3.R.2.2-2.4",
        description:
          "Determine a text's main idea, supporting details, organizational structure, and the author's purpose for writing.",
        fileId: "1wjKrVhHFZ6pz2ikBQ8diO4a-kIMN1M8E",
        format: "powerpoint",
      },
      {
        title: "How a Story Works",
        benchmark: "ELA.4.R.1.1 / ELA.5.R.1.1",
        description:
          "Analyze how setting, characters, plot, conflict, and point of view work together to shape a story.",
        fileId: "1HtGxlGQt1Hr5yi2wT7bR8iOxQmysWZQu",
        format: "powerpoint",
      },
      {
        title: "How Poets Create Meaning",
        benchmark: "ELA.4.R.1.4 / ELA.5.R.1.4",
        description:
          "Analyze poetic structure, imagery, figurative language, and sound devices to explain a poem's meaning and tone.",
        fileId: "1kqSRl163PQVxfu9roWznwndgysoTDYUi",
        format: "powerpoint",
      },
      {
        title: "Compound Sentences",
        benchmark: "ELA.3.C.3.1",
        description:
          "Join related independent clauses to form clear compound sentences with appropriate conjunctions and punctuation.",
        fileId: "11CedEnJ83CByNOuOFM18aHL2haiM_MSiLUQ1kUqN3DA",
        format: "slides",
      },
      {
        title: "Regular and Irregular Verb Tenses",
        benchmark: "ELA.3.C.3.1",
        description:
          "Conjugate regular and irregular verbs accurately across common past, present, and future forms.",
        fileId: "1rAG0Un0dWVMH1rU-nOWdvFBVzMdsENlMQhH_5WdWM0o",
        format: "slides",
      },
      {
        title: "Progressive and Perfect Verb Tenses",
        benchmark: "ELA.3.C.3.1",
        description:
          "Form progressive and perfect verb tenses to describe continuing and completed actions.",
        fileId: "1EwRdKWBbtn7_GyPs7r-50x5A0KtRCkMlMvag_fLyIS0",
        format: "slides",
      },
      {
        title: "Plural Nouns: Y to IES",
        benchmark: "ELA.3.C.3.1",
        description:
          "Apply spelling rules for changing nouns ending in consonant-y into their plural forms.",
        fileId: "1Z67XaoJdXTcx9OibzjLzqcuW4sjBYZ3gLXzxPA_8WuE",
        format: "slides",
      },
      {
        title: "Irregular Past-Tense Verbs",
        benchmark: "ELA.3.C.3.1",
        description:
          "Recognize and correctly use frequently occurring irregular verbs in the past tense.",
        fileId: "1bHId_KwyUQAPRayhFXQlHefJl3kkBF7jXYRJGtUctKs",
        format: "slides",
      },
      {
        title: "Commas for Direct Address",
        benchmark: "ELA.3.C.3.1",
        description:
          "Use commas to separate a person's name or title when speaking directly to them.",
        fileId: "1hMD13FwGCGEZ4JgFx8pr0TmPNvkzVBGtoQ-8hnupGYU",
        format: "slides",
      },
      {
        title: "Prepositions and Prepositional Phrases",
        benchmark: "ELA.3.C.3.1",
        description:
          "Identify prepositions and use prepositional phrases to add detail about time, place, and direction.",
        fileId: "17FXuoRrXQI_nlK5pwLVnR74HBxo2lR4wv9Kw0A4cylQ",
        format: "slides",
      },
      {
        title: "Quotation Marks and Dialogue",
        benchmark: "ELA.3.C.3.1",
        description:
          "Punctuate dialogue and direct quotations with quotation marks, commas, and end punctuation.",
        fileId: "1Yg3LJTXMWr-v3Mi9SNTgqCRcvhB02OL3AumyomosEo0",
        format: "slides",
      },
      {
        title: "Using Simple Modifiers",
        benchmark: "ELA.3.C.3.1",
        description:
          "Use adjectives and adverbs to make sentences more specific, vivid, and informative.",
        fileId: "1L4om5XU2kBKtv1OV-6HAA4FxjU8egpwlSyV1tFxPiZM",
        format: "slides",
      },
      {
        title: "Irregular Plural Nouns",
        benchmark: "ELA.3.C.3.1",
        description:
          "Learn common plural nouns that do not follow standard spelling patterns.",
        fileId: "1mi_ZFgvZo566WUD1q1g3HdQqGO7qaiOcuUltM7CwbT0",
        format: "slides",
      },
      {
        title: "Complete Sentences",
        benchmark: "ELA.4.C.3.1",
        description:
          "Distinguish complete sentences from fragments and revise writing to express complete thoughts.",
        fileId: "1dA5FxLjKKUwMTFkNcq_axLp_7uEHebJ4",
        format: "powerpoint",
      },
      {
        title: "Conjunctions",
        benchmark: "ELA.4.C.3.1",
        description:
          "Use coordinating and subordinating conjunctions to connect words, phrases, and clauses.",
        fileId: "1CWdx61w8l1LRBaNzKqkq8GaW47XiqP-a",
        format: "powerpoint",
      },
      {
        title: "Subject-Verb Agreement",
        benchmark: "ELA.4.C.3.1",
        description:
          "Maintain subject-verb agreement in sentences with increasingly complex subjects and verb phrases.",
        fileId: "1ZhIZmUVCSpuMtAe7dXuoYs9802gxVR0-",
        format: "powerpoint",
      },
      {
        title: "Conjunctions",
        benchmark: "ELA.5.C.3.1",
        description:
          "Select conjunctions that clearly express relationships among ideas in grade-level writing.",
        fileId: "1OEECa6vLqiPNjM6zmeVyPPP2M6UuOb9Z",
        format: "powerpoint",
      },
      {
        title: "Modal Verbs",
        benchmark: "ELA.5.C.3.1",
        description:
          "Use modal verbs such as can, may, must, should, and will to express possibility, ability, and obligation.",
        fileId: "19MwrTFevxfEpT8lGFtKQeMSsmSREvQru",
        format: "powerpoint",
      },
      {
        title: "Consistent Verb Tense",
        benchmark: "ELA.5.C.3.1",
        description:
          "Recognize and correct inappropriate shifts in verb tense within sentences and longer passages.",
        fileId: "1huzatUZTtUxgJHh3dq1xhjM2fzVlRf8N",
        format: "powerpoint",
      },
      {
        title: "Appositives and Clauses",
        benchmark: "ELA.5.C.3.1",
        description:
          "Use appositives, main clauses, and subordinate clauses to add detail and create varied sentences.",
        fileId: "1MdPLwx5R_qBTtIkh5Bj2m_YJpQ4yULkk",
        format: "powerpoint",
      },
    ],
  },
  {
    label: "6-8",
    subtitle: "Advanced grammar and style",
    description:
      "Middle school lessons refine grammar, sentence variety, verbals, modifiers, voice, mood, and punctuation for clear and effective academic writing.",
    gradient: "from-violet-50 via-purple-50 to-fuchsia-50",
    border: "border-violet-100",
    lessons: [
      {
        title: "Verbals, Adjectives, and Pronouns",
        benchmark: "ELA.6.C.3.1",
        description:
          "Strengthen writing by using verbals, descriptive adjectives, and clear pronoun forms accurately.",
        fileId: "1NUDMgZaQkkeDF9slYIoYVeH73dqtoDQSvgTMHLVFtlg",
        format: "slides",
      },
      {
        title: "Grammar and Sentence Variety",
        benchmark: "ELA.7.C.3.1",
        description:
          "Create varied, purposeful sentences while applying grade-level grammar and usage conventions.",
        fileId: "1eEbNRHy5HtWGA0b-QWFuleHAwHXuipizkPUGeVYqLko",
        format: "slides",
      },
      {
        title: "Mastering the Semicolon",
        benchmark: "ELA.8.C.3.1",
        description:
          "Use semicolons to connect closely related independent clauses and organize complex lists.",
        fileId: "1npFM2ySAYK7ocOAJAaIU5G7ZllOVrjvBVU_CORMhrw0",
        format: "slides",
      },
      {
        title: "Mastering Voice and Mood",
        benchmark: "ELA.8.C.3.1",
        description:
          "Recognize and use active and passive voice as well as indicative, imperative, interrogative, conditional, and subjunctive moods.",
        fileId: "1sP2B8vv_QehwXAsK9xWRQtMOeLji7QkzomA721pNYC4",
        format: "slides",
      },
    ],
  },
];

export default function EnglishLessonsPage() {
  const [activeBandLabel, setActiveBandLabel] = useState(gradeBands[0].label);
  const activeBand =
    gradeBands.find((band) => band.label === activeBandLabel) ?? gradeBands[0];

  return (
    <main className="min-h-screen">
      <section className="px-4 pb-16 pt-10 md:px-6 md:pt-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex w-full flex-col items-center justify-center rounded-3xl border border-white/70 bg-white/70 p-7 text-center shadow-lg backdrop-blur-sm md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Built on Florida CPALMS Standards
              </span>
            </div>
            <h1 className="text-4xl font-semibold text-primary md:text-5xl">
              English Lessons
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
              Explore standards-aligned grammar and writing lessons organized by
              grade band. Open any lesson deck as a PDF for instruction,
              practice, and review.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-lg backdrop-blur-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-primary/10 p-2 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-gray-900">Grade bands</h2>
                    <p className="text-sm text-gray-500">Choose a level</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {gradeBands.map((band) => {
                    const isActive = band.label === activeBand.label;

                    return (
                      <button
                        key={band.label}
                        type="button"
                        onClick={() => setActiveBandLabel(band.label)}
                        className={`w-full rounded-xl border px-4 py-3 text-left transition-all ${
                          isActive
                            ? "border-primary bg-primary text-white shadow-sm"
                            : "border-gray-200 bg-white text-gray-900 hover:border-primary/30 hover:bg-primary/5"
                        }`}
                        aria-pressed={isActive}
                      >
                        <div className="text-xl font-semibold">{band.label}</div>
                        <div
                          className={`mt-0.5 text-sm ${
                            isActive ? "text-white/90" : "text-gray-600"
                          }`}
                        >
                          {band.subtitle}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            <section
              key={activeBand.label}
              className={`rounded-3xl border ${activeBand.border} bg-gradient-to-br ${activeBand.gradient} p-6 shadow-lg md:p-8`}
            >
              <div className="mb-8">
                <div className="mb-4 inline-flex items-center gap-3 rounded-2xl border border-white/70 bg-white/80 px-4 py-2 shadow-sm">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <span className="text-2xl font-semibold text-primary">
                    {activeBand.label}
                  </span>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                  {activeBand.subtitle}
                </h2>
                <p className="mt-3 max-w-3xl leading-7 text-gray-700">
                  {activeBand.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {activeBand.lessons.map((lesson) => {
                  const lessonUrl = getLessonUrl(lesson);

                  return (
                    <div
                      key={`${activeBand.label}-${lesson.fileId}`}
                      className="overflow-hidden rounded-3xl border border-white/80 bg-white/85 shadow-md backdrop-blur-sm"
                    >
                      <div className="grid grid-cols-1 gap-0 xl:grid-cols-[1.05fr_0.95fr]">
                        <div className="p-6 md:p-7">
                          <div className="mb-4 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                              {lesson.benchmark}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                              B.E.S.T.-Aligned Lesson
                            </span>
                          </div>

                          <h3 className="mb-3 text-2xl font-semibold text-gray-900">
                            {lesson.title}
                          </h3>
                          <p className="mb-6 leading-7 text-gray-600">
                            {lesson.description}
                          </p>

                          <div>
                            <Link
                              href={lessonUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                              <FileText className="h-4 w-4" />
                              Open Lesson Deck
                            </Link>
                          </div>
                        </div>

                        <div className="border-t border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 md:p-6 xl:border-l xl:border-t-0">
                          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                            <div className="aspect-video w-full">
                              <Link
                                href={lessonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full bg-gray-100"
                                aria-label={`Open the ${lesson.title} lesson deck`}
                              >
                                <img
                                  className="h-full w-full object-cover object-top"
                                  src={getPreviewImageUrl(lesson)}
                                  alt={`First slide of the ${lesson.title} lesson deck`}
                                  loading="lazy"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

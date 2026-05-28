'use client';

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, FileText, PlayCircle, Calculator, Sparkles } from "lucide-react";

type Lesson = {
  title: string;
  benchmark: string;
  description: string;
  powerpointUrl: string;
  powerpointEmbedUrl: string;
  khanVideoUrl?: string;
  notes?: string;
};

type GradeBand = {
  label: string;
  subtitle: string;
  description: string;
  gradient: string;
  border: string;
  lessons: Lesson[];
};

export default function MathLessonsPage() {
  const gradeBands: GradeBand[] = [
    {
      label: "K–2",
      subtitle: "Foundational numeracy",
      description:
        "Early math lessons focused on counting, place value, addition, subtraction, shapes, and building confidence with core number sense.",
      gradient: "from-sky-50 via-blue-50 to-indigo-50",
      border: "border-sky-100",
      lessons: [
        {
          title: "Money",
          benchmark: "MA.1.M.2",
          description:
            "Introduce basic money concepts including counting coins and simple transactions appropriate for grade 1 learners.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1lsxMkmrP9Sela9SeCuhEBRadyIfbL1IJ0iPjL1jZc6c/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1lsxMkmrP9Sela9SeCuhEBRadyIfbL1IJ0iPjL1jZc6c/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.1.M#MA.1.M.2",
          notes: "",
        },
        {
          title: "Basics of Time",
          benchmark: "MA.1.M.2",
          description:
            "Explore telling time to the hour and half-hour and using time in simple word problems for early elementary students.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1JidMBMfKc-N_IPbD9LkzRd1i3EmJQ5OW7tl2xjgT5qI/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1JidMBMfKc-N_IPbD9LkzRd1i3EmJQ5OW7tl2xjgT5qI/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.1.M#MA.1.M.2",
          notes: "",
        },
        {
          title: "Fraction of Shapes",
          benchmark: "MA.2.FR.1",
          description:
            "Introduce partitioning shapes and identifying simple fractions of whole shapes for grade 2 learners.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1UtVT73bU7FVAQeSWoy8YZ8pdLQz0KFgDndvvKa4zm6Y/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1UtVT73bU7FVAQeSWoy8YZ8pdLQz0KFgDndvvKa4zm6Y/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.2.FR#MA.2.FR.1",
          notes: "",
        },
        {
          title: "Regrouping",
          benchmark: "MA.2.NSO.2",
          description:
            "Practice regrouping (place value exchanges) for addition and subtraction to build fluency with multi-digit computation.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/10Vuc8TVvHtbKB6F-KteHJrvO0_wzpEXJt3cO6LIBYvQ/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/10Vuc8TVvHtbKB6F-KteHJrvO0_wzpEXJt3cO6LIBYvQ/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.2.NSO#MA.2.NSO.2",
          notes: "",
        },
        {
          title: "Subtraction",
          benchmark: "MA.K.AR.2 / MA.1.AR.1 / MA.2.AR.1",
          description:
            "Develop subtraction strategies across K–2 using visual models, number stories, and basic facts.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1iFnFYgKcBf-elKeXW8Pur5YPzRpJQ0w0JsPr4tc1Bl0/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1iFnFYgKcBf-elKeXW8Pur5YPzRpJQ0w0JsPr4tc1Bl0/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.2.AR",
          notes: "",
        },
        {
          title: "Addition",
          benchmark: "MA.K.AR.2 / MA.1.NSO.2",
          description:
            "Practice addition strategies and number combinations using manipulatives and visual models for early grades.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1349D8ddsTHdU1e7S2mIwcI33kLFxyexmijvKUp7jowU/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1349D8ddsTHdU1e7S2mIwcI33kLFxyexmijvKUp7jowU/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.K.AR#MA.K.AR.2",
          notes: "",
        },
        {
          title: "Intro to Shapes",
          benchmark: "MA.K.GR.1 / MA.1.GR.1 / MA.2.GR.1",
          description:
            "Identify and describe basic shapes, their attributes, and relationships appropriate for K–2 learners.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/14N_10SXmrikXQZ3N2w7X6V1hr5ux_bzbBd4SafUbJkw/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/14N_10SXmrikXQZ3N2w7X6V1hr5ux_bzbBd4SafUbJkw/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.2.GR",
          notes: "",
        },
        {
          title: "Intro to Measurements",
          benchmark: "MA.K.M.1 / MA.2.M.1",
          description:
            "Explore measurement concepts using non-standard units and basic tools to compare length, mass, and capacity.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1mHPvrdxZfYQnA4-I6RAp59EQhhTbr0yzlYLxbC-_7AM/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1mHPvrdxZfYQnA4-I6RAp59EQhhTbr0yzlYLxbC-_7AM/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.2.M",
          notes: "",
        },
        {
          title: "Place Value (K–3)",
          benchmark: "MA.K.NSO.1 / MA.1.NSO.1 / MA.2.NSO.1 / MA.3.NSO.1",
          description:
            "Develop place value understanding from ones to hundreds using models, counting, and representations.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1apvA2E8I5LKCN9fMe-X0U4VT7hNDpnkD/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1apvA2E8I5LKCN9fMe-X0U4VT7hNDpnkD/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.NSO#MA.3.NSO.1.1",
          notes: "",
        },
      ],
    },
    {
      label: "3–5",
      subtitle: "Core elementary math",
      description:
        "Lessons that strengthen multiplication, division, fractions, decimals, measurement, and multi-step problem-solving.",
      gradient: "from-violet-50 via-fuchsia-50 to-pink-50",
      border: "border-violet-100",
      lessons: [
        {
            title: "Place Value",
            benchmark: "MA.4.NSO.1",
            description:
              "Develop place value understanding for multi-digit whole numbers by reading, writing, comparing, and representing numbers in different forms.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1ESWcuY220mA0Ag3kpXAZzveXqaI5AvtKDhlj1Ck1yso/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1ESWcuY220mA0Ag3kpXAZzveXqaI5AvtKDhlj1Ck1yso/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.NSO#MA.4.NSO.1",
            notes: "",
          },
          {
              title: "Data Analysis",
              benchmark: "MA.1.DP.1 / MA.2.DP.1 / MA.3.DP.1",
              description:
                "Collect, represent, and interpret data using simple graphs to draw conclusions and answer questions.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/1n_h9xsGpnSXhquyAFO0y-6Zkg1M04i7x/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/1n_h9xsGpnSXhquyAFO0y-6Zkg1M04i7x/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.DP#MA.3.DP.1",
              notes: "",
            },
          {
              title: "Multidigit Addition and Subtraction",
              benchmark: "MA.1.NSO.2 / MA.3.NSO.2",
              description:
                "Develop strategies for adding and subtracting multi-digit numbers with understanding and place value support.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/1TnEsH4B1dQNSkpJa7M2aFbXr7bGIddd_uPMCztzZabg/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/1TnEsH4B1dQNSkpJa7M2aFbXr7bGIddd_uPMCztzZabg/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.NSO#MA.3.NSO.2",
              notes: "",
            },
          {
              title: "Perimeter and Area",
              benchmark: "MA.2.GR.2 / MA.3.GR.2",
              description:
                "Explore perimeter and area concepts for rectangles and other simple shapes through measurement and problem solving.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/13Sy-jBhgx45jVcl1J9NhNIfOY6VTdmjtcH04uSYbs7o/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/13Sy-jBhgx45jVcl1J9NhNIfOY6VTdmjtcH04uSYbs7o/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.GR#MA.3.GR.2",
              notes: "",
            },
          {
              title: "L2 Multiplication",
              benchmark: "MA.3.AR.1",
              description:
                "Build multiplication strategies and practice facts to support fluency and problem solving for grade 3.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/1ELO5bphs1i_Zp8WTdr3FILi2-DgHVViGCXTEIxqs_Do/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/1ELO5bphs1i_Zp8WTdr3FILi2-DgHVViGCXTEIxqs_Do/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.AR#MA.3.AR.1",
              notes: "",
            },
          {
              title: "Two-Step Word Problems",
              benchmark: "MA.3.AR.2",
              description:
                "Solve two-step word problems using addition, subtraction, multiplication, and reasoning strategies.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/1bAcDvFD-ujiZh5JX7JWVTDB9pNJISeOLUDFzAZ74DO0/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/1bAcDvFD-ujiZh5JX7JWVTDB9pNJISeOLUDFzAZ74DO0/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.AR#MA.3.AR.2",
              notes: "",
            },
          {
              title: "Mapping Equivalent Fractions",
              benchmark: "MA.3.FR.1",
              description:
                "Map and generate equivalent fractions using visual models and number lines to build fraction sense.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/15Shft8zTtP2YzdS_Z8CRSVPySourCgAh/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/15Shft8zTtP2YzdS_Z8CRSVPySourCgAh/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.FR#MA.3.FR.1",
              notes: "",
            },
          {
              title: "Introduction to Division",
              benchmark: "MA.3.AR.1",
              description:
                "Introduce division concepts, sharing and grouping strategies, and relate division to multiplication.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/14mvQ44_YmMAEUfpAN3CrXuPb-FPRk8NMCKUr-xRiKBI/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/14mvQ44_YmMAEUfpAN3CrXuPb-FPRk8NMCKUr-xRiKBI/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.AR#MA.3.AR.1",
              notes: "",
            },
          {
              title: "Time",
              benchmark: "MA.3.M.1 / MA.3.M.2",
              description:
                "Tell and measure time to the minute, and solve elapsed time problems appropriate for grade 3.",
              powerpointUrl:
                "https://docs.google.com/presentation/d/1MWmHHRGJTYr41SdPmLSryibfu5tfxMSNYqIUGH6daco/preview",
              powerpointEmbedUrl:
                "https://docs.google.com/presentation/d/1MWmHHRGJTYr41SdPmLSryibfu5tfxMSNYqIUGH6daco/embed?start=false&loop=false&delayms=3000",
              khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.M#MA.3.M.1",
              notes: "",
            },
            {
                title: "Introduction to Mass",
                benchmark: "MA.3.M.1",
                description:
                  "Investigate mass through balancing, comparing, and measuring activities to build early measurement understanding.",
                powerpointUrl:
                  "https://docs.google.com/presentation/d/14HYlEUVHkROKh7O63fm97CcapIiroID6elFDkjcU6fM/preview",
                powerpointEmbedUrl:
                  "https://docs.google.com/presentation/d/14HYlEUVHkROKh7O63fm97CcapIiroID6elFDkjcU6fM/embed?start=false&loop=false&delayms=3000",
                khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.M#MA.3.M.1",
                notes: "",
              },
            {
                title: "Introduction to Volume",
                benchmark: "MA.3.M.1",
                description:
                  "Explore volume concepts using cubic units, containers, and measurement activities appropriate for grade 3.",
                powerpointUrl:
                  "https://docs.google.com/presentation/d/1MqNJVc3z84jIbzC9NkaJpX8BxzEw87GJCTl92XzXJK8/preview",
                powerpointEmbedUrl:
                  "https://docs.google.com/presentation/d/1MqNJVc3z84jIbzC9NkaJpX8BxzEw87GJCTl92XzXJK8/embed?start=false&loop=false&delayms=3000",
                khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.3.M#MA.3.M.1",
                notes: "",
              },
        {
            title: "Operations with Multi-Digit Numbers",
            benchmark: "MA.4.NSO.2",
            description:
              "Develop understanding of operations with multi-digit numbers by applying place value, multiplication, division, and problem-solving strategies.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1HUyDdYduxf0G_7tPaERm2DXRyQJcZu0MQfDrsxfTekg/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1HUyDdYduxf0G_7tPaERm2DXRyQJcZu0MQfDrsxfTekg/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.NSO#MA.4.NSO.2",
            notes: "",
          },
        {
            title: "Length Measurement and Problem Solving",
            benchmark: "MA.4.M.1",
            description:
              "Measure length and solve real-world problems by applying measurement concepts, tools, and unit relationships.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1nyKxUklNdUuvuZwUBSAXYerhM-EYJK-qOvnc86OI3bg/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1nyKxUklNdUuvuZwUBSAXYerhM-EYJK-qOvnc86OI3bg/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.M#MA.4.M.1",
            notes: "",
          },
          {
            title: "Solve Problems Involving Time and Money",
            benchmark: "MA.4.M.2",
            description:
              "Solve problems involving time and money by applying measurement concepts, conversions, and real-world reasoning.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1vl7N7NjHLDJt5Az3v7SdaDc7QEP4kpUKfkMqulFV5JM/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1vl7N7NjHLDJt5Az3v7SdaDc7QEP4kpUKfkMqulFV5JM/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.M#MA.4.M.2",
            notes: "",
          },
        {
            title: "Fractions and Decimals",
            benchmark: "MA.4.FR.1",
            description:
              "Develop understanding of fractions and decimals by representing, comparing, and relating them in mathematical and real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1OzSnS7fJnx6nuQqP6yHJHraxfmsNcW_GVGoq7kGZB7g/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1OzSnS7fJnx6nuQqP6yHJHraxfmsNcW_GVGoq7kGZB7g/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.FR#MA.4.FR.1",
            notes: "",
          },
        {
            title: "Draw, Classify, and Measure Angles",
            benchmark: "MA.4.GR.1",
            description:
              "Draw, classify, and measure angles by exploring their attributes and using angle measurement in mathematical and real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1HKhi8Iu2OeE1iqWfy9o0MT2iFVC5NPWfEIeaAYb5_uM/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1HKhi8Iu2OeE1iqWfy9o0MT2iFVC5NPWfEIeaAYb5_uM/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.GR#MA.4.GR.1",
            notes: "",
          },
          {
            title: "Solve Problems Involving the Perimeter and Area of Rectangles",
            benchmark: "MA.4.GR.2",
            description:
              "Solve problems involving the perimeter and area of rectangles using formulas, models, and real-world applications.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1a-2hMD1yKRyXvH4kXtfAvmhL5P1Tha8mKtkpzNKizfA/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1a-2hMD1yKRyXvH4kXtfAvmhL5P1Tha8mKtkpzNKizfA/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.GR#MA.4.GR.2",
            notes: "",
          },
          {
            title: "Real-World Problem Solving with Whole Numbers and Fractions",
            benchmark: "MA.4.AR.1",
            description:
              "Solve real-world problems involving whole numbers and fractions by using the four operations, visual models, and efficient strategies.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1DPYjy5zt38B5xm9Q0s_tzXXxazgPLOpw2xEa4_844jk/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1DPYjy5zt38B5xm9Q0s_tzXXxazgPLOpw2xEa4_844jk/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.AR#MA.4.AR.1",
            notes: "",
          },
        {
            title: "Demonstrate an Understanding of Equality and Operations with Whole Numbers",
            benchmark: "MA.4.AR.2",
            description:
              "Develop understanding of equality and apply operations with whole numbers to solve equations and numerical problems.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1plMysarLqXoKIXFhmvNl1oC6uCSLCupqtXooqxQ9axM/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1plMysarLqXoKIXFhmvNl1oC6uCSLCupqtXooqxQ9axM/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.AR#MA.4.AR.2",
            notes: "",
          },
          {
            title: "Recognize Numerical Patterns, Including Patterns That Follow a Given Rule",
            benchmark: "MA.4.AR.3",
            description:
              "Recognize numerical patterns, including those generated by a given rule, and use them to make predictions and describe relationships.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1nvxdfPzz-aAbTRQDyxi530N2kb5bEMl-2OZDkzTx_y0/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1nvxdfPzz-aAbTRQDyxi530N2kb5bEMl-2OZDkzTx_y0/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.AR#MA.4.AR.3",
            notes: "",
          },
        {
            title: "Addition, Subtraction, and Multiplication Operations with Fractions",
            benchmark: "MA.4.FR.2",
            description:
              "Develop understanding of fraction operations by practicing addition, subtraction, and multiplication in visual, numerical, and real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1bsk3whkDJjUkm7rPhnL1kUeaB76f90C09toTc8zejWk/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1bsk3whkDJjUkm7rPhnL1kUeaB76f90C09toTc8zejWk/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.FR#MA.4.FR.2",
            notes:
              "",
          },
          {
            title: "Interpreting Data from Line Plots and Graphs",
            benchmark: "MA.4.DP.1 / MA.5.DP.1",
            description:
              "Interpret data from line plots and graphs by analyzing patterns, comparing values, and drawing conclusions from visual representations.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1PWyx_c7OQO50ALjRJWsPClO9Mbr7KNo8_aBqLcdNR-Y/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1PWyx_c7OQO50ALjRJWsPClO9Mbr7KNo8_aBqLcdNR-Y/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.4.DP#MA.4.DP.1",
            notes: "",
          },
          {
            title: "Converting Measurement Units to Solve Multi-Step Problems",
            benchmark: "MA.5.M.1",
            description:
              "Solve multi-step real-world problems by converting measurement units within a single system and applying those conversions in context.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1ecYKBlcKYyU26Y24TcgjbcL74mDXLzdpj8Tc_f8bW-0/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1ecYKBlcKYyU26Y24TcgjbcL74mDXLzdpj8Tc_f8bW-0/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.M#MA.5.M.1",
            notes: "",
          },
          {
            title: "Solve Problems Involving Money",
            benchmark: "MA.5.M.2",
            description:
              "Solve problems involving money by applying decimal notation, operations, and real-world reasoning in financial contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1nRpHDaq30gducS4-sVEmdTIWGI7wXoc_4mbGlSzX7yw/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1nRpHDaq30gducS4-sVEmdTIWGI7wXoc_4mbGlSzX7yw/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.M#MA.5.M.2",
            notes: "",
          },
          {
            title: "Solve Problems Involving the Four Operations with Whole Numbers and Fractions",
            benchmark: "MA.5.AR.1",
            description:
              "Solve problems involving the four operations with whole numbers and fractions by using equations, models, and real-world reasoning.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1RAK3VvZbQ9QbmFv9TGCFX3W8jsgJVL1yYClpwhdT5OU/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1RAK3VvZbQ9QbmFv9TGCFX3W8jsgJVL1yYClpwhdT5OU/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.AR#MA.5.AR.1",
            notes: "",
          },
          {
            title: "Equality, Order of Operations, and Equivalent Expressions",
            benchmark: "MA.5.AR.2",
            description:
              "Use equality, order of operations, and equivalent expressions to analyze and solve numerical and algebraic problems.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1f8sgTwRfc1btinTb5g8r3npGYgA5WKYnu9dh92pLR8s/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1f8sgTwRfc1btinTb5g8r3npGYgA5WKYnu9dh92pLR8s/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.AR#MA.5.AR.2",
            notes: "",
          },
          {
            title: "Analyze Patterns and Relationships Between Inputs and Outputs",
            benchmark: "MA.5.AR.3",
            description:
              "Analyze numerical patterns and relationships between inputs and outputs, and use rules, tables, and expressions to describe them.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1026j6w-5sqp84cUzvGZ-TbtxB2IJJ4OW2etUBVJMiSk/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1026j6w-5sqp84cUzvGZ-TbtxB2IJJ4OW2etUBVJMiSk/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.AR#MA.5.AR.3",
            notes: "",
          },
          {
            title: "Interpret a Fraction as an Answer to a Division Problem",
            benchmark: "MA.5.FR.1",
            description:
              "Interpret a fraction as the result of division and use visual models, equations, and real-world situations to build understanding.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1KGmpOg5cyQxSqr6sksCJYG0N5lIklObTO2-Cbl15nwo/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1KGmpOg5cyQxSqr6sksCJYG0N5lIklObTO2-Cbl15nwo/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.FR#MA.5.FR.1",
            notes: "",
          },
          {
            title: "Perform Operations with Fractions",
            benchmark: "MA.5.FR.2",
            description:
              "Perform operations with fractions by adding, subtracting, multiplying, and interpreting fractional quantities in mathematical and real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1BSNxbZvyP9e80frd9zMsZnaw-48waBacKsujfQaH_5E/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1BSNxbZvyP9e80frd9zMsZnaw-48waBacKsujfQaH_5E/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.FR#MA.5.FR.2",
            notes: "",
          },
          {
            title: "Perimeter and Area with Fractional and Decimal Side Lengths",
            benchmark: "MA.5.GR.2",
            description:
              "Find perimeter and area using fractional and decimal side lengths, and apply those measurements to solve mathematical and real-world problems.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1JNGUyD--Lo3Zjkm8DCsMb1O_tzgkyDx76hjSWdY7Z-U/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1JNGUyD--Lo3Zjkm8DCsMb1O_tzgkyDx76hjSWdY7Z-U/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.GR#MA.5.GR.2",
            notes: "",
          },
          {
            title: "Solve Problems Involving the Volume of Right Rectangular Prisms",
            benchmark: "MA.5.GR.3",
            description:
              "Solve problems involving the volume of right rectangular prisms by applying volume concepts, formulas, and real-world reasoning.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1NmcoZicGVII0tt50b7HzCPFpKMS7AO_96WNPzREqA80/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1NmcoZicGVII0tt50b7HzCPFpKMS7AO_96WNPzREqA80/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.GR#MA.5.GR.3",
            notes: "",
          },
          {
            title: "Plot Points and Represent Problems on the Coordinate Plane",
            benchmark: "MA.5.GR.4",
            description:
              "Plot points and represent mathematical and real-world problems on the coordinate plane using ordered pairs and geometric reasoning.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/14Q5CZ82ZurxFvGgPY6ZRnkE_kVErrbyNT0MYtd8HMj4/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/14Q5CZ82ZurxFvGgPY6ZRnkE_kVErrbyNT0MYtd8HMj4/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.GR#MA.5.GR.4",
            notes: "",
          },
          {
            title: "Understand the Place Value of Multi-Digit Numbers with Decimals to the Thousandths Place",
            benchmark: "MA.5.NSO.1",
            description:
              "Understand the place value of multi-digit numbers with decimals to the thousandths place by reading, writing, comparing, and representing them in different forms.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1pKilcxiEmQjvt2UrBm8y7GT22ydVinX1pHdVpQiNv_Q/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1pKilcxiEmQjvt2UrBm8y7GT22ydVinX1pHdVpQiNv_Q/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.NSO#MA.5.NSO.1",
            notes: "",
          },
          {
            title: "Multiplying, Dividing, and Operating with Multi-Digit Numbers and Decimals",
            benchmark: "MA.5.NSO.2",
            description:
              "Multiply, divide, and operate with multi-digit whole numbers and decimals using place value understanding and efficient strategies.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1Wyh9AyTvW99e8nQcte3hRHsP82_vtWvd3dhEyU8uEd4/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1Wyh9AyTvW99e8nQcte3hRHsP82_vtWvd3dhEyU8uEd4/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.5.NSO#MA.5.NSO.2",
            notes: "",
          }
      ],
    },
    {
      label: "6–8",
      subtitle: "Middle school problem-solving",
      description:
        "More advanced lessons in ratios, rational numbers, expressions, equations, geometry, and proportional reasoning designed to prepare students for algebra.",
      gradient: "from-amber-50 via-orange-50 to-rose-50",
      border: "border-amber-100",
      lessons: [
        {
            title: "Rewriting Algebraic Expressions in Equivalent Forms",
            benchmark: "MA.7.AR.1",
            description:
              "Rewrite algebraic expressions in equivalent forms to reveal structure, simplify expressions, and support problem-solving in mathematical contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1ok4qEp2akDpzv_ebib57eW48TYgYtgE50XV4ejjS570/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1ok4qEp2akDpzv_ebib57eW48TYgYtgE50XV4ejjS570/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.AR#MA.7.AR.1",
            notes: "",
          },
        {
            title: "Represent and Interpret Numerical and Categorical Data",
            benchmark: "MA.7.DP.1",
            description:
              "Represent and interpret numerical and categorical data by analyzing distributions, comparing data sets, and drawing conclusions from real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1yqcfiQTl4SuqHMkeBzp0UnDvsh8d7JnN9KmXpJvmuy8/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1yqcfiQTl4SuqHMkeBzp0UnDvsh8d7JnN9KmXpJvmuy8/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.DP#MA.7.DP.1",
            notes: "",
          },
          {
            title: "Understanding Theoretical and Experimental Probability",
            benchmark: "MA.7.DP.2",
            description:
              "Develop understanding of theoretical and experimental probability by comparing predicted outcomes with observed results in mathematical and real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1N9vQe-2audKbbyBeQMu56_UBkPOr2Knb_otQVulo8_M/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1N9vQe-2audKbbyBeQMu56_UBkPOr2Knb_otQVulo8_M/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.DP#MA.7.DP.2",
            notes: "",
          },
        {
            title: "Analyze and Represent Two-Variable Proportional Relationships",
            benchmark: "MA.7.AR.4",
            description:
              "Analyze proportional relationships between two variables and represent them using tables, graphs, equations, and real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1op_65UQ8d0Qe_KihOhwEkmTu0O1Sh_7UXJi1kBfhYjM/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1op_65UQ8d0Qe_KihOhwEkmTu0O1Sh_7UXJi1kBfhYjM/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.AR#MA.7.AR.4",
            notes: "",
          },
        {
          title: "Add, Subtract, Multiply and Divide Rational Numbers",
          benchmark: "MA.7.NSO.2",
          description:
            "Practice operations with rational numbers, including addition, subtraction, multiplication, and division in numerical and real-world contexts.",
          powerpointUrl:
            "https://docs.google.com/presentation/d/1QZgWhvbX1pK5EZXYup_SG2557x8Xl367J2IsK2-C22M/preview",
          powerpointEmbedUrl:
            "https://docs.google.com/presentation/d/1QZgWhvbX1pK5EZXYup_SG2557x8Xl367J2IsK2-C22M/embed?start=false&loop=false&delayms=3000",
          khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.NSO#MA.7.NSO.2.2",
          notes:
            "",
        },
        {
            title: "Equations and Inequalities in One Variable",
            benchmark: "MA.7.AR.2",
            description:
              "Write and solve equations and inequalities in one variable to represent mathematical relationships and solve real-world problems.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1IeqRooV0A8L6ZowA7abvyAmEtIbyrCSKQqS0IdwBgRY/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1IeqRooV0A8L6ZowA7abvyAmEtIbyrCSKQqS0IdwBgRY/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.AR#MA.7.AR.2",
            notes: "",
          },
        {
            title: "Use Percentages and Proportional Reasoning to Solve Problems",
            benchmark: "MA.7.AR.3",
            description:
              "Use percentages and proportional reasoning to solve mathematical and real-world problems involving rates, proportions, and percent relationships.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1VL3f0y9tZn3fGdh-BdWajQUN4ny6b3Ha2uhM1zVqMFY/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1VL3f0y9tZn3fGdh-BdWajQUN4ny6b3Ha2uhM1zVqMFY/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.AR#MA.7.AR.3",
            notes: "",
          },
          {
            title: "Surface Area and Volume of Right Circular Cylinders",
            benchmark: "MA.7.GR.2",
            description:
              "Solve problems involving the surface area and volume of right circular cylinders using formulas, visual models, and real-world applications.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1Ftn-LsoC4aJ8qqINjWzD7gV29k-33EXS2DTbrn2HpXw/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1Ftn-LsoC4aJ8qqINjWzD7gV29k-33EXS2DTbrn2HpXw/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.GR#MA.7.GR.2",
            notes: "",
          },
          {
            title: "Solve Problems Involving Two-Dimensional Figures, Including Circles",
            benchmark: "MA.7.GR.1",
            description:
              "Solve problems involving two-dimensional figures, including circles, by applying geometric properties, formulas, and real-world reasoning.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1YayrK0kJ57m8E7RCHCYTMaU7AEBEqXLSF5d676sadKk/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1YayrK0kJ57m8E7RCHCYTMaU7AEBEqXLSF5d676sadKk/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.GR#MA.7.GR.1",
            notes: "",
          },
          {
            title: "Rewrite Numbers in Equivalent Forms",
            benchmark: "MA.7.NSO.1",
            description:
              "Rewrite rational numbers in equivalent forms, including fractions, mixed numbers, decimals, and percentages, to compare values and solve problems.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1WFF42EDyEN8yjVpoQ3VngahYKhS7dbY6gkLb7mZmKaQ/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1WFF42EDyEN8yjVpoQ3VngahYKhS7dbY6gkLb7mZmKaQ/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.7.NSO#MA.7.NSO.1",
            notes: "",
          }
          ,
        {
            title: "Bivariate Data & Scatter Plots",
            benchmark: "MA.8.DP.1",
            description:
              "Explore bivariate data using scatter plots to identify relationships, patterns, and trends.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1-DangqX2-kwqa8wVKvLnPIMDnK8duueZDcHiAL-6Lvw/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1-DangqX2-kwqa8wVKvLnPIMDnK8duueZDcHiAL-6Lvw/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.8.DP#MA.8.DP.1",
            notes: "",
          },
        {
            title: "Pythagorean Theorem & Angle Relationships",
            benchmark: "MA.8.GR.1",
            description:
              "Use the Pythagorean theorem and angle relationships to solve geometric problems.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/17IIZJ_h2LdiafOsJhd0QeYI93n9qg58YkfsOk6dw_F8/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/17IIZJ_h2LdiafOsJhd0QeYI93n9qg58YkfsOk6dw_F8/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.8.GR#MA.8.GR.1",
            notes: "",
          },
        {
            title: "Repeated Experiments & Probability",
            benchmark: "MA.8.DP.2",
            description:
              "Investigate repeated experiments to model, compare, and interpret probability outcomes.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1ifc2OtASrT4EKh_fZZiBHkywbD79O2l5mCFrQyJ8HDU/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1ifc2OtASrT4EKh_fZZiBHkywbD79O2l5mCFrQyJ8HDU/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.8.DP#MA.8.DP.2",
            notes: "",
          },
        {
            title: "Similarity, Congruence & Transformations",
            benchmark: "MA.8.GR.2",
            description:
              "Analyze similarity, congruence, and transformations to understand geometric relationships.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1bBuR8ENFcjMWK0mod7Sn1TjZAJ3EhfSJCUCxqXJbgLI/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1bBuR8ENFcjMWK0mod7Sn1TjZAJ3EhfSJCUCxqXJbgLI/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.8.GR#MA.8.GR.2",
            notes: "",
          }
        ,
        {
            title: "Numerical Patterns from Rules",
            benchmark: "MA.6.AR.3",
            description:
              "Generate and analyze numerical patterns using rules and expressions to identify relationships and predictions.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1OTdLFMnsm9I4FhP_Lx6xnkStWcKa9TCGnbtvVnrPPnY/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1OTdLFMnsm9I4FhP_Lx6xnkStWcKa9TCGnbtvVnrPPnY/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.6.AR#MA.6.AR.3",
            notes: "",
          },
        {
            title: "Basic Statistics",
            benchmark: "MA.6.DP.1",
            description:
              "Introduce basic statistics by describing distributions, calculating measures, and interpreting data summaries.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1Wfz8q3Lsw1gywMig2VZVBpm0EBWrMr_CqRYrfGq9N_o/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1Wfz8q3Lsw1gywMig2VZVBpm0EBWrMr_CqRYrfGq9N_o/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.6.DP#MA.6.DP.1",
            notes: "",
          },
        {
            title: "Coordinate Plane Problem Solving",
            benchmark: "MA.6.GR.1",
            description:
              "Use the coordinate plane to represent and solve problems involving coordinates, distance, and relationships.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1K4eVUqVTm9qgH-xPPfHVJ8mMc1w2EFeaLi1dR20BWus/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1K4eVUqVTm9qgH-xPPfHVJ8mMc1w2EFeaLi1dR20BWus/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.6.GR#MA.6.GR.1",
            notes: "",
          },
        {
            title: "Systems of Equations",
            benchmark: "MA.8.AR.1 / MA.8.AR.2",
            description:
              "Solve and analyze systems of linear equations using graphing, substitution, and elimination methods.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1u3E2SEo8omVjRTeOcHQQHYIssWJnN3OZ/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1u3E2SEo8omVjRTeOcHQQHYIssWJnN3OZ/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.8.AR#MA.8.AR.1",
            notes: "",
          },
        {
            title: "Interpret and Analyze Linear Functions",
            benchmark: "MA.8.AR.4",
            description:
              "Interpret, represent, and analyze linear functions in context to understand slope, intercepts, and rate of change.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/1bJkH9H2E5UI0yVYvp9TYuaI5o93a0k3Lbwo-DFwbIMk/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/1bJkH9H2E5UI0yVYvp9TYuaI5o93a0k3Lbwo-DFwbIMk/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.8.AR#MA.8.AR.4",
            notes: "",
          },
        {
            title: "Scientific Notation",
            benchmark: "MA.8.NSO.1",
            description:
              "Represent and use scientific notation for very large or very small numbers and apply it in real-world contexts.",
            powerpointUrl:
              "https://docs.google.com/presentation/d/10W7aNf6WcUQ9HWx0JbhuQmTxMCQvYpcCLNmREyTWTpk/preview",
            powerpointEmbedUrl:
              "https://docs.google.com/presentation/d/10W7aNf6WcUQ9HWx0JbhuQmTxMCQvYpcCLNmREyTWTpk/embed?start=false&loop=false&delayms=3000",
            khanVideoUrl: "https://www.khanacademy.org/standards/FL.BEST.Math/MA.8.NSO#MA.8.NSO.1",
            notes: "",
          },
      ],
    },
  ];

  const [activeBandLabel, setActiveBandLabel] = useState(gradeBands[0].label);
  const activeBand =
    gradeBands.find((band) => band.label === activeBandLabel) ?? gradeBands[0];

  return (
    <main className="w-full px-4 py-10 md:py-14">
      <section className="max-w-7xl mx-auto space-y-10">
        <div className="text-center">
          <div className="inline-flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm px-8 py-7 rounded-3xl shadow-lg border border-gray-100 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 px-4 py-1.5 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Built on Florida CPALMS Standards
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold text-primary">
              Math Lessons
            </h1>

            <p className="text-gray-600 text-base md:text-lg mt-3 max-w-3xl leading-8">
              Explore our K–8 math curriculum, organized by grade band and designed by the GRMR
              Education Team. Each lesson includes a lesson deck and an associated Khan Academy
              resource to support tutoring, classroom reinforcement, and independent review.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-6 lg:gap-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm p-3">
              <div className="space-y-2">
                {gradeBands.map((band) => {
                  const isActive = band.label === activeBand.label;

                  return (
                    <button
                      key={band.label}
                      type="button"
                      onClick={() => setActiveBandLabel(band.label)}
                      className={`w-full text-left rounded-xl px-4 py-3 border transition-all ${
                        isActive
                          ? "bg-primary text-white border-primary shadow-sm"
                          : "bg-white text-gray-900 border-gray-200 hover:border-primary/30 hover:bg-primary/5"
                      }`}
                      aria-pressed={isActive}
                    >
                      <div className="text-xl font-semibold">{band.label}</div>
                      <div className={`text-sm mt-0.5 ${isActive ? "text-white/90" : "text-gray-600"}`}>
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
            className={`rounded-3xl border ${activeBand.border} bg-gradient-to-br ${activeBand.gradient} p-6 md:p-8 shadow-lg`}
          >
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-2 shadow-sm border border-white/70 mb-4">
                <Calculator className="w-5 h-5 text-primary" />
                <span className="text-2xl font-semibold text-primary">{activeBand.label}</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {activeBand.subtitle}
              </h2>

              <p className="text-gray-700 mt-3 max-w-3xl leading-7">
                {activeBand.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {activeBand.lessons.map((lesson) => (
                <div
                  key={`${activeBand.label}-${lesson.title}`}
                  className="rounded-3xl bg-white/85 backdrop-blur-sm border border-white/80 shadow-md overflow-hidden"
                >
                  <div className="grid grid-cols-1 xl:grid-cols-[1.05fr_0.95fr] gap-0">
                    <div className="p-6 md:p-7">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {lesson.benchmark}
                        </span>
                        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                          CPALMS-Aligned Lesson
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {lesson.title}
                      </h3>

                      <p className="text-gray-600 leading-7 mb-6">
                        {lesson.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {lesson.powerpointUrl !== "#" && (
                          <Link
                            href={lesson.powerpointUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-white font-semibold hover:bg-primary/90 transition-colors"
                          >
                            <FileText className="w-4 h-4" />
                            Open Lesson Deck
                          </Link>
                        )}

                        {lesson.khanVideoUrl && lesson.khanVideoUrl !== "#" && (
                          <Link
                            href={lesson.khanVideoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-primary/20 bg-white px-4 py-3 text-primary font-semibold hover:bg-primary/5 transition-colors"
                          >
                            <PlayCircle className="w-4 h-4" />
                            Watch Khan Academy Videos
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        )}
                      </div>
                    </div>

                    <div className="border-t xl:border-t-0 xl:border-l border-gray-100 bg-gradient-to-br from-white to-gray-50 p-5 md:p-6">
                      <div className="h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
                        <div className="aspect-video w-full">
                          {lesson.powerpointEmbedUrl !== "#" ? (
                            <iframe
                              className="w-full h-full"
                              src={lesson.powerpointEmbedUrl}
                              title={`${lesson.title} lesson deck`}
                              allowFullScreen
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-center px-6 text-sm text-gray-500 bg-white">
                              Lesson deck preview coming soon.
                            </div>
                          )}
                        </div>
                      </div>

                      {lesson.notes && (
                        <p className="text-sm text-gray-500 mt-3 leading-6">
                          {lesson.notes}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
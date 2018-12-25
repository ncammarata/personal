import { Link } from "react-router-dom"

import { H2, H3, Example } from "./components"

const isMobile = window.innerWidth < 1250

class Gradient extends Component {
  state = { show: 0 }
  componentWillMount() {
    const next = () => {
      if (this.state.show > 3) {
        return
      }

      this.setState({ show: this.state.show + 1 })
      setTimeout(next, 1100)
    }

    setTimeout(next, 1100)
  }

  show() {
    const { show } = this.state

    const circle = (show, text, background, styles = {}) => {
      return (
        <circle
          $show={show}
          style={{
            borderRadius: 5,
            background,
            ...styles,
            ...(!show ? { width: 0, height: 0 } : {}),
          }}
        >
          <text>{text}</text>
        </circle>
      )
    }

    return (
      <banner>
        {circle(show > 0, "Humans", `rgba(255, 235, 235, .3)`, {
          width: "100%",
          height: 90,
          paddingLeft: 20,
        })}
        {circle(
          !isMobile && show > 1,
          "Your Traits",
          `rgba(255, 198, 198, 0.3)`,
          {
            width: "60%",
            height: 70,
            paddingLeft: 15,
          },
        )}
        {circle(
          isMobile ? show > 1 : show > 2,
          "You",
          `rgba(255, 198, 198, 0.6)`,
          {
            width: isMobile ? 70 : `13%`,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
          },
        )}
      </banner>
    )
  }

  styles = {
    banner: {
      marginTop: 5,
      marginBottom: 15,
      width: `100%`,
      //boxShadow: `1px 1px 5px rgba(0, 0, 0, 0.03)`,
      // background: `rgba(241,244,246,0.6)`,
      // border: `1px solid rgba(0, 0, 0, 0.1)`,
      borderRadius: 5,
      height: 100,
      position: "relative",
    },
    circle: {
      position: "absolute",
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      transform: `translateX(-50%) translateY(-50%)`,
      left: `50%`,
      top: `50%`,
      textAlign: "left",
      boxShadow: `1px 1px 5px rgba(0, 0, 0, 0.08)`,
      justifyContent: "center",
      opacity: 0,
      color: `rgba(0, 0, 0, 0.7)`,
      fontSize: 26,
      fontWeight: 300,
      transition: `opacity 150ms ease-in, color 300ms ease-in 600ms`,
    },
    show: {
      opacity: 1,
      color: `rgba(0, 0, 0, 0.8)`,
    },
  }
}

class Url extends Component {
  show() {
    const { href, children } = this.props

    return (
      <a href={href} target="_blank">
        {children}
      </a>
    )
  }

  styles = {
    a: {
      textDecoration: "underline",
      color: `#0084B4`,
      fontWeight: 600,
    },
  }
}

export default class Satisfaction extends Component {
  show() {
    const Paragraph = ({ children, ...props }) => <p>{children}</p>
    const Heading = ({ children, ...props }) => <h2>{children}</h2>

    return (
      <post>
        <row>
          <h1>Pieces of Happy</h1>
          <date>September, 2018</date>
        </row>
        <Gradient />
        <quote>
          "All any man can do is add his fragment to the whole. No man can be
          final, but he can record his progress. What he leaves is so much for
          others to use as stones to step on, or stones to avoid. After all, the
          goal is not making art. It is living a life. Those who live their
          lives will leave the stuff that is really art."
          <br />
          <author>Robert Henri, The Art Spirit</author>
        </quote>
        <Paragraph>
          Most people strive to be happy, but may not think frequently about
          specific approaches to becoming happier. While I don't claim to hold
          the key to life satisfaction, I'd like to share an algorithm that has
          been helpful for me so far.
        </Paragraph>
        <Paragraph>
          Let's assumes that there are a set of things that control your
          happiness, and you can find at least some of them. Luckily, lots of
          have people have already lived, and you can steal their ideas to find
          out what might work for you. I think it's worth doing this and provide
          one framework for thinking about it.
        </Paragraph>
        <Heading>Life Satisfaction Research</Heading>
        <Paragraph>
          Life Satisfaction is a field of psychology aimed at finding factors
          that affect well-being. While psychology research is best taken with a{" "}
          <Url href="https://en.wikipedia.org/wiki/Replication_crisis">
            grain of salt
          </Url>
          , the field has made some impressive progress like discovering the{" "}
          <Url href="https://www.sciencedirect.com/science/article/pii/S0191886908000767">
            surprising potency of gratitude journaling
          </Url>
          .
        </Paragraph>
        <Paragraph>
          You may have inherited a set of default life goals at an early age
          from some combination of television and adults around you. I'll call
          these TV goals. They may include having a prestigious college degree,
          a loving family, and{" "}
          <Url href="https://www.youtube.com/watch?v=Kh2FRFhS7QY">
            too much money in the bank account
          </Url>
          . It's not clear who minted the TV goals, or how good they are; that
          is, predictive of life satisfaction.
        </Paragraph>
        <Paragraph>
          It's safe to say that TV goals are probably less reliable than life
          satisfaction research. For this reason, I suggest trying to replace
          any TV goals you may have with life satisfaction research. They don't
          always disagree. For instance, they both agree that it is worth
          working towards having a loving family. However, I've noticed that TV
          goals seem far more focused on competitive factors. In contrast, most
          of the interesting degrees of freedom that life satisfaction research
          tends to explore, such as diet, fitness, drugs, learning, and
          mindfulness requires little or no competition.
        </Paragraph>
        <Paragraph>
          Life satisfaction research can be generic, but I believe it's probably
          a better base than other alternatives.
        </Paragraph>
        <Example
          title="Sources I like"
          list={[
            <span>
              <Url href="https://www.ted.com/talks/robert_waldinger_what_makes_a_good_life_lessons_from_the_longest_study_on_happiness?language=en">
                Lessons from The Longest Study on Happiness
              </Url>
            </span>,
            <span>
              <Url href="https://80000hours.org/">80,000 Hours</Url>
            </span>,
            <span>
              <Url href="https://www.amazon.com/Feeling-Good-New-Mood-Therapy/dp/0380810336">
                Feeling Good, an introduction to CBT
              </Url>
            </span>,
            <span>
              <Url href="https://www.amazon.com/Principles-Life-Work-Ray-Dalio/dp/1501124021">
                Principles by Ray Dalio
              </Url>
            </span>,
            <span>
              <Url href="https://www.youtube.com/watch?v=a1zDuOPkMSw">
                You and Your Research
              </Url>
            </span>,
            <span>
              <Url href="http://www.paulgraham.com/hs.html">
                What You'll Wish You'd Known
              </Url>{" "}
              and{" "}
              <Url href="http://www.paulgraham.com/todo.html">
                Top of My To TODO List
              </Url>
            </span>,
            <span>
              <Url href="https://www.amazon.com/Altered-Traits-Science-Reveals-Meditation/dp/0399184384">
                Altered Traits
              </Url>
            </span>,
          ]}
        />
        <Heading>Personality Research</Heading>
        <Paragraph>
          <Url href="https://commoncog.com/blog/understand-that-people-are-wired-very-differently/">
            People are wired very differently
          </Url>
          . This is a good thing - if everyone had an identical personality it
          would be much harder to{" "}
          <Url href="https://startupclass.samaltman.com/courses/lec05/">
            innovate and find your monopoly
          </Url>
          . Luckily, there do seem to be clusters of personalities, and it's
          worth it to find yours.
        </Paragraph>
        <Paragraph>
          The{" "}
          <Url href="https://en.wikipedia.org/wiki/Big_Five_personality_traits">
            Big Five personality test
          </Url>{" "}
          (also known as OCEAN) measures five traits: openness to experience,
          conscientiousness, extraversion, agreeableness, and neuroticism. It
          takes 15 minutes to get results and is highly predictive in hundreds
          of studies in psychology. It has been called psychology’s equivalent
          of Newton’s discovery of gravity.
        </Paragraph>
        <Paragraph>
          If you're 6'7" and love soccer and basketball, it's probably worth
          focusing on the latter. In the same way, you want to work with your
          natural personality advantages when possible. Look at people with
          similar personalities and pay attention to the{" "}
          <Url href="https://en.wikipedia.org/wiki/Hero%27s_journey">
            peaks and abysses
          </Url>{" "}
          of their journeys to help you understand what may lay in your path.
        </Paragraph>
        <Paragraph>
          One additional suggestion I would give is to find{" "}
          <Url href="http://www.paulgraham.com/heroes.html">some heroes</Url>{" "}
          you really like and study their lives in enough depth to intuitively
          understand how they would think through certain situations. Bonus
          points if their personality is close to yours. Some mine are{" "}
          <span>Leondaro Da Vinci</span>, <span>Peter Thiel</span>,{" "}
          <span>Charles Darwin</span>, and{" "}
          <Url href="https://en.wikipedia.org/wiki/Stewart_Brand">
            Stewart Brand
          </Url>
          .
        </Paragraph>
        <Example
          title="Example Actions"
          list={[
            "Quitting caffeine to subdue high neuroticism",
            <span>
              Investing in <Url href="http://rinse.com">laundry services</Url>{" "}
              if you are low-conscientiousness
            </span>,
            <span>
              Joining an improv club if you’re an under-socialized extrovert
            </span>,
          ]}
        />
        <Heading>Individual Experimentation</Heading>
        <Paragraph>
          Life satisfaction research and personality tests can give you hints of
          what to try, but it's ultimately your job to experiment.
        </Paragraph>
        <Paragraph>
          Humans are bad at exponents and you are probably bad at understanding
          how much discovering a happiness gem could improve your life. The cost
          of experimentation is usually small compared to the potential benefit.
          Particularly play with{" "}
          <Url href="https://dcgross.com/the-environment-diet/">
            your environment
          </Url>
          . If you force yourself to read a book, you'll gain the knowledge in
          that book; if you change your environment in a way that helps you
          become a book lover, you'll learn from books for the rest of your
          life. I think that very few people experiment enough with their time
          and actions.
        </Paragraph>
        <Paragraph>
          In machine learning,{" "}
          <Url href="https://blog.openai.com/generalizing-from-simulation/">
            domain randomization
          </Url>{" "}
          is used to transfer a robot that learned from simulations into the
          real world. By default it may overfit on little details of the
          simulation and be confused when you put itin the real world. One way
          to resolve this is to randomly change parameters (sky color, gravity,
          speed) in the simulation, so the robot learns general principles. When
          you take it out, it's learned about so many permutations that this new
          specific one (the real world) is no problem.
        </Paragraph>
        <Paragraph>
          Try to run domain randomization on yourself, changing parameters of
          your life to understand how they affect your mood. For instance, I
          tried randomly multiplying all categories of my personal budget by 33%
          or 300% for a month at a time and quickly discovered that I love nice
          food but I'm also fine biking rather than using Uber.
        </Paragraph>
        <Paragraph>
          You’re likely missing out on simple but life-changing pieces of
          happiness. Maybe you’d be dramatically more productive working in a
          brighter environment. Maybe you’d become a book lover if you switched
          to audiobooks. Maybe another city would be a better culture fit. Maybe
          you’re not following your{" "}
          <Url href="https://learn.genetics.utah.edu/content/basics/clockgenes/">
            genetic sleep clock
          </Url>
          . Maybe you need more magnesium.
        </Paragraph>
        <Heading>Simple Measurement</Heading>
        <Paragraph>
          Don’t worry about running statistics on all parameters and measuring
          tiny changes. Run a few experiments simultaneously until you feel
          something, then try one at a time to triangulate what caused it.
        </Paragraph>
        <Paragraph>
          Research literature on mood typically measures based on two
          dimensions: valence and arousal. Valance captures the sign
          (happy/unhappy) and arousal captures the magnitude (high/low). A [-5,
          5] scale for each of these per day takes about 30 seconds and gives
          you a high level overview of how your mood is changing over time.
        </Paragraph>
        <Example
          title="Example Actions"
          list={[
            `Try quitting social media for a month`,
            `Get an Airbnb for a week to try out a shorter or longer work commute`,
            <span>
              Try{" "}
              <Url href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD">
                noise cancelling headphones
              </Url>
              . Return them if they don't improve your life.
            </span>,
          ]}
        />
        <Heading>Conclusion</Heading>
        <Paragraph>
          This essay introduces a three-layer framework that includes life
          satisfaction research, personality tests, and personal
          experimentation; each more important than the last.
        </Paragraph>
        <Paragraph>
          I haven't gone into detail about each of these fields, and simply wish
          to argue that they are worth reading and composing in this way. Your
          exploration should be tailored to your circumstances and change over
          time.
        </Paragraph>
        <Paragraph>
          I believe this light-weight and barely-prescriptive framework may give
          you a good chance of discovering pieces of happiness even if they are
          not in the obvious places to search.
        </Paragraph>
        <Paragraph>
          Please <Link to="/contact">let me know</Link> if you have any
          thoughts, or if this was helpful to you.
        </Paragraph>
      </post>
    )
  }

  styles = {
    quote: {
      marginTop: 8,
      marginBottom: 15,
      lineHeight: 1.3,
      fontSize: 14,
      color: `rgba(0, 0, 0, 0.9)`,
      fontWeight: 600,
    },
    author: {
      alignSelf: "flex-end",
    },
    img: {
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 5,
    },
    row: {
      justifyContent: "space-between",
      flexFlow: "row",
      alignItems: "center",
    },
    h1: {
      fontSize: 20,
      fontWeight: 600,
    },
  }
}

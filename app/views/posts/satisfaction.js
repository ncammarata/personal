import { Link } from "react-router-dom"
import { H2, Example } from "./components"

export default class Satisfaction extends Component {
  show() {
    return (
      <post>
        <row>
          <h1>Finding Life Satisfaction</h1>
          <date>September, 2018</date>
        </row>
        <img src={require("./images/gems.png")} width="100%" />
        <p>
          Most people strive to be happy, but may not think frequently about
          specific approaches to becoming happier. I'd like to share one
          algorithm that has been helpful for me so far.
        </p>
        <p>
          One assumption this algorithm makes is that there is a set of latent
          factors that control your happiness, and it's possible to find at
          least some of them. It's simply a way to search more intelligently.
        </p>
        <H2>Life Satisfaction Research</H2>
        <p>
          Life Satisfaction is a field of psychology aimed at finding factors
          that affect well-being. While psychology research is best taken with a{" "}
          <a href="https://en.wikipedia.org/wiki/Replication_crisis">
            grain of salt
          </a>
          , the field has made some impressive progress like discovering the{" "}
          <a href="https://www.sciencedirect.com/science/article/pii/S0191886908000767">
            surprising potency of gratitude journaling
          </a>
          .
        </p>
        <p>
          You may have inherited a set of default life goals at an early age
          from some combination of television and adults around you. I'll call
          these TV goals. They may include having a prestigious college degree,
          a loving family, and{" "}
          <a href="https://www.youtube.com/watch?v=Kh2FRFhS7QY">
            too much money in the bank account
          </a>
          . It's not clear who decided on the TV goals, or how good they are;
          that is, predictive of life satisfaction.
        </p>
        <p>
          I think it's safe to say that TV goals are less reliable than life
          satisfaction research. For this reason, I suggest trying to replace
          any TV goals you have with life satisfaction research. These two
          frameworks don't always disagree; they both agree a loving family is
          valuable, but TV goals seem to be far more focused on competition.
          Getting into Stanford requires competing with millions of people for
          1,706 freshman seats, but gratitude journaling only takes a pencil and
          10 minutes.
        </p>
        <p>
          Life satisfaction research is high level and quite generic, but I
          think it is reliable enough to form the lowest level (and least
          important) layer of your framework.
        </p>
        <Example
          title="Example Actions"
          list={[
            "Creating a personalized gift once a month",
            <span>
              Download <a href="https://www.oakmeditation.com/">Oak</a> and try
              meditation
            </span>,
            <span>
              Subscribing to <a href="https://80000hours.org/">80,000 Hours</a>
            </span>,
          ]}
        />
        <H2>Personality Research</H2>
        <p>
          <a href="https://commoncog.com/blog/understand-that-people-are-wired-very-differently/">
            People are wired very differently
          </a>
          . This is a good thing - if everyone had an identical personality it
          would be much harder to{" "}
          <a href="https://startupclass.samaltman.com/courses/lec05/">
            innovate and find your monopoly
          </a>
          . Luckily, there does seem to be clusters of personalities, and it's
          worth effort to find your cluster.
        </p>
        <p>
          The{" "}
          <a href="https://en.wikipedia.org/wiki/Big_Five_personality_traits">
            Big Five personality test
          </a>{" "}
          (also known as OCEAN) measures five traits: openness to experience,
          conscientiousness, extraversion, agreeableness, and neuroticism. It
          takes 15 minutes to get results and is highly predictive in hundreds
          of studies in psychology. It has been called psychology’s equivalent
          of Newton’s discovery of gravity.
        </p>
        <p>
          If you're 6'7" and love soccer and basketball, it might be worth
          allocating more energy to the latter. In the same way, you want to
          work with your natural personality advantages when possible. More
          people have lived before you than you can easily imagine, and knowing
          which of them you're most similar to can help you to find environments
          in which you'll thrive and help you avoid their{" "}
          <a href="https://en.wikipedia.org/wiki/Hero%27s_journey">abysses</a>.
        </p>
        <p>
          Personality tests are the second layer of our framework, and
          discoveries on this level should take precedence over life
          satisfaction research.
        </p>
        <Example
          title="Example Actions"
          list={[
            "Quitting caffeine to subdue high neuroticism",
            <span>
              Investing in <a href="http://rinse.com">laundry services</a> if
              you are low-conscientiousness
            </span>,
            <span>
              Joining an improv club if you’re an under-socialized extrovert
            </span>,
          ]}
        />
        <H2>Individual Experimentation</H2>
        <p>
          Humans are bad at exponents, and as a result, we’re bad at
          understanding the reward of discovering a lasting happiness factor.
          Force yourself to read a book and you gain the reward that book has to
          offer. Chance your environment in some way that helps you become a
          book lover and you can enjoy compound reward for the rest of your
          life. For this reason, I believe that very few people experiment
          enough with their time and actions. The cost of experimentation is
          usually small compared to the potential benefit.
        </p>
        <p>
          Personality tests and life satisfaction research give helpful hints of
          directions to experiment, but it ultimately comes down to you. Spend
          30 seconds each night and measure your day’s satisfaction. Experiment
          with fitness until you find a workout you love. Spend time with
          different groups of people. Move to a different country. Randomly
          scale your budget categories by 3x and 1/3 and see how you feel. Run{" "}
          <a href="https://blog.openai.com/generalizing-from-simulation/">
            domain randomization
          </a>{" "}
          on yourself.
        </p>
        <p>
          You’re likely missing out on very simple but life-changing gems. Maybe
          you’d be dramatically more productive working in a brighter
          environment. Maybe you’d become a book lover if you switched to
          audiobooks. Maybe another city would be a better culture fit. Maybe
          you’re not following your{" "}
          <a href="https://learn.genetics.utah.edu/content/basics/clockgenes/">
            genetic sleep clock
          </a>
          . Maybe you need more magnesium.
        </p>
        <p>
          Don’t worry about running statistics and measuring tiny changes. Run a
          few experiments simultaneously until you feel something, then try one
          at a time to triangulate what caused it.
        </p>
        <p>
          While experimentation is important, make sure not to let it interfere
          too much with gratitude. It's important to try new things while also
          remembering to celebrate moments and appreciate what you have.
        </p>
        <p>
          One objection I’ve often heard to measuring happiness is that like{" "}
          <a href="https://www.mayoclinic.org/diseases-conditions/eye-floaters/symptoms-causes/syc-20372346">
            eye floaters
          </a>
          , happiness darts away if you look at it too hard and measure. I
          haven’t found this to be empirically true of anyone I’ve talked to,
          but just like everything else, try it and feel it out for you.{" "}
        </p>
        <Example
          title="Example Actions"
          list={[
            `Try quitting social media for a month`,
            `Rent an AirBnb for a week to see how a shorter or longer work commute makes you feel`,
            `Buy noise cancelling headphones to see if they improve your life, and return them if not`,
          ]}
        />
        <H2>Conclusion</H2>
        <p>
          This essay introduces a three-layer framework that includes life
          satisfaction research, personality tests, and personal
          experimentation; each more important than the last.
        </p>
        <p>
          I haven't gone into detail about each of these fields, and simply wish
          to argue that they are worth reading and composing in this way. Your
          exploration should be tailored to your circumstances and change over
          time.
        </p>
        <p>
          I believe this light-weight and barely-prescriptive framework may give
          you a good chance of discovering new happiness factors even if they
          are not in the obvious places to search.
        </p>
        <p>
          Please <Link to="/contact">let me know</Link> if you have any
          thoughts, or if this was helpful to you.
        </p>
      </post>
    )
  }

  styles = {
    img: {
      marginTop: 10,
      marginBottom: 15,
      borderRadius: 5,
    },
    a: {
      textDecoration: "underline",
      color: `#0084B4`,
      fontWeight: 600,
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

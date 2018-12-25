import { Link } from "react-router-dom"
import { Pane } from "evergreen-ui"

import { H2, H3, Example } from "./components"

const isMobile = window.innerWidth < 1250

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

export default class Attention extends Component {
  show() {
    const Paragraph = ({ children, ...props }) => <p>{children}</p>
    const Heading = ({ children, ...props }) => (
      <h2
        style={{
          fontWeight: 600,
        }}
      >
        {children}
      </h2>
    )
    return (
      <post>
        <row>
          <h1>Attention and the Treewalk</h1>
          <date>December, 2018</date>
        </row>
        <Paragraph>
          Aldous Huxley, the author of Brave New World, had a theory of the
          brain he called the Reduction Valve. The theory went that the brain
          learned internal boring mechanisms to desensitize us to the world's
          innate interestingness. Animals that focused on food and sex rather
          than appreciating the world around them survived, and ones that
          evolved mechanisms to inhibit their senses from ever experiencing the
          true information around us did even better.{" "}
        </Paragraph>
        <Paragraph>
          Huxley invented this theory after a positive experience with
          mescaline, a psychoactive chemical akin to LSD or psilocybin producing
          mushrooms. These chemicals often give their consumers a feeling that
          the word is more enchanted than they realized before the experience.
          While it might feel subjectively like there's an increase the brain's
          activity, psychedelics actually decrease blood flow throughout the
          brain. Hence, the reduction valve theory.
        </Paragraph>
        <Paragraph>
          More recently, physicist{" "}
          <Url href="https://en.wikipedia.org/wiki/Donald_D._Hoffman">
            Donald Hoffman
          </Url>{" "}
          proposed a similar idea called{" "}
          <Url href="http://www.cogsci.uci.edu/~ddhoff/Interface_Theory_2">
            The Interface Theory of Perception
          </Url>{" "}
          after studying reinforcement learning agents and seeing that their
          learned focused entirely on information needed to reproduce, rather
          than accurately representing the environment around them.
        </Paragraph>
        <Paragraph>
          I'm not confident that either of these two theories are correct. For
          instance, if the reduction valve theory is correct, shouldn't people
          with brain damage experience LSD-like symptoms? However, even if the
          theories aren't quite right, I do think they may be directionally
          useful in pointing out that our evolved attention might be at-odds
          with goals we want for ourselves. I think it's worth thinking
          concretely about attention as a tool we have access to, and to try to
          leverage it in positive ways.
        </Paragraph>
        <Heading>Attention is the best spice</Heading>
        <Paragraph>
          A trick to become more deeply engaged with music is to listen to a
          piece several times, focusing on one instrument at a time. Then listen
          to all of them together. Most people that I've seen try this have been
          impressed by the qualitative jump in how much they felt they were
          experiencing the music. Bonus if you keep your eyes closed. For me
          it's even easier to appreciate this difference when I compare it to my
          experience of playing music while in the flow of work, where songs
          seem to last seconds and I often forget there's music playing.
        </Paragraph>
        <Paragraph>
          The same trick works for food, as{" "}
          <Url href="https://www.youtube.com/watch?v=Yyah49_Oz78">
            shown by Remy
          </Url>{" "}
          in Ratatouille. Since trying this at restaurants I've been asked twice
          by waiters if I was a chef, because they've noticed that chefs often
          eat with their eyes closed.
        </Paragraph>
        <Paragraph>
          In fact, I believe this trick may work in many situations. I've found
          that shifting "attention weights" different aspects of a situation can
          lead to pretty different qualitative experiences. It's possible that
          LSD and mescaline do something akin to increasing your total amount of
          expendable attention.
        </Paragraph>
        <img
          src="https://cdn-images-1.medium.com/max/1600/0*LPxyACPoiVZa-6zP"
          width="100%"
        />
        <Heading>Treewalks</Heading>
        <Paragraph>
          Over the last few months I've tried to apply this technique to my
          daily walk, focusing on one aspect at a time.
        </Paragraph>
        <Paragraph>
          My favorite walks are treewalks. I've loved trees since I was a kid
          (and went into the forest daily), and they give me an opportunity to
          explore my neighborhood in a new way, learning its structure via trees
          rather than buildings. I try to find at least one new interesting tree
          each walk, and occasionally post findings to{" "}
          <Url href="http://twitter.com/thetreewalk">@thetreewalk</Url>.
        </Paragraph>
        <img
          src="https://cdn-images-1.medium.com/max/1600/0*RIjdZY2SQPWhk8gm"
          width="100%"
        />
        <Paragraph>
          Like listening to one instrument at a time, I've found that during
          treewalks my neighborhood feels much greener. The people and cars
          blend into the background while the trees seem to brighten, and on
          occasion I've even accidentally bumped into people right in front of
          me because I didn't notice them. It isn't always so strong, but it
          does in a sense feel like you're diminishing the reduction valve on
          one aspect of your senses. If total attention is conserved, other
          senses should weaken in response &mdash; and this is what I've
          qualitatively felt to be true.
        </Paragraph>
        <img
          src="https://cdn-images-1.medium.com/max/1600/1*qcHm2gNbgPVlK_wS9QrwPw.png"
          width="100%"
        />
        <Paragraph>
          We've discovered over the past few thousand years that focusing on
          your breath leads to lasting{" "}
          <Url href="https://www.amazon.com/Altered-Traits-Science-Reveals-Meditation/dp/0399184384">
            mostly-positive neurological change
          </Url>
          . We've yet to experiment with focusing on trees, but subjectively my
          city has started to feel much more alive with plant-life.
        </Paragraph>
        <Paragraph>
          While trees might not be your thing, I would encourage you to think
          purposefully about your attention. Try experimenting and perhaps you
          might experience otherwise ordinary situations in new ways.
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

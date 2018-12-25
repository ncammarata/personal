import { H2, H3, Quote } from "./components"
import { range } from "lodash"

class Page extends Component {
  show() {
    return <quote>{this.props.children}</quote>
  }

  styles = {
    quote: {
      borderLeft: `3px solid rgba(0, 0, 0, 0.3)`,
      paddingLeft: 10,
    },
  }
}

class Chart extends Component {
  show() {
    const { title, data } = this.props

    return (
      <chart>
        {title && <header>{title}</header>}
        <bars>
          {data.map(({ icon, rate }) => (
            <container>
              <barContainer style={{ height: 80 }}>
                <bar style={{ height: `${rate}%` }} />
              </barContainer>
              <icon>{icon}</icon>
            </container>
          ))}
        </bars>
      </chart>
    )
  }

  styles = {
    chart: {
      height: 120,
    },
    header: {
      alignSelf: "center",
      color: `rgba(0, 0, 0, 0.6)`,
      fontWeight: 700,
    },
    bars: {
      flexFlow: "row",
      justifyContent: "center",
      height: "100%",
    },
    barContainer: {
      marginTop: 10,
      justifyContent: "flex-end",
    },
    icon: {
      marginTop: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    bar: {
      width: 25,
      borderRadius: 3,
      boxShadow: `1px 1px 5px rgba(0, 0, 0, 0.1)`,
      display: "block",
      background: `#a5c4d9`,
      border: `1px solid rgba(0, 0, 0, 0.1)`,
      marginLeft: 5,
      marginBottom: 5,
      marginRight: 10,
    },
    span: {
      alignSelf: "center",
    },
  }
}

class Dashboard1 extends Component {
  state = { value: 0.6 }
  show() {
    const { value } = this.state
    return (
      <dashboard>
        <brains>
          <img src={require("./images/brain1.png")} width={75} />
          <equation>= {value.toFixed(1)} x</equation>
          {/* 1380x1125 = 1.22 */}
          <img
            src={require("./images/fmri1.png")}
            width={60 * 1.22}
            height={60}
          />
          <equation>+ {(1 - value).toFixed(1)} x</equation>
          {/* 589x448 = 1.31473214 */}
          <img
            src={require("./images/fmri2.png")}
            height={60}
            width={60 * 1.314}
          />
        </brains>
        <bottom>
          <range>
            <input
              type="range"
              value={value * 10}
              onChange={e => this.setState({ value: e.target.value / 10 })}
              max={10}
              step={1}
              min={0}
            />
            <brainInput>
              <img
                src={require("./images/fmri2.png")}
                height={50}
                width={50 * 1.314}
              />
              <img
                src={require("./images/fmri1.png")}
                width={50 * 1.22}
                height={50}
              />
            </brainInput>
          </range>
          <img
            src={require("./images/earth.png")}
            style={{ marginTop: 15, transform: `rotate(${value * 360}deg)` }}
            width={80}
            height={80}
          />
          <chart
            style={{
              transform: `translateY(-5px)`,
            }}
          >
            <Chart
              title={null}
              data={[
                {
                  icon: (
                    <img
                      style={{ marginLeft: -5 }}
                      src={require("./images/heart.svg")}
                      width={32}
                    />
                  ),
                  rate: 10 + value * 80,
                },
              ]}
            />
          </chart>
        </bottom>
      </dashboard>
    )
  }

  styles = {
    dashboard: {
      marginTop: 40,
      marginBottom: 10,
    },
    brains: {
      alignItems: "center",
      alignSelf: "center",
      flexFlow: "row",
    },
    equation: {
      fontFamily: `monospace`,
      fontSize: 16,
      marginLeft: 10,
      marginRight: 10,
    },
    bottom: {
      flexFlow: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: 430,
      margin: `10px auto`,
    },
    input: {
      width: 200,
    },
    range: {
      marginTop: 20,
      background: `rgba(0, 0, 0, 0.05)`,
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      padding: 15,
      borderRadius: 5,
    },
    brainInput: {
      marginTop: 20,
      flexFlow: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
  }
}

class SixBlocks extends Component {
  show() {
    return (
      <blocks>
        {range(5).map(i => {
          const strength = 0.7 + Math.random() * 0.3
          const even = i % 2 === 0
          return (
            <container>
              <img
                src={
                  even
                    ? require("./images/crocodile.png")
                    : require("./images/cliff.png")
                }
                width={30}
                height={30}
                style={{ alignSelf: "center" }}
              />
              <block
                style={{
                  background: `rgba(${255 * strength}, ${(1 - strength) *
                    255}, ${(1 - strength) * 255}, 1)`,
                }}
              />
            </container>
          )
        })}
      </blocks>
    )
  }

  styles = {
    blocks: {
      flexFlow: "row",
      alignSelf: "center",
      marginTop: 25,
    },
    block: {
      margin: `5px`,
      display: "block",
      width: 35,
      height: 35,
      borderRadius: 5,
      border: `2px solid rgba(255, 255, 255, 0.7)`,
    },
  }
}

class TenBlocks extends Component {
  show() {
    return (
      <blocks>
        <img
          src={require("./images/crocodile.png")}
          width={40}
          height={40}
          style={{ alignSelf: "center", marginRight: 10 }}
        />
        {range(9).map(i => {
          const strength = 1 - i / 10
          return (
            <block
              style={{
                background: `rgba(${255 * strength}, ${(1 - strength) *
                  255}, ${(1 - strength) * 255}, 1)`,
              }}
            />
          )
        })}
      </blocks>
    )
  }

  styles = {
    blocks: {
      flexFlow: "row",
      alignSelf: "center",
      marginTop: 25,
    },
    block: {
      margin: `5px`,
      borderRadius: 5,
      display: "block",
      width: 25,
      height: 25,
      alignSelf: "center",
      border: `2px solid rgba(255, 255, 255, 0.7)`,
    },
  }
}
const lines = []
class Line extends Component {
  componentWillMount() {
    this.index = lines.length
    lines.push(this.props.name)
  }

  show() {
    const { children, name, nn, action } = this.props

    return (
      <line>
        <name $faded={this.index === 0 || name === lines[this.index - 1]}>
          {name}
        </name>

        <content $bold={action} $border={name !== null} $italic={name === null}>
          {children}
        </content>
        {nn && (
          <nn>
            <header>CNNs</header>
            <nnContent>{nn}</nnContent>
          </nn>
        )}
      </line>
    )
  }
  styles = {
    line: {
      flexFlow: "row",
      justifyContent: "space-between",
      position: "relative",
      margin: 0,
    },
    nn: {
      position: "absolute",
      left: `105%`,
      top: 0,
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      background: `rgba(0, 0, 0, 0.03)`,
      width: 300,
      padding: `4px 12px 20px 12px`,
      borderRadius: 5,
      boxShadow: `1px 1px 20px rgba(0, 0, 0, 0.1)`,
    },
    header: {
      fontSize: 13,
      fontWeight: 600,
      color: `rgba(0, 0, 0, 0.8)`,
      position: "absolute",
      right: 6,
      bottom: 6,
    },
    ast: {
      width: 10,
      opacity: 0.7,
    },
    bold: {
      color: `rgba(0, 0, 0, 0.6)`,
      fontWeight: 700,
    },
    name: {
      fontSize: 14,
      width: 110,
      textAlign: "right",
      marginRight: 15,
      paddingTop: 6,
      fontWeight: 600,
      flexFlow: "row",
      justifyContent: "flex-end",
      opacity: 0.8,
    },
    faded: {
      opacity: 0.4,
    },
    italic: {
      color: `rgba(0, 0, 0, 0.6)`,
      fontStyle: `italic`,
    },
    border: {
      borderLeft: `1px solid rgba(0, 0, 0, 0.1)`,
    },
    content: {
      width: 650,
      fontWeight: 430,
      lineHeight: 1.3,
      paddingRight: 35,
      fontSize: 16,
      margin: 0,
      paddingLeft: 15,
      paddingTop: 6,
      paddingBottom: 10,
      color: `rgba(0, 0, 0, 1)`,
    },
  }
}

export default class Man extends Component {
  show() {
    const Eng = props => <Line name="Hephaestus" {...props} />
    const God = props => <Line name="God" {...props} />
    const Action = props => <Line name={null} {...props} />

    return (
      <post>
        <bar style={{ flexFlow: "row", alignItems: "center" }}>
          <h1>Interpretability</h1>
          <draft>draft</draft>
        </bar>
        {/* 1566 / 674 = 2.32 */}
        <img
          height={600 / 2.32}
          width={600}
          style={{
            margin: "auto",
            boxShadow: `1px 1px 50px rgba(0, 0, 0, 0.1)`,
            borderRadius: 5,
            marginTop: 10,
            marginBottom: 10,
          }}
          src={require("./images/bird.png")}
        />
        <p>
          Yesterday while sitting on a Mexican beach I saw a pelican searching
          for fish by on the inner edge of a strong wave down the coast more
          elegantly than any surfer I have seen. I didn't know pelicans could do
          that.
          <br />
          <br />I wondered what the pelican was thinking as it flew. Could I
          understand even if I were granted full read-write access to its brain
          and a pelican-thought simulator?
          <br />
          <br />
          Could I improve upon the pelican?
          <br />
          <br />
          In machine learning, we have access to these kinds of tools, yet we
          don't tend to ask very interesting questions. <br />
          <br />
          Perhaps if we think about how we would understand other complex
          systems, we can transfer some of those ideas towards machine learning
          and try to aim or efforts towards understanding complex models.
        </p>

        <H2>God and Haphaestus</H2>

        <Action>
          One day a Hephaestusus, god of engineering, came by the God managing
          the Milky Way because he heared he invented a new thing. A Man!
        </Action>

        <Eng>What does your Man look like?</Eng>
        <God
          action
          nn={
            <p>
              How do we see neural networks? Topology visualization is a good
              first step.
              <img
                src={require("./images/model.png")}
                width={180}
                style={{
                  border: `1px solid rgba(0, 0, 0, 0.1)`,
                  borderRadius: 5,
                  margin: "auto",
                  marginTop: 20,
                }}
              />
            </p>
          }
        >
          conjurs an image of man that walks around the room
          <img
            src={require("./images/vitruvian.png")}
            width={250}
            style={{ margin: `auto`, marginTop: 30 }}
          />
        </God>
        <Eng
          nn={
            <p>
              How do we summarize the job of a neural network? Clustering the
              dataset?
              <br />
              <br />
              If the jobs of an autonomous car are to leave leave the driveway,
              drive on the street, watch out for other cars, and read signs, how
              could we ask that?
            </p>
          }
        >
          What does he spend his time doing?
        </Eng>
        <God action>
          conjurs many scenes of man
          <activities style={{ marginTop: 20 }}>
            <Chart
              title="Activities"
              data={[
                {
                  icon: <span>eat</span>,
                  rate: 40,
                },
                {
                  icon: <span>hunt</span>,
                  rate: 50,
                },
                {
                  icon: <span>sex</span>,
                  rate: 10,
                },
                {
                  icon: <span>sleep</span>,
                  rate: 70,
                },
                {
                  icon: <span>misc</span>,
                  rate: 30,
                },
              ]}
            />
          </activities>
        </God>
        <Eng>
          Wow! Quite different activities - how does he compute what to do?
        </Eng>
        <God>
          I gave him a "brain"
          <img
            src={require("./images/brain1.png")}
            width={230}
            style={{ margin: `auto`, marginTop: 20, marginBottom: 20 }}
          />
        </God>

        <Eng>This homogenous lump does all of these?</Eng>
        <God>
          It's actually made up of a series of distinct pathways that work
          together.
        </God>
        <God
          action
          nn={
            <p>
              Can we see the main parts of a trained CNN? <br />
              <br />
              Perhaps we could run all training data through the network and
              find neuron groups that fire together. <br />
              <br />
              How did we decide on groups for the brain?
              <br />
            </p>
          }
        >
          highlights the main pathways
          <img
            src={require("./images/brain.png")}
            width={250}
            style={{ margin: `auto`, marginTop: 20, marginBottom: 20 }}
          />
        </God>

        <Eng>What are these almond shaped pieces?</Eng>
        <God>
          It has an area called the limbic system, which moderates memory and
          emotional response.
        </God>
        <Eng>Emotional response?</Eng>
        <God>
          Yeah, our man loves sweet things, enjoys nice views from big heights,
          but is also sometimes terrified of those heights.
        </God>
        <Eng>I don’t really understand.</Eng>
        <God
          action
          nn={
            <p>
              A continuum of{" "}
              <a href="https://distill.pub/2017/feature-visualization/">
                feature visualizations.
              </a>
            </p>
          }
        >
          conjurs a man on a pillar just large enough for him to stand on one of
          his feet. Half a mile below is a stormy ocean filled with angry
          crocodiles.
          <br />
          <br />
          Next to this awful scene were 9 others, each less scary than the one
          before. The last was a sunny field filled with sheep.
          <TenBlocks />
          <br />
          <br />
          Under each was a map of the amygdala in descending levels of freak-out
        </God>
        <God>Luckily I made the whole thing differentiable, he chuckled</God>
        <Eng
          nn={
            <p>
              Why is a hard question to answer. The simple route would be to
              show scary scenes from the training data.
              <br />
              <br />
              Maybe by saving gradients from data we can answer mechanistically
              why it learned something.
            </p>
          }
        >
          None of these seem so scary to me. Why is he so afraid?
        </Eng>
        <God action>
          flashes six consecutive scenes of man falling off cliffs or being
          eaten by crocodiles
          <SixBlocks />
        </God>
        <Eng>
          Got it. I think I get the idea of how this system came about. You
          should be proud of your work God!
        </Eng>
        <God action>
          To be honest, they’ve been having some issues recently, he said,
          looking slightly downward.
        </God>
        <God>
          Man has totally changed his environment from the one I built for him,
          and now he’s doing all sorts of weird things that would have been fine
          where he learned, but is terrible now!
        </God>
        <God action>
          conjures a chart
          <deathsList
            style={{
              flexFlow: "row",
              justifyContent: "center",
              marginBottom: 20,
              marginTop: 20,
              width: "100%",
            }}
          >
            <d1 style={{ marginRight: 10 }}>
              <Chart
                title="Deaths 10,000BC"
                data={[
                  {
                    icon: (
                      <img src={require("./images/crocodile.png")} width={30} />
                    ),
                    rate: 60,
                  },
                  {
                    icon: (
                      <img src={require("./images/heart.svg")} width={30} />
                    ),
                    rate: 5,
                  },
                  {
                    icon: <img src={require("./images/fire.png")} width={30} />,
                    rate: 35,
                  },
                ]}
              />
            </d1>
            <d2 style={{ marginLeft: 10 }}>
              <Chart
                title="Deaths 2018AD"
                data={[
                  {
                    icon: (
                      <img src={require("./images/crocodile.png")} width={30} />
                    ),
                    rate: 5,
                  },
                  {
                    icon: (
                      <img src={require("./images/heart.svg")} width={30} />
                    ),
                    rate: 80,
                  },
                  {
                    icon: <img src={require("./images/fire.png")} width={30} />,
                    rate: 15,
                  },
                ]}
              />
            </d2>
          </deathsList>
        </God>
        <Eng>
          Wow - why is this new environment so hostile to hearts? Something in
          the air?
        </Eng>
        <God>Stress and sugar!</God>
        <God>
          The problem is I can’t start Man from scratch again without losing all
          the amazing things he’s built along the way! Hephaeustus, you're the
          best engineer in the universe, can you help me?
        </God>
        <Eng>I’ll give it a try, he said, walking up to God’s workstation.</Eng>
        <H2>Workstation</H2>
        <Eng
          nn={
            <p>
              Model debugging given new inputs outside the domain of your
              training set.
            </p>
          }
        >
          What’s the deal with sugar, he thought to himself. He searched scenes
          of men with sugar and found James, a middle-aged Bostonian eating
          creme brûlée with a coke, and saw huge bursts of serotonin being
          released in the brain beside it. Why is something so dangerous giving
          so much reward?
          <br />
          <br />
          He searched scenes with similar brain activity from lives long ago,
          and the closest he found was a man eating from a ripe blueberry bush
          with half the serotonin.
          <chart>
            <Chart
              title="Reward"
              data={[
                {
                  icon: (
                    <img
                      style={{ marginLeft: -3 }}
                      src={require("./images/blueberry.png")}
                      width={32}
                    />
                  ),
                  rate: 50,
                },
                {
                  icon: (
                    <img
                      style={{ marginLeft: -3 }}
                      src={require("./images/brulee.png")}
                      width={32}
                    />
                  ),
                  rate: 100,
                },
              ]}
            />
          </chart>
        </Eng>
        <Eng
          nn={
            <p>
              How to search? Find the neuron group that makes that sample
              special and find training data that minimally activates those
              neurons?
            </p>
          }
        >
          He considered changing the activations directly, but they looked too
          interconnected and complicated. Instead, he had an idea: search for
          ancient people that had negative reactions to sugar, and make James'
          brain be more like that. Luckily, he found one ancient woman that ate
          a bad batch of strawberries and forever associated sweetness with
          being ill.
          <br />
          <br />
        </Eng>
        <Eng
          nn={
            <p>
              The interesting idea here is the society overview. If you're
              perturbing neurons, how does that change the results across the
              training set?
            </p>
          }
        >
          He linked the brains of James and the ancient women and controlled how
          strong to pull his brain's reward mechanisms towards hers. Below, the
          dashboard showed five modern men going through similar scenes, and an
          overview of society. With the meter all the way down the men ate
          dessert happily. At the other side of the meter, the men were repulsed
          by the meal and society started treating sweetness as poison. He
          played with the meter to find the right balance.
          <Dashboard1 />
        </Eng>
        <Eng
          nn={
            <p>
              TSNE seems useful to many areas of interpretability. Seeing the
              model's internal representations of data, making changes to the
              data, and seeing the internal representations change seems
              fruitful. <br />
              <br />
              One method would be to continue training but with a learned reward
              that gives extra weight to new human-defined labels.
            </p>
          }
        >
          Stress was a bit tougher, because there wasn’t a single scene to fix.
          Instead, he put up a 2d map of dots showing all the common scenes
          people go through, colored by cortisol levels. He set point
          transparency based on number of deaths. Certain red areas went away,
          like car accidents. But others, like airplane rides and performance
          reviews stood out at near full opacity!
        </Eng>
        <Eng>
          Within a few seconds Hephaestus was able to highlight these areas and
          pull them closer to people lying on a beach relaxing, all while
          watching the society machine see the diffs and make sure they were
          reasonable. With each change, people became happier, productivity
          increased, and heart attacks fell.
        </Eng>
        <Eng>
          He was having a lot of fun. Before long he had fixed up some biases
          towards women left over from hunter-gatherer days and improved
          incentives in academic research!
        </Eng>
        <H2>What is Interpretability?</H2>
        <Quote
          author={
            <span>
              Bret Victor,{" "}
              <a href="https://vimeo.com/97903574">Seeing Spaces</a>
            </span>
          }
          text={
            <p style={{ textAlign: "justify", margin: `0px 10px` }}>
              The primary challenge is not putting the pieces together. The
              primary challenge is seeing what the thing is doing and why it's
              doing that, and how you can get it to do what you actually want it
              to do. [...] You have to get in there, you have to get inside the
              [machine] and see what it's thinking and come to understand why
              it's behaving. The construction tools aren't going to help you
              here. What you need are seeing tools, and we don't really have
              many of those.
            </p>
          }
        />
        <p>
          This short essay explores one way that someone could explore a human
          and his mind. Clearly even with high-precision recordings we cannot do
          much on an individual neuron level, but rather need tools that allow
          us to move{" "}
          <a href="http://worrydream.com/LadderOfAbstraction/">
            Up and Down the Ladder of Abstraction
          </a>{" "}
          in order to understand the system in its entirety. People are now
          starting to discover the{" "}
          <a href="https://distill.pub/2018/building-blocks/">
            Building Blocks of Interpretability
          </a>
          , but they have yet to be strung together into general seeing tools.
          way.
        </p>
        <p>
          In interviews I've had with researchers at the largest labs in the
          industry the overall sentiment is that good models are rarely
          interpretable, and although it would be nice if someone could make
          them interpretable, this isn't a very pressing issue. Further,
          interpretability is also put under the sub-field of AI Safety.
        </p>
        <p>
          At NIPS 2017 four great minds in machine learning{" "}
          <a href="https://www.youtube.com/watch?v=93Xv8vJ2acI">
            debated the importance
          </a>{" "}
          of machine learning interpretability. Both sides essentially argued
          over the ethics of using uninterpretable systems. While I agree that
          this is an important concern, I think it is missing the core idea of
          why I believe interpretability is pressing that I think is well
          expressed by one of my favorite pages in{" "}
          <a href="https://en.wikipedia.org/wiki/Surely_You%27re_Joking,_Mr._Feynman!">
            Surely You're Joking Mr. Feynman!
          </a>
          .
        </p>
        <Page>
          <book style={{ flexFlow: "row", justifyContent: "space-between" }}>
            <h2>Surely You're Joking Mr. Feynman!, Page 22</h2>
            {/* w/h = 0.928909953 */}
          </book>
          <p>
            So when I got to Princeton [as a graduate student], I went to that
            tea on Sunday afternoon and had dinner that evening in an academic
            gown at the "College." But on Monday, the first thing I wanted to do
            was to see the cyclotron.
          </p>
          <p>
            MIT had built a new cyclotron while I was a student there, and it
            was just beautiful! The cyclotron itself was in one room, with the
            controls in another room. It was beautifully engineered. The wires
            ran from the control room to the cyclotron underneath in conduits,
            and there was a whole console of buttons and meters. It was what I
            would call a gold-plated cyclotron.
          </p>
          <p>
            Now I had read a lot of papers on cyclotron experiments, and there
            weren't many from MIT. Maybe they were just starting. But there were
            lots of results from places like Cornell, and Berkeley, and above
            all, Princeton. Therefore what I really wanted to see, what I was
            looking forward to, was the PRINCETON CYCLOTRON. That must be
            something!
          </p>
          <p>
            So first thing on Monday, I go into the physics building and ask,
            "Where is the cyclotron--which building?" "It's downstairs, in the
            basement--at the end of the hall."
          </p>
          <p>
            In the basement? It was an old building. There was no room in the
            basement for a cyclotron. I walked down to the end of the hall, went
            through the door, and in ten seconds I learned why Princeton was
            right for me--the best place for me to go to school. In this room
            there were wires strung all over the place! Switches were hanging
            from the wires, cooling water was dripping from the valves, the room
            was full of stuff, all out in the open. Tables piled with tools were
            everywhere; it was the most godawful mess you ever saw. The whole
            cyclotron was there in one room, and it was complete, absolute
            chaos!
          </p>
          <p>
            It reminded me of my lab at home. Nothing at MIT had ever reminded
            me of my lab at home. I suddenly realized why Princeton was getting
            results. They were working with the instrument. They built the
            instrument; they knew where everything was, they knew how everything
            worked, there was no engineer involved, except maybe he was working
            there too. It was much smaller than the cyclotron at MIT, and
            "gold-plated"?--it was the exact opposite. When they wanted to fix a
            vacuum, they'd drip glyptal on it, so there were drops of glyptal on
            the floor. It was wonderful! Because they worked with it. They
            didn't have to sit in another room and push buttons! (Incidentally,
            they had a fire in that room, because of all the chaotic mess that
            they had--too many wires--and it destroyed the cyclotron. But I'd
            better not tell about that!)
          </p>
          <p>
            (When I got to Cornell I went to look at the cyclotron there. This
            cyclotron hardly required a room: It was about a yard across--the
            diameter of the whole thing. It was the world's smallest cyclotron,
            hut they had got fantastic results. They had all kinds of special
            techniques and tricks. If they wanted to change something in the
            "D's"--the D-shaped half circles that the particles go
            around--they'd take a screwdriver, and remove the D's by hand, fix
            them, and put them back. At Princeton it was a lot harder, and at
            MIT you had to take a crane that came rolling across the ceiling,
            lower the hooks, and it was a hellllll of a job.)
          </p>
        </Page>
        <p>
          While I don't disagree that interpretability will help AI Safety, I
          believe it is pidgeonholing the nascent field. Similar to Princeton's
          Cyclotron, I think that interpretability has a good shot of increasing
          speed of research in both capabilities and safety. When you can see
          and understand a system at different levels of abstraction it is often
          easy to see where improvements can be made.
        </p>
        <p>
          This is relatively standard thought in neuroscience - where the field
          seems to have some agreement that the important problems are to map
          and understand the brain. In machine learning we already have access
          to the full mapping (and training set!), but we do not yet understand
          the system. It would be strange to say that we should map and
          understand the brain so we can improve drug toxicity, although that
          would be true as well.
        </p>
      </post>
    )
  }

  styles = {
    p: {
      fontSize: 14,
    },
    draft: {
      fontSize: 14,
      alignItems: "center",
      textAlign: "center",
      padding: `3px 6px`,
      background: `rgba(0, 0, 0, 0.02)`,
      border: `1px solid rgba(0, 0, 0, 0.2)`,
      color: `rgba(0, 0, 0, 0.7)`,
      marginLeft: 8,
      height: "auto",
      borderRadius: 5,
    },
  }
}

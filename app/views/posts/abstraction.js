import { H2 } from "./components"

export default class Abstraction extends Component {
  show() {
    return (
      <post>
        <h1>The Abstraction Machine</h1>
        <p>
          Before reading this post I suggest reading Bret Victor's incredible{" "}
          <a href="http://worrydream.com/LadderOfAbstraction/">
            Up and Down the Ladder of Abstraction
          </a>
          . If all I do is get you to read his piece, I have succeeded.
        </p>
        <p>How can we build systems when we don't know what they’re doing?</p>
        <p>
          In this short essay I’d like to talk about what I believe is one of
          the most powerful technologies we’ve ever developed: The Abstraction
          Machine, or the <b>neural network</b>. In particular, I’d wish to
          express why I think neural network interpretability is important.
        </p>
        <H2>Composable Palettes of Abstractions</H2>
        <p>
          There are a number of ways to frame neural networks, but the one I
          find most exciting is a multi-level pattern matcher.
        </p>
        <p>
          In machine learning, your model is given a task over some data. This
          task may predicting the future (in say time-series), classification,
          or simply to deconstruct the data and put it back together correctly.
          In order to do this, it learns patters and searches for them in the
          data it is given.
        </p>
        <p>
          A neural network is composed of several layers (sometimes 100+!) that
          search for their patterns and forward their `activations` to the next
          layer. The last layer then uses the activations it gets to make its
          predictions. Each time it runs all the patterns change to try to
          improve the predictions the last layer makes.
        </p>
        <p>Here are some patterns that a modern image network builds.</p>
        <img
          src={require("./images/features.png")}
          width={"80%"}
          style={{
            margin: `20px auto`,
            borderRadius: 5,
            boxShadow: `1px 1px 15px rgba(0, 0, 0, 0.4)`,
            border: `1px solid white`,
          }}
        />
        <p>
          You can see that the patterns compose, starting with simple edges,
          then on to swirls, and eventually specific objects.
        </p>
        <p>
          Since each layer searches for multiple patterns, it is more analogous
          to a palette that reports its findings to the next layer.
        </p>
        <img
          src={require("./images/palette.png")}
          width={"60%"}
          style={{
            margin: `20px auto`,
            borderRadius: 5,
            boxShadow: `1px 1px 15px rgba(0, 0, 0, 0.4)`,
            border: `1px solid white`,
          }}
        />
        <p>
          Automatic pattern creation and searching has come a long way since
          Alan Turing wrote that "Further research into intelligence of
          machinery will probably be very greatly concerned with ‘searches’ ….
          [an example] form of search is what I should like to call the
          ‘cultural search’ … the search for new techniques must be regarded as
          carried out by the human community as a whole" in 1948, as well as
          working on a model similar to a neural network. I think he would be
          pretty excited that our automatic searching machines are starting to
          work 70 years later.
        </p>
        <p>
          The science of discovering and understanding these patterns belongs to
          a sub-field of machine learning called "interpretability", and the set
          of people working on it actively is quite small, and is typically
          categorized under the field of "AI Safety".
        </p>
        <H2>AI Interpretability</H2>
        <p>
          At NIPS2017 four of the top minds in the field{" "}
          <a href="https://www.youtube.com/watch?v=93Xv8vJ2acI">
            debated the importance
          </a>{" "}
          of ML interpretability. Both sides focused heavily on the ethics of
          deploying uninterpretable models in production for uses like medicine.
          Both sides agreed that neural networks are uninterpretable, and the
          debate mostly stemmed on whether it is safe to deploy them. The
          general argument of the debate was to choose from safe and weak models
          or sophisticated neural networks that we don't understand.
        </p>
        <p>
          While I agree that interpretability is helpful towards the general
          goal of AI Safety, I feel like the debators are missing out on a large
          part of why working on understanding neural networks is important.
        </p>
      </post>
    )
  }

  styles = {}
}

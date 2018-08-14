const background = "rgba(255, 255, 255, 0.95)"

const Arrow = () => (
  <svg
    width="22"
    height="16"
    viewBox="0 0 22 16"
    style={{ marginTop: 4, fill: "#fb8469" }}
    class="src-components-feature_page----full_width-module---arrow---3Yf9c"
  >
    <path
      fill-rule="evenodd"
      d="M13.243 0l7.442 7 .774.728-.774.729-7.442 7L11.873 14l5.604-5.272H0v-2h17.477l-5.604-5.271L13.243 0z"
    />
  </svg>
)

export default class Richer extends Component {
  componentDidMount() {
    Pts.quickStart("gfx", background)

    var pts = new Group()

    space.add({
      // creatr 200 random points
      start: bound => {
        pts = Create.distributeRandom(space.innerBound, 450)
      },

      animate: (time, ftime) => {
        // make a line and turn it into an "op" (see the guide on Op for more)
        let perpend = new Group(
          space.center.$subtract(0.1),
          space.center.$add(0.05, 0.2),
        ).op(Line.perpendicularFromPt)
        pts.rotate2D(0.0015, space.center)

        pts.forEach((p, i) => {
          // for each point, find the perpendicular to the line
          let lp = perpend(p)
          var ratio = Math.min(
            1,
            1 - lp.$subtract(p).magnitude() / (space.size.x / 3),
          )
          form.stroke(`rgba(30,30,30,${ratio}`, ratio * 2).line([p, lp])
          form.fillOnly(["#f03", "#09f", "#0c6"][i % 3]).point(p, 1)
        })
      },
    })

    //// ----

    space.play()
  }
  show() {
    const quoteRatio = 0.73

    return (
      <richer style={{ background }}>
        <inner>
          <gfx id="gfx" />
          <stuff>
            <innerStuff>
              {false && <big>Make your Library Richer with Time</big>}
              <features>
                <feature>
                  <Arrow />

                  <right>
                    <featureName>Read Collaboratively</featureName>
                    <secondary>
                      Follow their progress and annotations.
                      <br />
                      Pass on your marked books to other.
                    </secondary>
                  </right>
                </feature>
                <feature>
                  <Arrow />

                  <right>
                    <featureName>
                      Use beacons to connect ideas between books
                    </featureName>
                  </right>
                </feature>
                <feature>
                  <Arrow />

                  <right>
                    <featureName>Read Anywhere</featureName>
                    <secondary>
                      Automatically syncs between mobile, desktop, and iPad
                    </secondary>
                  </right>
                </feature>
                <feature>
                  <Arrow />

                  <right>
                    <featureName>Unlimited Access to 70,000+ books</featureName>
                  </right>
                </feature>
              </features>
              <quote>
                <img
                  $quoteImg
                  width={90}
                  height={90 / quoteRatio}
                  src={require("./edgar.png")}
                />
                <quoteRight>
                  <quoteText>
                    “Marking a book is literally an experience of your
                    differences or agreements with the author. It is the highest
                    respect you can pay him.”
                  </quoteText>
                  <quoteAuthor>Edgar Allen Poe</quoteAuthor>
                </quoteRight>
              </quote>
            </innerStuff>
          </stuff>
        </inner>
      </richer>
    )
  }

  styles = {
    richer: {
      boxShadow: "1px -1px 50px rgba(0, 0, 0, 0.02)",
      height: 460,
      marginTop: -12,
      overflow: "hidden",
      marginBottom: 20,
      borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
    },
    inner: {
      overflow: "hidden",
      width: "100%",
      height: "100%",
      position: "relative",
    },
    big: {
      fontSize: 32,
      fontWeight: 600,
      textAlign: "center",
    },
    stuff: {
      width: 900,
      overflow: "hidden",
      position: "relative",
      margin: "20px auto",
      height: 600,
    },

    innerStuff: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 5,
    },
    features: {
      marginTop: 25,
      marginBottom: 7,
    },
    feature: {
      flexFlow: "row",
      marginBottom: 15,
    },
    right: {
      marginLeft: 20,
    },
    secondary: {
      fontWeight: 400,
      lineHeight: 1.6,
      marginTop: 3,
      marginBottom: -5,
      fontSize: 18,
    },
    featureName: {
      fontSize: 20,
      fontWeight: 600,
    },
    gfx: {
      position: "absolute",
      zIndex: 4,
      opacity: 0.7,
      transform: `scaleX(-1) translateX(-200px)`,
      left: 400,
      zIndex: 0,
      top: -20,
      right: 0,
      bottom: 0,
      height: 600,
    },
    quote: {
      alignItems: "center",
      flexFlow: "row",
    },
    quoteRight: {
      justifyContent: "center",
    },
    quoteAuthor: {
      fontSize: 24,
      fontWeight: 600,
      transform: `translateY(-10px)`,
      alignSelf: "center",
    },
    quoteText: {
      width: 550,
      fontSize: 24,
      padding: 20,
    },
    quoteImg: {
      marginRight: 20,
      border: "2px solid rgba(222, 133, 133, 0.6)",
      boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1)",
      borderRadius: "50%",
    },
  }
}

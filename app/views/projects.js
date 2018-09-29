import React from "react"
import { observer } from "mobx-react"

@observer
export default class Projects extends Component {
  show() {
    return (
      <home>
        <h2 style={{ fontSize: 22, marginBottom: 0 }}>Work</h2>
        <p>
          <line>
            I started working at an early age for various corporations doing
            interactive application development. At 14 I started Upload Robots,
            the first parallel multifile uploading service, that grew to manage
            tens of millions of files. Stephen Fry said it was cool on the
            radio.
          </line>

          <line>
            At 17 I co-founded Tablo, a company that aimed to use technology to
            accelerate the{" "}
            <a href="https://en.wikipedia.org/wiki/Flipped_classroom">
              flipped-classroom model
            </a>
            . I left high school to join the first class of the{" "}
            <a href="http://thielfellowship.org">Thiel Fellowship</a>
            to pursue Tablo. At 19 I sold the company to{" "}
            <a href="gregor">Gregor Freund</a>, and Tablo became part of the
            newly founded <a href="http://versal.com">Versal</a>.
          </line>

          <line>
            After selling Tablo I took a few years to travel and{" "}
            <a href="blooms">hire tutors</a> to learn about various subjects.
          </line>

          <line>
            At 22 I started a dev-tools company called Flint to make programming
            more creative, and raised $1.75 million led by Peter Thiel via
            Founders Fund.
          </line>

          <line>
            Users loved Flint (<a href="x">demo</a>
            ), but it is hard to turn programming tools into a company.
          </line>

          <line>
            After a couple years, Flint pivoted into{" "}
            <a href="http://tryorbit.com">Orbit</a>, which applies machine
            learning advancements towards company intranets. We use novel
            low-compute natural language processing to train custom models for
            each employee, for security and personalization reasons.
          </line>

          <line>The company is continuing but I moved on in 2018.</line>

          <line>
            Now I'm taking time to learn more. I'm extremely grateful for the
            mentors that I've had the luck to work with so far.
          </line>
        </p>
      </home>
    )
  }

  styles = {
    p: {
      fontSize: `1.1rem`,
      fontWeight: 500,
      marginTop: 5,
      lineHeight: 1.4,
    },
    line: {
      marginTop: 10,
      marginBottom: 10,
    },
  }
}

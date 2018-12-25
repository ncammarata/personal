import React from "react"
import { observer } from "mobx-react"
import Tree from "./tree"

@observer
export default class Home extends Component {
  show() {
    const mobile = window.innerWidth < 1250

    return (
      <home $mobile={mobile}>
        <bio>
          <p>
            I like <a href="/bookshelf">learning</a>, machine learning, and
            explorable systems.
          </p>
          <p>
            I'm working on machine learning interpretability at{" "}
            <a href="http://openai.com">OpenAI</a>.
          </p>
          <p>
            I previously was co-founder &amp; CEO of Founders Fund-backed{" "}
            <a target="_blank" href="http://tryorbit.com">
              Orbit
            </a>
            , which uses low-compute machine learning to improve intranet
            systems.
          </p>
          <p>
            Earlier, I co-founded{" "}
            <a
              target="_blank"
              href="https://web.archive.org/web/20120805020845/http://teachontablo.com:80/"
            >
              Tablo
            </a>{" "}
            as a member of the first class of{" "}
            <a target="_blank" href="http://thielfellowship.org">
              Thiel Fellows
            </a>
            . Tablo was a software company focused on accelerating the onset of
            the{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Flipped_classroom"
            >
              flipped classroom
            </a>{" "}
            movement. We led the company to acquisition by enterprise learning
            platform{" "}
            <a target="_blank" href="http://versal.com">
              Versal
            </a>{" "}
            in 2012 when I was 19.
          </p>
          <p>
            In high-school I worked remotely for large corporations building
            dynamic web applications, co-created{" "}
            <a
              target="_blank"
              href="https://www.wired.com/2011/11/mozilla-reinvents-web-video-with-popcorn-1-0/"
            >
              Popcorn.js
            </a>{" "}
            with Mozilla, and founded{" "}
            <a target="_blank" href="https://file-tmbqwnzicb.now.sh/">
              Upload Robots
            </a>
            , the first parallel file-uploading service, which hosted more than
            50 million file downloads across more than 1 million users during a
            6 month period.
          </p>
          <p>
            In addition to operational work, I sometimes angel invest. I
            invested in the first rounds of{" "}
            <a target="_blank" href="http://eaze.com">
              Eaze
            </a>{" "}
            and{" "}
            <a target="_blank" href="http://demonpore.com">
              Demonpore
            </a>
            .
          </p>
        </bio>
        {!mobile && (
          <treesAbs>
            <rel>
              <Tree scale={0.9} maxDepth={11} right={60} />
              <Tree
                scale={0.4}
                config={{
                  lineWidth: 55,
                }}
                maxDepth={8}
                right={-140}
              />
              {/* 800 / 873, width / height = .92 */}
              <img
                $pumpkin1
                className="pumpkin"
                src="https://4vector.com/i/free-vector-pumpkin_102004_Pumpkin.png"
                width={75}
                height={75 * 0.92}
              />
              <img
                $pumpkin2
                className="pumpkin"
                src="https://4vector.com/i/free-vector-pumpkin_102004_Pumpkin.png"
                width={55}
                height={55 * 0.92}
              />
            </rel>
          </treesAbs>
        )}
        {mobile && (
          <tree>
            <Tree
              scale={0.7}
              width={window.innerWidth}
              height={360}
              maxDepth={11}
              right={-30}
            />
          </tree>
        )}
      </home>
    )
  }

  styles = {
    home: {
      paddingBottom: 20,
      display: "block",
      marginTop: 35,
    },
    tree: {
      position: "relative",
    },
    line: {
      marginTop: 5,
      marginBottom: 5,
    },
    rel: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    mobile: {
      marginBottom: 100,
      marginTop: `10px !important`,
    },
    treesAbs: {
      position: "absolute",
      bottom: -5,
      right: 0,
      width: 500,
      height: 500,
    },
    pumpkin1: {
      position: "absolute",
      bottom: -2,
      right: 90,
    },
    pumpkin2: {
      position: "absolute",
      bottom: -2,
      right: 170,
    },
    header: {
      fontSize: `1.4rem`,
      fontWeight: 300,
      margin: 0,
      marginBottom: 5,
      padding: 0,
      lineHeight: 1.4,
    },
    spread: {
      flexFlow: "row",
      justifyContent: "space-between",
    },
    bioHeader: {
      marginTop: 15,
      marginBottom: 5,
    },
    a: {
      color: `rgba(83,53,10,1)`,
    },
    h2: {
      fontWeight: 600,
      margin: 0,
      padding: 0,
    },
    bio: {
      maxWidth: 680,
      marginTop: 6,
    },
    p: {
      textAlign: "justify",
      marginTop: 6,
      lineHeight: 1.3,
      fontSize: 20,
      marginBottom: 6,
    },
    twitter: {
      marginTop: 5,
      flexFlow: "row",
    },
    handle: {
      marginLeft: 4,
    },
  }
}

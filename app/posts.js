import Satisfaction from "./views/posts/satisfaction"
import Interpretability from "./views/posts/interpretability"
import Abstraction from "./views/posts/abstraction"
import Attention from "./views/posts/attention"
import Interviewing from "./views/posts/interviewing"
import ICLR from "./views/posts/iclr"

export default [
  {
    name: "Attention and the Treewalk",
    view: Attention,
    url: "attention",
    stage: 1,
  },
  {
    name: "Shape of ICLR",
    view: ICLR,
    url: "iclr",
    stage: 2,
  },
  {
    name: "Pieces of Happy",
    view: Satisfaction,
    url: "pieces-of-happy",
    stage: 2,
  },
  {
    name: "Interpretability",
    view: Interpretability,
    url: "interpretability",
    stage: 0,
  },
  {
    name: "The Abstraction Machine",
    view: Abstraction,
    url: "abstraction-machine",
    stage: 0,
  },
  {
    name: "A Hack for Nailing Startup Interviews",
    view: Interviewing,
    url: "interviews",
    stage: 0,
  },
]
